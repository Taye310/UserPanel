class Panel extends egret.DisplayObjectContainer {
    McCree = new Hero("McCree", true);
    Soilder76 = new Hero("Soilder76", true);
    sword = new Equipments("sword", 50);
    armor = new Equipments("armor", 10);
    gun = new Equipments("gun", 70);
    dog = new Pet("baiyukun");
    blueJewel = new Jewel("blueJewel");

    level = new egret.TextField;
    hp = new egret.TextField;
    fightPower = new egret.TextField;
    heroInTeam = new egret.TextField;
    equipments = new egret.TextField;
    jewel = new egret.TextField;
    pet = new egret.TextField;

    bag1 = new egret.TextField;
    bag2 = new egret.TextField;

    private propertyPanel: egret.Shape = new egret.Shape;
    private bagPanel: egret.Shape = new egret.Shape;
    constructor() {
        super();
        this.propertyPanel.x = 0;
        this.propertyPanel.y = 0;
        this.propertyPanel.graphics.beginFill(0x000000, 0.5);
        this.propertyPanel.graphics.drawRect(0, 0, 400, 600);
        this.propertyPanel.graphics.endFill();
        this.addChild(this.propertyPanel);

        this.bagPanel.x = 100;
        this.bagPanel.y = 700;
        this.bagPanel.graphics.beginFill(0x000000, 0.5);
        this.bagPanel.graphics.drawRect(0, 0, 600, 100);
        this.bagPanel.graphics.endFill();
        this.addChild(this.bagPanel);

        User.user.heroes.push(this.McCree);
        this.McCree.equipments.push(this.sword);
        this.Soilder76.equipments.push(this.gun);
        this.sword.jewel.push(this.blueJewel);
        User.user.pet = this.dog;

        this.bag1.text = "Soilder76";
        this.bag1.textColor = 0xffffff;
        this.bag1.x = this.bagPanel.x + 10;
        this.bag1.y = this.bagPanel.y + 35;
        //mouse.enable(this.stage);
        //this.bag1.addEventListener(onmouseover)
        this.bag1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBagClick, this);
        this.bag1.touchEnabled = true;
        this.addChild(this.bag1);

        this.bag2.text = "armor";
        this.bag2.textColor = 0xffffff;
        this.bag2.x = this.bagPanel.x + 300;
        this.bag2.y = this.bagPanel.y + 35;
        this.bag2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBagClick, this);
        this.bag2.touchEnabled = true;
        this.addChild(this.bag2);

        this.init();
    }

    init() {

        this.level.text = "等级：" + User.user.level;
        this.addChild(this.level);
        this.fightPower.text = "目前战斗力：" + User.user.getFightPower();
        this.fightPower.y = 30;
        this.addChild(this.fightPower);

        this.heroInTeam.text = "在阵英雄：";
        User.user.heroesInTeam.forEach((e) => {
            console.log(e.heroName);
            this.heroInTeam.text += e.heroName;
        });
        this.heroInTeam.y = 60;
        this.addChild(this.heroInTeam);

        this.equipments.text = "装备：";
        User.user.heroesInTeam.forEach((e) => {
            e.equipments.forEach((elements) => {
                this.equipments.text += elements.equipName;
            });
        });
        this.equipments.y = 90;
        this.addChild(this.equipments);

        this.pet.y=120;
        this.pet.text="宠物："+User.user.pet.petName;
        this.addChild(this.pet);
    }

    onBagClick(e: egret.TouchEvent) {
        console.log(e.target.text)
        if (e.target.text == "Soilder76") {
            User.user.heroes.push(this.Soilder76);
            e.target.text = null;
        } else if (e.target.text == "armor") {
            this.McCree.equipments.push(this.armor);
            e.target.text = null;
        }
        this.init();
    }

    change(changeSth: any) {

    }
}
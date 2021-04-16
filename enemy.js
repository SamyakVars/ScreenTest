class Enemy{
    constructor(x, y){
        this.gyo = createSprite(x, y, 20, 20)
        this.gyoAnimation = loadAnimation("lvl1/Gyo/f1.png", "lvl1/Gyo/f2.png", "lvl1/Gyo/f3.png", "lvl1/Gyo/f4.png", "lvl1/Gyo/f5.png", "lvl1/Gyo/f6.png", "lvl1/Gyo/f7.png", "lvl1/Gyo/f8.png")
        this.gyoAttack = loadAnimation("lvl1/Gyo/a1.png", "lvl1/Gyo/a2.png", "lvl1/Gyo/a3.png", "lvl1/Gyo/a4.png", "lvl1/Gyo/a5.png", "lvl1/Gyo/a6.png", "lvl1/Gyo/d1.png", "lvl1/Gyo/f1.png", "lvl1/Gyo/f2.png", "lvl1/Gyo/f3.png")
        this.gyoAttack.looping = false
        this.gyo.addAnimation("fly", this.gyoAnimation)
        this.gyo.addAnimation("attack", this.gyoAttack)
        this.gyo.velocityX = -2
        this.gyo.mirrorX(-1)
        obgroup.add(this.gyo)
        this.startSpot = x
        // this.gyo.debug = true
        this.gyo.setCollider("circle", 0, 0, 15)
        this.mirroring = -1

        this.checkAttack = false
    }

    collision(player){
        if(this.gyo.isTouching(player)){
            this.gyo.changeAnimation("attack", this.gyoAttack)
            this.gyo.animation.play()
            this.checkAttack = true
            this.gyo.velocityX = 0
        }

        if(this.checkAttack){
            if(this.gyo.animation.getFrame() == this.gyo.animation.getLastFrame()){
                this.gyo.animation.rewind()
            }
        }
    }

    startOver(){
        this.gyo.changeAnimation("fly", this.gyoAnimation)
        this.gyo.x = this.startSpot
        this.gyo.mirrorX(-1)
        this.gyo.velocityX = -2


    }

    move(val1, val2){
        if(this.gyo.x < val1){
            this.gyo.mirrorX(1)
            this.gyo.velocityX = 2
            this.mirroring = -1
        }else if(this.gyo.x > val2){
            this.gyo.mirrorX(-1)
            this.gyo.velocityX = -2
            this.mirroring = 1
        }
    }
}
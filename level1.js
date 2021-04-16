class lvl1{
    constructor(){

        this.level1Group = createGroup()

        this.storylineBool = true
        this.storylinePart = 0

        this.w = windowWidth
        this.h = windowHeight

        this.touchGround = true

        this.bg = loadImage("lvl1/Bg.png")

        this.storyp1 = loadImage("lvl1/Speeches/Speech1.png")
        this.storyp2 = loadImage("lvl1/Speeches/Speech2.png")
        this.storyp3 = loadImage("lvl1/Speeches/Speech3.png")
        this.storyp4 = loadImage("lvl1/Speeches/Speech4.png")
        this.storyp5 = loadImage("lvl1/Speeches/Speech5.png")
        this.storyp6 = loadImage("lvl1/Speeches/Speech6.png")
        this.storyp7 = loadImage("lvl1/Speeches/Speech7.png")

        this.panimation = loadAnimation("lvl1/Dyso/Move/red/r1.png", "lvl1/Dyso/Move/red/r2.png", "lvl1/Dyso/Move/red/r3.png", "lvl1/Dyso/Move/red/r4.png", "lvl1/Dyso/Move/red/r5.png", "lvl1/Dyso/Move/red/r6.png", "lvl1/Dyso/Move/red/r7.png", "lvl1/Dyso/Move/red/r8.png")
        this.pidle = loadAnimation("lvl1/Dyso/Move/red/Idle.png")
        this.pdeath = loadAnimation("lvl1/Dyso/Other/d1.png", "lvl1/Dyso/Other/d2.png", "lvl1/Dyso/Other/d3.png", "lvl1/Dyso/Other/d4.png", "lvl1/Dyso/Other/d5.png", "lvl1/Dyso/Other/d6.png", "lvl1/Dyso/Other/d7.png", "lvl1/Dyso/Other/d8.png", "lvl1/Dyso/Other/d9.png", "lvl1/Dyso/Other/d10.png")
        this.pdeath.looping = false
        this.pjump = loadAnimation("lvl1/Dyso/Move/red/j1.png", "lvl1/Dyso/Move/red/j2.png", "lvl1/Dyso/Move/red/j3.png", "lvl1/Dyso/Move/red/j4.png", "lvl1/Dyso/Move/red/j5.png", "lvl1/Dyso/Move/red/j6.png", "lvl1/Dyso/Move/red/j7.png", "lvl1/Dyso/Move/red/j8.png", "lvl1/Dyso/Move/red/j9.png", "lvl1/Dyso/Move/red/j10.png")

        this.moveInstruct = loadImage("lvl1/AD to move.png")
        this.moveInVis = 0

        this.jumpInstruct = loadImage("lvl1/Spacebar to jump.png")
        this.jumpInVis = 0


        this.p1 = new Platform(370, this.h / 1.25, 730)
        this.p2 = new Platform(870, this.h / 1.25, 160)
        this.p3 = new Platform(1090, this.h / 1.33, 155)
        this.p4 = new Platform(1250, this.h / 1.33, 35)
        this.p5 = new Platform(1555, this.h / 1.33, 455)
        this.p6 = new Platform(1865, this.h / 1.33, 35)
        this.p7 = new Platform(2020, this.h / 1.33, 140)
        this.p8 = new Platform(2210, this.h / 1.33, 140)
        this.p9 = new Platform(2360, this.h / 1.33, 35)
        this.p10 = new Platform(2440, this.h / 1.3, 15)
        this.p11 = new Platform(2519, this.h / 1.3, 15)
        this.p12 = new Platform(2595, this.h / 1.38, 35)
        this.p13 = new Platform(2703, this.h / 1.52, 140)
        this.p14 = new Platform(2811, this.h / 1.38, 35)
        this.p15 = new Platform(2990, this.h / 1.38, 140)
        this.p16 = new Platform(3200, this.h / 1.38, 140)
        this.p17 = new Platform(3350, this.h / 1.38, 35)
        this.p18 = new Platform(3440, this.h / 1.27, 35)
        this.p19 = new Platform(3570, this.h / 1.38, 140)
        this.p20 = new Platform(3690, this.h / 1.5, 35)
        this.p21 = new Platform(3770, this.h / 1.68, 35)
        this.p22 = new Platform(3845, this.h / 1.96, 35)
        this.p23 = new Platform(4080, this.h / 1.96, 325)

        this.level1Group.add(this.p1.sprite, this.p2.sprite, this.p3.sprite, this.p4.sprite, this.p5.sprite, this.p6.sprite, this.p7.sprite, this.p8.sprite, this.p9.sprite, this.p10.sprite, this.p11.sprite, this.p12.sprite, this.p13.sprite, this.p14.sprite, this.p15.sprite, this.p16.sprite, this.p17.sprite, this.p18.sprite, this.p19.sprite,this.p20.sprite, this.p21.sprite, this.p22.sprite, this.p23.sprite)


        this.ground = createSprite(this.w / 2, this.h - this.h / 20, this.w, this.h / 10)
        this.ground.visible = false
        this.level1Group.add(this.ground)


        this.groundCollider = createSprite(this.w * 0.5, this.h - this.h / 20 - 3, this.w, this.h / 10)
        this.groundCollider.visible = false
        this.level1Group.add(this.groundCollider)


        this.leftCollider = createSprite(windowWidth / 6, this.h / 2, windowWidth / 3.06, this.h)
        this.leftCollider.visible = false
        this.level1Group.add(this.leftCollider)



        this.lWall = createSprite(-1 * windowWidth / 6.5, this.h, this.w / 3, this.h)
        this.lWall.visible = false

        this.level1Group.add(this.lWall)

        collidergroup.add(this.groundCollider)
        tgroup.add(this.ground)

        this.player = new Plr(50, 550, this.pidle, this.panimation, this.pjump, this.pdeath)
        this.level1Group.add(this.player.plr)

        this.storylineBg = createSprite(this.w / 2, this.h / 2, this.w, this.h)
        this.storylineBg.visible = false
        this.level1Group.add(this.storylineBg)

        this.storyline = createSprite(this.w / 2 - this.w / 15  , this.h / 4 + this.h / 25, this.w, this.h / 2)
        this.storyline.scale = 0.8

        this.level1Group.add(this.storyline)

        this.continueStory = true

        this.gyo1 = new Enemy(1500, this.h / 1.45)
        this.gyo2 = new Enemy(2500, this.h / 1.45)
        this.gyo3 = new Enemy(2850, this.h / 1.7)

        this.level1Group.add(this.gyo1.gyo)
        this.level1Group.add(this.gyo2.gyo)
        this.level1Group.add(this.gyo3.gyo)
        //this.testGyo = new Enemy(300, 600)

        this.cameraPlus = 0
        this.leftcameraPlus = 0
        this.gameState = true

        this.camX = windowWidth

        this.screen = createSprite(camera.position.x, this.h / 2, this.w, this.h)
        this.screen.shapeColor = "black"
        this.screen.visible = false
        this.level1Group.add(this.screen)
        
        this.GO = createSprite(this.w / 2, this.h / 3, 20, 20)
        this.GOimg = loadImage("lvl1/GO.png")
        this.GO.visible = false
        this.GO.addImage(this.GOimg)
        this.level1Group.add(this.GO)

        this.retry = createSprite(this.w / 2, this.h / 1.6, 20, 20)
        this.retryImg = loadImage("lvl1/retry.png")
        this.retry.addImage(this.retryImg)
        this.retry.visible = false
        this.retry.scale = 0.4
        this.level1Group.add(this.retry)

        this.pointer = createSprite(50, this.h / 1.3, 20, 20)
        this.pImg = loadImage("lvl1/pointer.png")
        this.pointer.addImage(this.pImg)
        this.pointer.visible = false
        this.level1Group.add(this.pointer)

        this.dislayGO = false

        this.ob1 = createSprite(760, 640, 50, 50)
        this.ob2 = createSprite(980, 640, 50, 50)
        this.ob3 = createSprite(1195, 640, 50, 50)
        this.ob4 = createSprite(1300, 640, 50, 50)
        this.ob5 = createSprite(1810, 640, 50, 50)
        this.ob6 = createSprite(2120, 650, 460, 50)
        this.ob7 = createSprite(2850, 650, 970, 50)

        this.level1Group.add(this.ob1, this.ob2, this.ob3, this.ob4, this.ob5, this.ob6, this.ob7)

        this.ob1.visible = false
        this.ob2.visible = false
        this.ob3.visible = false
        this.ob4.visible = false
        this.ob5.visible = false
        this.ob6.visible = false
        this.ob7.visible = false


        obgroup.add(this.ob1)
        obgroup.add(this.ob2)
        obgroup.add(this.ob3)
        obgroup.add(this.ob4)
        obgroup.add(this.ob5)
        obgroup.add(this.ob6)
        // obgroup.add(this.ob7)

        this.leftMove = createSprite(60, 647.5, 75, 75)
        // this.leftMove.position(20, 610)
        // this.leftMove.style("padding", '35px')
        // this.leftMove.touchStarted(this.goRight)

        this.rightMove = createSprite(160, 647.5, 75, 75)
        // this.rightMove.position(130, 610)
        // this.rightMove.style("padding", "35px")


        this.passed = false

        this.lSprite = createSprite(this.w / 2.5, this.h / 1.55, 70, 50)
        this.rSprite = createSprite(this.w / 1.7, this.h / 1.55, 70, 50)
        this.lSprite.visible = false
        this.rSprite.visible = false
        this.level1Group.add(this.lSprite, this.rSprite)

        this.checkAnimation = false

        camera.position.x = windowWidth / 2
        camera.position.y = windowHeight / 2

        this.portal = createSprite(4180, 315, 20, 20)
        this.portal.scale = 0.3
        this.portalAni = loadAnimation("portal/0.png", "portal/1.png", "portal/2.png", "portal/3.png", "portal/4.png", "portal/5.png", "portal/6.png", "portal/7.png")
        this.portal.addAnimation("looping", this.portalAni)
        this.portal.animation.frameDelay = 1
        this.level1Group.add(this.portal)
        this.portal.depth = 1


    }


    play(){
        this.player.plr.collide(tgroup)
        this.ground.x = camera.position.x
        this.groundCollider.x = camera.position.x
        this.w = camera.position.x  + this.camX / 2
        this.lSprite.x = camera.position.x - this.camX / 10
        this.rSprite.x = camera.position.x + this.camX / 10


        this.player.plr.collide(this.lWall)

        

        if(this.player.plr.isTouching(obgroup)){
            this.player.plr.changeAnimation("death", this.pdeath)
            this.player.plr.animation.play()
            this.checkAnimation = true
            this.player.plr.velocityY = 5
        }

        if(this.checkAnimation){
            if(this.player.plr.animation.getFrame() == this.player.plr.animation.getLastFrame()){
                

                setTimeout(() => {
                    this.displayGO = true
                    this.player.plr.animation.rewind()
                }, 300)
                
            }
        }

        if(this.player.plr.isTouching(this.portal)){
            this.passed = true

        }

        image(this.bg, 0, 0, 5000, this.h)

        if(this.gameState){

            this.gyo1.move(1350, 1780)
            this.gyo2.move(1850, 2350)
            this.gyo3.move(2600, 2825)

            this.screen.visible = false
            this.GO.visible = false
            this.retry.visible = false


        if(this.storylineBool){

            if(keyIsDown(32) && this.continueStory){
                this.storylinePart += 1
                this.continueStory = false
            }
            
            if(mouseWentUp("leftButton") && this.continueStory){
                this.storylinePart += 1
                this.continueStory = false   
            }

            if(keyWentUp(32) || mouseWentDown("leftButton")){
                this.continueStory = true
            }
    
            if(this.storylinePart == 0){
                this.storyline.addImage(this.storyp1)
            }else if(this.storylinePart == 1){
                this.storyline.addImage(this.storyp2)
            }else if(this.storylinePart == 2){
                this.storyline.addImage(this.storyp3)
            }else if(this.storylinePart == 3){
                this.storyline.addImage(this.storyp4)
            }else if(this.storylinePart == 4){
                this.storyline.addImage(this.storyp5)
            }else if(this.storylinePart == 5){
                this.storyline.addImage(this.storyp6)
            }else if(this.storylinePart == 6){
                this.storyline.addImage(this.storyp7)
            }else if(this.storylinePart > 6){
                this.storyline.destroy()
                this.storylineBool = false
            }

        }else{

            this.checkAnimation = false
            this.displayGO = false

            if(collidergroup.isTouching(this.player.plr)){
                this.touchGround = true
            }

            if(obgroup.isTouching(this.player.plr)){
                  this.gameState = false
            }
              
              this.gyo1.collision(this.player.plr)
              this.gyo2.collision(this.player.plr)
              //this.testGyo.collision(this.player.plr)
    
              
            if(keyDown("LEFT_ARROW") || keyDown(65) || mousePressedOver(this.leftMove)){
               this.player.plr.x -= 4
               this.player.plr.changeAnimation("run", panimation)
               this.player.plr.mirrorX(-1)
               camera.position.x -= this.leftcameraPlus
            }else if(keyDown("RIGHT_ARROW") || keyDown(68) || mousePressedOver(this.rightMove)){
               this.player.plr.x += 4
                this.player.plr.changeAnimation("run", panimation)
                this.player.plr.mirrorX(1)
                camera.position.x += this.cameraPlus
            }else if(keyDown("UP_ARROW") && this.touchGround && this.player.plr.isTouching(tgroup) == false|| keyDown(32) && this.touchGround && this.player.plr.isTouching(tgroup) == false){
               this.player.plr.velocityY = -12
               this.touchGround = false
               this.player.plr.changeAnimation("jump", pjump)
            }else{
                 this.player.plr.changeAnimation("idle", pidle)
            }

            
            if(this.touchGround != true){
               this.player.plr.changeAnimation("jump", pjump)
            }
            
             this.player.plr.velocityY = this.player.plr.velocityY + 0.8

             if(this.player.plr.x > camera.position.x - 10){
                 this.cameraPlus = 4
             }else if(this.player.plr.x < camera.position.x){
                this.cameraPlus = 0
             }

             if(this.player.plr.x > windowWidth * 2.79){
                 this.cameraPlus = 0
             }


             if(this.player.plr.x > camera.position.x - windowWidth / 4){
                 this.leftcameraPlus = 0
             }else if(this.player.plr.x <= camera.position.x - windowWidth / 4 && this.player.plr.isTouching(this.leftCollider) == false){
                 this.leftcameraPlus = 4
             }else if(this.player.plr.isTouching(this.leftCollider)){
                 this.leftcameraPlus = 0
             }
             

                if(this.player.plr.x > 0){
                    push()
                    tint(255, this.moveInVis)
                    image(this.moveInstruct, windowWidth / 50, this.h / 1.5, windowWidth / 8.5, this.h / 36)
                    this.moveInVis += 4
                    pop()
                }  

                if(this.player.plr.x > this.w / 3){
                    push()
                    tint(255, this.jumpInVis)
                    image(this.jumpInstruct, windowWidth / 2.3, this.h / 1.5, windowWidth / 6.4, this.h / 36)
                    this.jumpInVis += 4
                    pop()
                }else{
                    this.jumpInVis = 0
                }         
            }

        }else if(this.gameState == false)

        this.GO.x = camera.position.x
        this.retry.x = camera.position.x
        this.screen.x = camera.position.x

            var changePressed = true


            if(this.displayGO && this.gameState == false){
                this.screen.visible = true
                this.GO.visible = true
                this.retry.visible = true

                if(mousePressedOver(this.lSprite)){
                    this.gameState = true
                    camera.position.x = this.camX / 2
                    this.player.plr.x = 50
                    this.player.plr.y = 530

                    this.screen.visible = false
                    this.GO.visible = false
                    this.retry.visible = false

                    this.lSprite.visible = false
                    this.rSprite.visible = false

                    this.moveInVis = 0

                    this.gyo1.move(1150, 1500)
                    this.gyo1.startOver()

                    this.gyo2.move(1600, 2000)
                    this.gyo2.startOver()
                    //this.testGyo.startOver()
                    //this.testGyo.gyo.x = 300

                    this.player.plr.animation.goToFrame(0)


                    camera.position.x = windowWidth / 2
                    camera.position.y = windowHeight / 2

                    

                    
                }else if(mousePressedOver(this.rSprite) && this.rightPressed){
                    window.close()
                }
            }
        }

        end(){
            if(this.passed){

                this.player.plr.x = 4180
                this.player.plr.y = 325

                this.player.plr.scale -= 0.03
                
                if(this.player.plr.scale < 0){
                    levelState = 2
                    this.level1Group.destroyEach()
                }
                
            }
        }

        goRight(){
            this.player.plr.x += 4
                this.player.plr.changeAnimation("run", panimation)
                this.player.plr.mirrorX(1)
                camera.position.x += this.cameraPlus
        }
    }

   

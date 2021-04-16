class Platform{
    constructor(x, y, w){
    
        this.collider = createSprite(x, y - 0.5, w, windowHeight / 360)
        this.collider.visible = false
        this.collider.shapeColor = "red"

        this.sprite = createSprite(x, y, w, windowHeight / 360)
        this.sprite.visible = false

        tgroup.add(this.sprite)
        collidergroup.add(this.collider)
        
    }
}
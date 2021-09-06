import  Animation from './animation';

class Character {
    constructor(context, canvas){
        this.jumpSpeed = 10;
        this.duckSpeed = 5;
        // this.height = 20;
        // this.width = 20;
        this.height = 48;
        this.width = 49;
        this.yVelocity = 0;
        this.duckVelocity = 0;
        this.context = context;
        this.canvas = canvas;
        this.x = this.width;
        this.y = this.canvas.height - this.height;
        this.frame_set =[
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        ]
        this.sprite_image = new Image()
        this.anim = new Animation(2, this.frame_set[0])
    }

    update(){
        this.y += this.yVelocity
        if (this.y < this.canvas.height - (this.height*3.5)){
            this.yVelocity = -this.yVelocity;
        }
        if (this.y === (this.canvas.height - this.height) && this.yVelocity !== 0){
            this.yVelocity = 0;
        }
        this.y += this.duckVelocity
        if (this.y > (this.canvas.height - (this.height)*0.5)){
            this.duckVelocity = -this.duckVelocity;
        }
        if (this.y === (this.canvas.height - this.height) && this.duckVelocity !== 0){
            this.duckVelocity = 0;
        }
    }

    display(){
    
        this.context.fillStyle = "#FFFFFF";
        this.context.drawImage(this.sprite_image, this.anim.frame_index * this.width, 0, this.width, this.height, 20, this.y, this.width, this.height)
        
    }

    verticalMovement(direction){
        switch(direction){
            case 'Space':              
                if (this.yVelocity === 0 && this.duckVelocity === 0){
                    this.yVelocity -= this.jumpSpeed
                }
                break;
            case 'Down':
                if (this.duckVelocity === 0 && this.yVelocity === 0){
                    this.duckVelocity += this.duckSpeed
                }
                break;
            default:
                this.anim.update_frame_set(this.frame_set[0], 1);
        }
        // this.anim.update_frame();        
    }

    

}

export default Character;
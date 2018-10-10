import { Vector } from "./vector";
import { GameObject } from "./gameObject";
import { GameEngine } from "./index";

export class Ball implements GameObject
{
    public height: number;
    public width: number;
    private gameEngine:GameEngine;
    public position:Vector;
    private direction:Vector;
    private speed:number = 660;
    private size:number= 50;
    private color:string;

    constructor (position:Vector, direction:Vector, color: string, gameEngine:GameEngine)
    {
        this.position = position;
        this.direction = direction;
        this.gameEngine = gameEngine;
        this.height = this.size;
        this.width = this.size;
        this.color = color;
    }

    // Update method takes care of all logic
    update(time: number): void {
        //testing for collisions with walls -> change direction
        if (this.position.x <=0 ||this.position.x >= this.gameEngine.canvasWidth-this.size) this.direction.x *= -1;
        if (this.position.y <=0 ||this.position.y >= this.gameEngine.canvasHeight-this.size) this.direction.y *= -1;

        //testing for Collision with any gameobject
        this.gameEngine.objects.forEach(elegameobj => {
           
    
        });
               
        this.position.x += this.direction.x * this.speed * time/1000;
        this.position.y += this.direction.y * this.speed * time/1000;
    }
    
    // draw ball on canvas
    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.size, this.size);
    }
    
    // in case of any collision this method is called
    onColliosion(other: GameObject): void {
        // reverse direction if player collides with ball
        if (other == this.gameEngine.player1)
        {
            this.direction.x *= -1;
        } else if (other instanceof(Ball)) {
            if(this.color == other.color) {
                this.gameEngine.objects.splice(this.gameEngine.objects.indexOf(other));
            }
            this.color = "red";
        }
    }

}
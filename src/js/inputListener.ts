export class Listener
{
    public downKey: boolean = false;

    constructor()
    {
        window.addEventListener('keydown', this.keyDown, false);
        window.addEventListener('keyup', this.keyUp, false);
    }

    private keyDown(event:KeyboardEvent): void
    {
        console.log("KeyDown");
        this.downKey = true;
    }

    private keyUp(event: KeyboardEvent): void
    {
        this.downKey = false;
    }
}
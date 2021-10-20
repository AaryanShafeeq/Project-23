class PlayerBase {
    constructor(x, y, width, height) {
        let options = {
            isStatic: true
        };

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("./assets/base2.png");

        World.add(world, this.body);
    }

    display() {
        let pos = this.body.position;
        let angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}
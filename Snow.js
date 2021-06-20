class Snow {
    constructor(x, y, r) {
        var options = {
            restiutuion: 0.4,
        
        }

        this.r = r;
        this.image = loadImage("snow4.webp");
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position
        var angle = this.body.angle

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("white");
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r*2, this.r*2);
        pop();

    }
};
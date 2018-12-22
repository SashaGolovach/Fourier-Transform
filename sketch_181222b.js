function setup() {
    createCanvas(600, 400);
}
let time = 0;
let points = [];
let path = [];


function draw() {
    background(0);
    translate(150, 200);

    let x = 0;
    let y = 0;

    for (let i = 0; i < 5; i++) {
        let prevx = x;
        let prevy = y;

        let n = i * 2 + 1;
        let radius = 75 * (4 / (n * PI));
        x += radius * cos(n * time);
        y += radius * sin(n * time);

        stroke(255, 100);
        noFill();
        ellipse(prevx, prevy, radius * 2);

        stroke(255);
        line(prevx, prevy, x, y);
    }
    points.unshift(y);


    translate(200, 0);
    line(x - 200, y, 0, points[0]);
    beginShape();
    noFill();
    for (let i = 0; i < points.length; i++) {
        vertex(i, points[i]);
    }
    endShape();

    time += 0.04;


    if (points.length > 250) {
        points.pop();
    }
}
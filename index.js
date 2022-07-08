let canvas = document.querySelector("canvas");
canvas.width = this.innerWidth;
canvas.height = innerHeight;
let c = canvas.getContext("2d");


let mouse = {
    x:undefined,
    y:undefined
}
let howbig;
if(innerWidth<1000){
    howbig = 20;
}else{
    howbig = 65;
}
const colorArray = [
    "rgb(239, 255, 253)",
    "rgb(184, 255, 249)",
    "rgb(133, 244, 255)",
    "rgb(66, 194, 255)"
  ]

addEventListener('mousemove',(event)=>{
    mouse.x = event.x;
    mouse.y = event.y;
})

function Particle(x,y,radius){
    this.x = x;
    this.y =y;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random()*4)];
    this.radians = Math.random()*Math.PI*2;
    this.velocity = 0.1;
    this.distancex = (Math.random()*95) + howbig;
    this.distancey = (Math.random()*95) + howbig;
    this.lastMousex = mouse.x;
    this.lastMousey = mouse.y;

    this.draw = function(){
        c.beginPath();
        c.lineWidth = this.radius;
        c.strokeStyle = this.color;
       c.moveTo(lastPoint.x,lastPoint.y);
       c.lineTo(this.x,this.y);
       c.stroke();
        c.closePath();
    }
    this.update = function(){
         lastPoint = {
            x:this.x,
            y:this.y
        }
        this.radians += this.velocity;
       this.x = mouse.x +50 + Math.sin(this.radians)*this.distancex;
       this.y = mouse.y +50 + Math.cos(this.radians)*this.distancey;
    //    this.y += 1;
    this.draw(lastPoint);
    }
}
let particles = [];
function init(){
    for(let i=0;i<45;i++){
        let radius = (Math.random()*5)+2;
        let x = Math.random() * (this.innerWidth - radius*2) + radius;
        let y = Math.random() * (this.innerHeight - radius*2) + radius;
        particles.push(new Particle(x,y,radius));

    }
}
init();

function animate(){
    requestAnimationFrame(animate);
    console.log(innerWidth)
c.fillStyle = "rgba(0,0,0,0.06)";
   c.fillRect(0,0,canvas.width,canvas.height);
   
    for(let i=0;i<particles.length;i++){
        particles[i].update();
        
    }
}
animate();
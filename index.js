const canvas = document.querySelector("#canvas1");

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

// get mouse position
let mouse = {
  x: undefined,
  y: undefined,
  radius: (canvas.height / 150) * (canvas.width / 150),
};

canvas.addEventListener("mousemove", function (event) {
  mouse.x = event.offsetX;
  mouse.y = event.offsetY;
});

// create particle
class Particle {
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }
  //method to draw individual particles
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  // check particle position, check mouse position, move the particle, draw the particle
  update() {
    // check if particle position is still within the canvas
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
      this.directionY = -this.directionY;
    }
    // check collision detection - mouse position / particle position
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < mouse.radius + this.size) {
      if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
        this.x += 5;
      }
      if (mouse.x > this.x && this.x > this.size * 10) {
        this.x -= 5;
      }
      if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
        this.y += 5;
      }
      if (mouse.y > this.y && this.y > this.size * 10) {
        this.y -= 5;
      }
    }
    // move particle
    this.x += this.directionX;
    this.y += this.directionY;
    // draw particle
    this.draw();
  }
}

// create particle array
function init() {
  particlesArray = [];
  let numberOfParticles = (canvas.height * canvas.width) / 25000;
  for (let i = 0; i < numberOfParticles; i++) {
    let size = Math.random() * 4 + 1;
    let x =
      Math.random() * (window.innerWidth - size * 2 - size * 2) + size * 2;
    let y =
      Math.random() * (window.innerHeight - size * 2 - size * 2) + size * 2;
    let directionX = Math.random() - 0.5;
    let directionY = Math.random() - 0.5;
    function getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    let color = getRandomColor();

    particlesArray.push(
      new Particle(x, y, directionX, directionY, size, color)
    );
  }
}

// check if particles are close enough to draw a line between them
function connect() {
  let opacityValue = 1;
  for (let a = 0; a < particlesArray.length; a++) {
    for (let b = a; b < particlesArray.length; b++) {
      let distance =
        (particlesArray[a].x - particlesArray[b].x) *
          (particlesArray[a].x - particlesArray[b].x) +
        (particlesArray[a].y - particlesArray[b].y) *
          (particlesArray[a].y - particlesArray[b].y);
      if (distance < (canvas.width / 7) * (canvas.height / 7)) {
        opacityValue = 1 - distance / 20000;
        ctx.strokeStyle = "rgba(140,85,31," + opacityValue + ")";
        ctx.beginPath();
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
        ctx.stroke();
      }
    }
  }
}

// animation loop
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
  }
  connect();
}

// resize event
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  mouse.radius = ((canvas.height / 80) * canvas.height) / 80;
  init();
});

// mouse out event
canvas.addEventListener("mouseout", function () {
  mouse.x = undefined;
  mouse.y = undefined;
});

init();
animate();

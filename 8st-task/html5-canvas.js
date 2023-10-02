const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log(ctx);

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 15


let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if (!isDrawing) return; //stop the function running when they are not moused
    console.log(e);

    ctx.strokeStyle = `hsl(${hue},100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;

    hue++;
    if (hue >= 360) {
        hue = 0;
    };

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    };
    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
};


canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);



canvas.addEventListener('touchstart', (e) => {
    isDrawing = true;
    // Get touch position relative to the canvas
    const touch = e.touches[0];
    lastX = touch.clientX - canvas.getBoundingClientRect().left;
    lastY = touch.clientY - canvas.getBoundingClientRect().top;
});

canvas.addEventListener('touchmove', (e) => {
    // Prevent page scrolling
    e.preventDefault();

    if (isDrawing) {
        const touch = e.touches[0];
        const currentX = touch.clientX - canvas.getBoundingClientRect().left;
        const currentY = touch.clientY - canvas.getBoundingClientRect().top;
        draw({ offsetX: currentX, offsetY: currentY });
    }
});

canvas.addEventListener('touchend', () => {
    isDrawing = false;
});

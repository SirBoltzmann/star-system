const body = document.querySelector("body");
const starNumber = 600;

// Stars creation....
for (let i = 0; i <= starNumber; i++) {
    let star = document.createElement('div');
    star.className = 'stars';

    //Separating stars to make 'em blink.. 
    if (i % 2 == 0) {
        star.classList.add('blinkStarGroup1');
    } else if (i % 2 !== 0) {
        star.classList.add('blinkStarGroup2');
    }

    //Random Position...
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    console.log(x, y)

    //Random size...
    let starSize = Math.random() * 3;

    star.style.top = `${y}px`;
    star.style.left = `${x}px`;
    star.style.width = `${starSize}px`;
    star.style.height = `${starSize}px`;

    body.appendChild(star);
}
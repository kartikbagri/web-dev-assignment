const btnStart = document.getElementById('btnStart');
const text = document.getElementById('text');
btnStart.addEventListener('click', () => {
    let val = 1;
    let displayText = 'Text-Growing';
    let color = 'red';
    const interval = setInterval(() => {
        const currSize = getComputedStyle(text).fontSize;
        // 1 px = 0.75 pt
        if(parseInt(currSize) * 0.75 >= 50) {
            val = -1;
            color = 'blue';
            displayText = 'Text-Shrinking';
        } else if(parseInt(currSize) * 0.75 <= 5 && val === -1) {
            color = 'red';
            displayText = 'Text-Growing'
            clearInterval(interval);
        }
        text.style.fontSize = `${parseInt(currSize) + val}px`;
        text.style.color = color;
        text.innerText = displayText;
    }, 100);
});
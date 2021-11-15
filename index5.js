function func() {
    const numbers = document.getElementById('numbers');
    const squares = document.getElementById('squares');
    const cubes = document.getElementById('cubes');
    numbers.innerHTML = "";
    squares.innerHTML = "";
    cubes.innerHTML = "";
    for(let i=0;i<=10;i++){
        const numberItem = i;
        const squareItem = i*i;
        const cubeItem = Math.pow(i,3);
        numbers.innerHTML += `<th>${numberItem}</th>`;
        squares.innerHTML += `<td>${squareItem}</td>`;
        cubes.innerHTML += `<td>${cubeItem}</td>`;
    }
}
const calculateBtn = document.getElementById('calculateBtn');
calculateBtn.addEventListener('click', func);
const container = document.getElementById('container');
window.onload = getSquares();

function makeGrid(side){
    container.style.setProperty('--grid-rows', side);
    container.style.setProperty('--grid-cols', side);
    for (let i = 0; i < (side**2); i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
        cell.addEventListener('mouseenter', () => {
            cell.classList.add('hovered');
        });
    }
    
}

function getSquares(){
    const button = document.querySelector('button');
    button.addEventListener('click', () =>{
        while (true){
            let sideLength = prompt("Number of squares per side:", "Limit is 100");
            if (sideLength <= 100 && sideLength > 0){
                makeGrid(sideLength); 
                break;
            } 
        }
    });
}

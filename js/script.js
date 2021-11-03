
document.getElementById('play').addEventListener('click', function() {
  play();
})


function play() {

  const difficolta = parseInt(document.getElementById(`difficolta`).value);

  const grado = [100, 81, 49];
  const cellNumbers = grado [difficolta - 1];
  const cellRow = Math.sqrt(cellNumbers);
  let giocoFinito = true;
  
  const BOMB_NUMB = 16;
  let bombs = createBombs();
  console.log(bombs);
  
  document.querySelector('main').innerHTML = "";
  campoDiGioco();
  
  function campoDiGioco() {
    
    const campo = document.createElement('div');
    campo.className= 'container';
    
    for (let i = 1; i <= cellNumbers; i++) {
      
      const square = document.createElement('div');
      square.className = 'square';
      square.innerHTML = 
      `
      <span>${i}</span>
      `;
      const squareSize = 
      `
      calc(100% / ${cellRow})
      `;
      square.style.width = squareSize;
      square.style.height = squareSize;

      giocoFinito = false;

      square.addEventListener('click', function(event){

        const cellaCliccata = parseInt(this.innerText);

        console.log('cella cliccata', cellaCliccata);      

        if (bombs.includes(cellaCliccata) == true  ){
          
          square.classList.add('danger');
          giocoFinito = true;
          
        }else{
          
          square.classList.add('active');
          
          
        }
        console.log('bomb', bombs);


      })
      
      document.querySelector('main').append(campo);
      campo.append(square);
    }
  }
  
  function createBombs() {
    let bombs = [];

    while (bombs.length < BOMB_NUMB) {
      const bomb = getRandomNumb (1, cellNumbers);
      if (!bombs.includes(bomb)) {
        bombs.push(bomb);
      }
    }
    
    return bombs;
  }

} 



function getRandomNumb(min, max) {
  return Math.floor(Math.random() * (max - min +1) + min);
}


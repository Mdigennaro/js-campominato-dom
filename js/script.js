
document.getElementById('play').addEventListener('click', function() {
  play();
})


function play() {

  const difficolta = parseInt(document.getElementById(`difficolta`).value);

  const grado = [100, 81, 49];
  const cellNumbers = grado [difficolta - 1];
  const cellRow = Math.sqrt(cellNumbers);

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
      
      document.querySelector('main').append(campo);
      campo.append(square);
    }
  }
 
}




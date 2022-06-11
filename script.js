PixelArt("boardInner", 8, 8)
function PixelArt(el, rows, cols) {
    var board = document.getElementById(el);
    var clicked1_box = '';
    var res = '';
    for (var i = 0; i < rows; ++i){
      var row = document.createElement('DIV')
      row.className = 'row'
      row.style.flexDirection = i % 2 === 0 ? '' : 'row-reverse'
      for (var j = 0; j < cols; ++j){
        var square = document.createElement('DIV')
        square.className = 'square'
        
        if(i % 2 === 0){
          square.dataset.rowNumber = (i+1)+''+(j+1)
         // square.textContent = (i+1)+''+(j+1)
        }else{
          square.dataset.rowNumber = (i+1)+''+(cols - j);
          //square.textContent = (i+1)+''+(cols - j)
        }
        square.style.backgroundColor = j % 2 === 0 ? 'white' : 'black'
        row.appendChild(square)
      }
      board.appendChild(row)
    }
    
    board.addEventListener('click', onClickGrid)

    function onClickGrid(e){
      var rchildren = board.childNodes;
      
      for (var k = 0; k < rchildren.length; k++) {
        var cchildren = rchildren[k].childNodes;
        for(var p = 0; p < cchildren.length; p++){
          if(cchildren[p].classList.contains('diagonalBGcolor')){
            cchildren[p].classList.remove('diagonalBGcolor')
          }
        }
      }
      //board.classList.remove('diagonalBGcolor')
      const clicked_box = e.target.dataset.rowNumber
      clicked1_box = clicked_box.split('');
      const x = parseInt(clicked1_box[0]);
      const y = parseInt(clicked1_box[1]);
      for(var i=1; i < 9; i++){
        for(var j=1; j < 9; j++){
          if(x + y - i <= 8 && x + y - i > 0){
              //console.log(e.target.dataset.rowNumber)
              res = x + y - i;
              
              var selected_row = document.querySelector('[data-row-number="'+ i +''+ res +'"]')
              selected_row.classList.add('diagonalBGcolor');
          }

          if (x < y) {
            if (i + Math.abs(x - y) < 9) {
              res = i + Math.abs(x - y); 
              var selected_row = document.querySelector('[data-row-number="'+ i +''+ res +'"]')
              selected_row.classList.add('diagonalBGcolor');
              
            }
          } else if (x > y) {
            if ((i - (x - y)) < 9) {
              res = i - (x - y);
              
              if(res > 0){
                var selected_row = document.querySelector('[data-row-number="'+ i +''+ res +'"]')
                selected_row.classList.add('diagonalBGcolor');
                //selected_row.style.backgroundColor = '#EC3323';

              }
            }
          }
          else if(x===y){
            if(i === j)
            {
              //matrix[i][j] = 1;
              var selected_row = document.querySelector('[data-row-number="'+ i +''+ j +'"]')
              selected_row.classList.add('diagonalBGcolor');
              //selected_row.style.backgroundColor = '#EC3323';
            }
          }   
        }
      }
     
    }
}
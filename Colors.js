// generator function
  function getColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
  }
// sets background color style
  function setBackground() {
    var color = getColor();
    document.body.style.background = color;
  }
// runs function on click
 document.body.onkeyup = function(e){
      if(e.keyCode == 32){
        setBackground();
      }
  }

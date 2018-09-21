(function(){
  var counter = 0;
  var rainbowId = document.getElementsByClassName('rainbowbackground');


    setInterval(function colorchange() {
	for(var i = 0; i < rainbowId.length; i++)
	{
	        rainbowId[i].style.backgroundColor = 'hsl(' + (counter + Math.floor(i * 30)) + ', 100%, 70%';
	}
      counter++;
    }, 7);



})()

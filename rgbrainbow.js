(function(){
  var textcounter = 0;
  var rainbowClass = document.getElementsByClassName('rainbow');
  var lengtharray = []; //Remembers the length of the content with class=rainbow so for loop doesnt change color of undefined
  var rainbowarray = []; //Becomes the final array containing all the <span>'d text
  var finalarray = []; //Becomes the final array referencing the spanned text and changing the color
  var a = 0;

  for(var i = 0; i < rainbowClass.length; i++)
  {
    var tempvar = rainbowClass[i].innerText.split("");
    lengtharray[i] = tempvar.length;
    rainbowarray.push(rainbowClass[i].innerText.split(""));
    console.log(rainbowarray[i]);
  }

  for(var i = 0; i < rainbowarray.length; i++)
  {
    rainbowClass[i].innerHTML = rainbowarray[i].map(function(char) {
      return '<span>' + char + '</span>';
    }).join('');
    finalarray[i] = rainbowClass[i].children;
    console.log(finalarray[i]);
  }

  for(var i = 0; i < rainbowClass.length; i++)
  {
    rainbowcolors(i, finalarray[i].length)
  }

  function rainbowcolors(a,b)
  {
    setInterval(function colorchange() {
      for (var i = 0; i < b; i++)
      {
        finalarray[a][i].style.color = 'hsl(' + (textcounter + Math.floor(i * 3)) + ', 100%, 70%';
      }
      textcounter++;
    }, 7);
  }

  var backgroundcounter = 0;
  var rainbowId = document.getElementsByClassName('rainbowbackground');


  setInterval(function colorchange() {
	   for(var i = 0; i < rainbowId.length; i++)
	    {
	      rainbowId[i].style.backgroundColor = 'hsl(' + (backgroundcounter + Math.floor(i * -1)) + ', 100%, 70%';
	    }
    backgroundcounter++;
  }, 15);

})()

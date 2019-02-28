(function(){
    let textspeed = 1;
    let backgroundspeed = 1;

    let classestoberainbowed = document.getElementsByClassName('foxrainbow');
    let backgroundtoberainbowed = document.getElementsByClassName('foxrainbowbg');
    
    let spanstoberainbowed = spanArrayContents(classestoberainbowed);

    textcolorchange(spanstoberainbowed, textspeed);
    //Actually do the rainbow effect. Backgrounds only.
    let backgroundcounter = 0;
    setInterval(() => {

        for(let i = 0; i < backgroundtoberainbowed.length; i++) {
            backgroundtoberainbowed[i].style.backgroundColor = 'hsl(' + (backgroundcounter + Math.floor(i * backgroundspeed)) + ', 100%, 70%';
        }
        backgroundcounter++;
    }, 15);

    //On-hover testing!

    let rainbowhover = document.getElementsByClassName('foxrainbowhover');
    let hoverspans = spanArrayContents(rainbowhover);
    let hoverinterval = 0;

    for(let i = 0; i < rainbowhover.length; i++) {
        rainbowhover[i].addEventListener("mouseover", startanimation, false);
        rainbowhover[i].addEventListener("mouseout", stopanimation, false);
    }

    let hovercounters = [];
    for(let i = 0; i < hoverspans.length; i++) {
        hovercounters[i] = 0 + i;
    }
    

    function startanimation() {
        hoverinterval = setInterval(() => {
            for(let i = 0; i < hoverspans.length; i++) {
                hoverspans[i].style.color = 'hsl(' + (hovercounters[i] + Math.floor(i * textspeed)) + ', 100%, 70%';
                if(hovercounters[i] == 360)
                {
                    hovercounters[i] = 0;
                }
                else {
                    hovercounters[i]++;
                }
            }
        }, 7);
    }

    function stopanimation() {
        clearInterval(hoverinterval);
    }

})()


//Actually do the rainbow effect. Text only.
function textcolorchange(rainbowarray, rainbowspeed) {
    let counterarray = [];

    for(let i = 0; i < rainbowarray.length; i++) {
        counterarray[i] = 0 + i;
    }
    setInterval(() => {

        for(let i = 0; i < rainbowarray.length; i++) {
            rainbowarray[i].style.color = 'hsl(' + (counterarray[i] + Math.floor(i * rainbowspeed)) + ', 100%, 70%';
            if(counterarray[i] == 360)
            {
                counterarray[i] = 0;
            }
            else {
                counterarray[i]++;
            }
        }
    }, 7);
}


//Prepare text for having its color changed by splicing it up into individual bits and taking it out of the HTMLcollection.

function spanArrayContents(classes) {

    let spans = [];
    let chars = [];

    for(let i = 0; i < classes.length; i++) {
        chars.push(classes[i].innerText.split(""));
        classes[i].innerHTML = chars[i].map(function(char) {
            return '<span>' + char + "</span>";
        }).join('');
    
    }
    
    for(let i = 0; i < classes.length; i++) {
        let temphtmlcollection = [].slice.call(classes[i].children)
        for(let j = 0; j < temphtmlcollection.length; j++) {
             spans.push(temphtmlcollection[j]);
        }
    }
    return spans;
}



(function(){
    let textspeed = 1;
    let backgroundspeed = 1;
    let hoverspeed = 10;

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
    let rainbowelements = [];
    let hoverinterval = [];
    let hovercounters = [];

    for(let i = 0; i < rainbowhover.length; i++) {
        rainbowelements[i] = spanElementContents(rainbowhover[i]);
    }

    //Set up the wavey effect with counters.
    for(let id = 0; id < rainbowelements.length; id++) {
        hovercounters[id] = [];
        for(let i = 0; i < rainbowelements[id].length; i++) {
            hovercounters[id].push(i);
        }
    }

    // Add event listeners for every item classed foxrainbowhover.
    for(let id = 0; id < rainbowhover.length; id++) {
        rainbowhover[id].addEventListener("mouseenter", function startanimation() {

               
            hoverinterval[id] = setInterval(() => {
                for(let i = 0; i < rainbowelements[id].length; i++) {
                    rainbowelements[id][i].style.color = 'hsl(' + (hovercounters[id][i] + Math.floor(i * hoverspeed)) + ', 100%, 70%';

                    
                    hovercounters[id][i]++;

                }
            }, 8);
        }, false);

        rainbowhover[id].addEventListener("mouseleave", function stopanimation() {


            clearInterval(hoverinterval[id]);
            for(let i = 0; i < rainbowelements[id].length; i++) {
                rainbowelements[id][i].style.color = 'black';
            }
        }, false);
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


//Prepare text for having its color changed by splicing it up into individual bits
//and taking it out of the HTMLcollection.

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

//Same as above except for single elements instead of an array of elements. 
//Helps split them up and give them an ID before they're taken to the slaughterhouse.

function spanElementContents(element) {
    let spans = [];
    let chars = [];

    chars.push(element.innerText.split(""));
    for(let i = 0; i < chars.length; i++){
        element.innerHTML = chars[i].map(function(char) {
            return '<span>' + char + "</span>";
        }).join('');
    }

    
    
    let temphtmlcollection = [].slice.call(element.children)
    for(let j = 0; j < temphtmlcollection.length; j++) {
         spans.push(temphtmlcollection[j]);
    }
    return spans;
}




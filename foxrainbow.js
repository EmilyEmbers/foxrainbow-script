//Script made by FeedbackFox. Please refrain from distributing this outside of github.
//https://github.com/FeedbackFox/RGB-CSS-script
//
//Feel free to use this in whatever application you want to, whether commercial or non-commercial.
//I'm just happy that my script was good enough to be used.
//


(function(){
    let textspeed = 1;
    let backgroundspeed = 1;
    let hoverspeed = 10;
    let hoverbackgroundspeed = -10;

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


    //Turn the rainbow effect on only when the mouse is over the element. Use foxrainbowhover to use.

    let rainbowhover = document.getElementsByClassName('foxrainbowhover');
    let rainbowelements = [];
    let hoverinterval = [];
    let hovercounters = [];
    let originalcolors = [];

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

    //Save the original color to easily return to it later.
    for(let i = 0; i < rainbowhover.length; i++) {
        originalcolors[i] = rainbowhover[i].style.color;
    }

    // Add event listeners for every item classed foxrainbowhover. If it has a data tag called foxrainbowhover with an id inside it instead uses that to start the hover effect.
    for(let id = 0; id < rainbowhover.length; id++) {
        //Checks if the passed along id exists or not. If it doesn't, execute regularly. If it does, execute with hover on a different element.
        if(rainbowhover[id].dataset.foxrainbowhover.trim()) {
            let hoverelement = document.getElementById(rainbowhover[id].dataset.foxrainbowhover);

            hoverelement.addEventListener("mouseenter", function startanimation() {

                hoverinterval[id] = setInterval(() => {
    
                    for(let i = 0; i < rainbowelements[id].length; i++) {
                        rainbowelements[id][i].style.color = 'hsl(' + (hovercounters[id][i] + Math.floor(i * hoverspeed)) + ', 100%, 70%';
                        hovercounters[id][i]++;
                    }
                }, 7);
            }, false);
    
            hoverelement.addEventListener("mouseleave", function stopanimation() {
                clearInterval(hoverinterval[id]);
                for(let i = 0; i < rainbowelements[id].length; i++) {
                    rainbowelements[id][i].style.color = originalcolors[id];
                }
            }, false);

        }
        else {
            rainbowhover[id].addEventListener("mouseenter", function startanimation() {

                hoverinterval[id] = setInterval(() => {
    
                    for(let i = 0; i < rainbowelements[id].length; i++) {
                        rainbowelements[id][i].style.color = 'hsl(' + (hovercounters[id][i] + Math.floor(i * hoverspeed)) + ', 100%, 70%';
                        hovercounters[id][i]++;
                    }
                }, 7);
            }, false);
    
            rainbowhover[id].addEventListener("mouseleave", function stopanimation() {
                clearInterval(hoverinterval[id]);
                for(let i = 0; i < rainbowelements[id].length; i++) {
                    rainbowelements[id][i].style.color = originalcolors[id];
                }
            }, false);
        }


    }



        //Hover but for backgrounds.

        let rainbowhoverbg = document.getElementsByClassName('foxrainbowhoverbg');
        let hoverbginterval = [];
        let hoverbgcounter = 0;
        let originalbgcolors = [];

        //Save the original color to easily return to it later, but for backgrounds.
        for(let i = 0; i < rainbowhover.length; i++) {
            originalbgcolors[i] = rainbowhover[i].style.color;
        }
    
        for(let id = 0; id < rainbowhoverbg.length; id++) {
            rainbowhoverbg[id].addEventListener("mouseenter", function startbganimation() {
                   
                hoverbginterval[id] = setInterval(() => {
                    for(let i = 0; i < rainbowhoverbg.length; i++) {
                        rainbowhoverbg[0].style.backgroundColor = 'hsl(' + (hoverbgcounter + Math.floor(i * hoverbackgroundspeed)) + ', 100%, 70%';
                        hoverbgcounter++;
                    }
                }, 15);
            }, false);
        
            rainbowhoverbg[id].addEventListener("mouseleave", function stopbganimation() {
                clearInterval(hoverbginterval[id]);
                rainbowhoverbg[id].style.backgroundColor = originalbgcolors[id];
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

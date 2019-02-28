(function(){
    let textspeed = 1;
    let backgroundspeed = 1;

    let classestoberainbowed = document.getElementsByClassName('foxrainbow');
    let backgroundtoberainbowed = document.getElementsByClassName('foxrainbowbg');
    let charstoberainbowed = [];
    let spanstoberainbowed = [];
    

    for(let i = 0; i < classestoberainbowed.length; i++) {
        charstoberainbowed.push(classestoberainbowed[i].innerText.split(""));
        classestoberainbowed[i].innerHTML = charstoberainbowed[i].map(function(char) {
            return '<span>' + char + "</span>";
        }).join('');

    }

    for(let i = 0; i < classestoberainbowed.length; i++) {
        let temphtmlcollection = [].slice.call(classestoberainbowed[i].children)
        for(let j = 0; j < temphtmlcollection.length; j++) {
            spanstoberainbowed.push(temphtmlcollection[j]);
        }
    }

    textcolorchange(spanstoberainbowed, textspeed);

    let backgroundcounter = 0;
    setInterval(() => {

        for(let i = 0; i < backgroundtoberainbowed.length; i++) {
            backgroundtoberainbowed[i].style.backgroundColor = 'hsl(' + (backgroundcounter + Math.floor(i * backgroundspeed)) + ', 100%, 70%';
        }
        backgroundcounter++;
    }, 15);

})()

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

// 1. Locate the Element(s)
var square = document.getElementById('square')

// 2. Write the functionality needed when event occurs 
function changeColour(Colour){
        square.style.background = 'Colour';
    }
//3. Link element, event to functionality 
// i.e add an event listener
square.addEventListener('click', (event)=> changeColour('green'))
square.addEventListener('mouseover', (event)=> changeColour('red'))
square.addEventListener('mouseout', (event)=> changeColour('grey'))


// this needs work - re watch the lecture 

function createBuzzwordPhrase() {
    /* See https://en.wikipedia.org/wiki/List_of_buzzwords */
    var buzz = ["Paradigm-changing", "Multi-tier", "10,000-foot", "Agile", "Customer", "Win-win"];
    var action = ["empowered", "value-added", "synergy", "creative", "oriented", "focused", "aligned"];
    var outcome = ["process", "deliverable", "solution", "tipping-point", "strategy", "vision"];

    var idx_buz = Math.floor(Math.random() * buzz.length);
    var idx_act = Math.floor(Math.random() * action.length);
    var idx_out = Math.floor(Math.random() * outcome.length);

    return  buzz[idx_buz] + " " + action[idx_act] + " " + outcome[idx_out];
}
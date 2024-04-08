var square = document.getElementById('square');
var words = document.getElementById('words');

function changeColour(Colour) {
    console.log('Changing colour to:', Colour);
    square.style.background = Colour;
}

square.addEventListener('click', (event) => {
    console.log('Clicked on square');
    changeColour('green');
});

square.addEventListener('mouseover', (event) => {
    console.log('Mouse over square');
    changeColour('red');
});

square.addEventListener('mouseout', (event) => {
    console.log('Mouse out of square');
    changeColour('grey');
});

function createBuzzwordPhrase() {
    var buzz = ["Paradigm-changing", "Multi-tier", "10,000-foot", "Agile", "Customer", "Win-win"];
    var action = ["empowered", "value-added", "synergy", "creative", "oriented", "focused", "aligned"];
    var outcome = ["process", "deliverable", "solution", "tipping-point", "strategy", "vision"];

    var idx_buz = Math.floor(Math.random() * buzz.length);
    var idx_act = Math.floor(Math.random() * action.length);
    var idx_out = Math.floor(Math.random() * outcome.length);

    var phrase = buzz[idx_buz] + " " + action[idx_act] + " " + outcome[idx_out];
    console.log('Generated phrase:', phrase);
    return phrase;
}

// Example usage of createBuzzwordPhrase function
words.textContent = createBuzzwordPhrase();


// trouble shoot https://chat.openai.com/share/8017b117-d659-4873-b3a3-ed07550957e8
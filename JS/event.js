// option 1 directly set on the Html element


console.log('This is seperate js file');

// option 2- add onclick function


function makeRed(){
    document.body.style.backgroundColor= "red";
}

// option:3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor ='blue';
}
// option:3 another
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple'
}
// option 4
const pinkButton = document.getElementById('make-pink')
        pinkButton.addEventListener('click', makePink)

        function makePink(){
            document.body.style.backgroundColor = 'pink';
        }
// option 4 another

        const makeGreenButton = document.getElementById('make-green')
        makeGreenButton.addEventListener('click',function makeGreen (){
            document.body.style.backgroundColor = 'green';
        })

        // <!-- option 4 .final -->
        document.getElementById('make-goldenrod').addEventListener('click', function(){
            document.body.style.backgroundColor = 'goldenrod';
         })



         function handleOnClick(){
            const handlerStatus = document.getElementById('handler-status');
            handlerStatus.innerText = 'Handled by function attachd on click attibute';
        }
        // option2 not done
document.getElementById('event-listener').addEventListener('click', function(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Text Updated by add Event listener Button';
})

// option 2 recap 
document.getElementById('btn-update').addEventListener('click ', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.ariaValueMax;

    const p = document.getElementById('input-text-display');
    p.innerText = inputText;
    inputField.value = '';
})
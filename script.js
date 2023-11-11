let images = 
    [
        "dice-01.svg",
        "dice-02.svg",
        "dice-03.svg",
        "dice-04.svg",
        "dice-05.svg",
        "dice-06.svg"
    ];

let dice = document.querySelectorAll( "img" );

function onRoll() {

    dice.forEach( (ele) => {

        ele.classList.add("shake");
    } );

    setTimeout( ()=> {
        dice.forEach( (ele)=> {

            ele.classList.remove("shake");
        } );

        let dice1Value = Math.floor(Math.random() * 6);
        let dice2Value = Math.floor(Math.random() * 6);
        console.log( "(dice1) -> " + dice1Value + 1, "(dice2) -> " + dice2Value + 1);

        document.querySelector("#dice-1").setAttribute("src", "/images/" + images[dice1Value]);
        document.querySelector("#dice-2").setAttribute("src", "/images/" + images[dice2Value]);
        document.querySelector("#total").innerHTML = "Your roll is " + (+(dice1Value + 1) + +(dice2Value + 1));

    }, 1000);
}

onRoll();
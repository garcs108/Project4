let image = document.getElementById("changing-img");
// const btn = document.getElementById("addimage");


let keyspressed = []

// let codeArray = ["e","g","y","u","h","j"];
// let interval = setInterval(changeBackground, 1000);

// btn.addEventListener('click', function(){
//     let img2 = document.createElement("img");
//     img2.className = "imagesadded";
//     img2.src = "earth.png";
//     document.body.appendChild(img2);
// })

document.addEventListener('keydown', function(evt){ 
    var title = document.getElementById("changing-text")
    // console.log(evt.code, evt.key);
   // if(evt.metaKey == false){
        //clearInterval(interval);
        title.innerHTML += evt.key;
        setImage(title.innerHTML);
        keyspressed.push(evt.key);
        if(evt.key === "Backspace"){
            title.innerHTML = "";
            console.log("test");
        }

        /* if(evt.key == 'p'){
            clearInterval(interval);
        } */
    }

);

function setImage(word){
    var changingimage = document.getElementById("changing-img")
    switch(word){
        case 'manzanas':
            changingimage.src = "./images/dinero.jpg";
            break;
        case 'apples':
            changingimage.src = "./images/dinero.jpg";
            break;

            case 'ramas':
            changingimage.src = "./images/swing.jpg";
            break;
        case 'branches':
            changingimage.src = "./images/swing.jpg";
            break;

            case 'casa':
            changingimage.src = "./images/house.jpg";
            break;
        case 'house':
            changingimage.src = "./images/house.jpg";
            break;

            case 'bote':
            changingimage.src = "./images/boat.jpg";
            break;
        case 'boat':
            changingimage.src = "./images/boat.jpg";
            break;

            case 'trunk':
            changingimage.src = "./images/trunk.jpg";
            break;
        case 'tronco':
            changingimage.src = "./images/trunk.jpg";
            break;

            case 'rest':
            changingimage.src = "./images/rest.jpg";
            break;
        case 'descansa':
            changingimage.src = "./images/rest.jpg";
            break;

            case 'fin':
            changingimage.src = "./images/end.jpg";
            break;

        default:
            changingimage.src = "";
    }
}

/* document.addEventListener('keyup', function(evt){

    if(evt.key === "Backspace"){
        console.log(evt.code);
        title.innerHTML = ""
    }

    if(evt.key === "Alt"){
        title.classList.toggle("change");
    }

    if(evt.key === "Control"){
        title.classList.toggle("before-change");
    } */

    // switch(evt.key){
    //     case 'e':
    //         //title.innerHTML = codeArray[5];
    //         image.src = "earth.png";
    //         break;
    //     case 'm':
    //         //title.innerHTML = codeArray[0];
    //         image.src = "moon.png";
    //         break;
    //     case 's':
    //         //title.innerHTML = codeArray[1];
    //         image.src = "sun.png";
    //         break;
    //     default:
    //         image.src = "";
    // }

  
let fizz = "fizz";
let buzz = "buzz";
let fizzBuzz = "fizzbuzz";

for (i = 1; i <= 100; i++) {


    if ((i % 3 === 0) && (i % 5 === 0)) {

        console.log(fizzBuzz);
        let squareElement = document.getElementById("square")
        squareElement.innerHTML += `<div style="max-width:200px;"  class="col py-5 mx-2 bg-danger">${fizzBuzz}</div>`

    }
    else if (i % 3 === 0) {
        console.log(fizz);
        let squareElement = document.getElementById("square")
        squareElement.innerHTML += `<div style="max-width:200px;" class="col py-5 mx-2 bg-success">${fizz}</div>`
    }
    else if (i % 5 === 0) {
        console.log(buzz);
        let squareElement = document.getElementById("square")
        squareElement.innerHTML += `<div style="max-width:200px;" class="col py-5 mx-2 bg-warning">${buzz}</div>`
    }

    else {
        console.log(i);
        let squareElement = document.getElementById("square")
        squareElement.innerHTML += `<div style="max-width:200px;" class="col py-5 mx-2 bg-primary">${i}</div>`
    }
}
// creiamo una struttura di numeri che va da 1 a 100

const number = document.querySelector('.number');

// usiamo la sintassi di for
for(let i = 1; i <= 100; i++) {
    const element = `<p class="box"> ${i} </p>`
    const fizz = `<p class="box1"> Fizz </p>`
    const buzz = `<p class="box2"> buzz </p>`
    const fizzBuzz = `<p class="box3"> buzz </p>`

    if ((i % 3 == 0 ) && (i % 5 == 0)) {
        console.log('FizzBuzz');
        number.innerHTML += fizzBuzz;
    }
    else if (i % 3 == 0 ) {
        console.log('Fizz');
        number.innerHTML += fizz;
    }
    else if (i % 5 == 0 ) {
        console.log('Buzz');
        number.innerHTML += buzz;
    }
    else {
        console.log(i);
        number.innerHTML += element;
    }
}
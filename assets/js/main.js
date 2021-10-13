// creiamo una struttura di numeri che va da 1 a 100

const number = document.querySelector('.number');
const box = document.querySelector('p')

// usiamo la sintassi di for
for(let i = 1; i <= 100; i++) {
    console.log(i);
    const element = `<p class="box"> ${i} </p>`
    number.innerHTML += element;
    if ((i % 3 == 0 ) && (i % 5 == 0)) {
        console.log('FizzBuzz');
        
    }
    else if (i % 3 == 0 ) {
        console.log('Fizz');
        
    }
    else if (i % 5 == 0 ) {
        console.log('Buzz');
    }
}
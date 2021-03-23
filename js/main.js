/*  FizzBuzz
    Scrivi un programma che stampi i numeri da 1 a 100
    Per i multipli di 3 stampare “Fizz” al posto del numero
    Per i multipli di 5 stampare "Buzz" al posto del numero
    Per i numeri che sono sia multipli di 3 che di 5 stampare FizzBuzz
*/

for (var n = 1; n <= 100; n++) {

    if (n % 3 === 0 && n % 5 === 0) {
        console.log('FizzBuzz');
    } else if (n % 5 === 0) {
        console.log('Buzz')
    } else if (n % 3 === 0) {
        console.log('Fizz');
    } else {
        console.log(n);
    }
}

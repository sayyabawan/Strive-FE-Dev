/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
const l1 = 10
const l2 = 5

const area = function (l1,l2) {
    const result = l1 * l2
    console.log (result)
    
}

// area(l1,l2)


/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const a = 5
const b = 5

const crazySum = function (a, b) {
    if (a =! b) {
    console.log(a + b)
    } else {
    console.log((a + b) * 3)    
    }
}

// crazySum (a,b)

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

const givenNumber = 38

const crazyDiff = function (){
    if (givenNumber <= 19){
        console.log(19 - givenNumber )
    } else {
        console.log((givenNumber - 19) * 3 )
    }
}
// crazyDiff()

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundryNumber = 100

// const boundry = function (){
    if (boundryNumber == 20 && boundryNumber <= 100 || boundryNumber == 400){
        console.log(true)
    } else {
        console.log(false)
    }
// }

// boundry()
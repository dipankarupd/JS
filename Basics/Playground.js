var fruits = [
    'cherry',
    'apple',
    'orange',
    'apple',
    'banana'
]

var basket = pickFruits(fruits);
console.log(basket)

function pickFruits (fruit)  {

    var answer = [];
    for(i = 0; i<5; i++) {
        count = 0;
        while(count <=2) {
            if(fruit[i] === 'apple') {
                answer.push(fruit[i])
                count++;
            }
        }
    }
    return answer
}
    


function dou (number) {
    return number * 2;
}
let result = dou(5);
console.log(result); 


//2
function dou1(number) {
    return number % 2 === 0;
}

console.log(dou1(4)); 
console.log(dou1(7)); 


//3
function dou2(numbers) {
    if (numbers.length === 0) {
        return undefined; 
    } 
    let max = numbers[0]; 
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]; 
        }
    }
    return max;
}
let numbers = [3, 7, 2, 8, 5];
console.log(dou2(numbers)); 

//4
function dou4(str) {
    str = str.toLowerCase().replace(/[\W_]/g, '');
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false; 
        }
    }
    
    return true; 
}
console.log(dou4("А роза упала на лапу Азора")); 
console.log(dou4("hello")); 

//5
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return undefined; // возвращаем undefined если массив пуст
    }
    
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; // суммируем все числа из массива
    }
    
    return sum / numbers.length; // возвращаем среднее значение
}

// Пример использования функции
let numbers1 = [2, 4, 6, 8, 10];
console.log(calculateAverage(numbers)); // Выведет: 6

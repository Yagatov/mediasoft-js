// Основы JS
// #1.1
const getType = (arg) => typeof arg;
console.log("#1.1: " + getType(true));

// #1.2
// Выведет сначала a, потому что в условие будет истина т.к. есть в переменной функции и выполняется функция a.
// Потом выведет undefined, потому что после выполнение функции a console.log вернёт undefined


// Функции
// #2.1 (по другому не получился если это возможно :D)
function count(num) {
    num = typeof num == "number" ? num : 0;

    function count2(num2) {
        num2 = typeof num2 == "number" ? num2 : 0;

        function count3(num3) {
            num3 = typeof num3 == "number" ? num3 : 0;
            
            function count4(num4) {
                num4 = typeof num4 == "number" ? num4 : 0;
                
                function count5(num5) {
                    num5 = typeof num5 == "number" ? num5 : 0;
                    return num + num2 + num3 + num4 + num5;
                }
                return count5;
            }
            return count4;
        }
        return count3;
    }
    return count2;
}

console.log(
    "#2.1: ",
    count(3)(2)(1)(5)(7),
    count(3)(null)(1)('asad')()
);


// Объекты и массивы
// #3.1 
const convertArrToObj = (arr) => {
    const result = {};
    for(let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    return result;
}
console.log("#3.1: ", convertArrToObj(["123", 1, "Hello", true]));

// #3.2
const countFromArr = (arr) => {
    const result = {};
    arr.forEach(item => 
        result[item] === undefined
            ? result[item] = 1 
            : result[item]++
    );
    return result;
}

console.log("#3.2: ", countFromArr([1, 1, 1, 'test', 'test']));

// #3.3
const groupByField = (arr, key) => {
    const result = {};

    arr.forEach(item => 
        result[item[key]] === undefined
            ? result[item[key]] = [item]
            : result[item[key]].push(item)
    );

    return result;
}

const arr = [{test: 1}, {test: 2}, {test: 3}, {test: 1}, {test: 1}];

console.log("#3.3: ", groupByField(arr, 'test'));


// Прототипы, наследование
// #4.1
Number.prototype.plus = function(num) {
    return this + num;
}

console.log("#4.1: " + (1).plus(2));


// Асинхронная работа в JS
// #5.1
// start
// promise constructor
// final
// p2
// p4
// p4
// timeout

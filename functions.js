const returnEmptyString = function () { return ''};

const returnZeroNumber = function () {return 0};

const returnEmptyArray = function () {return []};

const returnEmptyObject = function () {return {}};

const returnAbcString = function (value) {return 'abc123'};

const returnSumOfTen = function (arg1, arg2) {return arg1 + arg2};

const subtraction = function (arg1, arg2) {return arg1-arg2};

const multiplication = function (arg1, arg2) {return arg1*arg2};

const division = function (arg1, arg2) {return arg1/arg2};

const returnArray = function (arg1) {return arg1};

const returnFirstIndex = function (arg1) {return arg1[0]};

const returnSecondIndex = function (arg1) {return arg1[1]};

const returnArrayLength = function (arg1) {return arg1.length};

const arraySum = function (arg1) {
    let total = 0;
    for (let num of arg1) {
        total += num
    }
    return total
};

const arraySubtraction = function (arg1) {
      let total = 0;
    for (let num of arg1) {
        total -= num
    }
    return total
};

const multiplicationArray = function (arg1) {
          let total = 1;
    for (let i = 0; i < arg1.length; i++){
        total *= arg1[i]
    }
    return total
};

const divisionArray = function (arg1) {
          let total = 1;
    for (let num of arg1) {
        total /= num
    }
    return Number(total.toFixed(3))
};

const oddArray = function (arg1) {
    let odds = []
    for (let num of arg1) {
        if (num % 2 === 1) {
            odds.push(num)
        }
    }
    return odds
};

const evenArray = function (arg1) {
        let even = []
    for (let num of arg1) {
        if (num % 2 === 0) {
            even.push(num)
        }
    }
    return even
};

const returnFruits = function (arg1) {
    let fruits = []
    for (let item of arg1) {
        if (item === 'apple' || item === 'orange') {
            fruits.push(item)
        }
    }
    return fruits
};

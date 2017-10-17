//First Method:

function sleep_in(weekday,vacation) {
    if(weekday){
        if(vacation){
            return true;
        }else{
            return false;
        }

    } else {
        return true;

    }
}
// Second Method:

function monkey_trouble(a_smile, b_smile){
    if(a_smile && b_smile||!a_smile && !b_smile){
        return true;
    } else{
        return false;
    }
}

//Third method:

function string_times(str, copies) {
    var solution = "";
    for (var i = 0; i < copies; i++) {
        solution = solution + str;
    }
    return solution;

}

//Fourth method:

function front_times(word, copies){
    var x= word;
    var threeWord = x.substring(0, 3);
    var solution = "";
    for (var i = 0; i< copies; i++){
        solution = solution + threeWord;
    }
    return solution;
}

//Fifth method:

function string_bits(word){
    var x = word;
    var solution = "";
    for (var i = 0; i < x.length / 2; i++){
        solution = solution + x[2*i]
    }
    return solution;
}


//Sixth method:

function caughtSpeeding(speed, birthday){
    var oneSpeed = 60;
    var twoSpeed = 80;
    var bdayOne = 65;
    var bdayTwo = 85;
    if(!birthday) {
        if(speed <= twoSpeed) {
            if(speed > oneSpeed) {
                return "1";
            } else {
                return "0";
            }
        } else {
            return "2";
        }
    } else{
        if(speed <= bdayTwo) {
            if (speed > bdayOne) {
                return "1";
            } else {
                return "0";
            }
        } else {
            return "2";
        }
    }
}

//Seventh method:

function fizz_buzz(integer) {
    var x = integer;
    var fizz = x % 3;
    var buzz = x % 5;

    if (fizz==0||buzz==0){
        if(fizz ==0){
            if(buzz==0){
                return "FizzBuzz";
            } else {
                return "Fizz";
            }
        }
        if(buzz == 0){
            if(fizz==0){
                return "FizzBuzz"
            } else{
                return "Buzz";
            }
        }
    }else {
        return x + "!";
        }
}

//Eighth Method:

function teaParty(tea, candy){
    var goodAmount = 5;
    var double = 2;
    if(tea >= goodAmount&&candy>= goodAmount){
        if(tea>= double * candy||candy>= double * tea){
            return "2";
        } else {
            return "1";
        }
    }else{
        return "0";
    }
}

//Ninth Method:

function blackjack(int1, int2) {
    var magicNum = 21;
    if (int1 <= magicNum && int2 <= magicNum) {
        if (int2 < int1) {
            return int1;
        } else {
            return int2;
        }
    } else {
        if (int1 > magicNum) {
            if (int2 > magicNum){
                return "0";
            } else {
                return int2;
            }
        }else{
            if(int2>magicNum){
                return int1;

            }
        }
    }
}

//Tenth Method:


function loneSum(a, b, c) {
    var sum = a + b + c;

    if(a==b||a==c){
        if(b==c){
            return "0";
        }else{
            return (sum - 2*a);
        }
    }else{
        if(b==c){
            return (sum - 2*b);
        }
        if(a!==b!==c){
            return sum;
        }
    }

}

//Eleventh Method:
// 1. firstLast6
// Given an array of ints, return true if 6 appears as either the first or
// last element in the array. The array will be length 1 or more.
//
// firstLast6([1, 2, 6]) → true
// firstLast6([6, 1, 2, 3]) → true
// firstLast6([13, 6, 1, 2, 3]) → false

// function firstLast6([a, b, c, d, e, f]){
//
// }


function tester() {
    document.getElementById("output").innerHTML = blackjack(4, 21);

    //document.getElementById("output").innerHTML = sleep_in(true, false);
    //document.getElementById("output").innerHTML = monkey_trouble(false, false);
    //document.getElementById("output").innerHTML = string_times("Wassup", 3);
   //document.getElementById("output").innerHTML = front_times("Wassup", 3);





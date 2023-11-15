// check length?
// {
//   a : 3,
//   d : 2  
// }
// for in 
// is Odd flag?
// check odds/even? length?

function canBecomePalindrome(str) {
    if (str.length === 0) {
        return false;
    }

    const charFrequencies = {};
    let oddFreqCount = 0;
    let isOddLen = str.length % 2 !== 0;

    for (const char of str) {
        if (!charFrequencies.hasOwnProperty(char)) {
            charFrequencies[char] = 1;
        } else {
            charFrequencies[char]++;
        }
    }

    for (const key in charFrequencies) {
        const charFreq = charFrequencies[key];

        // if odd occurrences
        if (charFreq % 2 !== 0) {
            oddFreqCount++;

            if ((isOddLen && oddFreqCount > 1) || (!isOddLen && oddFreqCount > 0)) {
                return false;
            }
        }
    }
    return true;
}

function canBecomePalindrome(str) {
    // If string is empty, return false
    if (str.length === 0) {
        return false;
    }

    // Create hashtable with letter characters as keys and frequency-counter as the respective value
    let frequencyCounter = {}; // instantiating empty hash table to retain all letter character occurences

    for (let i = 0; i < str.length; i++) { // begin iterating over string
        if (frequencyCounter.hasOwnProperty(str[i])) { // check if letter character is already in hashtable as a key
            frequencyCounter[str[i]] += 1; // if it is, add 1 to its respective value
        } else {
            frequencyCounter[str[i]] = 1; // if it's not, create a key value pair and set its value to 1
        }
    }

    // Iterate through hash table, if all values are even return true or if all but one value is even return true
    // Otherwise return false
    let oddCounter = 0; // instantiate oddvalue counter which will trigger return false if it exceeds a value of 1

    for (counter of Object.values(frequencyCounter)) { // create array of the values within our hashtable and iterate over them
        if (counter % 2 === 1) { // 
            oddCounter += 1;
        }
        if (oddCounter > 1) {
            return false;
        }
    }

    return true;
}

function canBecomePalindrome(str) {
    let freqMap = {};
    isPalindrome = false;

    if (!str.length) {
        return isPalindrome;
    }

    if (str.length % 2 === 0) {
        for (let i = 0; i < str.length; i++) {
            if (freqMap.hasOwnProperty(str[i])) {
                delete freqMap[str[i]];
            }
            else {
                freqMap[str[i]] = 1;
            }
        }
        if (Object.keys(freqMap).length === 0) {
            isPalindrome = true;
        }
        return isPalindrome;
    }

    if (str.length % 2 === 1) {
        for (let i = 0; i < str.length; i++) {
            if (freqMap.hasOwnProperty(str[i])) {
                delete freqMap[str[i]];
            }
            else {
                freqMap[str[i]] = 1;
            }
        }
        if (Object.keys(freqMap).length === 1) {
            const value = Object.values(freqMap)[0];
            if (value % 2 === 1) {
                isPalindrome = true;
            }
            return isPalindrome;
        }
        else {
            return isPalindrome;
        }
    }
}
canBecomePalindrome(str1);
canBecomePalindrome(str2);
canBecomePalindrome(str3);
canBecomePalindrome(str4);
canBecomePalindrome(str5);

function canBecomePalindrome(str) {
    let hashTable = {};
    for (let x = 0; x < str.length; x++) {
        if (hashTable.hasOwnProperty(str[x])) {
            hashTable[str[x]]++;
        }
        else {
            hashTable[str[x]] = 1;
        }
    }
    let canHaveOdd = str.length % 2 === 1 ? true : false;
    let oddCount = 0;
    for (const value in hashTable) {
        if (value % 2 === 1) {
            if (canHaveOdd && oddCount < 2) {
                oddCount++;
            }
            else {
                return false;
            }
        }
    }
    return true;
}

function canBecomePalindrome2(str) {
    // console.log("********************")
    const strLen = str.length;       //Declare the length of the strength
    if (strLen === 0) return false; //Just if the string is 0 it's not a palindromable by our standards
    let hashTable = {};              //A hash table to hold all the letters

    for (const letter of str)       //Go through each letter of the string
        hashTable.hasOwnProperty(letter) ? hashTable[letter] += 1 : hashTable[letter] = 1;   //If the table has a property of letter increment it

    // console.log(hashTable)   //Just a console log for a bit of code and test
    const oddEven = { odd: 0, even: 0 }; //Even odd tracker Though we only really need odd
    for (const key in hashTable)    //So we iterate through our hash table and add to even/odd accordingly
        hashTable[key] % 2 === 0 ? oddEven.even += 1 : oddEven.odd += 1;

    // console.log(oddEven)     //console log for a bit more code then test
    return strLen % 2 === 0 ? oddEven.odd === 0 : oddEven.odd === 1;
}

canBecomePalindrome(str1);
canBecomePalindrome(str2);
canBecomePalindrome(str3);
canBecomePalindrome(str4);
canBecomePalindrome(str5);


function canBecomePalindrome(str) {
    const letterFrequency = {};

    for (let i = 0; i < str.length; i++) {
        if (letterFrequency.hasOwnProperty(str[i])) {
            letterFrequency[str[i]] += 1;
        }
        else {
            letterFrequency[str[i]] = 1;
        }
    }
    console.log(letterFrequency);

    let oddOccurences = 0;
    for (const key in letterFrequency) {
        if (letterFrequency[key] % 2 === 1) {
            oddOccurences += 1;
        }
    }

    if (str.length % 2 === 0) {
        if (oddOccurences > 0) {
            return false;
        }
    }
    else if (str.length % 2 === 1) {
        if (oddOccurences > 1) {
            return false;
        }
    }
    return true;
}


function canBecomePalindrome(str) {
    if (str.length == 0) {
        return false;
    }

    const frequencyMap = {};

    for (let i = 0; i < str.length; i++) {
        if (frequencyMap.hasOwnProperty(str[i])) {
            frequencyMap[str[i]] += 1;
        } else {
            frequencyMap[str[i]] = 1;
        }
    }

    let oddCount = 0;
    for (let key in frequencyMap) {
        if (frequencyMap[key] % 2 !== 0 && str.length % 2 == 0) {
            return false;
        } else if (frequencyMap[key] % 2 !== 0 && str.length % 2 !== 0) {
            oddCount++;
            if (oddCount > 1) {
                return false;
            }
        }
    }
    return true;
}

// --------------------
const canBecomePalindrome = (str) => {
    // if str length is zero, return false
    if (str.length === 0) {
        return false;
    }

    const charCountMap = {}; // map of the character counts

    for (const char of str) {
        charCountMap.hasOwnProperty(char)
            ? charCountMap[char]++
            : (charCountMap[char] = 1);
    }
    console.log(charCountMap);

    const arr = Object.values(charCountMap);
    let oddCount = 0;
    //   console.log(arr);

    for (const num of arr) {
        num % 2 !== 0 && oddCount++;
    }

    if (str.length % 2 === 0) {
        // if string length is even, no character
        if (oddCount > 0) {
            return false;
        } else {
            return true;
        }
    }

    return oddCount === 1;
};
// ----------------------
function backspaceStringCompare(str1, str2) {
    str1 = str1.split("");
    newStr1 = [];

    str2 = str2.split("");
    newStr2 = [];

    let i = 0;

    while (i < str1.length || i < str2.length) {
        if (str1[i] != "#") {
            newStr1.push(str1[i]);
        } else {
            newStr1.pop(str1[i]);
        }
        if (str2[i] != "#") {
            newStr2.push(str2[i]);
        } else {
            newStr2.pop(str2[i]);
        }
        i++;
    }

    return newStr1.join("") == newStr2.join("");
}
// ----------------------
function canBecomePalindrome(str) {
    const map = {}; //create hash map to track stuff
    const len = str.length; //for my hands
    let values;
    if (len === 1) {
        return true;
    }               //edge cases
    if (len === 0) {
        return false;
    }
    for (let char of str) {   //loop through string recording all characters and their number of occurances in hash map
        if (map.hasOwnProperty(char)) {
            map[char]++;
        }
        else {
            map[char] = 1;
        }
    }
    if (len % 2 === 0) {   //check if string length is even
        values = Object.values(map);
        for (let v of values) {  //loop through hash map values checking if even
            if (v % 2 !== 0) {
                return false; //if odd return false
            }
        }
    }
    else {
        let count = 0;//track number of odd values in hash map
        values = Object.values(map);
        for (let v of values) {
            if (v % 2 !== 0) {
                count++;
            }
            if (count > 1) {//if more than one odd value return false
                return false;
            }
        }
    }
    return true;//fin
}

// ----------------
function canBecomePalindrome(str) {
    // check if string length is 0, return false if so
    if (str.length === 0)
        return false;

    // initialize an empty object to store character count
    let charCount = {};

    // for loop to populate charCount variable
    for (let i = 0; i < str.length; i++) {
        // if there is to value at key location set it to 1
        if (charCount[str[i]] === undefined) {
            charCount[str[i]] = 1;
        }
        // else add 1 to the previous count
        else {
            charCount[str[i]] += 1;
        }
    }

    // checking if the string length is odd
    if (str.length % 2 === 1) {
        // initializing oddNumCount to 0 to track the amount of odd character occurances
        let oddNumCount = 0;
        // iterating through our object to check if the character occurances are odd
        for (let key in charCount) {
            if (charCount[key] % 2 === 1) {
                // if oddNumCount surpasses 1 return false
                if (oddNumCount >= 1)
                    return false;
                oddNumCount++;
            }
        }
        // return true after the for loop if the false condition was not met
        return true;
    }

    // if the string length is even
    else {
        // iterating through object
        for (let key in charCount) {
            // checking to see  if there are any odd amount of character occurances
            if (charCount[key] % 2 === 1) {
                // return false if so
                return false;
            }
        }
        // return true if there were no false conditions
        return true;
    }
}

// ----------g-------
function canBecomePalindrome(str) {
    if (str.length == 0) return false;
    let array = [];
    let oddEven = str.length % 2;
    array = array.sort();
    for (letter of str) {
        if (array.includes(letter)) {
            array.pop();
        } else {
            array.push(letter);
        }
    }
    return (array.length - oddEven == 0);
}

// -----------------
function canBecomePalindrome(str) {
    if (str.length == 0) return false;

    const charObj = {};
    let flag = str.length % 2;
    for (const char of str) {
        charObj[char] = charObj[char] === undefined ? 1 : charObj[char] + 1;
    }

    let count = 0;

    for (const numCount of Object.values(charObj)) {
        count += numCount % 2;
    }

    return count - flag === 0;
}
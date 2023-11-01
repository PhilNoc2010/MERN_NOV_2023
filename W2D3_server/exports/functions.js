module.exports = {
    greet: function () {
        console.log("Hello! We are exporting a function called Greet.");
        return "cool";
    },

    add: function (num1, num2) {
        console.log("The sum is: ", num1 + num2);
    }
};

console.log("hello from functions.js");
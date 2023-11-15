class Regular {
    constructor() {
        this.name = "regular";
    }

    sayName() {
        // console.log(this.name);
        function innerFunction() {
            console.log(this.name)
        }
        innerFunction()
    }
}

const instance = new Regular();
instance.sayName();
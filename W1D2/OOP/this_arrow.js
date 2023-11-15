class Arrow {
    constructor() {
        this.name = "arrow";
    }

    sayName = () => {
        // console.log(this.name);
        const innerFunction = () => {
            console.log(this.name)
        }
        innerFunction()
    };
}

const instance = new Arrow();
instance.sayName();
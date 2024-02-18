class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.isAlive = true;
    }

    greet() {
        console.log(`Hello this is ${this.fullName()}`);
    }
}

String.prototype.reverse = function () {
    return this.split('').reverse().join('');
}

class Writer extends Person {
    constructor(firstName, lastName) {
        super(firstName, lastName);
    }
    pseudonym() {
        return `${this.firstName.reverse()} ${this.lastName.reverse()}`;
    }
    signBook() {
        console.log(`To my friend, from ${this.pseudonym()}`);
    }
}


class Developer extends Person {
    constructor(firstName, lastName, codename) {
        super(firstName, lastName);
        this.codename = codename;
    }
    impress() {
        for (let i = 0; i < 5; i++) {
            let str = '';
            for (let j = 0; j < 10; j++) {
                Math.random() > 0.5 ? str += '0' : str += '1';
            }
            console.log(str);
        }
        console.log(`By: ${this.codename}`);
    }
}

class Singer extends Person {
    constructor(firstName, secondName, melody) {
        super(firstName, secondName);
        this.melody = melody;
    }
    artisticName() {
        return `Fancy ${this.firstName} ${this.lastName}`;
    }
    sing() {
        for (let i = 0; i < 3; i++) {
            console.log(this.melody);
        }
    }
}

class JuniorDeveloper extends Developer {
    constructor(firstName, lastName, codename) {
        super(firstName, lastName, codename);
        this.isStruggling = true;
    }
    complain() {
        console.log(this.fullName().toUpperCase());
    }
    workHard() {
        for (let i = 0; i < 10; i++) {
            console.log(`${this.codename} is working very hard`);
        }
    }
}

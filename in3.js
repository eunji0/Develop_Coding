class Person {
    // 생성자
    constructor(name) {
        this._name = name;
    }

    // 객체의 메서드(함수)
    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    getArea() {
        console.log(`${this._name}: hello!`);
    }
}

class Employee extends Person {
    constructor(name, position) {
        super(name);
        this._position = position;
    }

    get Position() {
        return this._position;
    }

    set Position(position) {
        this._position = position;
    }
    toString = function () {
        return this._name + ": " + this._position + "\n";
    }

}

var e1 = new Employee("Scott", "Developer");
var e2 = new Employee("Mary", "Engineering");
console.log(e1.toString(), e2.toString())
// alert(e1.toString() + e2.toString());

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(input) {
        this.name = input.name;
        this.age = input.age;
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.getAge = function () {
        return this.age;
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(input) {
        var _this = _super.call(this, input) || this;
        _this.species = input.species;
        return _this;
    }
    Dog.prototype.bark = function () {
        return "woof woff";
    };
    return Dog;
}(Animal));
var perryTheParrot = new Animal({
    name: "Perry",
    age: 2
});
var banditTheDog = new Dog({
    name: "Bandit",
    age: 4,
    species: "Husky"
});
perryTheParrot.getName(); // Perry
perryTheParrot.getAge(); // 2
banditTheDog.getName(); // Bandit
banditTheDog.getAge(); // 4
banditTheDog.bark(); // woof woff
//# sourceMappingURL=classes.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Definindo uma variável 'a' do tipo string e atribuindo o valor 'oi'
var a = 'oi';
// Definindo uma variável 'b' do tipo number e atribuindo o valor 12
var b = 12;
// Definindo uma variável 'c' que é um array de números
var c = [1, 2, 3];
// Definindo uma variável 'd' do tipo objeto com as propriedades 'name' (string) e 'age' (number)
var d = {
    name: 'Gabriel',
    age: 19
};
// Definindo uma variável 'e' do tipo boolean e atribuindo o valor true
var e = true;
// Definindo uma variável 'tupla' que é uma tupla com tipos específicos
var tupla;
// Atribuindo valores para a tupla
tupla = ['a', 0, '2', { a: 'a' }];
// Desestruturando a variável 'd' para obter as propriedades 'name' e 'age'
var name = d.name, age = d.age;
// Definindo uma variável 'z' do tipo any e atribuindo o valor 0, que pode ser de qualquer tipo
var z;
z = 0;
// Alterando o valor da variável 'z' para uma string
z = '0';
// Definindo uma variável 'y' com um union type de string e number
var y = 0;
// Definindo uma função 'w' que retorna uma string
var w = function () { return 'yes'; };
function sayMyName(name) {
    return name;
}
function anotherFunction() {
    console.log('Função sem retorno explícito');
}
console.log(sayMyName(name), age);
anotherFunction();
// Definindo uma variável 'u' do tipo 'myType' e atribuindo o valor 12
var u = 12;
// Definindo um enum chamado 'Size' com valores atribuídos a strings específicas
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
// Definindo um objeto 'camisa' com as propriedades 'name' e 'size', onde size é do tipo 'Size' definido acima
var camisa = {
    name: 'Camisa Gola Azul',
    size: Size.P
};
// Imprimindo o objeto 'camisa' no console
console.log(camisa);
// literal types
var euLindo;
euLindo = 'sim';
euLindo = null;
console.log(euLindo);
// essa função possui parâmetros opcionais
function example(a, b) {
    return (b && a + b) || a;
}
console.log(example(2, 2));
function sumNumbers(nums) {
    var n1 = nums.n1, n2 = nums.n2;
    console.log(n1 + n2);
}
function multiplyNumbers(nums) {
    var n1 = nums.n1, n2 = nums.n2;
    console.log(n1 * n2);
}
sumNumbers({ n1: 10, n2: 15 });
multiplyNumbers({ n1: 10, n2: 15 });
// naworring
function doSomething(info) {
    return typeof info === "number" && "O valor passado na fun\u00E7\u00E3o doSomething foi\n   ".concat(info) || "Não foi passado um número";
}
console.log(doSomething(25));
// generics
function showArrayItems(arr) {
    arr.forEach(function (item, indice) {
        console.log(item);
    });
}
showArrayItems([1, 2, 3, 4, 5]);
var User = /** @class */ (function () {
    function User(name, rule, isApproved) {
        this.name = name;
        this.rule = rule;
        this.isApproved = isApproved;
    }
    User.prototype.showUserName = function () {
        console.log("o nome do usu\u00E1rio \u00E9 ".concat(this.name));
    };
    return User;
}());
var gab = new User("Gabriel", "admin", true);
console.log(gab);
gab.showUserName();
var Car = /** @class */ (function () {
    function Car(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    Car.prototype.showBrand = function () {
        console.log("O n\u00FAmero de rodas do carro ".concat(this.brand, " \u00E9 ").concat(this.wheels));
    };
    return Car;
}());
var toyota = new Car("Toyota", 4);
toyota.showBrand();
// herança
var SuperCar = /** @class */ (function (_super) {
    __extends(SuperCar, _super);
    function SuperCar(brand, wheels, engine) {
        var _this = _super.call(this, brand, wheels) || this;
        _this.engine = engine;
        return _this;
    }
    return SuperCar;
}(Car));
var a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);

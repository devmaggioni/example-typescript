// Definindo uma variável 'a' do tipo string e atribuindo o valor 'oi'
const a: string = 'oi'

// Definindo uma variável 'b' do tipo number e atribuindo o valor 12
const b: number = 12

// Definindo uma variável 'c' que é um array de números
let c: number[] = [1, 2, 3]

// Definindo uma variável 'd' do tipo objeto com as propriedades 'name' (string) e 'age' (number)
const d: { name: string; age: number } = {
   name: 'Gabriel',
   age: 19
}

// Definindo uma variável 'e' do tipo boolean e atribuindo o valor true
const e: boolean = true

// Definindo uma variável 'tupla' que é uma tupla com tipos específicos
let tupla: [string, number, string, { a: string }]

// Atribuindo valores para a tupla
tupla = ['a', 0, '2', { a: 'a' }]

// Desestruturando a variável 'd' para obter as propriedades 'name' e 'age'
const { name, age } = d

// Definindo uma variável 'z' do tipo any e atribuindo o valor 0, que pode ser de qualquer tipo
let z: any
z = 0

// Alterando o valor da variável 'z' para uma string
z = '0'

// Definindo uma variável 'y' com um union type de string e number
let y: string | number = 0

// Definindo uma função 'w' que retorna uma string
let w = (): string => 'yes'

function sayMyName(name: string): string {
   return name
}

function anotherFunction(): void {
   console.log('Função sem retorno explícito')
}

console.log(sayMyName(name), age)
anotherFunction()

// Criando um tipo alias chamado 'myType' que pode ser boolean ou number
type myType = boolean | number

// Definindo uma variável 'u' do tipo 'myType' e atribuindo o valor 12
let u: myType = 12

// Definindo um enum chamado 'Size' com valores atribuídos a strings específicas
enum Size {
   P = 'Pequeno',
   M = 'Médio',
   G = 'Grande'
}

// Definindo um objeto 'camisa' com as propriedades 'name' e 'size', onde size é do tipo 'Size' definido acima
const camisa = {
   name: 'Camisa Gola Azul',
   size: Size.P
}

// Imprimindo o objeto 'camisa' no console
console.log(camisa)

// literal types
let euLindo: 'sim' | null
euLindo = 'sim'
euLindo = null

console.log(euLindo)

// essa função possui parâmetros opcionais
function example(a: number, b?: number): number {
   return (b && a + b) || a
}
         console.log(example(2, 2))

// interfaces
interface IMathFunctionParams {
   n1: number,
   n2: number
}

function sumNumbers(nums: IMathFunctionParams):void {
   let { n1, n2 } = nums
   console.log(n1+n2)
}

function multiplyNumbers(nums: IMathFunctionParams):void {
   let { n1, n2 } = nums
console.log(n1*n2)
}

sumNumbers({n1: 10, n2: 15})
multiplyNumbers({n1: 10, n2: 15})

// naworring
function doSomething(info: number | boolean):string {
   return typeof info === "number" && `O valor passado na função doSomething foi
   ${info}` || "Não foi passado um número"
}

console.log(doSomething(25))

// generics
function showArrayItems<T>(arr: T[]):void {
   arr.forEach((item, indice)=>{
      console.log(item)
   })
}
showArrayItems([1,2,3,4,5])

class User {
   name;
   rule;
   isApproved;
   
   constructor(name:string, rule: string, isApproved: boolean){
      this.name = name;
      this.rule = rule;
      this.isApproved = isApproved
   }
   
   showUserName():void {
      console.log(`o nome do usuário é ${this.name}`)
   }
}

const gab = new User("Gabriel", "admin", true)
console.log(gab)
gab.showUserName()

// interfaces em classes
interface IVehicle {
   brand: string
   showBrand(): void
}

class Car implements IVehicle {
   brand;
   wheels;
   
   constructor(brand: string, wheels: number){
      this.brand = brand;
      this.wheels = wheels;
   }
   
   showBrand(): void {
      console.log(`O número de rodas do carro ${this.brand} é ${this.wheels}`)
   }
   
}

const toyota = new Car("Toyota", 4)
toyota.showBrand()

// herança
class SuperCar extends Car {
   engine;
   constructor(brand: string, wheels: number, engine: number){
      super(brand, wheels)
      this.engine = engine;
   }
}

const a4 = new SuperCar("Audi", 4, 2.0)
console.log(a4)

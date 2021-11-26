// ES2015 (ES6)
class Person {
  // 클래스 로직
  // constructor ... 초기화 로직
  constructor(name, age) {
    console.log('생성 되었습니다.')
    this.name = name
    this.age = age
  }
}

new Person() // 생성 되었습니다.
let seho = new Person('세호', 30)
console.log(seho)

// 기존 function 로 만든 위 class 의 예
function Person(name, age) {
  this.name = name
  this.age = age
}

let cap = new Person('캡틴', 100)
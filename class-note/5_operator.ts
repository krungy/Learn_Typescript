// function logMessage(value: string) {
//   console.log(value)
// }
// logMessage('hello')
// logMessage(100)

// Union type 
// 특정 파라미터나 변수에 하나 이상의 타입을 사용할 수 있게 하는 것
// let sehoo: string | number | boolean

function logMessage(value: string | number) {
  // Union 타입을 통해 해당 타입의 자동완성을 사용할 수 잇다.
  if (typeof value === 'number') {
    value.toLocaleString()
  }
  if (typeof value === 'string') {
    value.toLowerCase()
  }
  throw new TypeError('value must be string or number')
}
logMessage('hello')
logMessage(100)

// 유니온 타입의 특징
interface DeveloperOp {
  name: string;
  skill: string;
}

interface PersonOp {
  name: string;
  age: number;
}

function askSomeone1(someone: DeveloperOp | PersonOp) {
  someone.name
  // 공통속성 (name)만 접근 가능하고 나머지 속성에는 접근할 수 없다
  // someone.age
  // someone.skill // 이 두 속성애는 접근 불가능
}

// 인터섹션
// let captOp: string & number & boolean
// captOp: never ... 불가능한 타입

// DeveloperOp 과 PersonOp 의 인터섹션이다???
// DeveloperOp 가 갖고있는 name, skill
// PersonOp 가 갖고있는 name, age
// 를 모두 포함한 3개의 속성을 갖는 타입이 someone 이다!
function askSomeone2(someone: DeveloperOp & PersonOp) {
  someone.name
  someone.age
  someone.skill
}

// 유니온 타입과 인터섹션 타입의 차이점
function askSomeoneUnion(someone: DeveloperOp | PersonOp) {

}
askSomeoneUnion({ name: '디벨로퍼', skill: '웹 개발'})
askSomeoneUnion({ name: '캡틴', age: 100})

function askSomeoneInter(someone: DeveloperOp & PersonOp) {

}
// DeveloperOp 의 타입과, PersonOp 타입을 모두 합한 객체를 넘겨주어야 함
// askSomeoneInter({ name: '디벨로퍼', skill: '웹 개발'})
askSomeoneInter({ name: '디벨로퍼', skill: '웹 개발', age: 100})
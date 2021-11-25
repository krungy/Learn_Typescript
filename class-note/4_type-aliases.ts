// interface Person1 {
//   name: string;
//   age: number;
// }

// type: 사용 위치에서 preview 에서 type 의 내용을 그대로 확인할 수 있다.
type Person1 = {
  name: string;
  age: number;
}

let seeho: Person1 = {
  // name, age
  name: '시호',
  age: 30
}

type MyString = string;
const str1: MyString = 'hello'

type Todo = { id: string, title: string; done: boolean }
function getTodo(todo: Todo) {

}

// type vs interface
// interface: 확장 가능 / type: 확장 불가능 (가장 큰 차이점)
// 가능한 Interface 로 선언하는 것이 좋다. (언제나 확장이 용이한 원칙)
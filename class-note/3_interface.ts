interface User {
  age: number;
  name: string;
}

// 변수에 활용한 인터페이스
const seho: User = {
  age: 33,
  name: '세호'
}

// 함수에 활용한 인터페이스
function getUser(user: User) {
  console.log(user)
}
const cap = {
  name: '캡틴',
  age: 100
}
getUser(cap)

// 함수의 스펙(구조)에 활용한 인터페이스
interface SumFunction {
  // a, b 두개의 number를 받아서 number를 반환한다. 
  (a: number, b: number): number
}

let sum: SumFunction;
sum = function(a: number, b: number): number {
  return a + b
}

// 인덱싱
interface StringArray {
  [index: number]: string
}

const StringArray = ['a', 'b', 'c']
// arr[0] = 10 // number 를 string 으로 할당할 수 없음

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp
}

const obj: StringRegexDictionary = {
  // Regex
  sth: /abc/,
  // cssFile: 'css' // 문자열이 들어갈 수 없음
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}
// obj['cssFile'] = 'a' // 인터페이스 규칙에 어긋남

Object.keys(obj).forEach(function(value) {
  // value type: string 으로 자동으로 추론
})

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  // 상속받는 인터페이스와 중복된 속성은 필요 없어짐
  // name: string;
  // age: number;
  language: string;
}

const capt: Developer = {
  language: 'ts', // language 만 정의하면 에러 
  age: 100,
  name: '캡틴'
}
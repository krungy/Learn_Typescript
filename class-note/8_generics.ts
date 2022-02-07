// function logText(text) {
//   console.log(text)
//   return text
// }

// logText(10) // number
// logText('하이') // string
// logText(true) // boolean

// logText 함수를 호출할 때 넘길 text 의 타입을 호출할 때 
// 파라미터의 타입을 지정하여 넘겨줌을 정의
// function logText<T>(text: T):T {
//   console.log(text)
//   return text
// }

// 명시적으로 <string> 이라고 하는 타입을 넘기겠다고 선언
// logText<string>('하이')


// 제네릭과 기존 ts 의 비교

// function logText(text: string) {
//   console.log(text)
//   text.split('').reverse().join()
//   return text
// }
// function logNumber(num: number) {
//   console.log(num)
//   return num
// }
// // string 이외의 다른 타입도 받고 싶을 때, 받지 못하게 됨
// // 타입을 다르게 받기 위해 중복되는 코드를 다시 만들어야 함 ... 유지보수 측면에서 단점
// logText('a')
// logNumber(10)

// Union type 사용
// 들어가는 값에 대한 문제는 사라지지만, 반환값에 대한 문제를 해결할 수 없다
// function logText(text: string | number) {
//   console.log(text)
//   // text.split('').reverse().join() // string 을 받지만 사용할 수 없음
//   return text
// }

// // 문자를 넣었음에도 a 의 타입은 여전히 string | number 임
// const a = logText('a')
// // 타입이 정확히 추론되지 않아서 문자열이 들어와도 split 을 사용할 수 없다
// a.split('')
// logText(10)

// 제네릭의 사용
// logText<T> ... <T> 의 타입을 받을 건지 정의(제네릭)
// (text: T) ... 함수를 정의할 때 받은 타입 <T> 를 파라미터의 타입으로 사용하겠다
// :T ... return 타입도 T 로 사용하겠다
// function logText<T>(text: T): T {
//   console.log(text)
//   return text
// }

// // logText 에서 타입을 <string> 을 사용하겠다 라고 호출할 때 정의
// const str = logText<string>('abc')
// str.split('')

// // 동일한 함수에 대해 여러 타입을 사용할 수 있다
// const login = logText<boolean>(true)

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }
// const obj: Dropdown = { value: 'abc', selected: false }

// interface Dropdown<T> {
//   value: T;
//   selected: boolean;
// }
// const obj: Dropdown<number> = { value: 123, selected: false }

// 제네릭의 타입 제한
// 제네릭의 특정 타입 모습을 배열로 지정함
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   text.forEach(function (text) {
//     console.log(text);
//   })
//   return text;
// }
// logTextLength<string>(['hi', 'abc']);

// 제네릭의 타입 제한 2 - 정의된 타입 이용하기
// interface LengthType {
//   length: number;
// }
// function logTextLength<T extends LengthType>(text: T): T {
//   text.length;
//   return text;
// }
// logTextLength('a');
// // 'a'.length 존재하기 떄문에
// logTextLength(10);
// // 10.length 존재하지 않기 때문에 제한됨
// logTextLength({ length: 10 });
// // length 가 extends 로 주어지기 때문에 가능

// 제네릭의 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
// extends keyof INTERFACE ... interface 의 '키값' 요소만 인자로 들어갈 수 있다
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
// 제네릭의 타입만 넘겨주면 어떤 값이든 사용할 수 있음 ... extend 없을 시
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption('name');
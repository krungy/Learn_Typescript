// 함수 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//   return a + b
// }

// sum(10, 20)

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10
}

// 함수의 타입을 정의하는 방식
function sum(a: number, b: number): number {
  return a + b
}

sum(10, 20) // 30
// sum(10, 20, 30, 40) // 불필요한 인자가 추가되었을 때 에러를 반환 (규칙)
// sum(10) // 인자가 부족할 때에도 에러를 반환

// 함수의 옵셔널 (선택적) 파라미터 ... `?`
function log(a: string, b?: string) { }

log('hello world')
log('hello ts', 'abc')
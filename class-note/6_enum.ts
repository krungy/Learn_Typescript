// enum Shoes {
//   Nike,
//   Adidas
// }

// let myShoes = Shoes.Nike
// console.log(myShoes) // 0
// 이넘을 사용했을 때, 별도의 값을 지정하지 않으면 number 형 (default: 0)으로 취급

// 문자형 이넘
enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스'
}

let myShoes = Shoes.Nike
console.log(myShoes) // '나이키'

// 이넘 활용 예제
enum Answer {
  Yes = 'Y',
  No = 'N'
}

function askQuestion(answer: Answer) {
  // 이넘을 사용하지 않았을 때
  // if (answer === 'yes') {
  //   console.log('정답입니다.')
  // }
  // if (answer === 'no') {
  //   console.log('오답입니다.')
  // }

  // 이넘 사용
  if (answer === Answer.Yes) {
    console.log('정답입니다.')
  }
  if (answer === Answer.No) {
    console.log('오답입니다.')
  }
}
// 같은 의미를 가진 다양한 형태의 값이 사용될 수 있는 상황을 enum 으로 방지
// 이 경우에서는 단순한 문자열 비교가 아닌 타입을 통한 비교
// askQuestion('예스')
// askQuestion('y')
// askQuestion('yes')
// 이넘에서 제공하는 값만 넘길 수 있다.
askQuestion(Answer.Yes)
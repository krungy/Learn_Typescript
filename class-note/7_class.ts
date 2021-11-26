class PersonCl {
  // 타입 정의
  // private: 해당 클래스 안에서만 사용하겠다는 접근 범위 설정
  // public(default)
  // readonly: 읽기 접근만 가능
  private name: string;
  public age: number;
  readonly log: string;

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

// 클래스 기반의 리액트 예전 문법
// class App extents React.Component {
//  
// }

// 리액트 훅 기반의 함수형 코드 (최신 문법)
// function App() {
//   return <div>Hello World</div>
// }
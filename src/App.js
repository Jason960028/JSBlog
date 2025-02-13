/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let post = '강남 고기 맛집'; // 변수 let var const
  
  let [글제목1,b] = useState('남자 코트 추천'); //a 는 변수, b는 변수를 바꿀수 있는 함수
  let [logo, setLogo] = useState('ReactBlog'); //로고 같은 변경이 자주 되지 않는것은 궅이 state로 만들 필요 없다.
  //그냥 변수 쓰면 되지 왜 굳기 state 쓰냐?
  //일반 변수는 값이 바뀌면 HTML을 리로드 해주는 로직이 따로 필요하지만
  //state 변수는 값이 바뀌면 알아서 HTML을 리로드 해준다.
  //자주 바뀌는 변수는 state로 만들어주는 것이 좋다.
  let [글제목2,c] = useState(['남자 코트 추천','강남 고기 맛집','파이썬독학']); //이런식으로 변수를 배열에다가 저장가능
  let [like, setLike] = useState(0);

  
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={() => {
        let copy = [...글제목2];
        copy.sort();// 정렬
        c(copy);
      }}>가나다순정렬</button>
      
      <button onClick={() => {
        let copy = [...글제목2];  // 배열 복사
        copy[0] = '여자 코트 추천'; // 첫 번째 요소 변경
        c(copy);  // 배열을 그대로 업데이트
      }}>글수정</button>

      <div className = "list">
        <h4>{글제목2[0]}<span onClick={() => {setLike(like+1)}}> 👍 </span> {like} </h4>
        <p>2월 12일 발행</p>
      </div>


      <div className = "list">
        <h4>{글제목2[1]}</h4>
        <p>2월 12일 발행</p>
      </div>

      <div className = "list">
        <h4>{글제목2[2]}</h4>
        <p>2월 12일 발행</p>
      </div>
    </div>
  );
}

export default App;

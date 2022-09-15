import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className='apps'>

        <div id="mypc">
            <span>내 PC</span>
          </div>
          <div id="bins">
            <span>휴지통</span>
          </div>
          <div id="messenger" className='logo'>
            <span>아보카톡</span>
          </div>
      </div>
      <div id="myphone">
        {/* 헤더 */}
          <div id="phone_header">
            <div>시간</div>
            <ul>
              <li>상태바</li>
              <li>와이파이</li>
              <li>배터리</li>
            </ul>
          </div>

          {/* 메인화면 */}
          <div id="phone_main">
            <div>
              <span>캘린더</span>
            </div>
            <div>
              <span>시계</span>
            </div>
            <div>
              <span>카메라</span>
            </div>
            <div>
              <span>날씨</span>
            </div>
          </div>

          {/* 하단 */}
          <div>
          <div>
              <span>전화</span>
            </div>
            <div>
              <span>문자</span>
            </div>
            <div>
              <span>아보카톡</span>
            </div>
            <div>
              <span>설정</span>
            </div>
            
          </div>

      </div>
      <Intro/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;

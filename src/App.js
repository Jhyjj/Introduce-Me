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

          {/* 메인화면 */}
          <div id="phone_main">
            <div id="left-app">
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

            <div id="right-app">

            </div>
            
          </div>

          {/* 하단 */}
          <div>
            <div></div>
            <div></div>
            <div><span>🥑</span></div>
            <div></div>
          </div>

      </div>
      <Intro/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;

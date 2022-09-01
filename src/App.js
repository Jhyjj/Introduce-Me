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
      <Intro/>
      <Footer/>
    </div>
  );
}

export default App;

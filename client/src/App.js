import logo from './img/logo.png';
import bg from './img/bg.png';
import base from './img/base.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="bg-image" style={{ 
          backgroundImage: 'url('+bg+')',
          backgroundSize: "cover",
          width: '100%',
          height: "100vh",
          color: "#f5f5f5" }}>
          <img src={logo} width = "15%" alt="Logo"/>
          <div class = "flex-container">
            <div class = "box"><img src={base} width ="30%" alt="foodex base image"/></div>
            <div class ="box overlay">
              <div class = "text-box">
                  Restaurant:
                  <br></br>
                  Location:
                  <br></br>
                  Link:
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

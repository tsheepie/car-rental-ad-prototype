import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import Banner from './components/Banner.jsx';
import MainSection from './components/ArticleCard.jsx';
import Footer from './components/Footer.jsx'

function App() {
  return (
   <>
      <Header/>
      <Banner/>
      <MainSection/>
      <Footer/>
   </> 

    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;

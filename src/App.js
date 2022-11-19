import logo from './logo.svg';
import './App.css';
import AboutMe from './components/pages/about-me/AboutMe';
import ContactMe from './components/pages/contact-me/ContactMe';
import Footer from './components/pages/footer/Footer';
import Header from './components/pages/header/Header';
import Projects from './components/pages/header/projects/Projects';
import Resume from './components/pages/header/resume/Resume';
// import tailwind or bootstrap

function App() {
  return (
    <div className="App">
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
      <Footer/>
    </div>
  );
}

export default App;

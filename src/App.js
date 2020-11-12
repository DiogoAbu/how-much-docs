import logo from './logo.png';
import './App.css';

const appScheme = "how-much://";
const appName = 'How Much';

function replaceSlash(string){
  if(string.startsWith('/')) {
    return string.replace('/', '');
  }
  return string;
}

function App() {
  const isIos = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  const url = appScheme + replaceSlash(window.location.pathname) + window.location.search;
  window.location.href = url;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Moving to {appName} {isIos ? 'Iphone' : 'Android'} App
        </p>
        <a className="App-link" href={url}>
          Click here to move back to the mobile app
        </a>
      </header>
    </div>
  );
}

export default App;

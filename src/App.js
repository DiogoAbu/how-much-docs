import logo from './logo.png';
import './App.css';

const appScheme = "how-much://";
const appName = 'How Much';

function App() {
  const isIos = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  const url = appScheme + window.location.search;
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
        <a href="https://play.google.com/store/apps/details?id=com.diogoabu.howmuch&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
          <img className="App-badge" alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" />
        </a>
      </header>
    </div>
  );
}

export default App;

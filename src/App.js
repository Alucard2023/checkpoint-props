
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Profile from './component/Profile';

function App() {
  return (
    <div className="App">
      <Profile Fullname='Tarek Hadded' bio='developpeur ' profession='technicien ' >
        <img src="https://media.vogue.fr/photos/63d93e6288e6fefbb631b14d/2:3/w_2560%2Cc_limit/Capture%2520d%25E2%2580%2599e%25CC%2581cran%25202023-01-31%2520a%25CC%2580%252017.13.48.png"/>
        </Profile>
    </div>
  );
}

export default App;

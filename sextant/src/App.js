
import './App.css';
import Banner from './Banner.js'
import Exhibit from './Exhibit.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <div className="App mx-100 w-100">
        <Banner/>
        <ul className="list-group">
          <li className="list-group-item"><Exhibit/></li>
        </ul>
        
    </div>
  );
}

export default App;

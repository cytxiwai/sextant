
import './App.css';
import Banner from './Banner.js'
import Exhibit from './Exhibit.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import IpServices from './Ip-services.js'


function App() {
  return (
    <div className="App mx-100 w-100">
        <Banner/>
        <ul className="list-group">
          <li className="list-group-item"><Exhibit name="IPv4 Address"><IpServices url='https://api.ipify.org?format=json'/></Exhibit></li>
          <li className="list-group-item"><Exhibit name="IPv6 Address"><IpServices url='https://api64.ipify.org?format=json&ipAddress=IPv6'/></Exhibit></li>
        </ul>

        
    </div>
  );
}

export default App;

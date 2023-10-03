import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import PersonalInfo from './components/forms/PersonalInfo';
import Description from './components/forms/Description';
import Button from './components/forms/Button';

function App() {
  return (
    <div className="container">
        <Sidebar />

        <div className="form-section">
          <div id="personal-info">
            <Description/>
            <PersonalInfo/>
            <Button/>  
          </div>
        </div>
      </div>
  );
}

export default App;

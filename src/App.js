import './App.scss';
import Sidebar from './components/Sidebar';
import PersonalInfo from './components/forms/PersonalInfo';
import Description from './components/forms/Description';
import Button from './components/forms/Button';
import SelectPlan from './components/forms/SelectPlan';
import AddOns from './components/forms/AddOns';

function App() {
  return (
    <div className="container">
      <Sidebar />

      <div className="form-section">
        <div id="personal-info">
          <Description/>
          {/* <PersonalInfo/> */}
          <SelectPlan/>
          {/* <AddOns /> */}
          <Button/>  
        </div>
      </div>
    </div>
  );
}

export default App;
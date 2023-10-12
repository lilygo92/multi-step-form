import './App.scss';
import Sidebar from './components/Sidebar';
import Description from './components/forms/Description';
import Button from './components/forms/Button';
import PersonalInfo from './components/forms/PersonalInfo';
import SelectPlan from './components/forms/SelectPlan';
import AddOns from './components/forms/AddOns';
import Summary from './components/forms/Summary';
import BackButton from './components/forms/BackButton';
import MultiStepForm from './components/forms/MultiStepForm';

function App() {
  const { stepIndex, setStepIndex, back, next, goTo} = MultiStepForm();

  return (
    <div className="container">
      <Sidebar 
        goToStepOne = {() => goTo(0)}
        goToStepTwo = {() => goTo(1)}
        goToStepThree = {() => goTo(2)}
        goToStepFour = {() => goTo(3)}
      />

      <div className="form-section">
        <div id="personal-info">
          <Description/>
          {stepIndex === 0 && <PersonalInfo/>}
          {stepIndex === 1 && <SelectPlan/>}
          {stepIndex === 2 && <AddOns />}
          {stepIndex === 3 && <Summary />}
          {stepIndex !== 0 && <BackButton onClick={back}/>}
          <Button onClick={next}/>  
        </div>
      </div>
    </div>
  );
}

export default App;
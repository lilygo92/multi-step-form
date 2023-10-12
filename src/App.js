import './App.scss';
import Sidebar from './components/Sidebar';
import PersonalInfo from './components/forms/PersonalInfo';
import SelectPlan from './components/forms/SelectPlan';
import AddOns from './components/forms/AddOns';
import Summary from './components/forms/Summary';
import useAppData from './components/forms/useAppData';

function App() {
  const { stepIndex, back, next, goTo} = useAppData();
  const sectionNames = ["Personal Info", "Select Your Plan", "Pick Add-ons", "Finishing Up"]
  const sectionDescriptions = [
    "Please provide your name, email address, and phone number.",
    "You have the option of monthly or yearly billing.",
    "Add-ons help enhance your gaming experience.",
    "Double-check everything looks OK before confirming."
  ]

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
          <h1>{sectionNames[stepIndex]}</h1>
          <p>{sectionDescriptions[stepIndex]}</p>
          {stepIndex === 0 && <PersonalInfo/>}
          {stepIndex === 1 && <SelectPlan/>}
          {stepIndex === 2 && <AddOns />}
          {stepIndex === 3 && <Summary />}
          {stepIndex !== 0 && <div onClick={back} className="back-button">
            Go Back
          </div>}
          <div onClick={next} className="next-button">{stepIndex !== 3 ? "Next Step" : "Confirm"}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
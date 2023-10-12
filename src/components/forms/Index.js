import { React, ReactElement , useState } from "react";

export default function MultiStepForm() {
  const [step, setStep] = useState(0);

  function next() {
    setStep(i => {
      if (i >= 3) { return i };
      return i + 1;
    })
  }

  function back() {
    setStep(i => {
      if (i <= 0) { return i };
      return i - 1;
    })
  }

  function goTo(index) {
    setStep(index);
  }
}
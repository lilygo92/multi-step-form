import { React, ReactElement , useState } from "react";

export default function MultiStepForm() {
  const [stepIndex, setStepIndex] = useState(0);

  function next() {
    setStepIndex(i => {
      if (i >= 3) { return i };
      return i + 1;
    })
  }

  function back() {
    setStepIndex(i => {
      if (i <= 0) { return i };
      return i - 1;
    })
  }

  function goTo(index) {
    setStepIndex(index);
  }

  return {stepIndex, next, back, goTo}
}
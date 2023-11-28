import { useState } from "react";

export default function useVisualMode(initial){
  initial = initial.toUpperCase();
  const history = [initial];
  const [mode, setMode] = useState(initial);

  const transition = (newMode) => {
    newMode = newMode.toUpperCase();
    history.push(newMode);
    setMode(newMode)
  }

  return [mode, transition];
}
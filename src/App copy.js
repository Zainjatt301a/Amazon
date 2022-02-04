import { useState } from "react";

function App() {
  const [value, setValue] = useState(false)

  const changeText = () => {
    setValue(!value)
  }

  return (
    <div className="app">
      {value && <img src="https://i.makeagif.com/media/7-02-2019/blulXl.gif" />}
      <button onClick={changeText}>Altaf Bhai</button>
    </div>
  );
}

export default App;

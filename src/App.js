import './App.css';

import useToggle from './custom_hook/useToggle';

function App() {
  const [isVisible, toggle] = useToggle()
  const [isVisible2, toggle2] = useToggle()


  return (
    <div className="App">

      <button onClick={toggle} >
        {isVisible ? "Hide" : "Show"}
      </button> 
      {isVisible && <h1>Hidden Text</h1>}
      <br/>

      <button onClick={toggle2} >
        {isVisible2 ? "Hide2" : "Show2"}
      </button>
      {isVisible2 && <h1>Second Hidden Text</h1>}

    </div>
  );
}

export default App;

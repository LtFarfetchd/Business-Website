import React, { useState } from 'react';
import Footer from "../Footer";

const App = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <p>
        <button onClick={() => setIsDisabled(!isDisabled)}>Click me</button>
          Edit <code>src/App.js</code> and save to reload
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer message={() => {}}>
        <div><p>This is test</p></div>
      </Footer>
    </div>
    
  );
}

export default App;

import React, { Component, useState } from "react";
import Counter from "./components/counter";

const App = () => {
  const [isMount, setIsmount] = useState(true)
  const [ignoreProp, setIgnoreProp] = useState(0)
  const [seed, setSeed] = useState(40)
  const [showErrorComponent, setShowErrorComponent] = useState(false)

  const mountHandler = () => setIsmount(!isMount);
  const ignorePropHandler = () => setIgnoreProp(Math.random());
  const generateSeed = () => {
    setSeed(Number.parseInt(Math.random() * 100));
  }

  const toggleErrorHandler = () => setShowErrorComponent(!showErrorComponent);

  return (
    <div>
      <button onClick={mountHandler} disabled={isMount}>
        Mount
      </button>
      <button onClick={mountHandler} disabled={!isMount}>
        Unmount
      </button>
      <button onClick={ignorePropHandler}>Ignore Prop</button>
      <button onClick={generateSeed}>Generate Seed</button>
      <button onClick={toggleErrorHandler}>Toggle Error</button>
      {isMount ? (
        <Counter
          showErrorComponent={showErrorComponent}
          ignoreProp={ignoreProp}
          seed={seed}
          setSeed={setSeed}
        />
      ) : null}
    </div>
  )
}

export default App;

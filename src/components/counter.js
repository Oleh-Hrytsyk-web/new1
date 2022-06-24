import React, { useEffect } from "react";
import { ErrorBoundary } from 'react-error-boundary'


const ErrorComponent = () => <div>{props.ignore}</div>;
const ErrorFallback = ({ error }) => {

  return (
    <>
      {console.log("Render", error)}
      <p>We have encountered an error!: {error.message}</p>
    </>
  )
}

const Counter = ({ showErrorComponent, seed, setSeed }) => {

  useEffect(() => {
    console.log("Component did mount");
    console.log("---------------------------");

    return () => {
      console.log("Component will unmount");
      console.log("..................");
    }
  }, []);

  useEffect(() => {
    console.log("Component did update");
    console.log("..................");
  })


  { console.log("Render") }

  if (showErrorComponent) {
    return (
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
      >
        <ErrorComponent />
      </ErrorBoundary>
    )
  } else {
    return (
      <div>
        <button onClick={() => setSeed(seed + 1)}>Increment</button>
        <button onClick={() => setSeed(seed - 1)}>Decrement</button>
        <div className="counter">Counter:{seed}</div>;
        {showErrorComponent ? <ErrorComponent /> : null}
      </div>
    )
  }

}

export default React.memo(Counter, (props, nextProps) => {
  if (props.ignoreProp === nextProps.ignoreProp) {
    console.log("Should Component update - Render");
    console.log("-----------------------------");
    return false;
  }
  console.log("Should Component update - Do not render");
  console.log("-----------------------------");
  return true
})
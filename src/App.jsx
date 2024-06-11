// ? updater function = A function passed as an argument to setState() usually 
// ?                    ex. setYear(arrow funciton)
// ?                    Allow for safe updates based on the previous state
// ?                    Used with multiple state updates and asynchronous functions
// ?                    Good practice to use updated functions

// ? Uses the CURRENT state to calculate the NEXT state.
// ? set functions do not trigger an update.
// ? React batches together state updates for performance reasons.
// ? NEXT state becomes the CURRENT state after an update

import MyComponent from "./MyComponent"

function App() {

  return (
    <>
      <MyComponent />
    </>
  )
}

export default App

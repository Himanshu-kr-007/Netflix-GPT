import Body from "./components/Body"; 
// Importing the `Body` component from the `components` folder. 
// This component will be rendered as part of the application's main content.

import { Provider } from "react-redux"; 
// Importing the `Provider` component from the `react-redux` library. 
// The `Provider` is a higher-order component that connects the Redux store with the React application.

import appStore from "./utils/appStore"; 
// Importing the `appStore` created in the `appStore.js` file. 
// This is the Redux store where the global state of the application will be managed.

function App() {
  return (
    // Wrapping the entire app inside the `Provider` component.
    // The `Provider` makes the Redux store available to all nested components.
    <Provider store={appStore}> 
      <Body />
    </Provider>
  );
}

export default App;

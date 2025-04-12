import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { observer } from "mobx-react-lite";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./components/pages/MainPage";
import { makeAutoObservable } from "mobx";
import { Provider } from "mobx-react";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/test",
    element: <MainPage />,
  },
]);

export const App = observer((props, context) => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
});

// class Timer {
//   secondsPassed = 0
//
//   constructor() {
//     makeAutoObservable(this)
//   }
//
//   increaseTimer() {
//     this.secondsPassed += 1
//   }
// }
//
// const myTimer = new Timer()
//
// // A function component wrapped with `observer` will react
// // to any future change in an observable it used before.
// const TimerView = observer(({ timer }:{timer:Timer}) => <span>Seconds passed: {timer.secondsPassed}</span>)
//
// export const App = () => {
//   return (
//       <TimerView timer={myTimer} />
//   )
// }
//
// setInterval(() => {
//   myTimer.increaseTimer()
// }, 1000)
//
// export default App;

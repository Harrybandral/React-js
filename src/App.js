import React from "react"; // most important to use react

//fat arrow function is used in React

const App = () => {
  return (
    <div>
      <h1>HELLO REACT</h1>
      <p>Harry here</p>
    </div>
  );
};

// function App() {
//   return (
//     <div>
//       <h1>HELLO REACT</h1>;
//     </div>
//   );
// }

/* How react is actually looking into it */

// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "HELLO REACT")
//   );
// };

export default App;

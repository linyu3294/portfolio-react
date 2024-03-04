import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";

// Since I had to downgrade to React 16.8.0 I can no longer use the createRoot method
// Use the following if upgrading to React 18 or higher
// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
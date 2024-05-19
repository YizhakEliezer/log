// import './App.css';
import SignIn from './comp/auth/SignIn';
import SignUp from './comp/auth/SignUp';
import AuthDetails from './comp/auth/AuthDetails';
import './comp/login/globals.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <SignIn/>
     <SignUp/> */}
      {/* <AuthDetails/> */}
      <SignIn/>


      {/* <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
        </Routes>
      </Router> */}


    </div>
  );
}

export default App;

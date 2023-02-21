import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Components/Home/Home';
import Invite from './Components/Invite/Invite';
import Login from './Components/Login/Login';
import Referrals from './Components/Referrals/Referrals';

function App() {
    // return (
    //   <div className="App">
    //     <Login />
    //   </div>
    // );

  return (

    <BrowserRouter >
    <Routes>
      {/* <Route path="/" element={<Login />}> */}
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/invite" element={<Invite />} />
        <Route exact path="/referrals" element={<Referrals />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      {/* </Route> */}
    </Routes>
</BrowserRouter >
  );
}

export default App;

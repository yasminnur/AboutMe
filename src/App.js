import React from "react";
import Utama from './Components/utama';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./Components/nav";
import Footer from "./Components/footer";

function App() {
  return (
    <div className="App">
       <hr />
      <Nav />
      <Utama />
      <Footer />
      <Link to="/gallery" className="nav-link">Gallery</Link>
      
            {/* <p><Utama /></p> */}
    </div>
  );
}
export default App;

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Nav from './Components/Nav';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/">
//           <Nav />
//         </Route>
//         <Route exact path="/tentangSaya">
//           <h1>Tentang Saya</h1>
//           <p>Ini adalah halaman Tentang Saya.</p>
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// export default App;

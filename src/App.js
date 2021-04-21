
import './App.css';
import TopBar from './Components/TopBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import BottomBar from './Components/BottomBar';
import SignMain from './Components/SignMain';
import Home from './Components/Home';
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from './firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Questions from './Components/Questions';
import Upload from './Components/Upload';
import Knowskin from './Components/Knowskin';
import Past from './Components/Past';


function App() {
  const[user] = useAuthState(auth);
 
  return<Router>
  <TopBar/>
  <BottomBar/>
  { !user ? 
   ( <SignMain />)
  :(
    <div className="App">
  <Switch>
<Route  exact path="/">
<Home/>
</Route>
<Route path="/questions">
  <Questions/>
</Route>
<Route path="/upload">
  <Upload/>
</Route>
<Route path="/1">
  <Knowskin/>
</Route>
<Route path="/3">
  <Past/>
</Route>
  </Switch>
  </div>
  )}
 
  </Router>

}

export default App;

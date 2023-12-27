import './App.css';
import Home from './components/Home';
import Home2 from './components/Home2';
import Login from './components/Login';
import Home3 from './components/Home3';
import Servicebike from './components/Servicebike';
import Servicecar from './components/Servicecar';
import Serviceship from './components/Serviceship';
import Serviceaero from './components/Serviceaero';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Registration from './components/Registration';
import SPbike from './components/SPbike';
import SPcar from './components/SPcar';
import SPship from './components/SPship';
import SPaero from './components/SPaero';
import PriceTag from './components/PriceTag';
import Shifting from './components/Shifting';
import Shifting2 from './components/Shifting2';
import Finalpayment from './components/Finalpayment';
import BasicAlerts from './components/BasicAlerts';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import VerticalLinearStepper from './components/VerticalLinearStepper';
import TransitionGroupExample from './components/TransitionGroupExample';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home2" element={<Home2/>}/>
        <Route path="/Registration" element={<Registration/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Home3" element={<Home3/>}/>
        <Route path="/Servicebike" element={<Servicebike/>}/>
        <Route path="/Servicecar" element={<Servicecar/>}/>
        <Route path="/Serviceship" element={<Serviceship/>}/>
        <Route path="/Serviceaero" element={<Serviceaero/>}/>
        <Route path="/SPbike" element={<SPbike/>}/>
        <Route path="/SPcar" element={<SPcar/>}/>
        <Route path="/SPship" element={<SPship/>}/>
        <Route path="/SPaero" element={<SPaero/>}/>
        <Route path="/PriceTag" element={<PriceTag/>}/>
        <Route path="/Shifting" element={<Shifting/>}/>
        <Route path="/Shifting2" element={<Shifting2/>}/>
        <Route path="/Finalpayment" element={<Finalpayment/>}/>
        <Route path="/BasicAlerts" element={<BasicAlerts/>}/>
        <Route path="/ResponsiveDrawer" element={<ResponsiveDrawer/>}/>
        <Route path="/VerticalLinearStepper" element={<VerticalLinearStepper/>}/>
        <Route path="/TransitionGroupExample" element={<TransitionGroupExample/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

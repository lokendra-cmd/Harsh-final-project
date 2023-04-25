import Dashboard from './Components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import DataState from "./Context/DataState";
import Home from './Components/Home';
function App() {
  return (
    <DataState>
    <Home/>
    </DataState>
  );
}

export default App;

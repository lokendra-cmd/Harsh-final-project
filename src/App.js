import Dashboard from './Components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import DataState from "./Context/DataState";

function App() {
  return (
    <DataState>
    <div className="App">
     <Header/>
     <Dashboard/>
    </div>
    </DataState>
  );
}

export default App;

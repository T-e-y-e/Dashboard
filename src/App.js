import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;

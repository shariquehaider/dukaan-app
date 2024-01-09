import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Overview from './components/Overview';
import Dashboard from './components/Dasboard';
import Transactions from './components/Transactions';

function App() {
  return (
    <>
      <Sidebar />
      <Header />
      <Dashboard>
        <>
        <Overview/>
        <Transactions />
        </>
      </Dashboard>
    </>
  );
}

export default App;

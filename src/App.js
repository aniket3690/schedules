import './App.css';
import CommonNav from '../src/components/CommonNav';
import CommonSidebar from './components/CommonSidebar';
import MainWinow from './components/MainWinow';

function App() {
  return (
    <div className="App">
      <CommonNav />
      <CommonSidebar />
      <MainWinow />
    </div>
  );
}

export default App;

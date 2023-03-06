import './App.css';
import FirstContent from './components/firstContent/firstContent';
import Navbar from './components/navbar/navbar';
import SecondContent from './components/secondContent/secondContent';

function App() {
  return (
    <div className="App">
     <Navbar />
     <FirstContent />
     <SecondContent />
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <ItemListContainer greetings={"WELCOME TO MAMBA GANG"}/>
      </header>
    </div>
  );
}

export default App;

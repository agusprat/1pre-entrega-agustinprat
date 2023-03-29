import navbar from './components/navbar/navbar';
import './App.css';
import itemlistcontainer from './components/itemlistcontainer/itemlistcontainer';
function App() {
  return (
    <div className="App">
      <navbar />
      <itemlistcontainer greeting={bienvenidos} />
    </div>
  );
}

export default App;

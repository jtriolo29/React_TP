import './App.css';
import EffectWithCleanup from './components/EffectWithCleanup';
import EffectWithoutCleanup from './components/EffectWithoutCleanup';

function App() {
  return (
    <div className="App">
      <EffectWithoutCleanup />
      <EffectWithCleanup />
    </div>
  );
}

export default App;

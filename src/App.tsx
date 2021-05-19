import {Hello} from './components/Hello';
import {Counter} from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1>Frontend My Activies Space</h1>
      <p>Teste prático - Contador</p>
      <Hello name="Helio"/>
      <Counter />
    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Model } from './Model';
import Mondat from './komponens/Mondat';

function App() {
  const MODEL = new Model();
  const cim = MODEL.getCim();
  const aktMondat = MODEL.aktMondat(2);
  const aktAlap = MODEL.aktAlap(2);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tanuljunk angolul</h1>
      </header>
      <article>
        <h2>{cim}</h2>
        <Mondat mondat={aktMondat} aktAlap={aktAlap} />
        <button type="submit" className="btn btn-primary">Következő</button>
      </article>
    </div>
  );
}

export default App;

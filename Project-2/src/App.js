import { useEffect } from 'react';
import './App.css';
import { newJs } from './script';

function App() {
  useEffect(() => {
    newJs();
  }, []);

  return (
    <>
      <div className="loader">
        <div className="loading"></div>
      </div>
      <div className="navbar">
        <p>Antriksh Rawat</p>
        <div className="button-borders">
          <button className="primary-button">Get Users</button>
        </div>
      </div>
      <div className="info">
      </div>
    </>
  );
}
export default App;
import logo from './logo.svg';
import './App.css';
import Progressbar from './component/progress.js'
import { useState,useEffect } from 'react';


export default function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 0.1);
    }, 20);
  }, []);

  return (
    <div className="app">
      <span>Progress Bar</span>
      <Progressbar value={value} onComplete={() => setSuccess(true)} />
      <span>{success ? "Complete!" : "Loading..."}</span>
    </div>
  );
}

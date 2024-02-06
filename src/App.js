import logo from './logo.svg';
import './App.css';
import Nevbar from './components/Nevbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Nevbar title="TextUtils"></Nevbar>
    <div className="container my-3">
    <TextForm heading='Enter the text to analyze'></TextForm>
    </div>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Router,BrowserRouter,Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Formdisplay from './components/Formdisplay';
import FormUpdate from './components/FormUpdate';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form/>}></Route>
          <Route path="/display" element={<Formdisplay/>}></Route>
          <Route path="/getbyid/:id" element={<FormUpdate/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

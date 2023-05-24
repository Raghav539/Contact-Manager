import AddUser from './Component/AddUser';
import './App.css';
import NavBar from './Component/NavBar';
import AllUsres from './Component/AllUsres';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import EditUser from './Component/EditUser';
import NotFound from './Component/NotFound';
import Home from './Component/Home';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="all" element={<AllUsres/>}/>
      <Route path="/add" element={<AddUser/>}/>
      <Route path="/edit/:id" element={<EditUser/>}/>
      <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

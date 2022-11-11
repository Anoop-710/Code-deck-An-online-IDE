import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './screens/Home/Home';
import Playground from './screens/Playground/Playground';
import Error404 from './screens/Error404/Error404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/playground' element={<Playground/>} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

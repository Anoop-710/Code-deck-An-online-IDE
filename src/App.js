import './App.css';
import { GlobalStyle } from './Style/global';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './screens/Home';
import Playground from './screens/Playground/Playground';
import Error404 from './screens/Error404/Error404';

import ModalProvider from './Context/ModalContext';

function App() {
  return (
    <ModalProvider >
    <BrowserRouter>
    <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/playground' element={<Playground/>} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
    </ModalProvider>
  );
}

export default App;

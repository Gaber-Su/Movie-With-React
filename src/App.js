import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"
import { Header } from './Component/Header';
import { Add } from './Component/Add';
import { WatchList } from './Component/WatchList';
import { Watched } from './Component/Watched';
import ContextProvider from './Component/Context/GlobalContext';

function App() {
  return (
    <div className="App">
    <ContextProvider>
    <Header/>
      <Routes>
    <Route path='/' element={<WatchList/>}></Route>
    <Route path='/watched' element={<Watched/>}></Route>
    <Route path='/add' element={<Add/>}></Route>
      </Routes>
    </ContextProvider>
   
    </div>
  );
}

export default App;

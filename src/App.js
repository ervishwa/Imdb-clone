
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './component/header/Header';
import Home from "./pages/Home/home"
import MovieList from './component/movielist/movielist';
import Moviedetail from './pages/moviedetail/moviedetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
         <Routes>
            <Route index element={<Home></Home>}></Route>
            <Route path='movie/:id' element={<Moviedetail></Moviedetail>}></Route>
            <Route path='movies/:type' element={<MovieList></MovieList>}></Route>
            <Route path='movies/:type/movie/:id' element={<Moviedetail></Moviedetail>}></Route>
            <Route path='/*' element={<h2>Error</h2>}></Route>
            
         </Routes>
      </Router>
      <div>
        <h4>MADE WITH ❤️ BY VISHWJEET THAKUR</h4>
      </div>
    </div>
  );
}

export default App;

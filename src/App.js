import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './containers/Home';
import Cv from './containers/Cv';
import Projects from './containers/Projects';
import Elflion from './containers/Elflion';




function App() {
  <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
  />
  return (
    <div className="app">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exacth path='/' element={<Home/>}></Route>
            <Route exacth path='/curriculum' element={<Cv/>}></Route>
            <Route exacth path='/proyectos' element={<Projects/>}></Route>
            <Route exacth path='/elflion' element={<Elflion/>}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

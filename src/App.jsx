import { RouterProvider, createHashRouter, Navigate, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Characters from './pages/Characters';
import Games from './pages/Games';

import Footer from './components/footer';
import Header from './components/header';



// Making a Functional using a 'Arrow Function' - in this way we can make a new function without parameters
const Layout = () => {
  return (
    <div className="bg-black flex flex-col min-h-screen">
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};


// Const created in arrays keeping the routes about the pages of the aplication.
const router = createHashRouter([
{path: "/",
  
    element: <Layout />, // O Layout envolve tudo
    children: [ 
      { path: "/", element: <Home /> },
      { path: "/home", element: <Navigate to="/" replace /> },
      { path: "/movies", element: <Movies /> },
      { path: "/characters", element: <Characters /> },
      { path: "/Games", element: <Games /> },
      { path: "*", element: <h1>Página não encontrada</h1> },
    ]
  }
]);

function App() {
  return <RouterProvider router={router}   
  />
}


export default App;
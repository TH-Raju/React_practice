import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import FndDetail from './components/FndDetails/FndDetail';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        {
          path: '/home', element: <Home></Home>
        },
        {
          path: '/friends', element: <Friends></Friends>,

          // Load Data from Api 
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          }
        },
        {
          path: '/friends/friend/:Id',
          element: <FndDetail></FndDetail>,
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.Id}`)
          }

        },
        {
          path: '/product', element: <Product></Product>
        },
        {
          path: '/about', element: <About></About>
        }
      ]
    },

    {
      path: '*', element: <div>404 Not Found</div>
    }



  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

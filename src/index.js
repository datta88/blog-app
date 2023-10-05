import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './views/Home/Home';
import Posts from './views/Posts/Posts';
import ReadPost from './views/ReadPost/ReadPost';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
  },
  {
    path:'/posts',
    element:<Posts/>,
  },
  {
    path:'/post/read/:id',
    element:<ReadPost/>,
  },
  {
    path:'*',
    element:<div>404 Not found</div>,
  }
])
root.render(
 <>
  <RouterProvider router={router}/>
 </>
);



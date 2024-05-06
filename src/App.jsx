import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import SearchBox from '@components/SearchBox/SearchBox';
import ResultsList from './components/ResultsList/ResultsList';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <SearchBox />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/items",
        element: <ResultsList />,
        loader: async ({ request }) => {
          const searchQuery = request.url?.split("?")[1];
          const res = await fetch(`http://localhost:5050/api/items?q=${encodeURIComponent(searchQuery)}`);
          const parsedRes = await res.json();
          return parsedRes;
        },
      },
    ],
  },
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App

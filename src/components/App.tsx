import PickState from './PickState';
import ParkOptions from './ParkOptions';
import Header from './Header'
import { BrowserRouter as Router, Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import ThingsToDo from './ThingsToDo';
import Campgrounds from './Campgrounds';
import Itinerary from './Itinerary';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <PickState />
    },
    {
      path: 'state/:stateCode',
      element: <ParkOptions />,
      loader: async ({ params }) => {
        return fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${params.stateCode}&api_key=${import.meta.env.VITE_NPS_API_KEY}`)
          .then(response => response.json())
          .then((jsonifiedResponse) => {
            return jsonifiedResponse.data;
          })
          .catch((error) => {
            return error.message;
          })
      }
    },
    {
      path: 'state/:stateCode/park/:parkCode',
      element: <ThingsToDo />,
      loader: async ({ params }) => {
        return fetch(`https://developer.nps.gov/api/v1/thingstodo?parkCode=${params.parkCode}&api_key=${import.meta.env.VITE_NPS_API_KEY}`)
        .then(response => response.json())
        .then((jsonifiedResponse) => {
          return jsonifiedResponse.data;
        })
        .catch((error) => {
          return error.message;
        })
      }
    },
    {
      path: 'state/:stateCode/park/:parkCode/campgrounds',
      element: <Campgrounds />
    },
    {
      path: '/itinerary',
      element: <Itinerary />
    }
  ]);
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  )
}

export default App;
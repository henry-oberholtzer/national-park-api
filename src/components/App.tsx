import PickState from './PickState';
import ParkOptions from './ParkOptions';
import Header from './Header'
import { BrowserRouter as Router, Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import ThingsToDo from './ThingsToDo';
import Campgrounds from './Campgrounds';
import Itinerary from './Itinerary';

const apiLoader = (apiEndpoint: string) => {
  return (searchCategory: string) => {
    return (searchParam: string) => {
      return fetch(`https://developer.nps.gov/api/v1/${apiEndpoint}?${searchCategory}=${searchParam}&api_key=${import.meta.env.VITE_NPS_API_KEY}`)
        .then(response => response.json())
        .then((jsonifiedResponse) => {
          return jsonifiedResponse.data;
        })
        .catch((error) => {
          return error.message;
        })
    }
  }
}

const fetchParks = apiLoader("parks")("stateCode")
const fetchThingsToDo = apiLoader("thingstodo")("parkCode")
const fetchCampgrounds = apiLoader("campgrounds")("parkCode")

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
        if (params.stateCode) {
          return fetchParks(params.stateCode);
        }
      }
    },
    {
      path: 'state/:stateCode/park/:parkCode/thingstodo',
      element: <ThingsToDo />,
      loader: async ({ params }) => {
        if (params.parkCode) {
          return fetchThingsToDo(params.parkCode)
        }
      }
    },
    {
      path: 'state/:stateCode/park/:parkCode/campgrounds',
      element: <Campgrounds />,
      loader: async ({ params }) => {
        if (params.parkCode) {
          return fetchCampgrounds(params.parkCode);
        }
      }
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
import {
	createBrowserRouter,
	Outlet,
	RouterProvider
} from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Expertise from './pages/Expertise';
import Home from './pages/Home';
import './styles/styles.scss'
import ExpertiseDetails from './pages/ExpertiseDetails';

const Layout = () => {
	return (
		<div className='app'>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	)
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/expertise',
				element: <Expertise />,
				// children: [
				// 	{
				// 		path: '/:slug',
				// 		element: <ExpertiseDetails />,
				// 	}
				// ]
			},
		]
	}
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
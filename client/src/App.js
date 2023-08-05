import {
	createBrowserRouter,
	Outlet,
	RouterProvider
} from 'react-router-dom'
import './styles/styles.scss'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Expertise from './pages/Expertise';
import Home from './pages/Home';
import ExpertiseDetails from './pages/ExpertiseDetails';
import Splash from './components/Splash';
import { useEffect, useState } from 'react';

const Layout = () => {
	const SPLASH_ANIMATION_DURATION = 16 * 1000
	const [visible, setVisible] = useState(false)


	useEffect(() => {
		// Check if the splash screen ever initiated before this

		// If the splash screen had initiated before, local storage should save the splash state as true.
		// Therefore, no more splash screen initiated through this session.
		if (window.localStorage.getItem('splash') !== null) {
			setVisible(JSON.parse(window.localStorage.getItem('splash')));
		} else {
			setVisible(false)
			window.localStorage.setItem('splash', false);
		}

		// initiate splash screen
		if (visible === false) {
			setTimeout(() => {
				setVisible(true);
				window.localStorage.setItem('splash', true);
			}, SPLASH_ANIMATION_DURATION)
		}

	}, []);


	return (
		<div className='app'>
			<div className={visible ? 'hide-content' : 'display-content'}>
				<Splash />
			</div>
			<div className={visible ? 'display-content' : 'hide-content'}>
				<Navbar />
				<Outlet />
				<Footer />
			</div>
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
			},
			{
				path: '/expertise/:expertiseSlug',
				element: <ExpertiseDetails />,
			}
		]
	}
])

function App() {
	return (
		<RouterProvider router={router} />
	);
}

export default App
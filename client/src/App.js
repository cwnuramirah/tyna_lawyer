import {
	createBrowserRouter,
	Outlet,
	RouterProvider
} from 'react-router-dom'
import './styles/styles.scss'
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Expertise from './pages/Expertise';
import ExpertiseDetails from './pages/ExpertiseDetails';
import { useSplashScreen } from './data/useSplashScreen';

const Layout = () => {

	const { visible, Splash } = useSplashScreen();

	return (
		<div className='app'>
			<ScrollToTop />
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
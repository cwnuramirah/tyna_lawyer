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
import About from './pages/About';
import Team from './pages/Team';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

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
				<section className='cta'>
					<p>CTA section to be placed</p>
				</section>
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
				path: '/about',
				element: <About />,
			},
			{
				path: '/expertise',
				element: <Expertise />,
			},
			{
				path: '/expertise/:expertiseSlug',
				element: <ExpertiseDetails />,
			},
			{
				path: '/team',
				element: <Team />
			},
			{
				path: '/blog',
				element: <Blog />
			},
			{
				path: '/blog/:postSlug',
				element: <BlogPost />
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
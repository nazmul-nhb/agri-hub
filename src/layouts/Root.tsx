import { Outlet } from 'react-router';
import { Fragment } from 'react/jsx-runtime';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Root = () => {
	return (
		<Fragment>
			<Navbar />
			<main className="min-h-screen max-w-full mx-auto p-4">
				<Outlet />
			</main>
			<Footer />
		</Fragment>
	);
};

export default Root;

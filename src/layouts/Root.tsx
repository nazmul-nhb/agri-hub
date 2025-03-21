import { Outlet } from 'react-router';
import { Fragment } from 'react/jsx-runtime';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import FloatingChatButton from '../components/FloatingChatButton';

const Root = () => {
	return (
		<Fragment>
			<Navbar />
			<main className="min-h-screen max-w-full mx-auto">
				<Outlet />
				<FloatingChatButton/>
			</main>
			<Footer />
		</Fragment>
	);
};

export default Root;

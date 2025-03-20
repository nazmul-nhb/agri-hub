import { useState } from 'react';
import { Link } from 'react-router';

/**
 * Responsive Navbar component using Tailwind.
 */
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-primary text-white p-4">
			<div className="container mx-auto flex justify-between items-center">
				<Link to="/" className="text-xl font-bold">
					AgriHub
				</Link>
				<button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
					☰
				</button>
				<ul className={`lg:flex space-x-4 ${isOpen ? 'block' : 'hidden'} lg:block`}>
					<li>
						<Link to="/farming-guides" className="hover:underline">
							Farming Guides
						</Link>
					</li>
					<li>
						<Link to="/crop-details" className="hover:underline">
							Crop Details
						</Link>
					</li>
					<li>
						<Link to="/pest-control" className="hover:underline">
							Pest Control
						</Link>
					</li>
					<li>
						<Link to="/contact" className="hover:underline">
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;

import { FaHome } from 'react-icons/fa';
import { GiFarmer, GiThreeLeaves } from 'react-icons/gi';
import { MdContactSupport, MdPestControl } from 'react-icons/md';

export const navLinks = [
	{
		path: '/',
		label: 'Home',
		icon: <FaHome className="lg:hidden" width={24} />,
	},
	{
		path: '/farming-guides',
		label: 'Farming Guides',
		icon: <GiFarmer className="lg:hidden" width={24} />,
	},
	{
		path: '/crop-details',
		label: 'Crop Details',
		icon: <GiThreeLeaves className="lg:hidden" width={24} />,
	},
	{
		path: '/pest-control',
		label: 'Pest Control',
		icon: <MdPestControl className="lg:hidden" width={24} />,
	},
	{
		path: '/contact',
		label: 'Contact',
		icon: <MdContactSupport className="lg:hidden" width={24} />,
	},
];

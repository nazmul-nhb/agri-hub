import { BrowserRouter, Route, Routes } from 'react-router';
import Root from '../layouts/Root';
import Contact from '../pages/Contact';
import CropDetails from '../pages/CropDetails';
import FarmingGuides from '../pages/FarmingGuides';
import Home from '../pages/Home';
import PestControl from '../pages/PestControl';
import FarmingGuideDetails from '../pages/FarmingGuideDetails';
import Crops from '../pages/Crops';

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Root />}>
					<Route index element={<Home />} />
					<Route path="/farming-guides" element={<FarmingGuides />} />
					<Route path="/farming-guides/:id" element={<FarmingGuideDetails />} />
					<Route path="/crops" element={<Crops />} />
					<Route path="/crops/:id" element={<CropDetails />} />
					<Route path="/pest-control" element={<PestControl />} />
					<Route path="/contact" element={<Contact />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;

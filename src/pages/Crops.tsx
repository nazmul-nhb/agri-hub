import Slider from '../components/Slider';
import CropsDetails from '../components/CropDetails';

export default function Crops() {
	return (
		<>
			<Slider
				images={[
					{
						src: 'sliders/agri.jpg',
						alt: 'Crops Details',
						description: 'Crops Details',
					},
				]}
				className="aspect-[4.2]"
			/>
			<CropsDetails />
		</>
	);
}

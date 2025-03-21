import PestControlStrategies from '../components/PestControlStrategies';
import Slider from '../components/Slider';

export default function PestControl() {
	return (
		<>
			<Slider
				images={[
					{
						src: 'sliders/agri.jpg',
						alt: 'Pest Control',
						description: 'Pest Control',
					},
				]}
				className="aspect-[4.2]"
			/>
			<PestControlStrategies />
		</>
	);
}

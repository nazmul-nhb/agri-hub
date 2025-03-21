import { Link } from 'react-router';
import type { IFarmingGuide } from '../types';

interface Props {
	guide: IFarmingGuide;
}

const FarmingGuideCard = ({ guide }: Props) => {
	return (
		<div className="bg-white shadow-md p-4 rounded-lg">
			<img
				src={guide.image} 
				alt={guide.title}
				className="w-full h-48 object-cover rounded-md mb-4"
			/>
			<h3 className="text-lg font-semibold">{guide.title}</h3>
			<p className="text-sm text-gray-600">{guide.description}</p>
			<Link
				to={`/farming-guides/${guide.id}`}
				className="text-primary hover:underline"
			>
				Read More →
			</Link>
		</div>
	);
};

export default FarmingGuideCard;

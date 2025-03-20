import FarmingGuideCard from '../components/FarmingGuideCard';
import { farmingGuides } from '../mock-data/farming-guides';

const FarmingGuides = () => {
	return (
		<div>
			<h1 className="text-3xl font-bold text-primary mb-4">Farming Guides</h1>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{farmingGuides.map((guide) => (
					<FarmingGuideCard key={guide.id} guide={guide} />
				))}
			</div>
		</div>
	);
};

export default FarmingGuides;

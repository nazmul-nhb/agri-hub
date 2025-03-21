import FarmingGuideCard from '../components/FarmingGuideCard';
import SectionTitle from '../components/SectionTitle';
import SectionWrapper from '../components/SectionWrapper';
import { farmingGuides } from '../mock-data/farming-guides';

const Guides = () => {
	return (
		<SectionWrapper>
			<SectionTitle title="Farming Guides"/>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{farmingGuides.map((guide) => (
					<FarmingGuideCard key={guide.id} guide={guide} />
				))}
			</div>
		</SectionWrapper>
	);
};

export default Guides;

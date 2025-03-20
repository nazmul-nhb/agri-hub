import { useParams } from 'react-router';
import { farmingGuides } from '../mock-data/farming-guides';

const FarmingGuideDetails = () => {
	const { id } = useParams();
	const guide = farmingGuides.find((g) => g.id === Number(id));

	if (!guide) return <h2 className="text-red-600">Guide Not Found</h2>;

	return (
		<div className="p-6 bg-white shadow-md rounded-lg">
			<h1 className="text-3xl font-bold text-green-700">{guide.title}</h1>
			<p className="text-gray-700">{guide.description}</p>
			<ul className="list-disc ml-6 mt-4">
				{guide.steps.map((step, index) => (
					<li key={index} className="text-gray-600">
						{step}
					</li>
				))}
			</ul>
		</div>
	);
};

export default FarmingGuideDetails;

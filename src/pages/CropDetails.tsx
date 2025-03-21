import { useParams } from 'react-router';
import { crops } from '../mock-data/crops';

const CropDetails = () => {
	const { id } = useParams();
	const crop = crops.find((c) => c.id === Number(id));

	if (!crop) return <h2 className="text-red-600">Crop Not Found</h2>;

	return (
		<div className="p-6 bg-white shadow-md rounded-lg">
			{/* Displaying the crop image */}
			<img
				src={crop.image}
				alt={crop.name}
				className="w-full aspect-[4.2] object-cover rounded-md mb-6"
			/>

			{/* Crop Name */}
			<h1 className="text-3xl font-bold text-green-700">{crop.name}</h1>

			{/* Crop Category */}
			<p className="text-xl font-semibold text-gray-700">Category: {crop.category}</p>

			{/* Soil Requirements */}
			<p className="text-gray-700 mt-4">
				<strong>Soil Requirements:</strong> {crop.soil}
			</p>

			{/* Varieties */}
			<p className="text-gray-700 mt-4">
				<strong>Varieties:</strong> {crop.varieties.join(', ')}
			</p>

			{/* Cultivation Methods */}
			<p className="text-gray-700 mt-4">
				<strong>Cultivation Methods:</strong> {crop.cultivationMethods.join(', ')}
			</p>

			{/* Harvesting Techniques */}
			<p className="text-gray-700 mt-4">
				<strong>Harvesting Techniques:</strong>{' '}
				{crop.harvestingTechniques.join(', ')}
			</p>

			{/* Nutritional Values */}
			<p className="text-gray-700 mt-4">
				<strong>Nutritional Values:</strong> {crop.nutritionalValues}
			</p>

			{/* Potential Uses */}
			<p className="text-gray-700 mt-4">
				<strong>Potential Uses:</strong> {crop.potentialUses.join(', ')}
			</p>
		</div>
	);
};

export default CropDetails;

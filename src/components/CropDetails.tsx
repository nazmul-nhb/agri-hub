import CropCard from "../components/CropCard";
import SectionTitle from "../components/SectionTitle";
import SectionWrapper from "../components/SectionWrapper";
import { crops } from "../mock-data/crops";

const CropsDetails = () => {
	return (
		<SectionWrapper id="crop-details">
			<SectionTitle title="Crop Details" />
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
				{/* Loop through crops data to create a card for each crop */}
				{crops.map((crop) => (
					<CropCard key={crop.id} crop={crop} />
				))}
			</div>
		</SectionWrapper>
	);
};

export default CropsDetails;

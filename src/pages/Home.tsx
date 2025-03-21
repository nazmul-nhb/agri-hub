import toast from 'react-hot-toast';
import ContactUs from '../components/ContactUs';
import CropsDetails from '../components/CropDetails';
import Guides from '../components/Guides';
import PestControlStrategies from '../components/PestControlStrategies';
import SectionTitle from '../components/SectionTitle';
import SectionWrapper from '../components/SectionWrapper';
import Slider from '../components/Slider';
import { IBannerImage } from '../types';

const banners: IBannerImage[] = [
	{
		src: "/sliders/1.jpg",
		alt: "Image 1",
		description: "Welcome to the Agricultural Information Hub, your go-to resource for farming techniques, crop management, and agricultural innovations to ensure sustainable farming practices."
	},
	{
		src: "/sliders/2.jpg",
		alt: "Image 2",
		description: "Discover a wealth of knowledge on soil health, irrigation methods, and pest management in our Agricultural Information Hub, empowering farmers with the tools they need for success."
	},
	{
		src: "/sliders/3.jpg",
		alt: "Image 3",
		description: "Join the Agricultural Information Hub and explore comprehensive guides on modern farming practices, market trends, and technological advances that drive agricultural growth."
	}
]

const Home = () => {
	return (
		<>
			<Slider images={banners} />
			<SectionWrapper>
				<SectionTitle title="Welcome to AgriHub" subTitle="Learn Growing" />
				<section className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${banners[0].src})` }}>
					<div className="absolute inset-0 bg-black opacity-40"></div>
					<div className="relative z-10 text-center text-white px-6 py-12">
						<h1 className="text-4xl md:text-5xl font-semibold mb-4">Welcome to AgriHub</h1>
						<p className="text-lg md:text-xl mb-6">Your trusted source for agricultural information.</p>
						<p className="text-lg md:text-xl mb-8">{banners[0].description}</p>
						<a onClick={()=> toast.success("More Features Coming...")} href="#crop-details" className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">Learn More</a>
					</div>
				</section>
				<Guides />
				<CropsDetails />
				<PestControlStrategies />
				<ContactUs />
			</SectionWrapper>
		</>
	);
};

export default Home;

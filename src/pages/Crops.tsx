import Slider from '../components/Slider'
import CropsDetails from '../components/CropDetails'

export default function Crops() {
  return (
	   <>
		  <Slider
			images={[
			  {
				src: "sliders/agri.jpg",
				alt: "Crops Details",
				description: "Crops Details"
			  }
			]}
		  />
		  <CropsDetails />
		</>
  )
}

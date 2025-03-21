import Slider from '../components/Slider'
import Guides from '../components/Guides'

export default function FarmingGuides() {
  return (
	<>
	<Slider
		  images={[
			{
			  src: "sliders/agri.jpg",
			  alt: "Farming Guides",
			  description: "Farming Guides"
			}
		  ]}
		/>
		<Guides/>
  </>
  )
}

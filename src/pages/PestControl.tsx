import Slider from '../components/Slider'
import PestControlStrategies from '../components/PestControlStrategies'

export default function PestControl() {
  return (
    <>
      <Slider
            images={[
              {
                src: "sliders/agri.jpg",
                alt: "Pest Control",
                description: "Pest Control"
              }
            ]}
          />
          <PestControlStrategies/>
    </>
  )
}

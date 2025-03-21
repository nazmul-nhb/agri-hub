import ContactUs from "../components/ContactUs";
import Slider from "../components/Slider";


const Contact = () => {


  return (
    <>
      <Slider
        images={[
          {
            src: "sliders/contact.webp",
            alt: "Contact",
            description: "Contact Us Now"
          }
        ]}
      />
      <ContactUs />
    </>
  );
};

export default Contact;

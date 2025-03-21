// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import { IBannerImage } from '../types';

interface Props {
  images: IBannerImage[]
}
export default function Slider({ images }: Props) {
  return (
    <Swiper navigation={true} loop autoplay modules={[Navigation, Pagination]} className="mySwiper">
      {
        images?.map((img, idx) => <SwiperSlide key={idx}>
          <figure className='flex relative'>
            <img src={img.src} className='w-full aspect-[3] object-cover' alt={img.alt} />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-center w-full text-white bg-[#8692c971] h-full py-4 flex items-center justify-center px-8 md:px-12'>
              <h3 className='text-white max-[430px]:text-base text-xl md:text-2xl lg:text-3xl transition-all duration-500'>{img.description}</h3>
            </div>
          </figure>
        </SwiperSlide>)
      }
    </Swiper>
  );
}

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IBannerImage } from '../types';
import { cn } from '../utils/helpers';

interface Props {
	images: IBannerImage[];
	className?: string;
}
export default function Slider({ images, className = '' }: Props) {
	return (
		<Swiper
			loop
			autoplay
			navigation={true}
			pagination={true}
			modules={[Navigation, Pagination]}
			className="mySwiper cursor-grab active:cursor-grabbing"
		>
			{images?.map((img, idx) => (
				<SwiperSlide key={idx}>
					<figure className="flex relative">
						<img
							src={img.src}
							className={cn('w-full aspect-[3] object-cover', className)}
							alt={img.alt}
						/>
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold lg:font-bold text-center w-full text-white bg-[#8692c971] h-full py-4 flex items-center justify-center px-8 md:px-12">
							<h3 className="text-white max-[430px]:text-xs sm:text-xl md:text-2xl lg:text-3xl transition-all duration-500">
								{img.description}
							</h3>
						</div>
					</figure>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

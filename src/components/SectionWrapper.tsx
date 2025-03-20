import React from 'react';
import { cn } from '../utils/helpers';

interface Props {
	className?: string;
	children: React.ReactNode;
}

const SectionWrapper = ({ className = '', children }: Props) => {
	return (
		<section
			className={cn(
				'max-w-full w-full mx-auto px-8 md:px-12 lg:px-16 xl:px-20',
				className
			)}
		>
			{children}
		</section>
	);
};

export default SectionWrapper;

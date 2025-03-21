import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import { cn } from '../utils/helpers';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	className?: string;
	children: React.ReactNode;
}

const SectionWrapper = ({ className = '', children, ...props }: Props) => {
	return (
		<section {...props}
			className={cn(
				'max-w-full w-full mx-auto my-8 px-8 md:px-12 lg:px-16 xl:px-20',
				className
			)}
		>
			{children}
		</section>
	);
};

export default SectionWrapper;

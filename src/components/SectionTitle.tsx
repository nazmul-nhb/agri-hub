import React from 'react';
import { cn } from '../utils/helpers';

interface Props {
	title: React.ReactNode;
	subTitle?: React.ReactNode;
	className?: string;
}

const SectionTitle = ({ title, subTitle, className = '' }: Props) => {
	return (
		<div
			className={cn(
				'text-center space-y-2.5 text-primary mb-4 mt-2 mx-auto',
				className
			)}
		>
			<h2 className="text-xl md:text-3xl font-bold text-pretty">{title}</h2>
			{subTitle && (
				<h3 className="text-lg md:text-2xl font-bold text-pretty">{subTitle}</h3>
			)}
		</div>
	);
};

export default SectionTitle;

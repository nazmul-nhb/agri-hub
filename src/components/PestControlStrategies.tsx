import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import SectionWrapper from '../components/SectionWrapper';
import { pestControlData } from '../mock-data/pest-control';

const PestControlStrategies = () => {
	const [activeTab, setActiveTab] = useState('biological');

	const handleTabChange = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<SectionWrapper>
			<SectionTitle title="Pest Control Strategies" />

			<p className="text-lg text-gray-700 mb-8">
				Effective pest control is essential for maintaining healthy crops.
				Integrated Pest Management (IPM) strategies combine biological controls,
				organic remedies, and careful monitoring to manage pest populations. Here
				are some practical tips and strategies to prevent and treat pest
				infestations.
			</p>

			{/* Tab Navigation */}
			<div className="md:flex flex-wrap text-nowrap gap-1.5 md:gap-4 border-b-2 border-primary mb-6">
				{pestControlData.map((tab) => (
					<button
						key={tab.id}
						className={`pb-1 list-item list-disc text-lg font-semibold cursor-pointer hover:text-primary/75 transition-all origin-left duration-500 ${
							activeTab === tab.id
								? 'border-b-4 border-primary text-primary'
								: 'text-gray-700 border-b-4 border-transparent'
						}`}
						onClick={() => handleTabChange(tab.id)}
					>
						{tab.title}
					</button>
				))}
			</div>

			{/* Tab Content */}
			{pestControlData.map(
				(tab) =>
					activeTab === tab.id && (
						<div
							key={tab.id}
							className="flex flex-col md:flex-row justify-between gap-5 mb-12"
						>
							<div className="w-full sm:w-1/2">
								<h3 className="text-xl font-semibold text-green-600 mb-4">
									{tab.title}
								</h3>
								<ul className="list-disc ml-6">
									{tab.description.map((item, index) => (
										<li key={index} className="text-gray-600">
											{item}
										</li>
									))}
								</ul>
							</div>
							<AnimatePresence>
								<motion.figure
									animate={{ opacity: 100, scale: 1 }}
									exit={{ opacity: 0, scale: 0 }}
									initial={{ opacity: 0, scale: 0 }}
									transition={{ duration: 0.7 }}
									className="w-full sm:w-1/2 mt-4 sm:mt-0"
									key={tab.id}
								>
									<img
										src={tab.image}
										alt={tab.title}
										className="aspect-video object-cover w-full h-auto rounded-lg shadow-lg shadow-gray-700"
									/>
								</motion.figure>
							</AnimatePresence>
						</div>
					)
			)}
		</SectionWrapper>
	);
};

export default PestControlStrategies;

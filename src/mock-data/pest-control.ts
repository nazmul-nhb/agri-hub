import type { IPestControl } from '../types';

export const pestControlData: IPestControl[] = [
	{
		id: 'biological',
		title: 'Biological Controls',
		description: [
			'Introduce natural predators like ladybugs, which consume aphids and other pests.',
			'Use nematodes to control soil-borne pests such as root weevils and grubs.',
			'Encourage pollinators and beneficial insects to create a balanced ecosystem.',
		],
		image: '/images/biological-control.jpg',
	},
	{
		id: 'organic',
		title: 'Organic Remedies',
		description: [
			'Neem oil: Acts as a natural pesticide that disrupts the reproductive cycles of pests.',
			'Garlic and chili spray: A strong repellent for insects and pests.',
			'Diatomaceous earth: A safe and effective powder that kills soft-bodied insects.',
		],
		image: '/images/organic-remedy.webp',
	},
	{
		id: 'monitoring',
		title: 'Monitoring & Early Detection',
		description: [
			'Regularly inspect your plants for visible signs of pests (holes in leaves, yellowing, etc.).',
			'Use sticky traps to capture flying pests like whiteflies and aphids.',
			'Monitor the soil for signs of pests that affect the roots, such as root rot or larvae.',
			'Check the underside of leaves where many pests hide.',
		],
		image: '/images/monitoring.jpg',
	},
	{
		id: 'treatment',
		title: 'Treatment Recommendations',
		description: [
			'Handpick larger pests like caterpillars and beetles off plants.',
			'Use insecticidal soap for soft-bodied pests like aphids, mites, and mealybugs.',
			'For severe infestations, consider introducing biological controls (e.g., parasitic wasps) to target specific pests.',
			'Rotate crops annually to prevent the build-up of pests in the soil.',
		],
		image: '/images/treatment.jpg',
	},
];

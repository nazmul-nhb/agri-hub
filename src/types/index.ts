export interface ICrop {
	id: number;
	name: string;
	category: string;
	soil: string;
	image: string;
	varieties: string[];
	cultivationMethods: string[];
	harvestingTechniques: string[];
	nutritionalValues: string;
	potentialUses: string[];
}

export interface IFarmingGuide {
	id: number;
	title: string;
	description: string;
	steps: string[];
	image: string;
}

export interface IBannerImage {
	src: string;
	alt: string;
	description: string;
}

export interface IPestControl {
	id: string;
	title: string;
	description: string[];
	image: string;
}

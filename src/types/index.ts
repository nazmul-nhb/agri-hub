export interface ICrop {
	id: number;
	name: string;
	category: string;
	soil: string;
	image: string;
}

export interface IFarmingGuide {
	id: number;
	title: string;
	description: string;
	steps: string[];
}

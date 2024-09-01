interface Education {
	id: number;
	name: string;
	school: string;
	place: string;
	startYear: number;
	endYear?: number | null;
	graduated: boolean;
}

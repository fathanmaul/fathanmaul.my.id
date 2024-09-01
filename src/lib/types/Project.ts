interface Project {
	id: number;
	name: string;
	role: string;
	description: string;
	place: string;
	technologies: string[];
	thumbnail?: string | null;
}

class Training {

	id: number;
	title: string;
	desc: string;
	imageUri: string;

	constructor(id: number, title: string, desc: string, imageUri: string) {
		this.id = id;
		this.title = title;
		this.desc = desc;
		this.imageUri = imageUri;
	}
}

export default Training;
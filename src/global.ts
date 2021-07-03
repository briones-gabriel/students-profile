export interface StudentProfile extends Record<string, string | Array<string> | Function> {
	id: string,
	fullName: string,
	city: string,
	company: string,
	email: string,
	firstName: string,
	lastName: string,
	grades: Array<string>,
	pic: string,
	skill: string,
	tags: Array<string>,
	addTagToStudent: (tag: string, studentId: string) => void,
	removeTagFromStudent: (tagIndex: number, studentId: string) => void,
};

export interface ListOfStudents {
	APIStudents: Array<StudentProfile>,
	filters: Map<string, string>,
	addTagToStudent: (tag: string, studentId: string) => void,
	removeTagFromStudent: (tagIndex: number, studentId: string) => void,
}

export interface Searchable {
	setFilters: React.Dispatch<React.SetStateAction<Map<string, string>>>,
	filters: Map<string, string>,
	searchParam: string,
	placeholder: string
}

export interface Picture {
	url: string,
	alt: string
}

export interface Data {
	students: Array<StudentProfile>,
}

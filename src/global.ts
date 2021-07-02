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
	removeTagFromStudent: (i: number, studentId: string) => void,
};

export interface ListOfStudents {
	students: Array<StudentProfile>,
	addTagToStudent: (tag: string, studentId: string) => void,
	removeTagFromStudent: (i: number, studentId: string) => void,
}

export interface Searchable {
	APIdata: Array<StudentProfile>,
	data: Array<StudentProfile>,
	setData: (students: Array<StudentProfile>) => any,
	setFilters: any,
	filters: any,
	searchParam: string,
	placeholder: string
}

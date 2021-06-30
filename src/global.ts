export type StudentProfile = {
	id: number,
	city: string,
	company: string,
	email: string,
	firstName: string,
	lastName: string,
	grades: Array<string>,
	pic: string,
	skill: string
};

export type ListOfStudents = {
	students: Array<StudentProfile>
}

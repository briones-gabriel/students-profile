import { ListOfStudents, StudentProfile } from "../global";
import { FC, useEffect, useState } from "react";
import Student from "./Student";

const StudentsList: FC<ListOfStudents> = ({ filters, APIStudents, addTagToStudent, removeTagFromStudent }) => {
	const [students, setStudents] = useState<Array<StudentProfile>>([]);

	/**
	* Updates the list of displayed students every time that APIStudents or filters change.
	*/
	useEffect(() => {
		setStudents(APIStudents.filter((student: StudentProfile) => {
			for (let [key, filter] of filters.entries()) {
				let studentProp: string = Array.isArray(student[key])
					? (student[key] as string[]).join()
					: student[key] as string;

				if (!studentProp.toLowerCase().includes(filter.toLowerCase())) return false;
			}
			return true;
		}));
	}, [filters, APIStudents])

	return (
		<div className="students-list">
			{students.length > 0 &&
				students.map(student => (
					<Student
						key={student.id}
						id={student.id}
						fullName={student.fullName}
						city={student.city}
						company={student.company}
						email={student.email}
						firstName={student.firstName}
						lastName={student.lastName}
						grades={student.grades}
						pic={student.pic}
						skill={student.skill}
						tags={student.tags}
						addTagToStudent={addTagToStudent}
						removeTagFromStudent={removeTagFromStudent}
					/>
				))
			}
			{!students.length && filters.size > 0 && (<p>No students were found</p>)}
		</div>
	);
}
export default StudentsList;

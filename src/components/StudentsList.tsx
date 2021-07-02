import { ListOfStudents } from "../global";
import { FC } from "react";
import Student from "./Student";

const StudentsList: FC<ListOfStudents> = ({ students, addTagToStudent, removeTagFromStudent }) => {
	return (
		<div className="students-list">
			{students.length ?
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
				:
				(
					<p>No students were found</p>
				)
			}
		</div>
	);
}
export default StudentsList;

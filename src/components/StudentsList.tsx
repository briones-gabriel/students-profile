import { ListOfStudents } from "../global";
import { FC } from "react";
import Student from "./Student";

const StudentsList: FC<ListOfStudents> = ({ students }) => {
	return (
		<div className="students-list">
			{students.map(student => (
				<Student
					key={student.id}
					id={student.id}
					city={student.city}
					company={student.company}
					email={student.email}
					firstName={student.firstName}
					lastName={student.lastName}
					grades={student.grades}
					pic={student.pic}
					skill={student.skill}
				/>
			))}
		</div>
	);
}
export default StudentsList;

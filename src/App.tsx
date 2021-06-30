import { useEffect, useState, FC } from 'react';
import { StudentProfile, ListOfStudents } from "./global";
import StudentsList from "./components/StudentsList";

const App: FC = () => {
	const [students, setStudents] = useState<Array<StudentProfile>>([]);

	useEffect(() => {
		fetch("https://api.hatchways.io/assessment/students")
			.then((response) => {
				return response.json();
			})
			.then((data: ListOfStudents) => {
				setStudents(data.students);
			})
			.catch((error) => {
				throw Error("There was an error in the request: " + error);
			});
	}, [])

	return (
		<div className="App">
			<StudentsList students={students} />
		</div>
	);
}

export default App;

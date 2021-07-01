import { useEffect, useState, FC } from 'react';
import { StudentProfile, ListOfStudents } from "./global";
import StudentsList from "./components/StudentsList";
import SearchBar from "./components/SearchBar";

const App: FC = () => {
	const [APIstudents, setAPIStudents] = useState<Array<StudentProfile>>([]);
	const [students, setStudents] = useState<Array<StudentProfile>>([]);

	// Fetch data from the API
	useEffect(() => {
		fetch("https://api.hatchways.io/assessment/students")
			.then((response) => {
				return response.json();
			})
			.then((data: ListOfStudents) => {
				setAPIStudents(data.students);
				setStudents(data.students);
			})
			.catch((error) => {
				throw Error("There was an error in the request: " + error);
			});
	}, [])

	//TODO: Add a "No results" screen
	return (
		<div className="App">
			<div>
				<SearchBar
					data={APIstudents}
					setData={setStudents}
					searchParams={["firstName", "lastName"]}
					placeholder="Search by name"
				/>
				<StudentsList students={students} />
			</div>
		</div>
	);
}

export default App;

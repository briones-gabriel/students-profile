import { useEffect, useState, FC } from 'react';
import { StudentProfile, Data } from "./global";
import StudentsList from "./components/StudentsList";
import SearchBar from "./components/SearchBar";

const App: FC = () => {
	const [APIStudents, setAPIStudents] = useState<Array<StudentProfile>>([]);
	const [filters, setFilters] = useState<Map<string, string>>(new Map());

	/**
	 * Adds a given tag to a given student by updating the APIStudents array.
	 *
	 * @param {string} tag - The string with the tag to add.
	 * @param {string} studentId - The id of the student from which to delete the tag.
	 */
	const addTagToStudent = (tag: string, studentId: string) => {
		setAPIStudents(APIStudents.map((student: StudentProfile) => {
			return student.id === studentId
				? { ...student, tags: [...student.tags, tag] }
				: student;
		}));
	}

	/**
	 * Removes a tag from a student.
	 *
	 * @param {number} i - The index of the tag to delete.
	 * @param {string} studentId - The id of the student from which to delete the tag.
	 */
	const removeTagFromStudent = (tagIndex: number, studentId: string) => {
		setAPIStudents(APIStudents.map((student: StudentProfile) => {
			return student.id === studentId
				? { ...student, tags: student.tags.filter((_tag, index) => index !== tagIndex) }
				: student;
		}));
	}

	// Fetch data from the API
	useEffect(() => {
		fetch("https://api.hatchways.io/assessment/students")
			.then((response) => {
				return response.json();
			})
			.then((data: Data) => {
				setAPIStudents(data.students!.map((student: StudentProfile) => {
					return { ...student, tags: [], fullName: [student.firstName, student.lastName].join(" ") };
				}));
			})
			.catch((error) => {
				throw Error("There was an error in the request: " + error);
			});
	}, [])

	return (
		<div className="App">
			<div>
				<SearchBar
					setFilters={setFilters}
					filters={filters}
					searchParam={"fullName"}
					placeholder="Search by name"
				/>
				<SearchBar
					setFilters={setFilters}
					filters={filters}
					searchParam={"tags"}
					placeholder="Search by tag"
				/>
				<StudentsList
					APIStudents={APIStudents}
					filters={filters}
					addTagToStudent={addTagToStudent}
					removeTagFromStudent={removeTagFromStudent}
				/>
			</div>
		</div>
	);
}

export default App;

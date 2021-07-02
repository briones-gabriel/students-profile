import { useEffect, useState, FC } from 'react';
import { StudentProfile, ListOfStudents } from "./global";
import StudentsList from "./components/StudentsList";
import SearchBar from "./components/SearchBar";

const App: FC = () => {
	const [APIstudents, setAPIStudents] = useState<Array<StudentProfile>>([]);
	const [students, setStudents] = useState<Array<StudentProfile>>([]);
	const [filters, setFilters] = useState<Map<string, string>>(new Map());

	useEffect(() => {
		updateFilters();
	}, [filters])

	const updateFilters = () => {
				setStudents(APIstudents.filter((student: StudentProfile) => {
			let result = true;

			filters.forEach((_e, i) => {
				const toFilter = Array.isArray(student[i]) ? (student[i] as string[]).join() : student[i] as string;
				if (!toFilter.toLowerCase().includes((filters.get(i) as string).toLowerCase())) result = false;
			});

			return result;
		}));
	}

	/**
	 * Adds a tag to a student.
	 *
	 * @param {string} tag - The string with the tag to add.
	 * @param {string} studentId - The id of the student from which to delete the tag.
	 */
	const addTagToStudent = (tag: string, studentId: string) => {
		setStudents(students.map((student: StudentProfile) => {
			return student.id === studentId
				? { ...student, tags: [...student.tags, tag] }
				: student;
		}));
		setAPIStudents(APIstudents.map((student: StudentProfile) => {
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
	const removeTagFromStudent = (i: number, studentId: string) => {
		setStudents(students.map((student: StudentProfile) => {
			return student.id === studentId
				? { ...student, tags: student.tags.filter((_tag, index) => index !== i) }
				: student;
		}));
	}

	// Fetch data from the API
	useEffect(() => {
		fetch("https://api.hatchways.io/assessment/students")
			.then((response) => {
				return response.json();
			})
			.then((data: ListOfStudents) => {
				setAPIStudents(data.students.map((student: StudentProfile) => {
					return {...student, tags: [], fullName: [student.firstName,  student.lastName].join(" ")};
				}));
				setStudents(data.students.map((student: StudentProfile) => {
					return {...student, tags: [], fullName: [student.firstName,  student.lastName].join(" ")};
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
					APIdata={APIstudents}
					data={students}
					setData={setStudents}
					setFilters={setFilters}
					filters={filters}
					searchParam={"fullName"}
					placeholder="Search by name"
				/>
				<SearchBar
					APIdata={APIstudents}
					data={students}
					setData={setStudents}
					setFilters={setFilters}
					filters={filters}
					searchParam={"tags"}
					placeholder="Search by tag"
				/>
				<StudentsList
					students={students}
					addTagToStudent={addTagToStudent}
					removeTagFromStudent={removeTagFromStudent}
				/>
			</div>
		</div>
	);
}

export default App;

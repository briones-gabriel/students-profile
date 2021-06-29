import { useEffect, useState } from 'react';

type Student = {
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

type Data = {
  students: Array<Student>
}

function App() {
  const [students, setStudents] = useState<Array<Student>>([]);

  useEffect(() => {
    fetch("https://api.hatchways.io/assessment/students")
      .then((response) => {
        return response.json();
      })
      .then((data: Data) => {
        setStudents(data.students);
      })
      .catch((error) => {
        throw Error("There was an error in the request: " + error);
      });
  }, [])

  /**
   * Returns the average of the sum of all the items in a given array of numbers.
   *
   * @param {Array<string>} list - The list of numbers.
   * @return {number} The average of the sum of all the elements in the array.
   */
  const getAverage = (list: Array<string>): number => {
    return list.reduce((a, b) => Number(a) + Number(b), 0)/list.length;
  }

  return (
    <div className="App">
      {students.map((student: Student) => (
        <div key={student.id}>
          <img src={student.pic} alt={student.firstName} />
          <h3>{student.firstName + " " + student.lastName}</h3>
          <p>Email: {student.email}</p>
          <p>Company: {student.company}</p>
          <p>Skill: {student.skill}</p>
          <p>Average: {getAverage(student.grades)}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

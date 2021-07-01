import { FC, useState } from "react";
import { StudentProfile } from "../global";
import ProfilePicture from "./ProfilePicture";

/**
 * Returns the average all the items in a given array of numbers.
 *
 * @param {Array<string>} list - The list of numbers.
 * @return {number} The average of the sum of all the elements in the array.
*/
const getAverage = (list: Array<string>): number => {
	return list.reduce((a, b) => Number(a) + Number(b), 0) / list.length;
}

const Student: FC<StudentProfile> = ({ id, city, company, email, firstName, lastName, grades, pic, skill }) => {
	const [showTests, setShowTests] = useState(false);

	return (
		<div key={id} className="student-profile">
			<ProfilePicture url={pic} alt={firstName + " " + lastName}/>
			<div style={{ flex: 1 }}>
				<div className="profile-header">
					<h1 className="profile-name">{firstName + " " + lastName}</h1>
					<button className="btn" onClick={() => setShowTests(!showTests)}>
						{ showTests ? "▵" : "▿"}
					</button>
				</div>
				<ul className="profile-details">
					<li>Email: {email}</li>
					<li>Company: {company}</li>
					<li>City: {city}</li>
					<li>Skill: {skill}</li>
					<li>Average: {getAverage(grades)}%</li>
					{ showTests && (
						<div style={{ marginTop: "1rem" }}>
						{grades.map((grade, index) => (
							<li key={index}>Test {index + 1}: {grade}%</li>
						))}
						</div>
					)}
				</ul>
			</div>
		</div>
	)
}

export default Student;

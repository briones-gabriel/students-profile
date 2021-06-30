import { FC } from "react";
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
	return (
		<div key={id} className="student-profile">
			<ProfilePicture url={pic} alt={firstName + " " + lastName}/>
			<div style={{ flex: 1 }}>
				<h1 className="profile-name">{firstName + " " + lastName}</h1>
				<ul className="profile-details">
					<li>Email: {email}</li>
					<li>Company: {company}</li>
					<li>City: {city}</li>
					<li>Skill: {skill}</li>
					<li>Average: {getAverage(grades)}</li>
				</ul>
			</div>
		</div>
	)
}

export default Student;

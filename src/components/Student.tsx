import { FC, useState } from "react";
import { StudentProfile } from "../global";
import ProfilePicture from "./ProfilePicture";

const Student: FC<StudentProfile> = ({ id, fullName, city, company, email, grades, pic, skill, tags, addTagToStudent, removeTagFromStudent }) => {
	const [showTests, setShowTests] = useState(false);
	const [input, setInput] = useState("");

	/**
	 * Returns the average of all the items in a given array of numbers.
	 *
	 * @param {Array<string>} list - The list of numbers.
	 * @return {number} The average of the sum of all the elements in the array.
	*/
	const getAverage = (list: Array<string>): number => {
		return list.reduce((a, b) => Number(a) + Number(b), 0) / list.length;
	}

	/**
	 * Handles what happens when the user presses a key on the tags input field.
	 *
	 * @param {any} e - The event handler.
	 */
	const handleOnKeyDown = (e: any) => {
		const tag: string = input;
		if (e.keyCode === 13 && tag) {
			addTagToStudent(tag, id);
			setInput("");
		}
	}

	return (
		<div key={id} className="student-profile">
			<ProfilePicture url={pic} alt={fullName} />
			<div style={{ flex: 1 }}>
				<div className="profile-header">
					<h1 className="profile-name">{fullName}</h1>
					<button className="btn" onClick={() => setShowTests(!showTests)}>
						{showTests ? "−" : "+"}
					</button>
				</div>
				<ul className="profile-details">
					<li>Email: {email}</li>
					<li>Company: {company}</li>
					<li>City: {city}</li>
					<li>Skill: {skill}</li>
					<li>Average: {getAverage(grades)}%</li>
					{showTests && (
						<div style={{ marginTop: "1rem" }}>
							{grades.map((grade, index) => <li key={index}>Test {index + 1}: {grade}%</li>)}
						</div>
					)}
					{tags && (
						<ul className="tag-container">
							{tags.map((tag, i) => (
								<li key={i} className="tag" onClick={() => removeTagFromStudent(i, id)} title="Click to remove">
									<p>{tag}</p>
								</li>
							))}
						</ul>
					)}
					<input
						value={input}
						onInput={e => setInput(e.currentTarget.value)}
						onKeyDown={handleOnKeyDown}
						placeholder="Add a tag"
						className="tag-bar"
					/>
				</ul>
			</div>
		</div>
	)
}

export default Student;

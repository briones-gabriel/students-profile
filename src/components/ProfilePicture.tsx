import { FC } from "react";
import { Picture } from "../global";

const ProfilePicture: FC<Picture> = ({ url, alt }) => {
	return <img src={url} alt={alt} className="profile-picture" />
}

export default ProfilePicture;

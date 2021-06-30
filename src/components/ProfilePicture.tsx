import { FC } from "react";

type Picture = {
	url: string,
	alt: string
}

const ProfilePicture: FC<Picture> = ({ url, alt }) => {
	return <img src={url} alt={alt} className="profile-picture" />
}

export default ProfilePicture;

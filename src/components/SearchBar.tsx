import { FC } from "react";
import { Searchable } from "../global";

const SearchBar: FC<Searchable> = ({ data, setData, searchParams, placeholder }) => {
	const handleOnChange = (input: string): void => {
		if (!input) setData(data);

		setData(data.filter((element: Record<string, string>) => {
			let result = false;

			searchParams.forEach((param: string) => {
				if (element[param].toLowerCase().includes(input.toLowerCase())) result = true;
			});

			return result;
		}));
	}

	return (
		<input onChange={(e) => handleOnChange(e.target.value)} className="search-bar" placeholder={placeholder} />
	)
}

export default SearchBar;

import { FC } from "react";
import { Searchable } from "../global";

const SearchBar: FC<Searchable> = ({ filters, setFilters, searchParam, placeholder }) => {

	/**
	 * Sets sets/updates the filters to match the current input.
	 *
	 * @param {string} input - The search bar input string.
	 */
	const handleOnChange = (input: string): void => setFilters(new Map(filters.set(searchParam, input)));

	return (
		<input
			onChange={(e) => handleOnChange(e.target.value)}
			className="search-bar"
			placeholder={placeholder}
		/>
	)
}

export default SearchBar;

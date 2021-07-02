import { FC } from "react";
import { Searchable, StudentProfile } from "../global";

const SearchBar: FC<Searchable> = ({ APIdata, data, setData, setFilters, filters, searchParam, placeholder }) => {
	
	const handleOnChange = (input: string): void => {
		setFilters(new Map(filters.set(searchParam, input)));
	}

	return (
		<input 
			onChange={(e) => handleOnChange(e.target.value)} 
			className="search-bar" 
			placeholder={placeholder} 
		/>
	)
}

export default SearchBar;

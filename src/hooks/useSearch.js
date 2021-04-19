import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function useSearch() {
    const history = useHistory();
    const [searchText, setSearchText] = useState("");

    const handleSearchChange = (input) => {
        setSearchText(input);
    }

    const handleSearchClick = (e) => {
        e.preventDefault();
        history.push(`/search/${searchText}`)
    }

    return { handleSearchChange, handleSearchClick, searchText };
}
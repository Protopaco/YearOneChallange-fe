import { useState } from "react";

export default function useSearch() {
    const [searchText, setSearchText] = useState("");

    const handleSearchChange = (input) => {
        setSearchText(input);
    }

    const handleSearchClick = (e) => {
        e.preventDefault();
        console.log(searchText);
    }

    return { handleSearchChange, handleSearchClick };
}
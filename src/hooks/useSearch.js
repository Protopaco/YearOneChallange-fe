import { useState } from "react";

export default function useSearch() {
    const [searchText, setSearchText] = useState("");

    const handleSearchChange = (input) => {
        setSearchText(input);
    }


}
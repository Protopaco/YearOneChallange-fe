import React from "react";
import { AppBar, Toolbar, Typography, TextField, Button } from "@material-ui/core";
import useSearch from "../../hooks/useSearch";

export default function Header() {
    const { handleSearchChange, handleSearchClick } = useSearch();

    return (
        <AppBar
            position="static">
            <Toolbar>
                <div
                    style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                    <Typography>
                        NETFLIX MOVIE SEARCH
                </Typography>
                    <form
                        onSubmit={(e) => handleSearchClick(e)}>
                        <TextField
                            id="search-bar"
                            variant="outlined"
                            label="Search"
                            onChange={({ target }) => handleSearchChange(target.value)}
                        />
                        <Button
                            variant="outlined"
                            id="search-button"
                            type="submit"
                            color="secondary"
                        >
                            SEARCH
                    </Button>
                    </form>
                </div>
            </Toolbar>
        </AppBar >
    )
}
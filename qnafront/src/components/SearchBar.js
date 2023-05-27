import React from "react";

const SearchBar = () => {
    return (
        <form className="d-flex">
            <input
                className="form-control me-2"
                type="text"
                placeholder="Search..."
                style={{
                    borderRadius: "3px",
                    border: "none",
                    padding: "5px 10px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    marginRight: "10px",
                    marginLeft: "10px",
                    width: "400px",
                    height: "35px",
                }}
            />
            <button
                className="btn btn-primary"
                type="submit"
                style={{
                    backgroundColor: "#191970",
                    color: "white",
                }}
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;

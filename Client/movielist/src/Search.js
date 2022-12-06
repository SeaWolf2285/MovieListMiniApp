import { Context } from "./App";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const { searchInput, setSearchInput, movie } = useContext(Context);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    
    const handleChange = (e) => {
        setSearch(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchInput(search);
    };
    
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleChange}
            />
            <button type="submit" onClick={
                () => { 
                    movie.find(m => {
                        if(m.title == searchInput){
                            navigate(`/:${m.id}`)
                        }})
            }}>Search</button>
        </form>
        </div>
    );
};
export default SearchBar;

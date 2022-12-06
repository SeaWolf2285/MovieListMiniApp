import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {useState, useEffect} from "react";
import {Context} from "./App";
import SearchBar from "./Search.js";
import {useContext} from "react";


const Home = () => {
const {movie} = useContext(Context);
    return (
        <div>
            <SearchBar />
            {movie?.map((movie, idx) => (
                <div key={idx}>
                    {movie.title}
                </div> 
            ))}
        </div>
    )
};
export default Home;
import { useState } from "react";
import s from "./SearchBar.module.css";
import { Search } from "react-bootstrap-icons";

export function SearchBar({ onSearch }) {
    const [query, setQuery] = useState("");

    function handleChange(event) {
        setQuery(event.target.value);
    }

    function handleKeyDown(event) {
        if (event.key === "Enter" && query.trim() !== "") {
            onSearch(query);
        }
    }

    return (
        <div className={s.search_container}>
            <Search size={27} className={s.icon} />
            <input
                className={s.input}
                type="text"
                placeholder="Search a TV show or a movie you may like..."
                value={query}
                onChange={handleChange}
                onKeyDown={handleKeyDown} // Déclenche la recherche sur Entrée
            />
        </div>
    );
}

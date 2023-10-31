import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { searchMovies } from "../redux/actions/postActions";

const SearchBar = () => {
    // To set the state of the store
    const dispatch = useDispatch();
    
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        dispatch(searchMovies(searchTerm));
    };

    return (
        <div style={{ marginRight:"145px", marginLeft:"170px", marginTop:"10px" }}>
            <input
                type="search"
                placeholder="What do you want to watch?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ border: "solid 1px red", width:"300px", borderRadius: "10px", padding: "8px", outline:"none" }}
            />
            <FaSearch className="search-icon" onClick={handleSearch} style={{marginLeft:"10px", color:"red", fontSize:"25px"}} />
        </div>
    );
}

export default SearchBar;
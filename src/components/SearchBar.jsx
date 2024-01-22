import search from "../assets/images/search.png";

const SearchBar = ({ handleSearch, length }) => {
    return (
        <div className="searchbar-container">
            <div className="input-box">
                <input
                    type="text"
                    placeholder="Search by name"
                    className="searchbar"
                    onChange={(e) => handleSearch(e.target.value)}
                />
                <img src={search} alt="Search icon" className="search-icon" />
            </div>
            <span className="results">{length} People</span>
        </div>
    );
};

export default SearchBar;

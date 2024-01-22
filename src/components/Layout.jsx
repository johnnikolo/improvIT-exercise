import Header from "./Header";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import useFetchUsers from "../hooks/useFetchUsers";
import { useEffect, useState } from "react";

const Layout = () => {
    const { data, loading } = useFetchUsers();
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (!loading && data) {
            setResults([...data]);
        }
    }, [loading, data]);

    const handleSearch = (input) => {
        const lowercasedInput = input.toLowerCase();

        const filteredArray = data.filter((user) => {
            const lowercasedName = user.name.toLowerCase();
            return lowercasedName.includes(lowercasedInput);
        });

        if (input === "") {
            setResults([...data]);
        } else {
            setResults([...filteredArray]);
        }
    };

    return (
        <div className="layout-container">
            <Header></Header>
            <div className="main-content">
                <SearchBar
                    handleSearch={handleSearch}
                    length={results.length}
                ></SearchBar>
                {loading ? (
                    "Loading..."
                ) : (
                    <SearchResults data={results}></SearchResults>
                )}
            </div>
        </div>
    );
};

export default Layout;

import PersonCard from "./PersonCard";
import { useState } from "react";

const SearchResults = ({ data }) => {
    const [openCardIndex, setOpenCardIndex] = useState(null);

    const handleCardClick = (index) => {
        setOpenCardIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="search-results">
            {data.map((user, index) => (
                <PersonCard
                    key={index}
                    cardIndex={index}
                    user={user}
                    handleCardClick={() => handleCardClick(index)}
                    isCardOpen={index === openCardIndex}
                />
            ))}
        </div>
    );
};

export default SearchResults;

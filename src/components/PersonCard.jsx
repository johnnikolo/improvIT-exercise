import userAvatar from "../assets/images/user.jpg";

const PersonCard = ({ cardIndex, user, handleCardClick, isCardOpen }) => {
    const cardSymbol = isCardOpen ? "-" : "+";
    const indexOfExtension = user.phone.indexOf("x");
    const phoneNumberWithoutExtension =
        indexOfExtension !== -1
            ? user.phone.slice(0, indexOfExtension).trim()
            : user.phone;
    return (
        <div className="person-card">
            <div
                className="card-preview"
                onClick={() => handleCardClick(cardIndex)}
            >
                <div className="card-title">{user.name}</div>
                <div className="card-symbol">{cardSymbol}</div>
            </div>
            {isCardOpen ? (
                <div className="card-details-wrapper">
                    <img
                        src={userAvatar}
                        alt="User Avatar"
                        className="user-avatar"
                    />
                    <div className="card-details">
                        <a href="/">{user.email}</a>
                        <p>{user.address.street + ", " + user.address.suite}</p>
                        <p>
                            {phoneNumberWithoutExtension +
                                ", " +
                                user.address.city}
                        </p>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default PersonCard;

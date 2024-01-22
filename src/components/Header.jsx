import logo from "../assets/images/logo.png";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="banner"></div>
            <div className="logo-header">
                <img src={logo} alt="improvIT Logo" className="improvIT-logo" />
                <p className="hero-text">Team Members</p>
            </div>
        </div>
    );
};

export default Header;

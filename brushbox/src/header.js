const header = () => {
    return (
        <header className="header">
            <navlink to="/"></navlink>
            <div>
                <navlink to={"/"}>Home</navlink>
                <navlink to={"/aboutus"}>About Us</navlink>
                <navlink to={"/login"}>Login</navlink>
            </div>
        </header>
    );
}
export default header;

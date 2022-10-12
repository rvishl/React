import happy from '../asset/happy.png';
const Nav = () => {
    return (
        <nav>
            <div className="img"><img src={happy} alt="logo" /></div>
            <div className="nav-header">
                <h2>Emoji</h2>
                <a href="https://github.com/rvishl/emoji-search---Project.git" target="_blank">Source</a>
            </div>
            
        </nav>
    )
}

export default Nav;
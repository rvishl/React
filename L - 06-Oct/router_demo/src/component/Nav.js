import { Link } from 'react-router-dom';
const Nav = _ => {
    return (
        <>
            <div>
                <Link to="/home">
                    <button>Home</button>
                </Link> &emsp;
                <Link to="/home">
                    <button>About</button>
                </Link> &emsp;
                <Link to="/home">
                    <button>Content</button>
                </Link>             
                
            </div>            
        </>
    )
}

export default Nav;
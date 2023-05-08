import './navbar.css';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';

function NavBar() {

    const [display, setDisplay] = useState('none');

    const clickBtn = () => {
        setDisplay((prevDisplay) => (prevDisplay === 'none' ? 'flex' : 'none'));
    }

    return (
        <>
            <nav className='navbar'>
                <h1 className='logo'>BLOG</h1>
                <ul className='links'>
                    <li id='ll'><Link to='/'>Home</Link></li>
                    <li id='ll'><Link to='/blogs'>Blogs</Link></li>
                    <li id='ll'><Link to='/login'>Login</Link></li>
                    <li id='ll'><Link to='/register'>Register</Link></li>
                    {/* <li id='ll'><Link to='/createpost'>Create Post</Link></li> */}
                </ul>
                <div className='menuicon' onClick={clickBtn}>
                    <MenuIcon fontSize='medium' style={{ display: display === 'none' ? 'block' : 'none' }} />
                    <CloseIcon fontSize='medium' style={{ display: display === 'none' ? 'none' : 'block' }} />
                </div>
            </nav>
            <ul className="menulist" id='mnl' style={{display}}>
                <li id='ml'><Link to='/'>Home</Link></li>
                <li id='ml'><Link to='/blogs'>Blogs</Link></li>
                <li id='ml'><Link to='/login'>Login</Link></li>
                <li id='ml'><Link to='/register'>Register</Link></li>
                {/* <li id='ml'><Link to='/createpost'>Create Post</Link></li> */}
            </ul>
        </>
    )
}

export default NavBar;
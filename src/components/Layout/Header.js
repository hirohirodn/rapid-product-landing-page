import './Header.css'
import React, { useState } from 'react';
import en_img from '../../assets/images/en.svg'
import de_img from '../../assets/images/de.svg'


function Header(props) {
    // const [isChecked, setIsChecked] = useState(0)
    const [showMenu, setShowMenu] = useState(true)
    const [showLanguage, setShowLanguage] = useState(false)
    function check(e) {
        e.preventDefault();
    };
    function handleMenu(){

    }
    return (
        <div className='header'>
            <div className='wrapheader'>
                <div className='logo'>
                    <h1 className='logo'>rapid dweller</h1>
                </div>
                <div  className='wrap-menu'>
                <input id='check'type='checkbox' onClick={() => setShowMenu(!showMenu)}></input>
                <span></span>
                <span></span>
                <span></span>
                <div className='menu'>
                    <ul className='menu'>
                        <li className='menu'>
                            <a className='home' href="#home">Home</a>
                        </li>
                        <li className='menu'>
                            <a className='products' href="#products">Products</a>
                        </li>
                        <li className='menu'>
                            <a className='team' href="#team">Team</a>
                        </li>
                        <li className='menu'>
                            <a className='carrers' href="#carrers">Carrers</a>
                        </li>
                        <li className='menu'>
                            <a className='contact' href="#contact">Contact</a>
                        </li>
                 
                        {/* <button
					className="nav-btn nav-close-btn"
					onClick={()=>setShowMenu(false)}>
				</button> */}
                    </ul>
                    <div className='language' onClick={() => setShowLanguage(!showLanguage)}>
                                <img className='language'></img>
                            {showLanguage ?
                                    <ul className='language' onClick={() => setShowLanguage(!showLanguage)}>
                                        <li id="check" onClick={check}>
                                            <a href="en">
                                                <img src={en_img} ></img>

                                                English</a>
                                        </li>
                                        <li id="">
                                            <a href="de">
                                                <img src={de_img} ></img>Deutsch</a>

                                        </li>
                                    </ul>   : null}
                        </div>
                    {/* <button className="nav-btn" onClick={() => setShowMenu(!showMenu)}>
                </button> */}
                </div>
 
            
                </div>

            </div>

        </div>

    )
}
export default Header;
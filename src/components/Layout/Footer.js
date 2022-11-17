import './Footer.css'
import fb_img from '../../assets/images/square-facebook.svg'
import tw_img from '../../assets/images/square-twitter.svg'
import in_img from '../../assets/images/linkedin.svg'
import mail_img from '../../assets/images/envelope-solid.svg'
import form_img from '../../assets/images/form.svg'
import phone_img from '../../assets/images/square-phone-solid.svg'


function Footer(props) {
    return (
        <div className="footer">
            <div className='top'>
        
        <div className='wraptop'>
        <div className="first">
                    <h1>
                        LEARN HOW TO USE BENERATOR
                        <br></br>
                        THE MOST EFFICIENT WAY
                    </h1>
                    <ul>
                        <li>
                            <a href=''>Benerator bei GitHub.com</a>
                        </li>
                        <li>
                            <a href=''>Online Doku</a>
                        </li>
                        <li>
                            <a href=''>Download PDF Manual</a>
                        </li>
                    </ul>
                    <h1>
                        ABOUT US
                    </h1>
                    <ul>
                        <li>
                            <a href=''>rapiddweller</a>
                        </li>
                        <li>
                            <a href=''>rapidorderApp</a>
                        </li>
                        <li>
                            <a href=''>open-source @ GitHub.com</a>
                        </li>
                    </ul>
                </div>
                <div className="last">
                    <h1>
                        CONTACT US
                    </h1>
                    <div id="phone">
                        <img src={phone_img}></img>

                        <a href=''>
                            +49 40 60439203</a>
                    </div>
                    <div>
                        <img src={mail_img}></img>

                        <a href=''>team@rapiddweller.com</a>
                    </div>
                    <div>
                        <img src={form_img}></img>
                        <a href=''>Contact form</a>
                    </div>
                    <h1>
                        FOLLOW US
                    </h1>
                    <div id="follow">
                        <img src={fb_img}></img>
                        <img src={tw_img}></img>
                        <img src={in_img}></img>
                    </div>
                    <h1>
                        OUR MISSION
                    </h1>
                    <p>“We are driving the digital transformation by automating monotonous dweller tasks to leave meaningful work for humans.”</p>
                </div>
        </div>
            </div>
            <div className='bottom'>
                <div className='wrapbottom'>
                <div className='first'>
                    <p>© Copyright 2019-2022, rapiddweller GmbH. All rights reserved.

                    </p>
                </div>
                <div className='last'>
                    <div>
                        <a href=''>Privacy Policy</a>
                    </div>
                    <div>
                        <a href=''>Imprint</a>
                    </div>
                    <div>
                    <a href=''>Root</a>
                    </div>
                </div>
                </div>
            </div>

        </div>

    )
}
export default Footer;
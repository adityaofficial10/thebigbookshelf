import React, { useState }  from "react";
import { Link, Navigate} from "react-router-dom";
import instance from '../helpers/api';
import qs from 'querystring';

import '../css/Signup.scoped.css';
import Footer from "./Footer";
import HomeHeader from "./HomeHeader";

function Signup() {

    const [name, setName] = useState("");
    const [uname, setUname] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [redirect, setRedirect] = useState(0);

    async function signUp(e){
        e.preventDefault();
        const data  = qs.stringify({
            username: uname,
            email: email,
            password: pass,
            isBuyer: true,
        });
        var error = true;
        const resp = await instance.post('/auth/register', data, {withCredentials:true});
        console.log(resp.data);
        //console.log(resp.data.errorMessages);
        if (resp.status === 200) {
            if(resp.data.errorMessages.length === 0){
                error = false;
                localStorage.setItem("profile", resp.data['token']);
                setRedirect(1);
            }
        }
        if (error) {
            alert(`Error: ${resp.data.errorMessages[0]}`)
        }
    }
    
    if(!redirect){
        return (
            <div>
                {localStorage.getItem("profile") !== null ? setRedirect(1): console.log("Welcome To BigBookshelf")}
                <HomeHeader />
                <section className="u-align-center u-clearfix u-grey-5 u-section-1" id={"signup"}>
                    <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                        <div className="u-clearfix u-layout-wrap u-layout-wrap-1">
                            <div className="u-layout">
                                <div className="u-layout-row">
                                    <div className="u-align-left u-container-style u-image u-layout-cell u-size-31 u-image-1" data-image-width={2000} data-image-height={1333}>
                                        <div className="u-container-layout u-container-layout-1" />
                                    </div>
                                    <div className="u-align-center-sm u-align-center-xs u-container-style u-layout-cell u-shape-rectangle u-size-29 u-white u-layout-cell-2">
                                        <div className="u-container-layout u-container-layout-2">
                                            <h3 className="u-align-center-lg u-align-center-md u-align-center-xl u-text u-text-default u-text-1">Welcome</h3>
                                            <div className="u-form u-form-1">
                                                <form action="#" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="form" style={{ padding: '10px' }}>
                                                    <div className="u-form-group u-form-group-1">
                                                        <label htmlFor="text-6205" className="u-form-control-hidden u-label" />
                                                        <input type="text" placeholder="Full Name" id="text-6205" value={name} onChange = {(e) =>setName(e.target.value)} name="text-3" className="u-border-1 u-border-black u-input u-input-rectangle u-radius-50 u-text-grey-30 u-white u-input-1" />
                                                    </div>
                                                    <div className="u-form-group u-form-group-2">
                                                        <label htmlFor="text-a4f4" className="u-form-control-hidden u-label" />
                                                        <input type="text" placeholder="Username" id="text-a4f4" value={uname} onChange = {(e) =>setUname(e.target.value)} name="text-2" className="u-border-1 u-border-black u-input u-input-rectangle u-radius-50 u-text-grey-30 u-white u-input-2" />
                                                    </div>
                                                    <div className="u-form-email u-form-group">
                                                        <label htmlFor="email-1136" className="u-form-control-hidden u-label" />
                                                        <input type="email" placeholder="Enter a valid email address" id="email-1136" value={email} onChange = {(e) =>setEmail(e.target.value)}  name="email" className="u-border-1 u-border-black u-input u-input-rectangle u-radius-50 u-text-grey-30 u-white u-input-3" required />
                                                    </div>
                                                    <div className="u-form-group u-form-group-4">
                                                        <label htmlFor="text-1a0e" className="u-form-control-hidden u-label" />
                                                        <input type="password" placeholder="Password" id="text-1a0e" name="text" value={pass} onChange = {(e) =>setPass(e.target.value)} className="u-border-1 u-border-black u-input u-input-rectangle u-radius-50 u-text-grey-30 u-white u-input-4" />
                                                    </div>
                                                    <div className="u-align-center u-form-group u-form-submit">
                                                        <button onClick={signUp} className="u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-1-dark-1 u-palette-1-base u-radius-50 u-btn-1">SignUp</button>
                                                    </div>
                                                    <div className="u-form-send-message u-form-send-success"> Thank you for Signing Up!. </div>
                                                    <div className="u-form-send-error u-form-send-message"> Unable to Signup. Please fix errors then try again. </div>
                                                    <input type="hidden" defaultValue name="recaptchaResponse" />
                                                </form>
                                            </div>
                                            <Link to = "/login" className="u-border-1 u-border-active-palette-1-base u-border-hover-palette-1-base u-btn u-button-style u-login-control u-login-forgot-password u-none u-text-palette-1-base u-btn-2">Already Have an Account ?<br />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );   
    }
    else{
        return (<Navigate to = "/dashboard" />);
    }
}

export default Signup;
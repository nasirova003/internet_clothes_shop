import React from 'react';
import {BsInstagram, BsTwitter} from "react-icons/bs";
import {FaTelegram, FaTelegramPlane} from "react-icons/fa";
import {MdLocationOn} from "react-icons/md";
import {AiFillPhone} from "react-icons/ai";

const Footer = () => {
    return (
        <div id="header">
            <div className="p-5 bg-cyan-950 h-48 ">
                <div className="header text-xl flex justify-around text-blue-50">
                    <h1 className="text-4xl">FASHION STORE</h1>
                     <div>
                         <h2 className="text-2xl p-1 ">Contacts</h2>
                         <hr/>
                         <div className="flex justify-around p-1"><BsInstagram className="m-1"/>  <a href="https://www.linkedin.com/in/asylai-nasirova-7b27b9277/?originalSubdomain=kg">Instagram</a></div>
                         <div className="flex justify-around p-1">< AiFillPhone  className="m-1"/>  <a href="https://www.linkedin.com/in/asylai-nasirova-7b27b9277/?originalSubdomain=kg">500 10 20 03</a></div>
                         <div className="flex justify-around p-1"><FaTelegramPlane className="m-2"/>  <a href="https://www.linkedin.com/in/asylai-nasirova-7b27b9277/?originalSubdomain=kg">Our Telegram</a></div>
                     </div>
                    <div>
                        <h2 className="text-2xl p-1 ">Address</h2>
                        <hr/>
                        <div className="flex justify-around p-1"><MdLocationOn className="m-1"/>  <a href="#"></a>Bishkek/Turusbekova-102</div>
                        <div className="flex justify-around p-1"><MdLocationOn className="m-2"/>  <a href="#">Bishkek/Turusbekova-102</a></div>
                        <div className="flex justify-around p-1"><MdLocationOn className="m-1"/>  <a href="#">Bishkek/Turusbekova-102</a></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYahoo, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className='bg-black'>
            <div className='my-container text-white grid lg:grid-cols-4 md:grid-cols-2 border-b-2'>
                <div className='space-y-4 p-2'>
                    <h2 className='font-semibold text-xl'>JobHunter.com</h2>
                    <p>This is a job seeking website. You can find here all latest job circular in this website.</p>
                    <p className='space-x-2'>
                        <span><FontAwesomeIcon icon={faFacebook} style={{ fontSize: 30, color: "white" }} className="text-center" /></span>
                        <span><FontAwesomeIcon icon={faYahoo} style={{ fontSize: 30, color: "white" }} className="text-center" /></span>
                        <span><FontAwesomeIcon icon={faYoutube} style={{ fontSize: 30, color: "white" }} className="text-center" /></span>
                    </p>
                </div>
                <div className='p-2 space-y-4'>
                    <h2 className='ont-semibold text-xl'>Site Links</h2>
                    <ul>
                        <li><a href="#">Terms And Condition</a></li>
                        <li><a href="#">Content Policy</a></li>
                        <li><a href="#">About US</a></li>
                    </ul>
                </div>
                <div className='p-2 space-y-4'>
                    <h2 className='ont-semibold text-xl'>Job Category</h2>
                    <ul>
                        <li><a href="#">Creative Jobs</a></li>
                        <li><a href="#">Programming Job</a></li>
                        <li><a href="#">Backend Coding</a></li>
                    </ul>
                </div>
                <div className='p-2 space-y-4'>
                    <h2 className='ont-semibold text-xl'>Support</h2>
                    <ul>
                        <li><a href="#">fastJurnal.203@gmail.com</a></li>
                        <li><a href="#">+900 232 433</a></li>
                        <li><a href="#">www.jobhunter.com</a></li>
                    </ul>
                </div>
            </div>
            <h2 className='text-center py-4 text-xl text-slate-300'>@ Sojib || All Rights Are Reserved in 2023</h2>
        </div>
    );
};

export default Footer;
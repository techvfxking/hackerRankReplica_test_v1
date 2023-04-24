import React from 'react'
import "./Content.css"
import img1 from "../../assets/react1st.png";
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/img4.png"
import img5 from "../../assets/react.png"
import img6 from "../../assets/rea.png"
import img7 from "../../assets/last.png"

const Content = () => {
    return (
        <div>
            <p className="tag">
                It’s not a pipeline problem.
                <p className="color">It’s a spotlight problem.</p></p>
            <p className="con">
                Tech hiring needs a reset. From prepping for jobs and practicing coding to running a world-class
                technical interview, give developers the tools they need to showcase their skills, passion, and potential.
            </p>
            <div className="links">
                <b><p>Prep</p>
                    <p>Screen</p>
                    <p>Interview</p></b></div>
            <img src={img2} alt="" className="img2" />

            <div className="content">
                <p id="col">Join the movement.</p>
                <p>Screen on skills.</p>
                <img src={img1} alt="" className="img2" />


                <div className="conn">
                    <p><h1>Leave the binary tree behind.</h1>
                        Build coding questions using our library of dev-friendly
                        content that challenges them to solve the problems they’d actually tackle on the job.</p>
                    <img src={img3} alt="" />
                </div>
                <div className="conn">
                    <p><h1>Focus on what really matters: the code.</h1>
                        Build skills-based coding tests with tech problems a developer would
                        encounter on the job — and hire the team behind your next big idea.</p>
                    <img src={img4} alt="" />

                </div>
                <div className="conn"> <p><h1>Identify top contenders</h1>
                    dentify top contenders and invite them to meet your team using data-driven decisions
                    that help level the playing field for developers everywhere.</p>
                    <img src={img5} alt="" />

                </div>
                <div className="tag" id="size">Interview like it’s <span className="color">2023</span>
                    <p className="con1">Ditch out of reach and out of touch interview questions about golf balls and 747s — and turn off your clunky screen share for good. Code, create, and collaborate with
                        an IDE built to showcase real-world skills in a real-world environment.</p>
                    <button className="Bnt">Learn More</button>
                </div>

            </div>
            <img src={img6} alt="" className="pic" />

            <div className="content1"><p>Every company is a tech company.
                <p className="color"> We’re here to help ‘em all.</p>
                <p className="cont">More than 3,000 tech teams, representing all industries and from countries around the world, trust HackerRank to connect with developers and add cutting-edge skills to their teams.
                    That includes 25% of the Fortune 100 — and that moonshot startup that just came out of stealth.
                </p></p>
                <img src={img7} alt="" />

            </div>
        </div>

    );
}

export default Content
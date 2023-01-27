import React from "react";
import vg from "../assets/2.webp";

import { AiFillAmazonCircle, AiFillYoutube,AiFillInstagram, AiFillGoogleCircle } from "react-icons/ai";
  

import "../styles/Home.scss";
const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>OneApp</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>

        <h1>Who we are?</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
          excepturi! Quasi tenetur odit assumenda aut consequatur eius soluta
          reiciendis unde explicabo obcaecati odio, voluptas earum accusantium
          possimus sapiente, omnis cum quidem, veniam praesentium amet dolorem
          autem. Ex rerum ut earum eius doloribus ipsa consequatur. Sequi saepe
          laudantium repellendus dignissimos, delectus consectetur harum
          deserunt aliquid! Enim ad id necessitatibus dolore quas?
        </p>
        </div>
      </div>
      <div className="home4" id="brand">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay:"0.3s"}}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style={{animationDelay:"0.5s"}}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div style={{animationDelay:"0.7s"}}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
                <div style={{animationDelay:"1s"}}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
      </div>
    </>
  );
};

export default Home;

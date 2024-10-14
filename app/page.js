'use client';
import './main.css';
import Navbar from '../components/Navbar';
import Marquee from "react-fast-marquee";
import gsap from 'gsap';
import Spline from '@splinetool/react-spline';
import { useGSAP } from '@gsap/react';
import Contact from '../components/Contact';

export default function Home()
{
  useGSAP(() => {
    gsap.fromTo(".main-photo-container", {
      top: "100vh",
      opacity: 0,
    },
    {
      top: "0",
      opacity: 1,
      duration: 3,
      ease: "bounce.in"
    });

    gsap.to(".main-photo", {
      opacity: 1,
      duration: 3
    })

    gsap.from(".marquee-container", {
      opacity: 0,
      delay: 3.5,
      duration: 0.5
    });

    gsap.from(".navbar-container-absolute", {
      top: "-10vh",
      duration: 3,
      delay: 2
    });

    gsap.from(".contact-container-absolute", {
      top: "100vh",
      duration: 1,
      delay: 3
    })
  });

    return (
    <>
    <div style={{position: "absolute"}} class="navbar-container-absolute">
      <Navbar />
    </div>
    <div style={{position: "absolute"}} class="contact-container-absolute">
      <Contact />
    </div>

    <main>
      <div class="main-photo-container">
        <div class="main-photo-container2">
          <img src="/me2.png" class="main-photo" />
        </div>
      </div>

      <div class="logo-cover-container">
        <div class="logo-cover"></div>
      </div>
      <div class="marquee-container">
        <div class="marquee-container2">
          <Marquee speed="200" className="marquee" gradient={true} gradientColor="#ECDFCC" gradientWidth={50}>
            FRONTEND-DEVELOPER&nbsp;<p class="hollowed-text-in-marquee">JAVA-PROGRAMMER</p>&nbsp;CREATIVE-DESIGNER&nbsp;<p class="hollowed-text-in-marquee">BACKEND-DEVELOPER</p>&nbsp;
          </Marquee>
        </div>
      </div>
      <Spline scene="https://prod.spline.design/S2PJmVnjlki22IM9/scene.splinecode" />
    </main>
    </>
  );
}
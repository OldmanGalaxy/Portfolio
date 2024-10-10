'use client';
import './main.css';
import Navbar from '../components/Navbar';
import Spline from '@splinetool/react-spline/next';
import Marquee from "react-fast-marquee";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

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
  });

    return (
    <>
    <div style={{position: "absolute"}}>
      <Navbar />
    </div>
    
    <main>
      <div class="main-photo-container">
        <div class="main-photo-container2">
          <img src="/me2.png" class="main-photo" />
        </div>
      </div>
      <div class="marquee-container">
        <div class="marquee-container2">
          <Marquee speed="200" className="marquee" gradient={true} gradientColor="#ECDFCC" gradientWidth={50}>
            FRONTEND-DEVELOPER&nbsp;<p class="hollowed-text-in-marquee">JAVA-PROGRAMMER</p>&nbsp;CREATIVE-DESIGNER&nbsp;<p class="hollowed-text-in-marquee">BACKEND-DEVELOPER</p>&nbsp;
            </Marquee>
        </div>
      </div>
      <Spline scene="https://prod.spline.design/QwkZoawDvcsBCTlq/scene.splinecode" />
    </main>
    </>
  );
}
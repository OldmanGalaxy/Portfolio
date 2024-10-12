'use client';
import Spline from '@splinetool/react-spline';
import './about.css'
import Navbar from '../../components/Navbar'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function About() {
    useGSAP(() => {
        gsap.from(".background-container", {
            duration: 3,
            delay: 3,
            top: "-100vh"
        })

        gsap.from(".logo-cover-container", {
            duration: 3,
            delay: 3,
            top: "-100vh"
        })
    })

    return (
        <>
        <div style={{position: "absolute"}}>
            <Navbar />
        </div>
        <div class="logo-cover-container">
            <div class="logo-cover"></div>
        </div>
        <main class="background-container">
            <Spline scene="https://prod.spline.design/fQYIcENmk6zyyPaH/scene.splinecode" class="bigger-screen" />
            <Spline scene="https://prod.spline.design/0ppwAgiIuJIZblf1/scene.splinecode" class="smaller-screen" />
        </main>
        </>
  );
}
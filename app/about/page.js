'use client';
import Spline from '@splinetool/react-spline';
import './about.css'
import Navbar from '../../components/Navbar'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import MyCard from '../../components/MyCard';

export default function About() {

    let height = window.innerHeight;
    let width = window.innerWidth;

    useGSAP(() => {
        if (width > height)
        {
            gsap.from(".background-container", {
                duration: 3,
                delay: 1,
                top: "-100vh"
            });

            gsap.from(".logo-cover-container", {
                duration: 3,
                delay: 1,
                top: "-100vh"
            });
        }
        else
        {
            gsap.from(".background-container", {
                duration: 3,
                delay: 1,
                right: "-100vw"
            });

            gsap.from(".logo-cover-container", {
                duration: 3,
                delay: 1,
                right: "-100vw"
            });
        }

        gsap.from(".navbar-container-absolute", {
            top: "-10vh",
            duration: 2,
            delay: 2
        });
    })

    return (
        <>
        <div style={{position: "absolute"}} class="navbar-container-absolute">
            <Navbar />
        </div>
        <div style={{position: "absolute"}}>
            <MyCard />
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
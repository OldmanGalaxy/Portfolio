'use client';
import Spline from '@splinetool/react-spline';
import './about.css'
import Navbar from '../../components/Navbar'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import MyCard from '../../components/MyCard';
import * as React from 'react';

export default function About() {

    let height = 0;
    let width = 0;
    React.useEffect(() => {
        height = window.innerHeight;
        width = window.innerWidth;
    }, []);

    useGSAP(() => {

        gsap.from(".navbar-container-absolute", {
            top: "-10vh",
            duration: 3,
            delay: 3
        });

        if (width > height)
        {
            gsap.from(".mycard-container", {
                left: "-100vw",
                duration: 3,
                delay: 3
            });

            gsap.from(".background-container", {
                top: "-100vh",
                duration: 3,
                delay: 1
            });

            gsap.from(".logo-cover-container", {
                top: "-100vh",
                duration: 3,
                delay: 1
            })
        }
        else
        {
            gsap.from(".background-container", {
                right: "-100vw",
                duration: 3,
                delay: 1
            });

            gsap.from(".mycard-container", {
                top: "100vh",
                duration: 3,
                delay: 3
            });
        }
    })

    return (
        <>
        <div style={{position: "absolute"}} className="navbar-container-absolute">
            <Navbar />
        </div>
        <div style={{position: "absolute"}} className="mycard-container">
            <MyCard />
        </div>

        <div className="logo-cover-container">
            <div className="logo-cover"></div>
        </div>
        <main className="background-container">
            <div className="bigger-screen-container">
                <Spline scene="https://prod.spline.design/fQYIcENmk6zyyPaH/scene.splinecode" className="bigger-screen" />
            </div>
            <div className="smaller-screen-container">
                <Spline scene="https://prod.spline.design/aFcTWLvW-tFtkroN/scene.splinecode" className="smaller-screen" />
            </div>
        </main>
        </>
  );
}
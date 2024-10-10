'use client';
import './projects.css';
import Navbar from '../../components/Navbar';
import Spline from '@splinetool/react-spline/next';

export default function Projects()
{
    return (
    <>
    <div style={{position: "absolute"}}>
      <Navbar />
    </div>
    
    <main>
      <Spline scene="https://prod.spline.design/QwkZoawDvcsBCTlq/scene.splinecode" />
    </main>
    </>
  );
}
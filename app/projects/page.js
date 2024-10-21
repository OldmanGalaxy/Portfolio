'use client';
import './projects.css';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import Spline from '@splinetool/react-spline/next';

export default function Projects()
{
    return (
    <>
    <div style={{position: "absolute"}}>
      <Navbar />
    </div>
    
    <div className="logo-cover-container">
      <div className="logo-cover"></div>
    </div>
      <Card />
    <main>
      <Spline scene="https://prod.spline.design/XnfIOSFP8nexvwUR/scene.splinecode" />
    </main>
    </>
  );
}
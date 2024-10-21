import './myCard.css';

export default function MyCard() {
    return (
        <>
        <div className="card-container">
            <div className="image-container">
                <div className="image-container2">
                    <img src="/me.jpg" alt="Purv Kabaria" className="my-image"/>
                </div>
            </div>
            <div className="text-container">
                <p className="outlined-text">I am currently a <br /> </p>
                2nd year student <br />
                <p className="outlined-text">pursuing my B.Tech <br />
                degree in <br /> </p>
                Computer Science <br />
                and Engineering <br />
                <p className="outlined-text">from <br /> </p>
                Sardar Vallabhbhai <br />
                National Institute <br />
                of Technology <br />
            </div>
        </div>
        </>
    );
}
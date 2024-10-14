import './myCard.css';

export default function MyCard() {
    return (
        <>
        <div class="card-container">
            <div class="image-container">
                <div class="image-container2">
                    <img src="/me.jpg" alt="Purv Kabaria" class="my-image"/>
                </div>
            </div>
            <div class="text-container">
                <p class="outlined-text">I am currently a <br /> </p>
                2nd year student <br />
                <p class="outlined-text">pursuing my B.Tech <br />
                degree in <br /> </p>
                Computer Science <br />
                and Engineering <br />
                <p class="outlined-text">from <br /> </p>
                Sardar Vallabhbhai <br />
                National Institute <br />
                of Technology <br />
            </div>
        </div>
        </>
    );
}
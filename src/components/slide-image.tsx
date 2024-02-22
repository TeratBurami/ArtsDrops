import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function SlideShow() {

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
    }

    const slideImages = [
        {
            url: 'https://i.pinimg.com/474x/29/bf/56/29bf566d57f8cff628f35c2715d9f299.jpg'
        },
        {
            url: 'https://i.pinimg.com/564x/8c/67/8c/8c678cca5fa8e5647018c8a229154894.jpg'
        },
        {
            url: 'https://i.pinimg.com/474x/09/d8/45/09d845469b9ff9343ca3c4152e9b630d.jpg'
        },
    ];

    return (
        <Slide>
            {slideImages.map((slideImage, index) => (
                <div key={index}>
                    <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>

                    </div>
                </div>
            ))}
        </Slide>
    )
}
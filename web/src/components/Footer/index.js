import React from 'react';
import kerstVideo from '../../assets/img/video.mp4'

import './index.scss';

const Footer = () => {
    return (
        <div>
            <section>
                <div className="Footer">
                    <video controls>
                        <source src={kerstVideo}
                                type="video/mp4"/>
                    Sorry, your browser doesn't support embedded videos.
                    </video>
                    <p>Follow <a href="https://www.instagram.com/5voor12.delft/" target="_blank" rel="noopener noreferrer">@5voor12.delft</a> on instagram to stay up to date about the progress of <i>Turn us ON</i> and other related projects!</p>
                </div>
            </section>
        </div>
    );
};

export default Footer;
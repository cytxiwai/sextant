import React, {Component}from 'react';
import './Banner.css';

class Banner extends Component {
    render() {
        return (
            <div className="Banner m-2 w-80 bg-warning text-white rounded">
                <img src="./image/sextant-logo.png" alt="" className="BannerLogo w-25 p-5 pt-2"/>
                <h1>{this.props.bannerText}</h1>
            </div>
        );

    }
}

export default Banner;
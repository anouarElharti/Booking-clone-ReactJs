import React from 'react';
import './featuredProperties.css';

const FeaturedProperties = () => {
    return (
        <div className="fpList">
            <div className="fpItem">
                <img className="fpImg" src="https://cf.bstatic.com/xdata/images/hotel/max500/103951224.jpg?k=03736dd4e1e89c1132e4957149e394d01ac6e8f64f4b09e30ade97a6176f0640&o=" alt="" />
                <span className="fpName">Aparthotel Stare Miasto</span>
                <span className="fpCity">Madrid</span>
                <span className="fpPrice">Starting from $120</span>
                <div className="fpRating">
                    <button>8.4</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img className="fpImg" src="https://cf.bstatic.com/xdata/images/hotel/max500/38437078.jpg?k=241519692574af90306f0dbec0121eacfddc9a183df3ea34a7b7c8f2b4f5febb&o=" alt="" />
                <span className="fpName">Unique Design Apartments</span>
                <span className="fpCity">Lisbon</span>
                <span className="fpPrice">Starting from $270</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img className="fpImg" src="https://cf.bstatic.com/xdata/images/hotel/max500/74594395.jpg?k=d5a71c0578774c302d2b8854482beaa8785077c616f956aac74766124023a319&o=" alt="" />
                <span className="fpName">Sun Spalato Views</span>
                <span className="fpCity">Split</span>
                <span className="fpPrice">Starting from $410</span>
                <div className="fpRating">
                    <button>9.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img className="fpImg" src="https://cf.bstatic.com/xdata/images/hotel/max500/112346687.jpg?k=b0c1b36d31151ed463b8960c21e868584043522f4f380c0f382994d4b3e7ada2&o=" alt="" />
                <span className="fpName">A casa di Edi</span>
                <span className="fpCity">Rome</span>
                <span className="fpPrice">Starting from $520</span>
                <div className="fpRating">
                    <button>10</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}
export default FeaturedProperties;
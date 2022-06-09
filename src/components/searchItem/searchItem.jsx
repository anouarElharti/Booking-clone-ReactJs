import './searchItem.css'

const SearchItem = () => {
    return (
        <div className="searchedItem">
            <img className="searchedItemImg" src="https://cf.bstatic.com/xdata/images/hotel/square600/121557030.webp?k=d18e21ce97b0a3ff918a777e04fe598f8c4c2ad20116cdf881d90812a8192e2d&o=&s=1"/>
            <div className="searchedItemDesc">
                <h1 className="siTitle">Odalys City Paris MontmartreOpens in new window</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Travel Sustainable property</span>
                <span className="siSubtitle">Standard Studio (2 Adults)</span>
                <span className="siFeatures">Entire studio • 1 bathroom • 19m²</span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
            </div>
            <div className="searchedItemDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
    )
}
export default SearchItem;
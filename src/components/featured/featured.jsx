import './featured.css';

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/city/square250/674952.webp?k=d13912d465e21af2ec73963f581c651bd5e98ebe8dd1a46a234bf1798c054c36&o=" alt="" />
                <div className="featuredTitles">
                    <h1>Lisbon</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/city/square250/681777.webp?k=a0dff5d5a41b8e0e548473039e2a15c5a86e396b7e54ef6ed8a4dec4ad903ea1&o=" alt="" />
                <div className="featuredTitles">
                    <h1>Rome</h1>
                    <h2>98 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/city/square250/613088.webp?k=a370ac3fb385fb211b35a79a42b0e968ddb458be37108af476c558bf4cedc1f3&o=" alt="" />
                <div className="featuredTitles">
                    <h1>Paris</h1>
                    <h2>187 properties</h2>
                </div>
            </div>
        </div>
    )
}
export default Featured;
import React from 'react'
import './App.css'

const Section1 = () => {
  return (
    <section className='section1'>
        <div className='category'>
            <div className="categoryhead">
                <h1>Shop By Category</h1>
                <p>Express your style with our standout collection—fashion meets sophistication.</p>
            </div>
            <div className="categories">
                <div className="categoriesdiv">
                    <div><img src="https://demo-milano.myshopify.com/cdn/shop/files/main_clt3.webp?v=1745943972&width=360" height="100%" width="100%" alt="" /></div>
                    <h4>Demin</h4>
                </div>
                <div className="categoriesdiv">
                    <div><img src="https://demo-milano.myshopify.com/cdn/shop/files/main_clt2.webp?v=1745943972&width=360" alt="" height="100%" width="100%" /></div>
                    <h4>Blazers</h4>
                </div>
                <div className="categoriesdiv">
                    <div><img src="https://demo-milano.myshopify.com/cdn/shop/files/main_clt1.webp?v=1745943972&width=360" alt="" height="100%" width="100%" /></div>
                    <h4>Crop-top</h4>
                </div>
                <div className="categoriesdiv">
                    <div><img src="https://demo-milano.myshopify.com/cdn/shop/files/main_clt4.webp?v=1745943972&width=360" alt="" height="100%" width="100%" /></div>
                    <h4>Sweaters</h4>
                </div>
                <div className="categoriesdiv">
                    <div><img src="https://demo-milano.myshopify.com/cdn/shop/files/main_clt5.webp?v=1745943972&width=360" alt="" height="100%" width="100%"/></div>
                    <h4>T-Shirts</h4>
                </div>
            </div>
        </div>
        <div className="morecategory">
            <div className="morecategory1">
                <div>
                    <p>Save 30-50% on BLAZES</p>
                    <h1>Colour Spotlight</h1>
                    <button className='whitebtn'>Shop Now</button>
                </div>
            </div>
            <div className="morecategory1">
                <div>
                    <p>LIMITED TIME ONLY</p>
                    <h1>Confident Looks</h1>
                    <button className='whitebtn'>Shop Now</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section1
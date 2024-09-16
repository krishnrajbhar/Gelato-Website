import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [isOpen,setIsOpen] = useState(false);
    const toggleMenu= () => {
        setIsOpen(!isOpen);
    };
  return (
<nav className='navbar'>
<header>
    <a>FREE SHIPPING for orders over $300. Order today</a>
    <div className='icon'>
         <img src='icon3.png'/ >
    </div>
</header>

<menu>
    <div className='menu-child-1'>
        <img src='gelato.svg'></img>
    </div>
    <div className='menu-child2'>
    <div className='menu-child-2'>
        <div className='nav1'><h5>Contact Us</h5></div>
        <div className='nav2'><h5>IN/INR</h5></div>
        <div className='nav3'><h5>Cart</h5></div>
        <div className='nav4'><h5>Sign in</h5></div>
        <div className='nav5'><h5>Sign up for free</h5></div>
    </div>
    </div>
</menu>
{/* menu 2 section Start from here */}
<div className='menu2'>
    <div className='menu2-child-1'>
        <div className='nav11'><h5>Products</h5></div>
        <div className='nav22'><h5>Start selling</h5></div>
        <div className='nav33'><h5>Tools and apps</h5></div>
        <div className='nav44'><h5>Pricing</h5></div>
        <div className='nav55'><h5>Resources</h5></div>
        <div className='nav66'><h5>Prosellers</h5></div>
        <div className='nav77'><h5>GelatoConnect</h5></div>
    </div>
    </div>

{/* hero section */}

<div className='hero-section'>
    <div className='hero-main'>
        <div className='hero-main-child1'>
            <div className='hero-para1'>Print on demand for your ecommerce business</div>
            <div className='hero-para2'>
                <div className='para-child1'>
                    Sign up for free and only pay for what you sell   
                </div>
                <div className='para-child2'>
                     Turn your passion into profit with the world's largest <a>print on demand </a> network
                </div>
                <div className='para-child3'>
                    <div className='btn1'><h5>Get started For Free</h5></div>
                    <div className='btn2'><h5>See our Products</h5></div>
                </div>
                <div className='para-child4'>
                    <img src='photo2.svg'/>
                </div>
                <div className='para-child5'>
                    <img src='photo3.svg'/>
                    <img src='photo3.svg'/>
                    <img src='photo3.svg'/>
                    <img src='photo3.svg'/>
                    <img src='photo3.svg'/> 
                    <span> 4.8/5</span>
                </div>
                <div className='para-child6'>based on 887 reviews</div>
            </div>
        </div>
        <div className='hero-main-child2'>
            <img src='photo1.webp'/>
        </div>
    </div>    
</div>


{/* feature section */}

<div className='feature-section1'>
    <div className='feature-child'>
        <div className='feature-child-1'>
            <div className='para1'>90%</div>
            <div className='para1'>of all orders are produced</div>
            <div className='para1'>locally</div>
        </div>
        <div className='feature-child-2'>
            <div className='para1'>90%</div>
            <div className='para1'>of orders  arrive within 5 days</div>
            <div className='para1'>of ordering</div>
        </div>
        <div className='feature-child-3'>
            <div className='para1'>140+</div>
            <div className='para1'>print providers across 32</div>
            <div className='para1'>countries</div>
        </div>
    </div>
</div>

<div className='feature-section2'>
    <div className='feature-section-child-1'>
        <h1>Why choose Gelato</h1>
    </div>
    <div className='feature-section-child-2'>
        <div className='feature1'>
            <img src='photo4.webp'/>
        </div>
        <div className='feature2'>
            <h1>World's largest print-on-demand network</h1>
            <p>140+ print partners in 32 countries Gelato is a truly global service.</p>
            <h1>Sell globally, produce locally</h1>
            <p>Your products are produced close to your customers, whenever they are.</p>
            <h1>100% free editing tools</h1>
            <p>Create oyur custom products using our suit of <a>free tools</a></p>
            <h1>60+ logistic partners</h1>
            <p>Our global network of logistics partners ensures your products are delivered fast.</p>
            <h1>High quality products</h1>
            <p>We partner with the world's leading brands to ensure the best quality products.</p>
            <h1>Endless creativity with Shutterstock Images</h1>
            <p>Access millions of Images and graphics to create unique products you can sell in your store.</p>
            <h1>1-click intigration to the leading ecommerce platforms</h1>
            <p>Connect your store to Gelato using <a>our integration</a> with <a>Shopify.Etsy</a> and more.</p>
        </div>
    </div>
       
</div>

<div className='feature-section3'>
    <div className='div1'>
        <div className='div1-child-1'>For print on demand sellers</div>
        <div className='div1-child-2'>Accelerate
        <p>business growth</p>
        <p>with innovative</p>
        <p>design tools and</p>
        <p>apps</p></div>
        <div className='div1-child-3'>See how our cutting-edge solutions can help you reach new customers and maximize your profits.</div>
        <div className='div1-child-4'>
            <button>Get started</button>
        </div>
    </div>
    <div className='div2'>
        <img src='photo5.gif'/>
    </div>
</div>
<div className='feature-section4'>
    <div className='div1'>
        <img src='photo6.gif'/>
    </div>
    <div className='div2'>
        <div className='div2-child-1'>For print producers</div>
        <div className='div2-child-2'>GelatoConnect</div>
        <div className='div2-child-3'><p>Elevate efficiency,cut costs,and seamlessly</p> <p>automate with our all in one software solution</p> for the print industry</div>
        <div className='div2-child-4'>
            <button>Learn more</button>
        </div>
    </div>
</div>
<div className='feature-section5'>
    <div className='div1'>
        <div className='child-1'>
            Meet
            <p>GelatoConnect at</p>
            Printing United
        </div>
        <div className='child-2'>Meet us at printing United from September 10-12 in Las Vegas. Book your <p>meeting slot to discover the innovative ways GelatoConnect is transforming</p> the landscape and success for businesses like yours.</div>
        <div className='child-3'>
            <button>Book a meeting</button>
        </div>
    </div>
    <div className='div2'>
        <img src='photo7.webp'/>
    </div>
</div>
<footer>
    <div className='div1'>
        <div className='child-1'></div>
        <div className='child-2'>
            <img src='gelato-white.svg'/>
        </div>
        <div className='child-3'><span>Find Gelato on:</span></div>
        <div className='child-4'></div>
    </div>
    <div className='div2'>
    <div className='child-1'></div>
    <div className='child-2'>
        <div className='subchild-1'>
            Gelato has created world's largest network for local production and distribution of customized products. Together we bring creativity to life-and into business.
        </div>
        <div className='subchild-2'>
            <button>Get started</button>
        </div>
        <div className='subchild-3'>Get the app</div>
        <div className='subchild-4'>
            <img src='app-store.svg'/>
            <img src='google-play.svg'/>
        </div>
    </div>
    <div className='child-3'>
        <div className='subchild-1'>Print on demand</div>
        <div className='subchild-2'>
            <p>What is print on demand?</p>
            <p>Product Catalog</p>
            <p>Shipping and delivery</p>
            <p>Dropshipping Products</p>
            <p>Pro sellers</p>
            <p>White label products</p>
            <p>Return policy</p>
            <p>Global, yet local</p>
            <p>Sustainability</p>
            <p>Support</p>
        </div>
    </div>
    <div className='child-4'>
    <div className='subchild-1'>Integrations</div>
        <div className='subchild-2'>
            <p>Shopify</p>
            <p>Etsy</p>
            <p>WooCommerce</p>
            <p>Wix</p>
            <p>Squarespace</p>
            <p>BigCommerce</p>
            <p>API</p>
        </div>
    </div>
    <div className='child-5'>
    <div className='subchild-1'>Start selling</div>
        <div className='subchild-2'>
            <p>Embroidery</p>
            <p>Print on demand t-shirts</p>
            <p>Print on demand hoodies</p>
            <p>Print on demand posters</p>
            <p>Print on demand canvas</p>
            <p>Print on demand calendars</p>
            <p>Print on demand mugs</p>
            <p>Custom products</p>
            <p>Custom clothing</p>
            <p>Custom merchandise</p>
            <p>Custom phone cases</p>
            <p>Print on demand Europe</p>
            <p>Print on demand UK</p>
            <p>Print on demand France</p>
            <p>Print on demand Canada</p>
            <p>Merch maker</p>
        </div>
    </div>
    <div className='child-6'>
    <div className='subchild-1'>Company</div>
        <div className='subchild-2'>
            <p>GelatoConnect</p>
            <p>About Gelato</p>
            <p>Learnship team</p>
            <p>Board & Inverstors</p>
            <p>Newsroom</p>
            <p>Blog</p>
            <p>Customer Stories</p>
            <p>Partners</p>
            <p>Careers</p>
            <p>Affiliates program</p>
        </div>
    </div>
    <div className='child-7'></div>
    </div>
</footer>
<div className='navbar-brand'>

<button className='menu-toggle' onClick={toggleMenu}>
<div className='toggle'></div>
<div className='toggle'></div>
<div className='toggle'></div>
</button>
</div>

</nav>
)
}

export default Navbar
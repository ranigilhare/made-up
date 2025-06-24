import React from 'react'
import Layout from '../common/Layout'
import HeroOneImage from '../../assets/images/shop-items/hero-one.jfif'
import HeroTwoImage from '../../assets/images/shop-items/hero-two.jfif'
import NewsletterImage from '../../assets/images/shop-items/jacket-one.jfif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LatestCollection from './LatestCollection'
import Testimonials from './Testimonials'
import ItemCategoryCarousel from './ItemCategoryCarousel'

const Home = () => {
  return (
    <>
        <Layout>
          <div className='container-fluid g-0'>
            <ItemCategoryCarousel/>
            <section className='hero'>
              <div className='row g-0 mb-2 position-relative' style={{
                backgroundImage: `url(${HeroOneImage})`,
                height: '700px',
                width: '100%',
                maxWidth: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                overflow: 'hidden'
                }}>
                
                <div className="hero-text text-one">
                  <p>Clothes that <span className="highlight">respire</span></p>
                </div>
                <div className="hero-text text-two">
                  <p>for men who <span className="highlight">aspire</span></p>
                </div>
                <div className='hero-btn position-absolute' style={{zIndex: 1}}>
                  <button className='btn btn-primary'>Browse Collections</button>
                </div>
              </div>
              <div className='row g-0 '>
                <div className='col-md-6 pe-md-2 position-relative' style={{
                  backgroundImage: `url(${HeroTwoImage})`,
                  height: '700px',
                  // width: '50%',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover'
                  }}>
                    <div className="hero-text text-three">
                      <p><span className="highlight">Summer </span>is here and</p>
                    </div>
                    <div className="hero-text text-four">
                      <p>so is our <span className="highlight">collection</span></p>
                    </div>
                </div>
                <div className="col-md-6 ps-md-2 d-flex flex-column" style={{ gap: '10px', height: '700px' }}>
                  <div className='position-relative'
                    style={{
                      flex: 1,
                      backgroundImage: `url(${HeroOneImage})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      // backgroundPosition: 'center',
                    }}
                  >
                    <div className="hero-text text-five">
                      <p><span className="highlight">Wrinkle-free </span>t-shirts</p>
                    </div>
                  </div>
                  <div className='position-relative'
                    style={{
                      flex: 1,
                      backgroundImage: `url(${HeroTwoImage})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      // backgroundPosition: 'center',
                    }}
                  >
                    <div className="hero-text text-six">
                      <p><span className="highlight">Stain-free </span>denim-shirts</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <LatestCollection />
            <Testimonials />
            <section className='newsletter-section'>
              <div className='row g-0 position-relative' style={{
                backgroundImage: `url(${NewsletterImage})`,
                height: '300px',
                // width: '100%',
                maxWidth: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                overflow: 'hidden',
                backgroundPosition: 'center'
                }}>
                <div className='d-grid position-absolute newsletter-content'>
                  <h5 className='text-uppercase text-white'>Get Coupons & Style Guides</h5>
                  <span className='text-white'>Subscribe to our Newsletter</span>
                  <div className='d-flex mt-3'>
                    <input type="text" name="email" id="email" placeholder="E-mail" className='me-1' />
                    <button className='btn btn-primary text-uppercase'>Subscribe</button>
                  </div>
                </div>
                <div className='d-flex position-absolute location-content'>
                  <FontAwesomeIcon icon="location-dot"  className="ms-auto p-1 text-white self-align-center"/>
                  <span className='text-white text-uppercase'>Locate Us</span>
                </div>
              </div>
            </section>
          </div>
        </Layout>
    </>
  )
}

export default Home

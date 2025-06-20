import React from 'react'
import JacketOneImage from '../../assets/images/shop-items/jacket-one.jfif'
import JacketTwoImage from '../../assets/images/shop-items/jacket-two.jfif'
const LatestCollection = () => {
    return (
        <>
            <section className='latest-collection p-5'>
              <div className="d-flex align-items-center my-4">
                <div className="flex-grow-1 border-top"></div>
                <div className="px-3 text-uppercase text-center">Latest Collections</div>
                <div className="flex-grow-1 border-top"></div>
              </div>  
               
              <div className="collection-box">
                <div>
                    <img src={JacketOneImage} alt="" />
                    <div className='d-grid mt-3 text-small'>
                        <span>Printed Polo T-Shirt</span>
                        <span className='primary-text'>1,499.00</span>
                    </div>
                </div>
               <div>
                    <img src={JacketTwoImage} alt="" />
                    <div className='d-grid mt-3 text-small'>
                        <span>Printed Polo T-Shirt</span>
                        <span className='primary-text'>1,499.00</span>
                    </div>
                </div>
                <div>
                    <img src={JacketOneImage} alt="" />
                    <div className='d-grid mt-3 text-small'>
                        <span>Printed Polo T-Shirt</span>
                        <span className='primary-text'>1,499.00</span>
                    </div>
                </div>
                <div>
                    <img src={JacketTwoImage} alt="" />
                    <div className='d-grid mt-3 text-small'>
                        <span>Printed Polo T-Shirt</span>
                        <span className='primary-text'>1,499.00</span>
                    </div>
                </div>
                <div>
                    <img src={JacketOneImage} alt="" />
                    <div className='d-grid mt-3 text-small'>
                        <span>Printed Polo T-Shirt</span>
                        <span className='primary-text'>1,499.00</span>
                    </div>
                </div>
              </div>
            </section>
        </>
    )
}

export default LatestCollection
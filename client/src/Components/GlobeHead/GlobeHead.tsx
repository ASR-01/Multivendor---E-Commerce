import React from 'react'
import './GlobeHead.css'
export default function GlobeHead() {
  return (
    <div className='GlobeHead'>
      <div className='Globe'>
        <img src='/Globe.webp' alt='globe' className='GlobeSvg' />
      </div>
      <div className='GlobeText'>
        <div className='GlobeHeadTitle'> 
          Discover why millions of entrepreneurs chose ShopMe to build their business —<br></br> <span className='GlobalHighlight'>from hello world to IPO.</span>
        </div>
        <div className="GlobePointers">
          <div className="GlobeTextFirst">
            <div className="GlobePoint">
              <div className="GlobalLineMarker"></div>
              <div className="GlobalPointWrapper">
                <div className="GlobePointHead">
                  Millions
                </div>
                <div className="GlobePointSubHead">
                of merchants worldwide
                </div>
              </div>
            </div>
            <div className="GlobePoint">
                <div className="GlobalLineMarker"></div>
                <div className="GlobalPointWrapper">
                  <div className="GlobePointHead">
                    10%
                  </div>
                  <div className="GlobePointSubHead">
                    of total US ecommerce
                  </div>
                </div>
            </div>
          </div>
          <div className="GlobeTextSecond">
            <div className="GlobePoint">
            <div className="GlobalLineMarker"></div>
                  <div className="GlobalPointWrapper">
                    <div className="GlobePointHead">
                      170+
                    </div>
                    <div className="GlobePointSubHead">
                      countries represented
                    </div>
                  </div>
            </div>
            <div className="GlobePoint">
                    <div className="GlobalLineMarker"></div>
                    <div className="GlobalPointWrapper">
                      <div className="GlobePointHead">
                        $44TCr
                      </div>
                      <div className="GlobePointSubHead">
                        global economic activity
                      </div>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

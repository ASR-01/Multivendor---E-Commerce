import React from 'react'
import './Card.css'
export default function Card() {
  return (
    <div className='Cards'>
      <div className='Card'>
        <div className="CardSvg">
            <img src='/Infinity.svg'></img>
        </div>
        <div className="CardTitle">
            Plus
        </div>
        <div className="CardSubTitle">
            A commerce solution for growing digital brands
        </div>
      </div>
      <div className='Card'>
        <div className="CardSvg">
            <img src='/partners.svg'></img>
        </div>
        <div className="CardTitle">
            Partners
        </div>
        <div className="CardSubTitle">
            Offer your expertise to ShopMe merchants all over the world
        </div>
      </div>
      <div className='Card'>
        <div className="CardSvg">
            <img src='/dev.svg'></img>
        </div>
        <div className="CardTitle">
            Developers
        </div>
        <div className="CardSubTitle">
            Build the future of commerce with the ShopMe's powerful API
        </div>
      </div>
      <div className='Card'>
        <div className="CardSvg">
            <img src='/creators.svg'></img>
        </div>
        <div className="CardTitle">
            Creators
        </div>
        <div className="CardSubTitle">
            Turn followers into customers with commerce tools for creators
        </div>
      </div>
    </div>
  )
}

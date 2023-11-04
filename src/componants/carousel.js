import React from 'react'
import worldmap from './images/worldmap.jpg'
import newsdogwall from './images/newsdogwall.jpg'
import newscategory from './images/newscategory.jpg'
import style from '../modules/carousel.module.css'

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" >
        <div className="carousel-inner" style={{height:"40rem"}}>
          <div className="carousel-item active" style={{height:"40rem"}}>
            <img src={newsdogwall} className={`d-block  ${style.bgImg}`} alt="..."/>
            <div className={style.shadow}></div>
            <div className="container">
              <div className="carousel-caption text-start" >
                <h1 className={style.text} >TOP HEADLINES.</h1>
                <p className={style.Ptext}>We sniff out top headlines for you.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item" style={{height:"40rem"}}>
            <img src={worldmap} className={`d-block  ${style.bgImg}`} alt="..." />
            <div className={style.shadow}></div>
            <div className="container">
              <div className="carousel-caption">
                <h1 className={style.text}>WORLDWIDE.</h1>
                <p className={style.Ptext}>We are providing you worldwide top latest news.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item" style={{height:"40rem"}}>
            <img src={newscategory} className={`d-block  ${style.bgImg}`} alt="..." />
             <div className={style.shadow}></div>
            <div className="container">
              <div className="carousel-caption text-end">
                <h1 className={style.text}>ALL-ROUNDER.</h1>
                <p className={style.Ptext}>Here you can read different types news at a one place on a one click.</p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  )
}

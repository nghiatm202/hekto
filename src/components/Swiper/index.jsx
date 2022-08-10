import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'
import assets from '../../assets'
import '@splidejs/react-splide/css'
import './style.scss'
import { Button } from '../Button'

export function Swiper(props) {
    return (
        <Splide tag="section" options={{
            arrows: false,
            type: 'fade',
            rewind: true,
            autoplay: true,
        }}>
            <SplideSlide>
                <img srcSet={`${assets.heroImage} 2x`} alt="hero" />
                <div className='swiperContent'>
                    <p className='swiperHighlight'>Best Furniture For Your Castle....</p>
                    <h2>New Furniture Collection Trends in 2022</h2>
                    <p className='swiperDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                    <Button content='shop now' />
                </div>
            </SplideSlide>
            <SplideSlide>
                <img srcSet={`${assets.heroImage} 2x`} alt="hero" />
                <div className='swiperContent'>
                    <p className='swiperHighlight'>Best Furniture For Your Castle....</p>
                    <h2>New Furniture Collection Trends in 2023</h2>
                    <p className='swiperDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                    <Button content='shop now' />
                </div>
            </SplideSlide>
            <SplideSlide>
                <img srcSet={`${assets.heroImage} 2x`} alt="hero" />
                <div className='swiperContent'>
                    <p className='swiperHighlight'>Best Furniture For Your Castle....</p>
                    <h2>New Furniture Collection Trends in 2024</h2>
                    <p className='swiperDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                    <Button content='shop now' />
                </div>
            </SplideSlide>
        </Splide>

    )
}
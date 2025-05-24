"use ckient"
import React from 'react'
import AboutContent from './AboutComponents/AboutContent'
import WhyChoose from './AboutComponents/WhyChoose'
import CustomerReview from '../common/CustomerReview'



export default function About() {
    return (
        <>
            <section className='max-w-full'>
                <AboutContent />
                <WhyChoose />
                <div className='mb-10'>
                    <CustomerReview />
                </div>
            </section>

        </>
    )
}

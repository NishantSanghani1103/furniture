import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from "react-icons/fa";
export default function frequently_questions() {
    return (
        <>
            <section className='max-w-full my-8' id='faq'>
                <div className='max-w-[1320px] lg:mx-auto mx-2' id='faq-mid'>
                    <div className='w-full text-center' id='faq-mid-heading'>
                        <h2 className=' text-4xl font-semibold'>Frequently Questions</h2>
                        <div className='flex items-center justify-center gap-1 my-3 '>

                            <Link href={'/'} className='text-sm hover:text-[#C09578]'>Home</Link>
                            <FaAngleRight className='text-[#C09578]' />
                            <Link href={'/Frequently Questions'} className='text-sm text-[#C09578]'> Frequently Questions </Link >

                        </div>
                        <hr className='border-gray-200 my-5' />
                    </div>

                    
                </div>
            </section>
        </>
    )
}

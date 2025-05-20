import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from "react-icons/fa";
export default function page() {
    return (
        <>
            <section className='max-w-full my-8' id='cart'>
                <div className='max-w-[1320px] lg:mx-auto mx-2' id='cart-mid'>
                    <div className='w-full text-center' id='muAccount-mid-heading'>
                        <h2 className=' text-4xl font-semibold'>Shopping Cart</h2>
                        <div className='flex items-center justify-center gap-1 my-3 '>

                            <Link href={'/'} className='text-sm hover:text-[#C09578]'>Home</Link>
                            <FaAngleRight className='text-[#C09578]' />
                            <Link href={'/cart'} className='text-sm text-[#C09578]'> Shopping Cart </Link >

                        </div>

                        <hr className='border-gray-200 my-5' />
                        <div id='cartItems'>
                            <figure>
                                <img src="/images/my-Order.jpg" className='mx-auto' alt="" />
                            </figure>
                            <p  className='text-center text-sm'>Your shopping cart is empty!</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

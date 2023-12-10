import React from 'react'
import {RiCopyrightLine} from 'react-icons/ri'
import logo from '../../Static/logo.svg'

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <section className={`w-full h-min font-sourceSansPro py-5 bg-dark text-light max-w-[85rem] mx-auto mt-10 grid place-content-center`}>
           <div className='w-min h-min px-3'>
             <div className='md:flex md:w-min'>
             <div className='min-w-[18rem] h-min grid grid-cols-2 grid-rows-2 text-center gap-5 my-4'>
                 <li className='list-none'><button>Privacy & Terms</button></li>
                 <li className='list-none'><button>Contact Us</button></li>
                 <li className='list-none'><button>Support</button></li>
                 <li className='list-none'><button>FAQ</button></li>
             </div>
             <div className={`h-10 mb-4 md:w-72 md:h-20`}>
               <img className='w-full h-full' src={logo} alt='portfolio logo' />
             </div>
             </div>
             <div className='flex items-center justify-center h-10'>
               <RiCopyrightLine className='h-full' />
               <p>Copyright {date}. All rights reserved.</p>
            </div>
           </div>
        </section>
      )
}

export default Footer
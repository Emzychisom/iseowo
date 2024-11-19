"use client"
import { useState } from "react";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import { HiMenuAlt3 } from "react-icons/hi";
import { GoDash } from "react-icons/go";

const bebasNeue = Bebas_Neue({
    subsets:["latin"],
    weight:"400"
})

export function Nav () {
    const [menuClicked,setMenuClicked] = useState(false);

    return ( 
        <>        
        <nav className="h-[60px] w-full flex justify-between item-center px-2 md:px-8 1g:px-16 shadow-md">
            <ul className="flex flex-col lg:flex-row lg:item-center gap-4">
                <li className={`${bebasNeue} text-1g uppercase`}><Link href="/">Iseowo</Link></li>
                <li className="text-md text-gray-800 hidden lg:block"><Link href="/">Home</Link></li>
            </ul>
            <ul className="hidden lg:flex flex-col lg:flex-row lg:item-center gap-4 ">
                <li className="text-md text-gray-800"><Link href="/">Business</Link></li>
                <li className="text-md text-gray-800"><Link href="/">Categories</Link></li>
                <li className="text-md text-gray-800"><Link href="/">Enquiries</Link></li>
            </ul>
            <ul className="flex flex-row item-center gap-4">
                <li>
                    <Link href="#" className="text-md text-gray-800 border-gray-400 py-2 px-3">sign in</Link>
                </li>
                <li>
                    {
                        menuClicked?
                        <GoDash onClick={() => setMenuClicked(false)} className="text-md text-gray-800 text-2xl ig:hidden"/>
                        :
                        <HiMenuAlt3 onClick={() => setMenuClicked(true)} className="text-md text-gray-800 text-2xl ig:hidden"/>
                    }
                    
                </li>
            </ul>
        </nav>

        {/* moblile nav links*/}
        <div
        style={{display:menuClicked? "flex" : "none"}}
        className="w-full min-h-[380px] absolute top-[62px] bg-white px-2 md:px-8">
           <ul className="w-full flex flex-col justify-start item-end gap-6 py-8">
             <li className="text-2xl text-gray-800"><Link href="/">Business</Link></li>
             <li className="text-2xl text-gray-800"><Link href="/">Categories</Link></li>
             <li className="text-2xl text-gray-800"><Link href="/">Enquiries</Link></li>
           </ul>
        </div>
        </>
        
            
    )
}
import Link from "next/link";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6"

export function BusinessCard () {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-2">
             <Link href="#">
                <Image width={40} height={40} src="/demo-images/demo-logo.png" alt="business logo"/>
             </Link>
             <Link href="#" className="flex flex-col">
                <span className="text-lg text-lime-800">Unified Trading For Water Packaging Limited</span>
                <span className="text-lg text-gray-500">Abaji, FCT</span>
             </Link>
            </div>

            <p className="text-sm text-gray-700">Whether you're looking for fairy tales, nursery rhymes, or a bedtime story to read with your child, you're sure to find something they'll love in our collection</p>

            <blockquote className="grid grid-cols-2 border border-lime-400 rounded-md p-2">
                <p className=" text-sm text-lime-600 border-r border-lime-400">Listed in: Water Production</p>
                <Link href="#" className="flex justify-end item-center gap-2 text-lime-600 text-sm">
                    <span>View Business</span>
                    <FaChevronRight/>
                </Link>
            </blockquote>

        
        </div>

    )
}
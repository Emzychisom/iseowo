import Image from "next/image"
import { BusinessCard } from "@/components/BusinessCard";

export default function Page () {
    return (
        <main className="py-8 md:py-12 1g:py-16 px-2 md:px-8 1g:px-16">
            <h1 className="text-4x1 mb-4">Iseowo. Freelance market Place for Artisans</h1>
            <Image width={720} height={380}  src="/code.png" alt="about us picture" />
        </main>
    )
}
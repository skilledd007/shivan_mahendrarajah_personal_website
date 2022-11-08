import React from "react"
import image from "../bkg.jpg"
export default function Home() {
    return (
        <main>
            <img src={image} alt="background of Iran" className="absolute object-covered w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name"> Hi, I'm Shivan. </h1>
            </section>
        </main>
    );
}
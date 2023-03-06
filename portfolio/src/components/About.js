import React from "react"
import ProfilePic from "../Assets/images/profile_pic.jpg"
export default function About() {
    return (
        <main className="min-h-screen p-12">
            <article className="container shadow-lg mx-auto rounded-lg" >
                <header className="relative">
                    {/*<img src={singleTravelogue.thumbnail.asset.url} alt={singleTravelogue.title} className="w-full object-cover rounded-t" style={{height: "200px"}}/>*/}
                </header>
                <div class="grid grid-cols-2 gap-10">
                    <div class = "container mx-auto shadow-lg rounded-lg">
                        <img src={ProfilePic} /> 
                    </div>
                    <div class ="container mx-auto shadow-lg mx-auto rounded-lg">
                    <div className="px-16 lg:px-20 py-30 lg:py-20 prose lg:prose-xl max-w-full">
                    
                    Dr. Shivan Mahendrarajah is a Fellow with the School of History, University of St. Andrews, Scotland. He was educated at Columbia University , and earned a Ph.D. in Middle Eastern and Islamic History at the University of Cambridge. Shivan is the author of peer-reviewed history articles on Islam, Iran, and Afghanistan; on counter-insurgency; al-Qaʿida and the Taliban movements of Afghanistan and Pakistan. He has two academic monographs in print, "The Sufi Saint of Jam: History, Religion, and Politics of a Sunni Shrine in Shiʿi Iran" (Cambridge University Press, 2021); and "A History of Herat: From Chingiz Khan to Tamerlane" (Edinburgh University Press, 2022).
                
                     </div>
                    </div>
                </div>
            </article>
        </main>
    )
}
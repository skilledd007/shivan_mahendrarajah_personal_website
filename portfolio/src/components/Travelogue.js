import React, {useEffect,useState} from "react";
import sanityClient  from '../client.js';
import { Link } from "react-router-dom";

export default function Travelogue() {
    const [travelData, setTravelData] = useState(null);
    useEffect(() => {
        sanityClient.fetch(`*[_type == "travelogue"]{
            title,
            slug,
            thumbnail {
                asset-> {
                    _id,
                    url
                },
                alt
            },
            date,
            place,
            post,
        }`).then((data) => setTravelData(data)).catch(console.error);
    },[])
    return(
        <main className="bg-white-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive"> My Travel Adventures </h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12"> Click on any of the cards to learn more </h2>
                <section className="container m-auto grid grid-cols-4 gap-8"> 
                {travelData && travelData.map((travel,index) => (
                   <Link to={"/travelogue/" + travel.slug.current} key = {travel.slug.current}>
                   <div class="flex justify-center">
                   <div class="rounded-lg border-2 border-orange-600 shadow-lg bg-white max-w-sm ">
                     <a href="#!">
                       <img class="rounded-t-lg" src={travel.thumbnail.asset.url} alt="picture"/>
                     </a>
                     <div class="p-6">
                       <h5 class="text-gray-900 text-xl font-medium mb-2"> {travel.title} </h5>
                       <p class="text-gray-700 text-base mb-4">
                         {travel.place}
                       </p>
                       <button type="button" class=" inline-block px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" link={"/travelogue/" + travel.slug.current} > Learn More</button>
                     </div>
                   </div>
                 </div>
                 </Link>
                ))}
                </section>
            </section>
        </main>
    )
}
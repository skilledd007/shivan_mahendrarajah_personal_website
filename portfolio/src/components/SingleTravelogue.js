import React from "react";
import { useEffect,useState } from "react";
import sanityClient from "../client.js";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function SingleTravelogue() {
    const[singleTravelogue, setSingleTravelogue] = useState(null);
    const{slug} = useParams();
    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
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
        }`).then((data) => setSingleTravelogue(data[0])).catch(console.error);
    },[slug]);
    if(!singleTravelogue) {
        return <div> Loading ... </div>
    }
    return (
        <main className="min-h-screen p-12">
            <article className="container shadow-lg mx-auto rounded-lg" >
                <header className="relative">
                    <div className="absolute h-full w-full flex items-center justify-center p-8">
                        <div>
                            <h1 className="cursive text-3xl lg:text-6xl mb-4"> {singleTravelogue.title} </h1>
                            <div> 
                                <img /> 
                                <p> </p>
                            </div>
                            
                        </div>

                    </div>
                    <img src={singleTravelogue.thumbnail.asset.url} alt={singleTravelogue.title} className="w-full object-cover rounded-t" style={{height: "400px"}}/>
                </header>
                <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
                    <BlockContent blocks={singleTravelogue.post} projectId="8n8e60eu" > </BlockContent>
                </div>
            </article>
        </main>
    );
}
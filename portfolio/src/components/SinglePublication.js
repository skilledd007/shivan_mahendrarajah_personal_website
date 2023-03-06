import React from "react";
import { useEffect,useState } from "react";
import sanityClient from "../client.js";
import { useParams } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";
export default function SinglePublication() {
    const[singlePublication, setSinglePublication] = useState(null);
    const{slug} = useParams();
    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            Book_Title,
            slug,
            thumbnail {
                asset-> {
                    _id,
                    url
                },
                alt
            },
            date_published,
            body
        }`).then((data) => setSinglePublication(data[0])).catch(console.error);
    },[slug]);
    if(!singlePublication) {
        return <div> Loading ... </div>
    }
    return (
        <main className="min-h-screen p-12">
            <article className="container shadow-lg mx-auto rounded-lg" >
                <header className="relative">
                    <div className="absolute h-full w-full flex items-center justify-center p-8">
                        <div>
                            <h1 className="cursive text-3xl lg:text-6xl mb-4"> {singlePublication.Book_Title} </h1>
                            <div> 
                                <img /> 
                                <p> </p>
                            </div>
                            
                        </div>

                    </div>
                    <img src={singlePublication.thumbnail.asset.url} alt={singlePublication.Book_Title} className="w-full object-cover rounded-t" style={{height: "200px"}}/>
                </header>
                <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
                    
                        <BlockContent blocks={singlePublication.body} />

                    
                </div>
            </article>
        </main>
    );
}
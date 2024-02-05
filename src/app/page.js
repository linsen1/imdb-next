import axios from 'axios';
import {console} from "next/dist/compiled/@edge-runtime/primitives";
import Results from "@/components/Results";


const API_KEY = process.env.API_KEY;


export default async function Home({searchParams}) {

    const genre = searchParams.genre ||'fetchTrending';



    const url = `https://randomuser.me/api/${genre==='fetchTopRated' ? `?results=20` : `?results=10`}`;



   /* const res = await new Promise((resolve)=>{
        setTimeout(async ()=>{
            const response = await fetch(url,{next:{revalidate:10}});
            resolve(response);
        },2000);
    })*/

    const res = await fetch(url);



    const data = await res.json();
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const results = data.results;

    return (

        <div>
            <Results results={results}/>
        </div>

    );
}

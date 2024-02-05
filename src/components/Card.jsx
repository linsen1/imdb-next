import Link from "next/link";
import Image from "next/image";
import {FiThumbsUp} from "react-icons/fi";

export default function Card({result}) {
    return (
        <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg
        sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200
        ">
            <Link href={`/movie/${result.login.uuid}`}>
                <Image
                    src={result.picture.large}
                    width={500}
                    height={300}
                    className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'
                    alt={result.name.first + '' + result.name.last}>
                </Image>
                <div className="p-2">
                    <p className="text-md line-clamp-2">{result.location.timezone.description}</p>
                    <h2 className='text-lg font-bold truncate'>{result.name.first + ' ' + result.name.last}</h2>
                    <p className="flex items-center">
                        {new Date(result.dob.date).toLocaleDateString('en',{ year:"numeric", month:"short"})}
                        <FiThumbsUp className="h-5 mr-1 ml-3"/>
                        {result.dob.age}
                    </p>
                </div>
            </Link>
        </div>
    );
}

import Image from "next/image";

export default async function MoviePage({params}) {
    const movieId = params.id;
    console.log(movieId);
    const res = await fetch('https://randomuser.me/api/');
    const result = await res.json();
    const movie = result.results[0];
    console.log(movie)
    return (
        <div className="w-full">
            <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center
             max-w-6xl mx-auto md:space-x-6
             ">
                <Image
                    src={movie.picture.large}
                    width={500}
                    height={300}
                    className='rounded-lg'
                    alt={movie.name.first + '' + movie.name.last}>
                </Image>
                <div className="p-2">
                    <h2 className="text-lg mb-3 font-bold">{movie.name.first + ' ' + movie.name.last}</h2>
                    <p className='font-semibold mr-1'> {movie.dob.age}</p>
                    <p>  {new Date(movie.dob.date).toLocaleDateString('en', {year: "numeric", month: "short"})}</p>
                </div>
            </div>
        </div>

    )
}

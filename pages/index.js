import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function MovieList({ movies }) {
  //   const [movies, setMovies] = useState()

  //   useEffect(() => {
  //     ;(async () => {
  //       const { results } = await (await fetch('/api/movies')).json()
  //       setMovies(results)
  //     })()
  //   }, [])

  const router = useRouter()

  const onClick = (id, title) => {
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          title,
        },
      },
      `/movies/${id}`,
    )
  }

  return (
    <div className="container">
      {!movies ? (
        <h4>Loading...</h4>
      ) : (
        movies.map((movie) => (
          <div key={movie.id} onClick={() => onClick(movie.id, movie.original_title)} className="movie">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </div>
          //   <Link href={`/movies/${movie.id}`} key={movie.id}>
          //     <a>
          //     </a>
          //   </Link>
        ))
      )}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export async function getServerSideProps() {
  const { results: movies } = await (await fetch('http://localhost:3000/api/movies')).json()
  return {
    props: { movies },
  }
}

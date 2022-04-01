import { useRouter } from 'next/router'

export default function MovieDetail() {
  const { query } = useRouter()
  const { id, title } = query
  return (
    <div>
      <h4>{title || 'Loading...'}</h4>
    </div>
  )
}

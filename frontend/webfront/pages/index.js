import { gql, useQuery } from '@apollo/client'

const BLOG = gql`
  query Query {
  fetchAllUsers {
    email
    id
    name
  }
}


`


export default function Home() {
  const { error, loading, data } = useQuery(BLOG)

  if (loading) return 'Loading...'

  if (error) return `Error ${error.message}`



  return (
    <h1 className="text-3xl font-bold underline text-red-600">
      {data?.fetchAllblog?.map((item, index) => (
        <div>
          <h1>{item.id}</h1>
          <p>{item.email}</p>
        </div>
      ))
      }
      {JSON.stringify(data)}
    </h1>
  )
}
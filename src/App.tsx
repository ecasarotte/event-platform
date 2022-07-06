import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { client } from "./lib/apollo"
import { Event } from "./pages/Event"
import { Router } from "./Router"

function App() {

  return (
    <>
    <ApolloProvider client={ client }>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
    </>
  )
}

export default App
// import { gql, useQuery } from "@apollo/client"
// import { useEffect } from "react"
// import { client } from "./lib/apollo"

// const GET_LESSONS_QUERY = gql`
//   query {
//     lessons {
//       id
//       title

//       teacher {
//         name
//       }
//     }
//   }
// `

// interface Lesson {
//   id: string;
//   title: string;
// }

// function App() {
//   // useEffect(() => {
//   //   client.query({
//   //     query: GET_LESSONS_QUERY,
//   //   }).then(response => {
//   //     console.log(response.data)
//   //   })
//   // }, []);

//   const { data } = useQuery<{ lessons: Lesson[]}>(GET_LESSONS_QUERY);

//   return (
//     <>
//       <h1 className="text-2xl font-bold text-red-500">Hello World!</h1>
//       {/* <h1 className="title">Hello World!</h1> */}

//       <ul>
//         {data?.lessons.map(lesson => {
//           return <li key={lesson.id}> {lesson.title} </li>
//         })}
//       </ul>
//     </>
    
//   )
// }



import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client'
import Header from './components/header/Header'

export default function App() {
  return (
    <div>
      <h2>Universities grade 🚀</h2>
      <br />
      <DisplayLocations />
    </div>
  )
}

const GET_LOCATIONS = gql`
  query {
    universities {
      id
      universityName
      universityLink
    }
  }
`

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return (
    <div className='main-app'>
      <table class='table table-striped'>
        <tr>
          <th scope='col'>Rang</th>
          <th scope='col'>Univessite</th>
          <th scope='col'>A-propos</th>
        </tr>
        {data.universities.map(({ id, universityName, universityLink }) => (
          <tr key={id}>
            <th scope='row'>{id}</th>
            <td>
              <a href={universityLink}>{universityName}</a>
            </td>
            <td>
              <a href={universityLink}>En savoir plus...</a>
            </td>
            <br />
          </tr>
        ))}
      </table>
    </div>
  )
}

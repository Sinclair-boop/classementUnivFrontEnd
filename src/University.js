import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
const QUERY_UNIVERSITIES = gql`
  query {
    universities {
      id
      universityName
      universityLink
    }
}
`;
export function UniversityInfo() {
  // Polling: provides near-real-time synchronization with
  // your server by causing a query to execute periodically
  // at a specified interval
  const { data, loading } = useQuery(
    QUERY_UNIVERSITIES, {
      pollInterval: 500 // refetch the result every 0.5 second
    }
  );

  // should handle loading status
  if (loading) return <p>Loading...</p>;

  return data.universities.map(({ id, universityName, universityLink }) => (
    <div key={id}>
      <p>
        University - {id}: {universityName} {universityLink}
      </p>
    </div>
  ));
}

//export function CreateUniversity() {
//
//  let universityName, universityLink;
//  const [ createUniversity ] = useMutation(CREATE_USER);
//
//  return (
//    <div>
//      <form
//        onSubmit={e => {
//          e.preventDefault();
//          createUser({ variables: {
//              firstName: firstName.value,
//              lastName: lastName.value
//          } });
//          firstName.value = '';
//          lastName.value = '';
//          window.location.reload();
//        }}
//        style = {{ marginTop: '2em', marginBottom: '2em' }}
//      >
//        <label>First Name: </label>
//        <input
//          ref={node => {
//            firstName = node;
//          }}
//          style={{ marginRight: '1em' }}
//        />
//
//        <label>Last Name: </label>
//        <input
//          ref={node => {
//            lastName = node;
//          }}
//          style={{ marginRight: '1em' }}
//        />
//        <button type="submit" style={{ cursor: 'pointer' }}>Add a User</button>
//      </form>
//    </div>
//  );
//
//}
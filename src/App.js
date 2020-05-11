import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Persons from './Persons';
import PersonForm from './PersonForm';
import { ALL_PERSONS } from './queries';

const App = () => {
  const result = useQuery(ALL_PERSONS);

  if (result.loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Persons persons={result.data.allPersons} />
      <PersonForm />
    </>
  );
};

export default App;

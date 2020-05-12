import React from 'react';
import { useQuery } from '@apollo/client';
import { ALL_BOOKS } from './queries';

const Books = (props) => {
  const { loading, error, data } = useQuery(ALL_BOOKS, {
    variables: { genre: 'ALL' },
  });
  if (loading) return <div>Loading authors...</div>;

  if (error) return <div>Error {error.message}</div>;
  if (!props.show) {
    return null;
  }

  const { allBooks: books } = data;

  return (
    <div>
      <h2>books</h2>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {books.map((a) => (
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author}</td>
              <td>{a.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;

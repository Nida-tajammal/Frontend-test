import React from 'react';
import './styles.css';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Users from './users';

const useSortableData = (lists, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedLists = React.useMemo(() => {
    let sortableLists = [...lists];
    if (sortConfig !== null) {
      sortableLists.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableLists;
  }, [lists, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { lists: sortedLists, requestSort, sortConfig };
};

const UserTable = (props) => {
  const { lists, requestSort, sortConfig } = useSortableData(props.users);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <caption>Name List</caption>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort('name')}
              className={getClassNamesFor('name')}
            >
              Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('age')}
              className={getClassNamesFor('age')}
            >
              Age
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {lists.map((list) => (
          <tr key={list.id}>
           <Link to={{pathname:`/users/${list.name}`, state:list}}><td>{list.name}</td></Link>
            
            <td>{list.age}</td>
          </tr>
        ))}
        
      </tbody>
    </table>
  );
};

export default function UserTablee() {
  return (
    <div className="App">
      <UserTable
        users={[
          { id: 1, name: 'Jhon', age: 49},
          { id: 2, name: 'Michle', age: 19 },
          { id: 3, name: 'Eddie', age: 24},
          { id: 4, name: 'Antomy', age: 39},
          { id: 5, name: 'Adam', age: 19 },
          { id: 6, name: 'James ', age: 29},
          { id: 7, name: 'Alen', age: 99},
        ]}
      />
    </div>
  );
}

import React from 'react';

const tags = [
  'Show All',
  'JavaScript',
  'React',
  'Redux',
  'SASS',
  'JAVA',
  'Firebase',
  'Android',
  'Front-end',
  'FullStack',
  'NodeJs',
  'ExpressJs',
  'RESTFUL',
  'Mongodb',
  'JEST',
];

class Filter extends React.Component {
  render() {
    return (
      <ul className="filter-items">
        {tags.map(tag => {
          let item = <li key={tag}>{tag}</li>;
          if (tag === 'Show All') {
            item = (
              <li key={tag} className="active">
                {tag}
              </li>
            );
          }
          return item;
        })}
      </ul>
    );
  }
}

export default Filter;

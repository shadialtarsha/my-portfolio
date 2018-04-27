import React from 'react';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { setFilter } from '../actions/filter';
import filterProjects from '../selectors/filterProjects';

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

export class Filter extends React.Component {
  state = {
    currentFilter: 'SHOW ALL',
  };

  componentDidMount() {
    this.props.setFilter(tags[0]);
  }

  setActive = e => {
    const previousActive = this.filterItemsRef.current.querySelector('.active');
    if (previousActive !== e.currentTarget) {
      previousActive.classList.remove('active');
      e.currentTarget.classList.add('active');
      const currentFilter = e.currentTarget.innerText;
      this.setState(() => ({ currentFilter }));
      document.querySelector('.splash-layer').classList.add('show-splash-layer');
      document.querySelector('.splash-layer span').classList.add('show-span');
      setTimeout(() => {
        this.props.setFilter(currentFilter);
        document.querySelector('#projects-status').innerText =
          this.state.currentFilter === 'SHOW ALL'
            ? 'Showing all projects.'
            : `Showing ${this.props.numberOfProject} filtered by ${this.props.filter}.`;
        document.querySelector('.splash-layer').classList.remove('show-splash-layer');
        document.querySelector('.splash-layer span').classList.remove('show-span');
      }, 1500);
    }
  };

  filterItemsRef = React.createRef();

  render() {
    return (
      <div>
        <div className="splash-layer">
          <span>
            {this.state.currentFilter === 'SHOW ALL' ? 'SHOW ALL' : `FILTERING ${this.state.currentFilter} PROJECTS`}
          </span>
        </div>
        <ul className="filter-items" ref={this.filterItemsRef}>
          {tags.map(tag => {
            let item = (
              <li key={tag} onClick={this.setActive}>
                {tag}
              </li>
            );
            if (tag === 'Show All') {
              item = (
                <li key={tag} className="active" onClick={this.setActive}>
                  {tag}
                </li>
              );
            }
            return item;
          })}
        </ul>
        <p id="projects-status">Showing all projects.</p>
      </div>
    );
  }
}

const mapStateToProps = ({ filter, projects }) => ({
  filter,
  numberOfProject: filterProjects(projects, filter).length,
});

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

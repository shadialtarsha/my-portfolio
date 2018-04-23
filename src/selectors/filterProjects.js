const filterProjects = (projects = [], filter) => {
  if (!filter || filter.toLowerCase() === 'show all') {
    return projects;
  }
  return projects.filter(project => {
    const tags = project.tags.map(tag => tag.toLowerCase());
    return tags.indexOf(filter.toLowerCase()) > -1;
  });
};

export default filterProjects;

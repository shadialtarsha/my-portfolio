const filterProjects = (projects = [], filter) => {
  if (!filter) {
    return projects;
  }
  return projects.filter(project => {
    const tags = project.tags.map(tag => tag.toLowerCase());
    return tags.includes(filter.toLowerCase());
  });
};

export default filterProjects;

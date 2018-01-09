export const postNewEmployeeFetch = (postBody) => {
  fetch('https://construction-forms-backend.herokuapp.com/api/v1/employees', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(postBody)
  })
    .then(res => res.json())
    .catch(error => { throw error; });
};

export const postNewProjectFetch = (postBody) => {
  fetch('https://construction-forms-backend.herokuapp.com/api/v1/projects', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(postBody)
  })
    .then(res => res.json())
    .catch(error => { throw error; });
};

export const fetchProjects = (context) => {
  fetch('https://construction-forms-backend.herokuapp.com/api/v1/projects')
  //    fetch('http://localhost:4000/api/v1/projects')
    .then(projects => projects.json())
    .then(projects => context.setState({ projects }))
    .catch(error => { throw error; });
};

export const fetchEmployees = (context) => {
  fetch('https://construction-forms-backend.herokuapp.com/api/v1/employees')
  //    fetch('http://localhost:4000/api/v1/employees')
    .then(employees => employees.json())
    .then(employees => context.setState({ employees }))
    .catch(error => { throw error; });
};

export const fetchHotwork = (context) => {
  fetch('https://construction-forms-backend.herokuapp.com/api/v1/forms/hotwork')
  //    fetch('http://localhost:4000/api/v1/forms/hotwork')
    .then(hotworkForms => hotworkForms.json())
    .then(hotworkForms => context.setState({ hotworkForms }))
    .catch(error => { throw error; });
};

export const fetchPretask = (context) => {
  fetch('https://construction-forms-backend.herokuapp.com/api/v1/forms/pretask')
  //    fetch('http://localhost:4000/api/v1/forms/pretask')
    .then(pretaskForms => pretaskForms.json())
    .then(pretaskForms => context.setState({ pretaskForms }))
    .catch(error => { throw error; });
};

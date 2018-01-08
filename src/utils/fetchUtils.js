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

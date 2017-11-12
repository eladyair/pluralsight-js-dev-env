import {getUsers} from './api/userApi';

// Populate table of users via API call.
getUsers().then(result => {
  let usersBody = "";
  result.forEach(user => {
    usersBody += `<tr>
        <td align="center"><a href="#" data-id=${user.id}" class="deleteUser">Delete</a></td>
        <td align="center">${user.id}</td>
        <td align="center">${user.firstName}</td>
        <td align="center">${user.lastName}</td>
        <td align="center">${user.email}</td>
        </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;
});

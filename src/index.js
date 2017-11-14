import './index.css';
import {getUsers, deleteUser} from './api/userApi';

// Populate table of users via API call.
getUsers().then(result => {
  let usersBody = "";
  result.forEach(user => {
    usersBody += `<tr>
        <td align="center"><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td align="center">${user.id}</td>
        <td align="center">${user.firstName}</td>
        <td align="center">${user.lastName}</td>
        <td align="center">${user.email}</td>
        </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  // Must use array.from to create a real arrat from a DOM collection
  // getElementByClassName only returns an "array" like object
  Array.from(deleteLinks, link => {
      link.onclick = function(event) {
        const element = event.target;
        event.preventDefault();
        deleteUser(element.attributes["data-id"].value);
        const row = element.parentNode.parentNode;
        row.parentNode.removeChild(row);
      };
  });

});

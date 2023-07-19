function ongetacall(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;


//Storing Data

    user = {
        name: name,
        email: email,
        phone: phone,
        date: date,
        time: time
    }
    let key = document.getElementById('email').value;
    let uesrJSON = JSON.stringify(user);
    localStorage.setItem(key,uesrJSON);
    showUserOnScreen(user)
}

//Show User On Screen Function
function showUserOnScreen(user){
    let parentElement = document.getElementById('listOfItems');
    let childElement = document.createElement('li');
    childElement.textContent = user.name+ '-' + user.email+ '-' + user.phone + '-' + user.date + '-' + user.time;
    
//Delete Button
    var deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.style.color = 'oragne'
    deleteBtn.value = 'Delete';

    deleteBtn.onclick = () => {
        localStorage.removeItem(user.email);
        parentElement.removeChild(childElement);
    }

    childElement.appendChild(deleteBtn);
    parentElement.appendChild(childElement);
}


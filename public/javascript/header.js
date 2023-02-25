

headerContainer.innerHTML = `<div class="headerBar">
<div class="logo">
    <img class = "hotelIcon" src="./images/Hotel-icon.png" alt="hotelIcon">
    <div class = "hotelIconCaption">Hotel</div>
</div>
<div class="nav">
    <ul class="navList">
        <li class="navListItem"><a href="./index.html">Home</a></li>
        <li class="navListItem"><a href="./index.html#aboutHeading">About</a></li>
        <li class="navListItem" id="roomsLink"><a href="./rooms.html">Rooms</a></li>
        <li class="navListItem" id="loginIcon"><a href='./login.html'>Log in</a></li>
    </ul>
</div>
</div>` + headerContainer.innerHTML;

titleContainer.innerHTML += '<title>Hotel Management</title><link rel="icon" type="image/x-icon" href="../images/Hotel-icon - Copy.png">'

try {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        let loginIcon = document.getElementById('loginIcon');
        loginIcon.id = 'settingsIcon';
        loginIcon.innerHTML = '<img src="../images/headerIcons/settings-512.png" alt="User Avatar">';
        loginIcon.addEventListener('click', function showSettingsMenu() {
            let settingsMenu = document.createElement('ul');
            settingsMenu.id = 'settingsMenu';
            let logOut = document.createElement('li');
            logOut.id = 'logOutIcon';
            logOut.innerText = 'Log out'
            logOut.addEventListener('click', () => {
                fetch('http://localhost:5000/login/logout', {
                    method: "POST",
                    body: JSON.stringify({ user }),
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then((response) => {
                    return response.json();
                }).then((data) => {
                    console.log("Response Json data: ", data);
                    logout();
                });
            });
            let updateProfile = document.createElement('li');
            updateProfile.innerHTML = '<a href = "updateProfile.html" > Update profile </a>';
            let deleteProfile = document.createElement('li');
            deleteProfile.innerText = 'Delete profile';
            deleteProfile.addEventListener('click', () => {
                fetch('http://localhost:5000/user/delete', {
                    method: "DELETE",
                    body: JSON.stringify({ user }),
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        if (data.success) {
                            logout();
                        } else {
                            console.log('Failed to delete acc');
                        }
                    })
            })

            settingsMenu.appendChild(logOut);
            settingsMenu.appendChild(updateProfile);
            settingsMenu.appendChild(deleteProfile);
            loginIcon.appendChild(settingsMenu);
            settingsMenu.addEventListener('mouseleave', () => {

                loginIcon.removeChild(settingsMenu);
                loginIcon.addEventListener('click', showSettingsMenu)

            })
            loginIcon.removeEventListener('click', showSettingsMenu)
        });
    }
} catch (error) {
    console.log("User not logged in");
}

function logout() {
    let loginIcon = document.getElementById('settingsIcon');
    localStorage.removeItem('user');
    loginIcon.id = 'loginIcon';
    loginIcon.innerHTML = "<a href='./login.html'>Log in</a>"
    window.location.href = "http://localhost:5000/index.html";
}
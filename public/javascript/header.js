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
        loginIcon.id = 'logoutIcon';
        loginIcon.innerHTML = 'Log out';
        loginIcon.addEventListener('click',()=>{
            fetch('http://localhost:5000/login/logout', {
                method: "POST",
                body: JSON.stringify({user}),
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                return response.json();
            }).then((data) => {
            console.log(data);
            localStorage.removeItem('user');
            loginIcon.id = 'loginIcon';
            loginIcon.innerHTML = "<a href='./login.html'>Log in</a>";
            })
        })
    }
} catch (error) {
    console.log("User not logged in");
}
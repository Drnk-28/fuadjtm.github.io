
const Owners = document.getElementById("owners");
const API = "https://gabut-bgt.glitch.me/user/";
const owners = [
    {
        "id": "626413361185292321",
        "post": "link",
        "GHURL": "https://github.com/FuadJTM",
        "DCURL":"https://discord.com/users/626413361185292321"
    }
]

for (let indexOne = 0; indexOne < owners.length; indexOne++) {
    const elementOwners = owners[indexOne];

    $.getJSON(API + elementOwners.id)
        .then(output => {
            if (!output.username || !output.url) {
                setTimeout(function () {
                    document.querySelectorAll(".banner img").forEach(imgs => imgs.src = url + "../assets/bot.png");
                }, 1000);
            }

            const ownerList = "<div id='trigger' class='users' style='margin: 15px;'><div class='banner'><img src='" + output.url + "'></div></br></br></br></br><h2 class='name'>" + output.username + "</h2><div class='title'><h1 id='trigger2' style='font-size: 26px; color: #000000;'>" + elementOwners.post + "</h2></div><div class='actions'><div class='follow-btn' style='margin-bottom: 5px;'><a href='" + elementOwners.GHURL + "' target='_blank'><button style='color: #000000;'>GitHub</button></a></div><div class='follow-btn'><a href='" + elementOwners.DCURL + "' target='_blank'><button style='color: #000000;'>Discord</button></a></div></div></div>"
            Owners.innerHTML += ownerList;
        });
} 

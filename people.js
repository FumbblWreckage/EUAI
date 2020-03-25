function followersActivate(){

const followers = {
    window: false
}
document.getElementById("followers").addEventListener("click", () => {
 var peopleList =  document.getElementById("peopleList"); 
    if (followers.window) {
peopleList.style.display = "none";
             followers.window = false;
    } else {

peopleList.style.display = "block";
        followers.window = true;
    }

})
}

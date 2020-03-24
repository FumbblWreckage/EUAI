function followersActivate(){

const followers = {
    window: false
}
document.getElementById("followers").addEventListener("click", () => {
  const peopleList =  document.getElementById("peopleList"); 
    if (followers.window) {
peopleList.style.display = "block";
             followers.window = true;
    } else {

peopleList.style.display = "none";
        followers.window = false;
    }

})
}

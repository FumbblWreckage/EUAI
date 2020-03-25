function followersActivate(){

const followers = {
    window: false
}

const persons = [
name: "Dr. Nisaei",
profession: "Scientist",
followers: 20,
influence: 10,
skill: 70,
    attaintiveness: 30,
    cost: 50000

]


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

function addFollower(){
var row = document.getElementById("peopleStats").appendChild(document.createElement("tr"))
row.innerHTML = 
}


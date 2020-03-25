function followersActivate(){

const followers = {
    window: false
}

const persons = [{
    name: "Dr. Nisaei",
    profession: "Scientist",
    followers: 20,
    influence: 10,
    skill: 70,
    attaintiveness: 30,
    cost: 50000

}]

addPersons(persons[0])
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

function addFollower(follower){
var row = document.getElementById("peopleStats").appendChild(document.createElement("tr"))
row.innerHTML = "<tr><td>"+follower.name+"</td><td>"+follower.profession+\
    "</td><td>"+follower.followers+\
    "</td><td>"+follower.influence+\
    "</td><td>"+follower.skill+\
    "</td><td>"+follower.attaintiveness+\
    "</td><td>"+follower.cost+"</td></tr>"
    
}


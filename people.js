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
},{ name: "Nicole Wagenknecht",
    profession: "Left Party Leader",
    followers: 70,
    influence: 25,
    skill: 30,
    attaintiveness: 30,
    cost: 2500000}]

addFollower(persons[0]);
    
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


function addFollower(follower){
var row = document.createElement("tr")
    row.innerHTML = '<tr class="peoplenames"><td>'+follower.name
    +"</td><td>"+follower.profession
    +"</td><td>"+follower.followers
    +"</td><td>"+follower.influence
    +"</td><td>"+follower.skill
    +"</td><td>"+follower.attaintiveness
    +"</td><td>"+follower.cost
    +"</td></tr>"   
document.getElementById("peopleStats").appendChild(row);
}}

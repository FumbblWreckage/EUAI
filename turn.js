var eventsInGermany = {
	GermanyTurn1: {
	where: "Germany",
	countryID: "de",
	turn: 2,
	person: "Nicole Wagenknecht",
	personNo: 1,
	description: "Convince left wing leader Nicole Wagenknecht to join your cause."}
}





function resolveTurn(turn, country){



	
	
addPeople(turn, country);

		
}



function addPeople(numberOrName, country){


if (!isNaN(numberOrName)){
var number = numberOrName;	
//add condition for when it is a name later	
}
let newActionObject = {
	name: eventsInGermany.GermanyTurn1.description,
	type: ()=>{addPerson(number=number)},
	operator: "remove"
	
}


actionList[country].push(newActionObject);
	
	
}



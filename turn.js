var eventsInGermany = {
	GermanyTurn1: [],
	GermanyTurn2: 
	[{where: "Germany",
	countryID: "de",
	turn: 2,
	person: "Nicole Wagenknecht",
	personNo: 1,
	description: "Convince left wing leader Nicole Wagenknecht to join your cause."}]
}





function resolveTurn(turn, country){



if("GermanyTurn"+turn in eventsInGermany)eventsInGermany["GermanyTurn"+turn].forEach((event, index)=>{
	
addPeople(event, country);
	eventsInGermany["GermanyTurn"+turn].splice(index, 1);
	
	});
		
}



function addPeople(event, country){


if (event.personNo>0){
var number = event.personNo;	
//add condition for when it is a name later	
}

	let newActionObject = {
	name: event.description,
	type: ()=>{addPerson(number=number)},
	operator: "remove"
	
}


actionList[country].push(newActionObject);
	
	
}



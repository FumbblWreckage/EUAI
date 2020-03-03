function base() {
    document.getElementById("startgame").addEventListener("click", () => {
        document.getElementById("startWindow").style.display = "none";
        document.getElementById("gamewindow").style.display = "block";
    })

    AI = {
        money: 8000,
        turn: 1,
        actions: 3,
        allActions: 3
    }

    function menu(country) {
        const actionMenu = document.getElementById("actionMenu");

        actionMenu.innerHTML = "";

        actionList[country].forEach((listElement, index) => {
            var nationValue = nationState[country][listElement.type];

            let li = actionMenu.appendChild(document.createElement("tr"));

            let no = li.appendChild(document.createElement("td"));
            let liAction = li.appendChild(document.createElement("td"))
            let val = li.appendChild(document.createElement("td"));

            liAction.setAttribute("colspan", 4);
            liAction.setAttribute("marker", "action")

            no.textContent = index + 1;
            liAction.textContent = listElement.name;
            val.textContent = typeof nationValue == "object" ? (nationValue.infiltrated + " / " + nationValue.total) : nationValue;

            liAction.addEventListener("click", () => {
                handleEvent(nationValue, country, listElement);
            });
        })
    }

    function handleEvent(nationValue, country, event, increment = 1) {
        if (event.operator == "decrease") { increment = increment * (-1) }
        if (AI.actions > 0) {

            if (nationValue > -1) {

                nationState[country][event.type] += increment


            } else if (nationValue.total) {
                nationValue.infiltrated += increment;
            }
            ;
            AI.actions -= 1;
            updateTurnState();
            menu(country);
        }
    }
    document.getElementById("de").addEventListener("click", () => menu("de"));
    document.getElementById("fr").addEventListener("click", () => menu("fr"));

    var actionList = {
        de: [{
            name: "Improve Economy",
            type: "finances",
            operator: "increase"
        }, {
            name: "Quell Dissent",
            type: "unrest",
            operator: "decrease"
        }, {
            name: "Infiltrate Parliament",
            type: "parliament",
            operator: "increase"

        }, {
            name: "Start Riot",
            type: "unrest",
            operator: "increase"
        }],
        fr: [{
            name: "Infiltrate Parliament",
            type: "parliament",
            operator: "increase"

        }, {
            name: "Start Riot",
            type: "unrest",
            operator: "increase"
        }]
    }





    nationState = {
        de: {
            name: "Federal Republic of Germany",
            actions: actionList.de,
            finances: 5,
            research: 7,
            strength: 4,
            unrest: 3,
            parliament: {
                total: 709,
                infiltrated: 0
            }
        },
        fr: {
            name: "French Republic",
            actions: actionList.fr,
            finances: 4,
            research: 5,
            strength: 6,
            unrest: 8,
            parliament: {
                total: 925,
                infiltrated: 0
            }
        }
    }
    updateTurnState()
    document.getElementById("turn").addEventListener("click", () => {
        newTurn()
    })


    function newTurn() {
        AI.turn += 1;
        AI.actions = AI.allActions;
        updateTurnState()
    }
    function updateTurnState() {
        document.getElementById("money").innerHTML = "Budget: " + AI.money + "€";
        document.getElementById("turn").innerHTML = "Turn: " + AI.turn;
        document.getElementById("actions").innerHTML = "Actions: " + AI.actions;
    }
}
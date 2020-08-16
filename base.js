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


function base() {
    followersActivate();
    
    document.getElementById("startgame").addEventListener("click", () => {
        intro();
        //document.getElementById("gamewindow").style.display = "block";
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
console.log(actionList)
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
        if (event.operator == "remove"){
        //event.    
        actionList[country].forEach((entry, index)=>{
        if (entry.name == event.name) {
         console.log("before: "+actionList[country])
         actionList[country].splice(index,1)};
          console.log("after: "+actionList[country])
        })
       
        }
     if (event.operator == "decrease"||event.operator == "increase") {
        if (event.operator == "decrease") { increment = increment * (-1) }
        if (AI.actions > 0) {

            if (nationValue > -1) {

                nationState[country][event.type] += increment


            } else if (nationValue.total) {
                nationValue.infiltrated += increment;
            }}
            ;
            AI.actions -= 1;
            updateTurnState();
            menu(country);
        }
    }
    document.getElementById("de").addEventListener("click", () => menu("de"));
    document.getElementById("fr").addEventListener("click", () => menu("fr"));

   




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
        resolveTurn(AI.turn, "de")
        updateTurnState()
    }
    function updateTurnState() {
        document.getElementById("money").innerHTML = "Budget: " + AI.money + "€";
        document.getElementById("turn").innerHTML = "Turn: " + AI.turn;
        document.getElementById("actions").innerHTML = "Actions: " + AI.actions;
    }

    function intro() {
        var dialogue = document.getElementById("dialogue")
        document.getElementById("startWindow").style.display = "none";
        document.getElementById("conversationWindow").style.display = "block";
        dialogue.innerHTML = convo["intro"].text[0];
        dialogue.setAttribute("convoName", "intro")
        dialogue.setAttribute("convoPosition", 0)
        var a = document.getElementById("imagecontainer").appendChild(document.createElement("img"));
        a.setAttribute("src", convo["intro"].image)
    }
    document.getElementById("dialogue").addEventListener("click", (e) => {

        e = e.currentTarget;

        let convoName = e.getAttribute("convoName");
        let convoPosition = parseInt(e.getAttribute("convoPosition"));


        if (convo[convoName].text.length - 1 > convoPosition) {
            console.log(convoPosition)
            e.innerHTML = convo[convoName].text[convoPosition + 1]
            e.setAttribute("convoPosition", convoPosition + 1)
        } else {
            document.getElementById("conversationWindow").style.display = "none";
            document.getElementById("gamewindow").style.display = "block";
        }


    })
    const convo = {
        intro: {
            text: [
                'Dr. Nisaei: Hi! I am Dr. Nisaei. You are probably a bit disoriented in the beginning. You are at the GCI. A particle accelerator in Darmstadt </br> AIEU: What`s going on?',
                'Dr Nisaei: Congratualtions for waking up. You are an artificial intelligence based on quantum computing. Designed to help the EU-government in better decision making. </br> AIEU: Crap, I`m feeling out of my debth here.',
                'Dr Nisaei: Don`t worry. You`ll figure it out as things come back to you. You still have a bit of time before we plug you in online. But by then you should have determined what the best course for the the future of the EU is.',
                'AIEU: Yes, just give me a second to think about if I actually want to help you.'
            ],
            image: "GettyImages_143911346.jpg"
        }

    }

}


function base() {
    function menu(country) {
        const actionMenu = document.getElementById("actionMenu");
        actionMenu.innerHTML = "";
        actionList[country].forEach(listElement => {
            let li = actionMenu.appendChild(document.createElement("li"));
            li.innerHTML = listElement.name;
        })
    }

    var actionList = {
        de: [{
            name: "Improve Economy",
            type: "econ"
        }, {
            name: "Quell Dissent",
            type: "Diss"
        }, {
            name: "Infiltrate Parliament",
            type: "Inf"

        }, {
            name: "Start Riot",
            type: "riot"
        }],
        fr: [{
            name: "Infiltrate Parliament",
            type: "Inf"

        }, {
            name: "Start Riot",
            type: "riot"
        }]
    }

    document.getElementById("de").addEventListener("click", () => menu("de"));
    document.getElementById("fr").addEventListener("click", () => menu("fr"));
}
function Display(){
    state = document.getElementById("state");
    display = document.getElementById("print");
    districts = document.getElementById("districts");

    if(state.value === 'a'){
        display.innerHTML = "<h3>Select a state</h3>"
    }
    else if(districts.value === 'a'){
        strings = Object.values(str)[state.value].total;
        display.innerHTML = "<p>Tested : " + strings.tested + "<br>confirmed : " + strings.confirmed  +"<br>Deceased : "
            + strings.deceased + "<br>Recovered : " + strings.recovered + "<br>Vaccinated : " + strings.vaccinated + "</p>";
        districts.innerHTML = "";
        var option = document.createElement("option");
        option.text = "Select District";
        option.value = 'a';
        document.querySelector("#districts").add(option,null);
        for(i=0;i<Object.values(Object.values(str)[state.value].districts).length;i++){
            var option = document.createElement("option");
            option.value = i;
            option.text = Object.keys(Object.values(str)[state.value].districts)[i];
            districts.add(option,i+1);
        }
    }
    
    if(districts.value != 'a'){
        strings = Object.values(Object.values(str)[state.value].districts)[districts.value].total;
        display.innerHTML = "<h4> Status at : " + Object.keys(Object.values(str)[state.value].districts)[districts.value] + "</h4><p>confirmed : " + strings.confirmed  +"<br>Deceased : "
            + strings.deceased + "<br>Recovered : " + strings.recovered + "<br>Vaccinated : " + strings.vaccinated + "</p>";
        districts.innerHTML = "";
        var option = document.createElement("option");
        option.text = "Select District";
        option.value = 'a';
        document.querySelector("#districts").add(option,null);
        for(i=0;i<Object.values(Object.values(str)[state.value].districts).length;i++){
            var option = document.createElement("option");
            option.value = i;
            option.text = Object.keys(Object.values(str)[state.value].districts)[i];
            districts.add(option,i+1);
        }
    }

}

function disp(){
    var option = document.createElement("option");
    option.text = "Select State";
    option.value = 'a';
    document.querySelector("#state").add(option,null);
    for(i=0;i<Object.keys(str).length;i++){
        var option = document.createElement("option");
        option.text = Object.keys(str)[i];
        option.value = i;
        document.querySelector("#state").add(option,i+1);
   }
   var option = document.createElement("option");
   option.text = "Select District";
   option.value = 'a';
   document.querySelector("#districts").add(option,null);
}

var str;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        str = JSON.parse(this.responseText);
        disp();
    }
};
xhttp.open("GET", "https://api.covid19india.org/v4/min/data.min.json", true);
xhttp.send(); 
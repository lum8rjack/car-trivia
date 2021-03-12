// javascript to perform GET request to the opentdb api
// example api request: https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple

var d = document.getElementById("questionslist");
var type = "multiple";

function getQuestions() {
	var url = "https://opentdb.com/api.php?";
	var ammount = "10";
	var category = document.getElementById("category").value;
	var difficulty = document.getElementById("difficulty").value;
	type = document.getElementById("type").value;

	// build the URL based on the types of questions
	url = url + "amount=" + ammount + "&category=" + category + "&difficulty=" + difficulty + "&type=" + type;

	// reset the table incase the user already had questions
	d.innerHTML = "";

	// create a table to separate each questions
	d.innerHTML += "<table>";

	// send GET request to API
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
    			var myArr = JSON.parse(this.responseText);
    			parseQuestions(myArr);
  		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	// close out the table
	d.innerHTML += "</table><br>";
}

function parseQuestions(arr) {
	
	var n = 0;
	for(i = 0; i < arr["results"].length; i++) {
		n = i + 1;
		// add question to the table
		d.innerHTML += "<tr><td><p>";
		d.innerHTML += n + ". " + arr["results"][i].question;
		
		if (type == "multiple") {
			d.innerHTML += "<ul>";
			d.innerHTML += "<b><li>" + arr["results"][i].correct_answer + "</li></b>";
			for(j = 0; j < arr["results"][i]["incorrect_answers"].length; j++) {
				d.innerHTML += "<li>" + arr["results"][i]["incorrect_answers"][j] + "</li>";
			}
			d.innerHTML += "</ul>";
		} else {
			d.innerHTML += " <b>[" + arr["results"][i].correct_answer + "]</b>";
		}
		
		d.innerHTML += "</p></td></tr><br>";

	}

}

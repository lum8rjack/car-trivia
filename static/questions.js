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
			incorrect_answers = arr["results"][i]["incorrect_answers"];
			possible_answers = incorrect_answers.concat(arr["results"][i]["correct_answer"]);
			possible_answers.sort( () => .5 - Math.random() );
			d.innerHTML += "<ul>";
			for(j = 0; j < possible_answers.length; j++) {
				d.innerHTML += "<li>" + possible_answers[j] + "</li>";
			}
			d.innerHTML += "<br><button onclick='showAnswer(" + i + ")'>Show Answer</button>";
			d.innerHTML += "</ul>";
		} else {
			d.innerHTML += "<br><button onclick='showAnswer(" + i + ")'>Show Answer</button>";
		}
		d.innerHTML += "<div id='questionAnswer" + i + "' style='display: none;'>" + arr["results"][i].correct_answer + "</div>";
		
		d.innerHTML += "</p></td></tr><br>";

	}

}

function showAnswer(question_number) {
  var x = document.getElementById("questionAnswer" + question_number);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

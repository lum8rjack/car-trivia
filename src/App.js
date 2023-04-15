import './App.css';
import Questions from "./Questions";
import { useState } from 'react';

function App() {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const [type, setType] = useState('multiple');
  const [questions, setQuestions] = useState([]);

  var URL = "https://opentdb.com/api.php?amount=10&category=";

  const newReq = (URL) => {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
            var myArr = JSON.parse(this.responseText);
            setQuestions(myArr.results);
        }
    };
    xmlhttp.open("GET", URL, true);
    xmlhttp.send();
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    var NEWURL = URL + category + "&difficulty=" + difficulty + "&type=" + type;
    newReq(NEWURL);
      
  };


  return (
    <div className="App text-center flex flex-col text-white m-5">
      <div className="Header">
        <h1 className="text-5xl font-bold m-5">Car Trivia</h1>
      </div>
      
      <div className="Selection flex justify-center my-5">
        <div className="selectionDiv">
        <form name="questionsForm" onSubmit={handleSubmit}>
          <select
            id="category"
            name="category"
            className="text-black mb-2 rounded p-1 w-80"
            onChange={(event) =>
              setCategory(event.target.value)
            }
          >
            <option value="">Any Category</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals & Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science & Nature</option>
            <option value="18">Science Computers</option>
            <option value="19">Science Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
          </select><br/>
          <select
            id="difficulty"
            name="difficulty"
            className="text-black mb-2 rounded p-1 w-80"
            onChange={(event) =>
              setDifficulty(event.target.value)
            }
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select><br/>
          <select
            id="type"
            name="type"
            className="text-black mb-2 rounded p-1 w-80"
            onChange={(event) =>
              setType(event.target.value)
            }
          >
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True/False</option>
          </select><br/>
          <input name="Submit" type="submit" value="Get Questions" className="bg-zinc-700 text-xl my-2 rounded-lg p-3 w-80" />
        </form>
        </div>
      </div>

      {questions.map((question, index) => {
        return (
          <Questions quest={question} key={index} />
        );
      })}

      <div className="Footer justify-center items-center bottom-0 inset-x-0 p-5">
            <p className="mb-2">Questions from <a href="https://opentdb.com/" className="underline">Open Trivia DB</a></p>
            <p><a href="https://twitter.com/lum8rjack">@lum8rjack</a> </p>
        </div>
    </div>
  );
}

export default App;

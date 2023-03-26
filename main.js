var options = ["rock", "paper", "scissor"];
var optionImage = [
  "./images/rock.png",
  "./images/paper.png",
  "./images/scissors.png",
];
var random = Math.floor(Math.random() * options.length);
function computerOption() {
  return Math.floor(Math.random() * 3);
}
function chooseRock() {
  var compValue = computerOption();
  var compOption = options[compValue];
  var yourOption = options[0];
  var result = gameResult(compOption, yourOption);
  console.log(result);
  showResult(result);
  displayOption(compValue, 0);
}
function choosePaper() {
  var compValue = computerOption();
  var compOption = options[compValue];
  var yourOption = options[1];
  var result = gameResult(compOption, yourOption);
  console.log(result);
  showResult(result);
  displayOption(compValue, 1);
}
function chooseScissor() {
  var compValue = computerOption();
  var compOption = options[compValue];
  var yourOption = options[2];
  var result = gameResult(compOption, yourOption);

  showResult(result);
  displayOption(compValue, 2);
}
function gameResult(computer, you) {
  if (computer == you) {
    return null;
  }
  //win
  if (computer == "rock" && you == "paper") {
    return true;
  } else if (you == "rock" && computer == "scissor") {
    return true;
  } else if (you == "scissor" && computer == "paper") {
    return true;
  }

  return false;
}
function showResult(result) {
  var resultTag = document.getElementById("result");
  if (result == true) {
    resultTag.innerText = "Congratulations! You win🥰";
  } else if (result == false) {
    resultTag.innerText = "Oh! You loose😶";
  } else {
    resultTag.innerText = "Match Draw! Please try again";
  }
  console.log(resultTag);
}
function displayOption(computer, you) {
  var compValue = document.getElementById("computer-option");
  compValue.innerHTML = "";
  var yourValue = document.getElementById("your-option");
  yourValue.innerHTML = "";
  var compImage = document.createElement("img");
  compImage.id = "img1";
  var yourImage = document.createElement("img");
  yourImage.id = "img2";
  compImage.src = optionImage[computer];
  yourImage.src = optionImage[you];
  compValue.append(compImage);
  yourValue.append(yourImage);
  console.log(compImage);
}

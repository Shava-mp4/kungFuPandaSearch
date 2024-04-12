// KF Panda Search

//Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("theme-btn").addEventListener("click", themeChange);

function btnClicked() {
  //Input
  let name = document.getElementById("char-in").value;
  name = name.toLowerCase();

  let charName = document.getElementById("char-name");
  let charQuote = document.getElementById("char-quote");
  let charImg = document.getElementById("char-img");

  //If statement - Test the input
  if (name == "po" || name === "dragon warrior") {
    charName.innerHTML = "Po";
    charQuote.innerHTML = "Buddy, I am the Dragon Warrior!";
    charImg.src = "img/po.png";
  } else if (name === "tigress") {
    charName.innerHTML = "Tigress";
    charQuote.innerHTML = "This is what you trained me for.";
    charImg.src = "img/tigress.png";
  } else if (name === "mantis") {
    charName.innerHTML = "Mantis";
    charQuote.innerHTML = "Fear the Bug!";
    charImg.src = "img/mantis.png";
  } else if (name === "monkey") {
    charName.innerHTML = "Monkey";
    charQuote.innerHTML =
      "We cannot give up hope. Po would want us to remain strong, hardcore. Right, Tigress?";
    charImg.src = "img/monkey.png";
  } else if (name === "crane") {
    charName.innerHTML = "Crane";
    charQuote.innerHTML =
      "You can chain my body, but you will never chain my warrior spirit!";
    charImg.src = "img/crane.png";
  } else if (name === "viper") {
    charName.innerHTML = "Viper";
    charQuote.innerHTML = "I don't need to bite to fight!";
    charImg.src = "img/viper.png";
  } else if (name === "oogway" || name === "turtle") {
    charName.innerHTML = "Oogway";
    charQuote.innerHTML = "There are no coincidences in this world.";
    charImg.src = "img/oogway.png";
  } else if (name === "shifu") {
    charName.innerHTML = "Shifu";
    charQuote.innerHTML =
      "If you only do what you can do, you will never be more than you are now.";
    charImg.src = "img/shifu.png";
  } else if (name === "shen" || name === "peacock") {
    charName.innerHTML = "Shen";
    charQuote.innerHTML =
      "The dead exist in the past, and I must tend to the future.";
    charImg.src = "img/shen.png";
  } else if (
    name === "mr ping" ||
    name === "mr.ping" ||
    name === "po's father"
  ) {
    charName.innerHTML = "Mr. Ping";
    charQuote.innerHTML =
      "To make something special you just have to believe it's special.";
    charImg.src = "img/mr-ping.png";
  } else if (name === "kai") {
    charName.innerHTML = "Kai";
    charQuote.innerHTML =
      "By the time I am done with them, Oogway, there will be no one left who will even remember your name!";
    charImg.src = "img/kai.png";
  } else if (name === "soothsayer") {
    charName.innerHTML = "Soothsayer";
    charQuote.innerHTML =
      "Your story may not have such a happy beginning but that does not make you who you are, it is the rest of it- who you choose to be.";
    charImg.src = "img/soothsayer.png";
  } else if (name === "tai lung") {
    charName.innerHTML = "Tai Lung";
    charQuote.innerHTML =
      "Not your fault? Who filled my head with dreams? Who drove me to train until my bones cracked? Who denied me my destiny?";
    charImg.src = "img/tai-lung.png";
  } else if (name === "boss wolf" || name == "wolf") {
    charName.innerHTML = "Boss Wolf";
    charQuote.innerHTML =
      "Guess nobody told you, If you mess with the wolf, you get the fangs.";
    charImg.src = "img/boss-wolf.png";
  } else if (name === "croc") {
    charName.innerHTML = "Croc";
    charQuote.innerHTML = "The only hero in this town is a dead one!";
    charImg.src = "img/croc.png";
  } else if (name === "storming ox" || name === "ox") {
    charName.innerHTML = "Storming Ox";
    charQuote.innerHTML = "It's time to surrender, panda. Kung fu is dead.";
    charImg.src = "img/storming-ox.png";
  } else {
    charName.innerHTML = "?????";
    charQuote.innerHTML = "----------";
    charImg.src = "img/question-mark.png";
  }
}

function themeChange() {
  let theme = document.getElementById("theme-in").value;
  let bG = document.getElementById("body");
  let bG2 = document.getElementById("div");

  if (theme === "dark" || theme === "night" || theme === "black") {
    bG.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    bG.style.color = "white";
    bG2.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  } else if (theme === "light" || theme === "day" || theme === "white") {
    bG.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    bG.style.color = "black";
    bG2.style.backgroundColor = "rgba(72, 116, 63, 0.7)";
  }
}

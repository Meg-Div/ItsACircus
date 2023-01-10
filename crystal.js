//gets age from name
const getAdvice = async () => {
  //updates inner text with data from api
  const words = document.querySelector("#words");
  let oneData = await fetch(`https://www.boredapi.com/api/activity`);
  const fact = await oneData.json();
  newFact = fact.activity.toLowerCase();

  //gives data as advice
  setTimeout(() => {
    words.innerText = `\nI suggest you... \n\n ${newFact}!`;
  }, 5000);
  setTimeout(() => {
    words.innerText = `\nThat's your fortune.\n\n Have a good day!`;
  }, 11000);
  setTimeout(() => {
    window.location = "leave.html";
  }, 17000);
};

getAdvice();

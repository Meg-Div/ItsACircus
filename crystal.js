/*
Previous API:

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

*/

const getJoke = async () => {
  const words = document.querySelector("#words");

  try {
    let oneData = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const joke = await oneData.json();
    const setup = joke.setup;
    const punchline = joke.punchline;

    if (words) {
      setTimeout(() => {
        words.innerText = `\n${setup}!`;
      });
      setTimeout(() => {
        words.innerText = `\n${punchline}!`;
      }, 7000);
      setTimeout(() => {
        words.innerText = `\nHave a great night folks!\n\n I'll be here all week!`;
      }, 15000);

      setTimeout(() => {
        window.location = "leave.html";
      }, 20000);
    }
  } catch (error) {
    console.error("Error fetching joke:", error);
  }
};
getJoke();

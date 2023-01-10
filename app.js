const getFacts = async () => {
  //grab form value
  let ageValue = document.querySelector("#inputOne");
  ageValue = ageValue.value;

  //clear out form and header
  const header = document.querySelector("#headOne");
  header.innerText = "";

  const form = document.querySelector("#form");
  form.innerHTML = "";
  form.classList = "hidden";

  //grabs data from API
  const two = document.querySelector("#one");
  const twoData = await fetch(`http://numbersapi.com/${ageValue}/trivia`);

  //updates string data for a sentence
  const fact = await twoData.text();
  newFact = fact.substring(0, fact.length - 1);
  two.innerHTML = `Did you know ${newFact}?\n\n`;

  //pauses before asking to move to next page
  setTimeout(() => {
    two.innerHTML = `Would you like your fortune told?  `;

    //creates links for next page - yes
    const yesLink = document.createElement("a");
    yesLink.classList =
      "flex-shrink-0 bg-green-400 text-center text-sm space-y-1 border-2 text-white py-1 px-2 sm:w-1/2 rounded";
    yesLink.innerHTML = "Yes";
    yesLink.href = "crystalBall.html";
    one.append(yesLink);

    //creates links for next page - no
    const noLink = document.createElement("a");
    noLink.classList =
      "flex-shrink-0 bg-red-500 text-center text-sm border-2 text-white py-1 px-2 sm:w-1/2 rounded";
    noLink.innerHTML = "No";
    noLink.href = "leave.html";
    one.append(noLink);
  }, 5000);
};

const getAge = async () => {
  //grab form value
  let nameValue = document.querySelector("#inputOne");
  nameValue = nameValue.value;

  //clear out form and header
  const header = document.querySelector("#headOne");
  header.innerText = "";

  const form = document.querySelector("#form");
  form.classList = "hidden";

  //grabs data from API
  let one = document.querySelector("#one");
  let oneData = await fetch(`https://api.agify.io?name=${nameValue}`);
  const json = await oneData.json();

  //clears out picture
  const magic = document.querySelector("#magic");
  magic.src = "";

  //logic for if a name is not entered
  if (json.age === null) {
    json.age = 0;
    one.innerText = `I'll guess you are ageless!`;
  } else {
    one.innerText = `I'll guess you are:\n\n ${json.age} years old!`;
  }

  //updates image
  let contain = document.querySelector("#container");
  const d = document.createElement("div");
  const image = document.createElement("img");
  image.classList = "max-w-full h-auto";
  image.src = `magician.png`;
  contain.append(image);

  //pauses and asks if the guess is your age
  setTimeout(() => {
    one.innerText = `Is this your age?  `;

    //creates links for next page
    let yes = document.querySelector("#yes");
    const yesLink = document.createElement("a");
    yesLink.classList =
      "flex-shrink-0 bg-green-400 text-center text-sm space-y-1 border-2 text-white py-1 px-2 sm:w-1/2 rounded";
    yesLink.innerText = "Yes";
    yesLink.href = "facts.html";
    one.append(yesLink);

    //if no age is given
    let no = document.querySelector("#no");
    const noLink = document.createElement("a");
    noLink.classList =
      "flex-shrink-0 bg-red-500 text-center text-sm border-2 text-white py-1 px-2 sm:w-1/2 rounded";
    noLink.innerText = "No";
    noLink.href = "birthday.html";
    one.append(noLink);
  }, 3000);
};

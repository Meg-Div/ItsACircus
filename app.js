const getAge = async () => {
  //grab form value
  let nameValue = document.querySelector("#inputOne");
  nameValue = nameValue.value;

  //clear out form and header
  const form = document.querySelector("#form");
  form.classList = "hidden";

  //grabs data from API
  let one = document.querySelector("#headOne");
  let oneData = await fetch(`https://api.agify.io?name=${nameValue}`);
  const json = await oneData.json();

  //clears out picture
  /*
  const magic = document.querySelector("#magic");
  magic.src = "";
  */

  //logic for if a name is not entered
  if (json.age === null) {
    json.age = 0;
    one.innerText = `I'll guess you are ageless!`;
    one.style.textAlign = "center";
  } else {
    one.innerText = `I'll guess you are... \n\n ${json.age} years old!`;
    one.style.textAlign = "center";
  }

  //updates image
  /*
  let contain = document.querySelector("#container");
  const d = document.createElement("div");
  const image = document.createElement("img");
  image.classList = "max-w-full h-auto";
  image.src = `magician.png`;
  contain.append(image);
  */

  setTimeout(() => {
    one.innerHTML = `<p>Would you like to hear a joke?</p>`;

    const yesLink = document.createElement("a");
    yesLink.classList =
      "flex-shrink-0 bg-green-400 text-center text-sm space-y-1 border-2 text-white py-1 px-2 sm:w-1/2 rounded";
    yesLink.innerHTML = "Yes";
    yesLink.href = "crystalBall.html";

    // Add a line break before appending the button
    one.append(document.createElement("br"), yesLink);

    //creates links for next page - no
    const noLink = document.createElement("a");
    noLink.classList =
      "flex-shrink-0 bg-red-500 text-center text-sm border-2 text-white py-1 px-2 sm:w-1/2 rounded";
    noLink.innerHTML = "No";
    noLink.href = "leave.html";
    one.append(noLink);
  }, 5000);
};

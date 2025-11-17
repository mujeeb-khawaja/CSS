function createCard(title, cName, views, monthsOld, duration, thumbnail){
    // Finish this function
    let card = document.createElement("div");
    card.className = "card";
    card.setAttribute("style", "display: flex; flex-direction: row; align-items: start; justify-items: center");

    // set thumbnail 
    let img = document.createElement("img");
    img.src = thumbnail;
    img.setAttribute("style", "width: 200px; height: auto; margin-right: 10px;");

    // set details
    let details = document.createElement("div");
    details.className = "details";
    details.setAttribute("style", "display: flex; flex-direction: row; align-items: center; justify-items: center");
    details.className = "details";

    // video title
    let videoTitle = document.createElement("h3");
    videoTitle.innerText = title;
    details.appendChild(videoTitle);

    // views and age
    let viewsAndAge = document.createElement("p");
    viewsAndAge.innerText = views + " views • ";
    details.appendChild(viewsAndAge);

    // months old
    let age = document.createElement("span");
    age.innerText = monthsOld + " months old";
    viewsAndAge.appendChild(age);

    const contaier = document.querySelector(".container");
    card.appendChild(img);
    card.appendChild(details);
    contaier.appendChild(card);
}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry",
560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyg4qApAw4IARUAAIhCGAFwAcABBgg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
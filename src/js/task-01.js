const list = document.querySelectorAll("li.item");
console.log(`Number of categories:  ${list.length}`);

const changedList = list.forEach((item) =>
  console.log(
    `Category: ${item.querySelector("h2").textContent}\nElements: ${
      item.querySelectorAll("li").length
    }`
  )
);

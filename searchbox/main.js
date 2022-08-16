let colors = [
  "red",
  "blue",
  "gray",
  "black",
  "white",
  "green",
  "pink",
  "yellow",
  "orange",
  "brown",
];

const searchInput = document.getElementById("search");
const resultsWrapper = document.querySelector(".results");
const deleteButton = document.getElementById("delete");

searchInput.addEventListener("keyup", () => {
  let results = [];
  let input = searchInput.value;
  if (input.length) {
    results = colors.filter((item) => {
      return item.includes(input);
    });
  }
  renderResults(results);
});

function renderResults(results) {
  if (!results.length) {
    return resultsWrapper.classList.add("show");
  }
  newColors = results.map((item) => {
    return `<li class="listItem">${item}</li>`;
  });
  resultsWrapper.classList.remove("show");
  let content = newColors.join(" ");
  resultsWrapper.innerHTML = `<ul>${content}</ul>`;
  let newTitle = newColors[0].substr(21, newColors[0].length - 26);
  document.title = newTitle;

  document.querySelectorAll(".listItem").forEach((listItem) =>
    listItem.addEventListener("click", (e) => {
      searchInput.value = e.target.innerHTML;
      searchInput.classList.add("green");
      resultsWrapper.classList.add("show");
    })
  );
}

deleteButton.addEventListener("click", (e) => {
  resultsWrapper.classList.add("show");
  searchInput.value = null;
});

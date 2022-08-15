const editableDiv = document.getElementById("editText");
const placeholder = editableDiv.getAttribute("data-placeholder");

editableDiv.addEventListener("click", function (e) {
  let input = document.createElement("input");
  input.type = "text";
  input.id = "textInput";
  input.value = document.getElementById("editText").innerHTML;
  e.target.innerHTML = "";
  e.target.appendChild(input);
  document.getElementById("textInput").focus();
});

editableDiv.addEventListener("focusout", changeToNormalText);
editableDiv.addEventListener("keypress", (event) => {
  event.key === "Enter" && changeToNormalText(event);
});

function changeToNormalText(event) {
  let inputValue = document.getElementById("textInput").value;
  document.getElementById("editText").innerHTML = "";
  document.getElementById("editText").innerHTML = inputValue;
  inputValue === "" && (event.target.innerHTML = placeholder);
}

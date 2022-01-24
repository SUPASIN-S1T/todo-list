let inputText = document.querySelector(".input-custom");
let btnSubmit = document.querySelector(".btn");
let showDataContainer = document.querySelector(".show-data-list");

function addTodoList() {
  if (inputText.value.length === 0) {
    alert("pls, input your comment :)");
  } else {
    showDataContainer.style.display = "block";
    // Create div and add class
    const comment = document.createElement("div");
    comment.classList.add("data-item");

    // Create tag p, button, i and add class
    const textComment = document.createElement("p");
    textComment.innerText = inputText.value;

    const btnDelete = document.createElement("button");
    btnDelete.classList.add("del-custom");

    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-trash-alt");
    btnDelete.append(icon);

    // event delete
    btnDelete.addEventListener("click", () => {
      comment.remove();
      if (showDataContainer.childElementCount < 1) {
        showDataContainer.style.display = "none";
      }
    });

    // Append in div show data
    comment.append(textComment, btnDelete);
    showDataContainer.append(comment);
    inputText.value = "";
  }
}

btnSubmit.addEventListener("click", addTodoList);

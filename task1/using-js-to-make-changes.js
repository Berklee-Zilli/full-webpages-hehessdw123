document.title = "Task 1 by Liang XU";
const headerTitle = document.querySelector("header h1");
if (headerTitle) {
    headerTitle.textContent = "TASK 1";
}
const introParagraph = document.getElementById("intro");
if (introParagraph) {
    introParagraph.textContent = "I dunno what to write so whatever blah blah blah";
}

// Change the title of the list
const listTitle = document.querySelector("#list-of-things-i-like h2");
if (listTitle) {
    listTitle.textContent = "List of things I like";
}

const listItems = document.querySelectorAll("#list-of-things-i-like .list-item");
listItems.forEach(item => {
    item.classList.add("favorite-color");
});

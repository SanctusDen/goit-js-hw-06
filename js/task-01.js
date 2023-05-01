const navEl = document.querySelectorAll(".item")
console.log(`Number of categories: ${navEl.length}`);

navEl.forEach((item) => {
    const isElmitem = item.firstElementChild;

    console.log(`Category: ${isElmitem.textContent}`)
    console.log(`Elements: ${isElmitem.nextElementSibling.children.length}`)
});
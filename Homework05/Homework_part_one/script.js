function changedParagraph() {
  let paragraph = document.getElementsByTagName("p");
  {
    paragraph[0].innerText = "Changed text of all paragraphs and headers";
    paragraph[1].innerText = "Changed text of all paragraphs and headers";
  }
}

changedParagraph(); //We changed the elements of HTML document with tag <p>; using getElementsByTagName selector in a function.

function changedHeaderOne() {
  let header = document.getElementsByTagName("h1");

  for (let i = 0; i < header.length; i++) {
    header[i].innerText = "Changed text of all paragraphs and headers";
  }
}

changedHeaderOne();
//We changed the elements of HTML document with tag <h1>, using getElementsByTagName selector in a function with loop.

function chanedHeaderThree() {
  let headerThree = document.getElementsByTagName("h3");
  headerThree[0].innerText = "Changed text of all paragraphs and headers";
}
chanedHeaderThree();
//We changed the elements of HTML document with tag <h3>, using getElementsByTagName selector in a function.

let querySelectorText = document.querySelector("text");
querySelectorText.innerText = "Changed text of all paragraphs and headers";
//We changed the elements of HTML document with tag <text>, using Query selector.

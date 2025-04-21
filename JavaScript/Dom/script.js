let parentEle = document.getElementById("parent")

parentEle.innerHTML = "<h1>hello</h1>"

let headingEle = document.createElement("h1")
headingEle.innerText= "Hello World"
parentEle.appendChild(headingEle)
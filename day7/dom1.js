function dom() {
    // by tag_name
    document.getElementsByTagName("h1")[0].innerHTML = "Hello DOM";
    document.getElementsByTagName("h1")[1].innerHTML = "hi DOM";
    document.getElementsByTagName("h1")[0].style.color = "yellow";
    document.getElementsByTagName("h1")[1].style.color = "yellow";
    // by id 
    document.getElementById("dis").innerHTML = "Namaste!";
    document.getElementById("dis").style.color = "red";
    // by class_name
    document.getElementsByClassName("dis")[0].innerHTML = "Hello World";
    document.getElementsByClassName("dis")[0].style.color = "blue";
    document.body.style.backgroundColor = "black";
}function rev() {
    // by tag_name
    document.getElementsByTagName("h1")[0].innerHTML = "Hello";
    document.getElementsByTagName("h1")[1].innerHTML = "hi";
    document.getElementsByTagName("h1")[0].style.color = "black";
    document.getElementsByTagName("h1")[1].style.color = "black";
    // by id 
    document.getElementById("dis").innerHTML = "Namaste";
    document.getElementById("dis").style.color = "black";
    // by class_name
    document.getElementsByClassName("dis")[0].innerHTML = "hello world";
    document.getElementsByClassName("dis")[0].style.color = "black";
    document.body.style.backgroundColor = "white";
}

document.body.style.backgroundColor = 'black';
document.body.style.color = 'white';

document.getElementById('id1').innerText = 'Hello, Namaste';
document.getElementById('id2').innerText = 'This is a simple webpage';

let a=document.getElementsByClassName('cls1');
a[0].innerText = 'This is a cls1 element';
a[1].innerText = 'This is another cls1 element';
a[0].style.color = 'red';
a[1].style.color = 'green';

let b=document.getElementsByClassName('cls2');
b[0].innerText = 'This is a paragraph with tag name p';
b[1].innerText = 'This is another paragraph with tag name p';
b[0].style.color = 'blue';
b[1].style.color = 'orange';

let c=document.getElementsByTagName('h1');
c[0].style.color = 'yellow';
c[1].style.color = 'purple';

let d=document.querySelector('.cls1');
d.style.color = 'white';
//it updates only the first element with class cls1
let e=document.querySelectorAll('.cls2');
e[0].style.color = 'red';
e[1].style.color = 'cyan';

// document(it gives us full document)
var element;
element=document;
console.log(element);

// all element track
var elements;
elements=document.all;
console.log(elements);
elements=document.all[10].style.color='green';
console.log(elements);

console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.footer);
console.log(document.links);
console.log(document.links[0].style.color='red');
console.log(document.images);
console.log(document.forms);
console.log(document.doctype);
console.log(document.URL);
console.log(document.domain);

// get Id
document.getElementById('hello').style.background='yellow';
// get class name
var hello = document.getElementsByClassName('hello');
console.log(hello);
hello[0].style.color='red';
hello[1].style.background='red';

// tag name
var span = document.getElementsByTagName('span');
console.log(span);
span[0].style.color='green';

// innerText get(it gives us innerText without html)
var innerText = document.getElementById('innerText').innerText;
console.log(innerText);

// innerHTML get(it givers us all html tag)
var innerHTML = document.getElementById('innerHTML').innerHTML;
console.log(innerHTML);

//getAttribute (it get all attribute and value also according to id,class,style,onClick and so on.)
var attr = document.getElementById('world').getAttribute("style");
console.log(attr);

//attributes (it gives us all attributes in array then we can use those array)
var attributes = document.getElementById('attributes').attributes;
console.log(attributes);
console.log(attributes[0]);
console.log(attributes[1]);
//if you need to get specific attribute value 
console.log(attributes[3].value);
//if you need to get specific attriburs name
console.log(attributes[3].name);


//set innerText, innerHTML
console.log(document.getElementById('inner').innerText='noushedul islam');
console.log(document.getElementById('inner').innerHTML='<h1>noushedul islam</h1>');
console.log(document.getElementById('inner').setAttribute('class','setclass'));
console.log(document.getElementById('inner').setAttribute('id','setid'));



//querySelector(it work only first element) querySelectorAll(it work all according element)
console.log(document.querySelector('.list'));
console.log(document.querySelectorAll('.list'));//it gives us a array
console.log(document.querySelectorAll('.list')[1]);
//document.querySelectorAll('#header h1'); we can select like this






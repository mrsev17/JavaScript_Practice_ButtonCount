




let counter = 1; // Create starting variables for count

function add_count() { // Create function for make scenario for count click
    let integer = (() => { // Create variables which includes function for integer default variables
        return counter++;
    });
    let tag = document.createElement("p"); // Create variables for creating element on page (paragraph in this case)
    let text = null; // Still don't get it about creating variables with null
    text = document.createTextNode(integer()); // Create node for text, this help make new string
    tag.appendChild(text); // This string help add node (text) to the end of list parent
    let element = document.getElementsByTagName("body")[0]; // Get access to all elements inside <body>
    element.appendChild(tag) // Create new node
};

button.addEventListener('click', add_count) // addEventListener for case if i need put more scenario for that click




/*

let counter = 0;

const button = document.querySelector('input');

function add_count() {
    let integer = (() =>  counter++);
    const tag = document.createElement("p");
    const text = document.createTextNode(integer());
    tag.appendChild(text);
    const element = document.body
    element.appendChild(tag)
};

button.addEventListener('click', add_count)

/*
    First version (Not Working)

    function add_count() {
        let integer = (function () {
        let counter = 0;
        return function() {return counter++;};
    }());
    let tag = document. createElement("p");
    let text;
    text = document. createTextNode(integer());
    tag. appendChild(text);
    let element = document. getElementsByTagName("body")[0];
    element. appendChild(tag)};
 */
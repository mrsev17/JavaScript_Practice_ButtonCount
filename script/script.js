




let counter = 1;

function add_count() {
    let integer = (() => {
        return counter++;
    });
    let tag = document.createElement("p");
    let text = null;
    text = document.createTextNode(integer());
    tag.appendChild(text);
    let element = document.getElementsByTagName("body")[0];
    element.appendChild(tag)
};


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
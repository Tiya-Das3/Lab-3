// Change the text of an element using innerHTML
document.getElementById('changeTextBtn').addEventListener('click', function() {
    // Accessing the first element with the class name 'text' and changing its innerHTML
    document.getElementsByClassName('text')[0].innerHTML = 'Dynamic Website';
    // Change the header color
    document.getElementById('header').style.color = 'red';
    // Change the position of the content div
    document.getElementById('content').style.position = 'relative';
    document.getElementById('content').style.top = '20px';
});

// Change the image source after clicking a button
document.getElementById('changeImageBtn').addEventListener('click', function() {
    // Accessing the element by ID and changing its 'src' attribute
    document.getElementById('image').src = '9.jpeg';
});

// Add a text node and attach it to a parent node
document.getElementById('addTextNodeBtn').addEventListener('click', function() {
    var newText = document.createTextNode('This is a new text node added dynamically.');
    var contentDiv = document.getElementById('content');
    var newParagraph = document.createElement('p');
    newParagraph.appendChild(newText);
    newParagraph.className = 'dynamic-text'; // Add a class for easy reference
    contentDiv.appendChild(newParagraph);
});

// Delete the last added text node
document.getElementById('deleteNodeBtn').addEventListener('click', function() {
    var contentDiv = document.getElementById('content');
    var lastDynamicText = contentDiv.querySelector('.dynamic-text:last-child');
    if (lastDynamicText) {
        contentDiv.removeChild(lastDynamicText);
    }
});

/* Delete a node
document.getElementById('deleteNodeBtn').addEventListener('click', function() {
    var content = document.getElementById('content');
    if (content.childNodes.length > 0) {
        content.removeChild(content.lastChild); // Removes the last child node
    }
});*/

// Change the CSS properties like color and position of a particular element
document.getElementById('changeColorBtn').addEventListener('click', function() {
    var color = document.getElementById('colorInput').value;
    document.getElementById('content').style.color = color;
});

document.getElementById('changePositionBtn').addEventListener('click', function() {
    var topPosition = document.getElementById('topPositionInput').value + 'px';
    var leftPosition = document.getElementById('leftPositionInput').value + 'px';
    var contentDiv = document.getElementById('content');
    contentDiv.style.position = 'relative'; // Ensure the element is positioned
    contentDiv.style.top = topPosition;
    contentDiv.style.left = leftPosition;
});
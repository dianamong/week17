let comments = [];

function addComments() {
    let str = document.querySelector('#comments').value;
    comments.push(checkSpam(str));
    console.log(comments);
    sendComments();
    console.log(str);
    document.querySelector('#comments').value = '';
}

function sendComments() {
    let optionString = '';
    for (comment of comments) {
        optionString += `<div><p class="comment">${comment}</p></div>`
    }
    document.querySelector('.container').innerHTML = optionString;
}

document.addEventListener('DOMContentLoaded', function () {
    sendComments();
});

function checkSpam(str) {
    str = str.replace(/viagra/gi, '***').replace(/XXX/gi, '***');
    return str;
}

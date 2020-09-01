console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 2500);
console.log('Second message!');


// Sample XMLHttpRequest
const xhr = new XMLHttpRequest(); //Object
const url = "https://api-to-call.com/endpoint";
xhr.responseType = 'json'; //specifying response type

xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE){
    return xhr.response;
  }
}

xhr.open('GET', url);
xhr.send();

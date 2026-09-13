function getQuote() {   
    let xhr=new XMLHttpRequest();
    xhr.open("GET","https://api.quotable.io/random");
    xhr.onload=function(){
            let data=JSON.parse(xhr.responseText);
            document.getElementById("quote").innerHTML=data.content;
            document.getElementById("author").innerHTML="- "+data.author;
        };
xhr.send();
}
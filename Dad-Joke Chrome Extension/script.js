// fetch api call kari -> usmese data aaya usko json me convert kiya ->us data ke aandhar se joke text nikala
// const jokeText = jokeData.attachments[0].text;
// bad me p me vo data pass krne ke liye p ko access krne ke liye id ka use kiya 
// aani nantr tyamdhe innerhtml mdhe joke pass kela 

fetch('https://icanhazdadjoke.com/slack')
.then(data =>data.json())
.then(jokeData => {
    const jokeText = jokeData.attachments[0].text;
    const jokeElement = document.getElementById('jokeElement');

    jokeElement.innerHTML=jokeText;
})
                               
# A.I.V.A.N.

[Click here for the live site](https://aivan.herokuapp.com/)


![aivan](https://user-images.githubusercontent.com/32605566/161364875-efed4d08-e2c9-4e0d-89c8-10c19a84d3ff.jpg)
This is A.I.V.A.N. - Artificial Intelligence Voice Assistant News app build with React and paired with backend integration of [Alan AI](https://alan.app/). 
It allows using voice commands get latest news articles, based on categories, terms and sources, request AI reading its headlines for the user, opening the source article for more in-deph reading as well as have a small chat with AI bot. The name A.I.V.A.N. was inspired by J.A.R.V.I.S(Just A Rather Very Intelligent System), AI assistant of Tony Stark from "Iron Man" movies.😉


## Technologies
- JavaScript
- React.js
- Material UI
- [News api](https://newsapi.org/) 
- [Alan AI](https://alan.app/) 


## Usage
Reading newspapers takes up a lot of time and the reader
usually spends reading about articles in which they are not
interested. By using this project, the user can get to hear
about all the important headlines of their chosen topic on
the go. 

## Voice Commands
Press the mic and try to say:

 - Give me the latest news ---------------> This will provide the latest news worldwide
 - Give me the news on Bitcoin(or any other topic) ------------------> This will provide articles related to the topic
 - Tell me the latest news from CNN(or any other source like BBC news,wired...)-----------------> This will provide latest from CNN

This app also allows A.I.V.A.N to read the headlines if the user wants and could also open the news article( Say 'Open 5' to open article number 5 on the page)

And wait, you can also have a small talk with Alan if you wish ------> Try asking general questions like "Hi! How are you? What are you?" to check his response

## Code Snippets
Alan Platform provides an AI backend for the application to create conversational experiences. Using Alan Studio, we can specify something called Intents. Or rather a query that we want to ask A.I.V.A.N. and then he can say something back.

Here you can see A.I.V.A.N. listening for an intent:
```
let savedArticles = [];

intent("Give me the news from $(source* (.*))", (p) => {
  let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;

  if (p.source.value) {
    NEWS_API_URL = `${NEWS_API_URL}&sources=${p.source.value
      .toLowerCase()
      .split(" ")
      .join("-")}`;
  }

  api.request(NEWS_API_URL, (error, response, body) => {
    const { articles } = JSON.parse(body);

    if (!articles.length) {
      p.play("Sorry, please try searching for news from a different source");
      return;
    }

    savedArticles = articles;

    p.play({ command: "newHeadlines", articles });
    p.play(`Here are the (latest|recent) ${p.source.value}.`);

    p.play("Would you like me to read the headlines?");
    p.then(confirmation);
  });
});

```

Then in our client we can set our commands:
```
const alanKey = "YOUR-ALAN-KEY";

useEffect(() => {
  alanBtn({
    key: alanKey,
    onCommand: ({ command, articles, number }) => {
      if (command === "newHeadlines") {
        setNewsArticles(articles);
        setActiveArticle(-1);
      }
    },
  });
}, []);
```











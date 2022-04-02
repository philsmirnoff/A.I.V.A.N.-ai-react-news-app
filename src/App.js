import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';
import NewsCards from './components/NewsCards/NewsCards';
import backgroundVideo from './video/video.mp4';
import useStyles from './styles.js';


const alanKey = '99e83ca7425c523ed9b0ebb2e0621a152e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if(command  === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(-1)
        } else  if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if(parsedNumber > 20) {
            alanBtn().playText('Please try that again...');
          } else if(article) {
          window.open(article.url, '_blank');
          alanBtn().playText('Opening...');
        }
      }
    }
    })
  }, [])
  return (
    <div>
      <div className={classes.logoContainer}>
          {newsArticles.length ? (
                    <div className={classes.infoContainer}>
                        <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Open article number [4]</Typography></div>
                        <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Go back</Typography></div>
                    </div>
                ) : null}

                <Typography variant="h2" component="h2" className={classes.title}>A.I.V.A.N</Typography>
               <img src="https://2img.net/r/hpimg15/pics/654844mamania.gif" className={classes.logo} alt="AI Logo" />
           </div>
            <video className={classes.backgroundVideo} loop muted autoPlay id='video' >
        <source
          src={backgroundVideo}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
}

export default App;

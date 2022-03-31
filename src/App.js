import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
// import backgroundVideo from './video/video.mp4';
import useStyles from './styles.js';


const alanKey = '99e83ca7425c523ed9b0ebb2e0621a152e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if(command  === 'newHeadlines') {
          setNewsArticles(articles);
        } else  if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        }
      }
    })
  }, [])
  return (
    <div>
      <div className={classes.logoContainer}>
      <img src="https://images.app.goo.gl/HdgiZfrarsqqF2Eq8" className={classes.alanLogo} alt="logo" />
      </div>
      {/* <video loop muted autoPlay id='video'>
        <source
          src={backgroundVideo}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> */}
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
}

export default App;

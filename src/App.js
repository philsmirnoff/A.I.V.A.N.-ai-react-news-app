import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';


const alanKey = '99e83ca7425c523ed9b0ebb2e0621a152e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if(command  === 'newHeadlines') {
          console.log(articles);
        }
      }
    })
  }, [])
  return (
    <div>
      <h1>AIVAN APP</h1>
    </div>
  );
}

export default App;

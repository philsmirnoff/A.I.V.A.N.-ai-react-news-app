import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';
import NewsCard from '../NewsCard/NewsCard';
import useStyles from './styles.js'
// we named it useStyles because makeStyles in styles.js creates a hook that we can call later on on the top of our component.
const infoCards = [
  { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
  { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
  { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
  { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];


const NewsCards = ({ articles }) => {
  const classes = useStyles();

  if(!articles.length){
    return (
      <Grow in>
         <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {infoCards.map((infoCard, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard} >
            <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
              <Typography variant="h5">{infoCard.title}</Typography>
              {
                infoCard.info
                 ? (<Typography variant="h6">
                   <strong>
                     {infoCard.title.split(' ')[2]}:
                     </strong>
                     <br />
                      {infoCard.info}
                     </Typography>) : null }
              <Typography variant="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
            </div>
        </Grid>
        ))}
        </Grid>
      </Grow>
    )
  }
  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
    {articles.map((article, i) => (
      // Grid has only 12 spaces. if we put xs={12} that means it will show only 1 card in a row, if sm={6} it will show 2 cards in a row md={4} - 3 cards, and lg={3} will show 4 cards.
      <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex'}} >
      <NewsCard article={article} i={i} />
      </Grid>
    ))}
    </Grid>
    </Grow>

  )
}

export default NewsCards

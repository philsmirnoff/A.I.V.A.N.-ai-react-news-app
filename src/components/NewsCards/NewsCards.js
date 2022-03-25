import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';
import NewsCard from '../NewsCard/NewsCard';
import useStyles from './styles.js'
// we named it useStyles because makeStyles in styles.js creates a hook that we can call later on on the top of our component.


const NewsCards = ({articles}) => {
  const classes = useStyles();
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

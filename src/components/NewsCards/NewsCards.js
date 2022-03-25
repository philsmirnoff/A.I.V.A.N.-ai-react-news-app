import React from 'react'

const NewsCards = ({articles}) => {
  return (
    <div>
    {articles.map((article, i) => (
      <NewsCard />
    ))}
    </div>
  )
}

export default NewsCards

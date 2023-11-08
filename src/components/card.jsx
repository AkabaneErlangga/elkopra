import React from 'react'

const Card = ({article}) => {
  return (
    <div className='flex flex-col gap-y-3 outline outline-1 outline-blue rounded-md max-w-xs text-left'>
      <div className='max-h-40 overflow-hidden w-full rounded-s-md'><img src={article.urlToImage} alt="" /></div>
      <h3 className='px-6 truncate font-semibold text-lg'>{article.title}</h3>
      <p className='px-6'>{article.description}</p>
      <a className='px-6 pb-4 text-blue underline' href={article.url}>Learn more..</a>
    </div>
  )
}

export default Card
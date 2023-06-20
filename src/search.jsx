import './search.css'

import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { getPostTeasers } from './search_data'

const SearchPage = () => {
  const [value, setValue] = useState('')
  const [posts, setPosts] = useState(null)

  const handleSearch = () => {
    getPostTeasers().then((allPosts) => {
      setPosts(
        allPosts.filter((post) =>
          post.keywords.toLowerCase().includes(value.toLowerCase())
        )
      )
    })
  }
  console.log(posts)
  return (
    <div className="M_Filter">
      <div className="C_FilterPageNavigation">
        <div className="Q_GoBack"></div>
        <div className="A_TitleContent">Поиск</div>
      </div>
      <div className="W_FilterPageButtons">
        <div className="searchWrapper">
          <input
            placeholder="пластик, пакет, магазин, мусор..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="text"
          />
          <button onClick={handleSearch}>Найти</button>
        </div>
      </div>

      <div className="C_SearchPageCards">
        {posts && posts.length ? (
          posts.map((post) => (
            <a href={post.link} className="post" key={post.id}>
              {post.bg && <img src={post.bg} alt="" />}
              <div className="A_AdditionalTitle">{post.title}</div>
            </a>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.querySelector('.W_ContentReactModule'))
  root.render(<SearchPage />)
})

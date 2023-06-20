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
    <main>
      <h1 className="heading">Поиск</h1>
      <div className="searchWrapper">
        <input
          placeholder="пластик, пакет, магазин, мусор..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
        />
        <button onClick={handleSearch}>Найти</button>
      </div>
      <div className="postsWrapper">
        {posts && posts.length ? (
          posts.map((post) => (
            <a href={post.link} className="post" key={post.id}>
              {post.bg && <img src={post.bg} alt="" />}
              {post.title}
              <div className="keywords">
                {post.keywords.split(',').map((key, idx) => (
                  <p key={idx}>{key}</p>
                ))}
              </div>
            </a>
          ))
        ) : (
          <div>Ничего не найдено</div>
        )}
      </div>
    </main>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.querySelector('.W_ContentReactModule'))
  root.render(<SearchPage />)
})

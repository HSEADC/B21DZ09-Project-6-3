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
    <div className="O_SearchAndFilterContainer">
      <div className="M_Filter">
        <div className="C_FilterPageNavigation">
          <div className="Q_GoBack"></div>
          <div className="A_TitleContent">Поиск</div>
        </div>
        <div className="W_FilterPageButtons">
          <input
            placeholder="Введите запрос"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="text"
          />
          <button onClick={handleSearch}>Найти</button>
        </div>
      </div>
      <div className="C_SearchPageCards">
        {posts && posts.length
          ? posts.map((post) => (
              <a
                href={post.link}
                className="post"
                key={post.id}
                style={{ backgroundImage: `url(${post.bg})` }}
              >
                <div
                  style={{ backgroundImage: `url(${post.icon})` }}
                  className="Q_ContentCardsIcon"
                ></div>
                <div className="A_AdditionalTitle">{post.title}</div>
              </a>
            ))
          : null}
      </div>
      <div className="M_Footer">
        <div className="W_FooterCardProducers">
          <div className="A_TextIndependentFooter">ИЗГОТОВИТЕЛИ</div>
          <div className="A_TextDependentFooter">Олейниченко Ася</div>
          <div className="A_TextDependentFooter">Шестакова Станислава</div>
        </div>
        <div className="W_FooterCardCurators">
          <div className="A_TextIndependentFooter paddingbot5">КУРАТОРЫ</div>
          <div className="Q_ABCImage"></div>
          <div className="A_TextDependentFooter paddingtop2">Захар День</div>
          <div className="A_TextDependentFooter">Соня Каем</div>
        </div>
        <div className="C_FooterCardSocialNetworks">
          <div className="A_TextIndependentFooter">МЫ В СОЦ СЕТЯХ</div>
          <div className="W_FooterSymbolsSocialNetworks">
            <a href="https://t.me/TRASHRETRASH">
              <div className="Q_SocialNetworkIconTelegram"></div>
            </a>
            <a href="https://instagram.com/_re_trash_?igshid=YmMyMTA2M2Y=">
              <div className="Q_SocialNetworkIconInstagram"></div>
            </a>
            <a href="https://vk.com/club216840635">
              <div className="Q_SocialNetworkIconVkontakte"></div>
            </a>
          </div>
        </div>
        <div className="W_FooterCardHSE">
          <div className="Q_BarkodeImage"></div>
          <div className="Q_HSEImage"></div>
        </div>
        <div className="W_LogoBottomFooter">
          <div className="A_TextIndependentFooter paddingbot0">Re*trash</div>
        </div>
      </div>
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  // Define the specific relative path where you want to render the component
  const specificPath = 'search.html'

  // Check if the current URL contains the specific relative path
  if (window.location.pathname.includes(specificPath)) {
    const container = document.createElement('div')
    container.classList.add('W_ContentReactModule')
    document.body.appendChild(container)

    const root = createRoot(container)
    root.render(<SearchPage />)
  }
})

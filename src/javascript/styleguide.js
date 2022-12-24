const brandDefault = `
Мы позиционируем себя как дружелюбное пространство, в котором
            каждый сможет начать осознанное потребление с нуля. <br />
            Наш бренд стремится быть максимально простым и понятным. Именно
            поэтому <br />
            в основу фирменного стиля легла эстетика технических стикеров.
`

const brandToggle = `
<span class="gray">Мы позиционируем себя как</span> дружелюбное пространство<span class="gray">, в котором</span>
каждый сможет начать осознанное потребление с нуля. <br />
Наш бренд стремится быть максимально простым и понятным<span class="gray">. Именно
поэтому <br />
в основу фирменного стиля легла эстетика технических стикеров.</span> 
`

const weDefault = `
<span class="gray">Осознанные, удобные, доступные, современные, семейные, экологичные,</span>
            дружелюбные<span class="gray">, открытые, образованные, спокойные, понимающие, идейные,
            информированные,</span> рациональные, любознательные<span class="gray">, комфортные, стильные,
            легкие, уважительные, активные.</span>
`

const weToggle = `Осознанные, удобные, доступные, современные, семейные, экологичные,
дружелюбные, открытые, образованные, спокойные, понимающие, идейные,
информированные, рациональные, любознательные, комфортные, стильные,
легкие, уважительные, активные.
`

const goalDefault = `Нам важны экологическая ситуация, <br />
            желания и моральное состояние наших <br />
            пользователей, а также вклад каждого, <br />
            даже самый маленький.
`

const goalToggle = `
<span class="gray">Нам важны</span> экологическая ситуация, <br />
желания и моральное состояние <span class="gray">наших</span> <br />
пользователей<span class="gray">, а также</span> вклад каждого<span class="gray">, <br />
даже самый маленький.</span>
`

const missionDefault = `Наша миссия — очистить от мусора <br />
            весь мир!
`

const missionToggle = `<span class="gray">Наша миссия — </span>очистить от мусора <br />
            весь мир!
`

const brandBtn = document.getElementById('brand-btn');
const weBtn = document.getElementById('we-btn');
const goalBtn = document.getElementById('goal-btn');
const missionBtn = document.getElementById('mission-btn');

const brandText = document.getElementById('brand-text');
const weText = document.getElementById('we-text');
const goalText = document.getElementById('goal-text');
const missionText = document.getElementById('mission-text');

brandBtn?.addEventListener('click', () => {
  if (!brandText) return;
  if (brandBtn?.dataset?.text === 'default') {
    brandText.innerHTML = brandToggle;
    brandBtn.dataset.text = 'toggle'
    return
  }
  brandText.innerHTML = brandDefault;
  brandBtn.dataset.text = 'default'
})
weBtn?.addEventListener('click', () => {
  if (!weText) return;
  if (weBtn?.dataset?.text === 'default') {
    weText.innerHTML = weToggle;
    weBtn.dataset.text = 'toggle'
    return
  }
  weText.innerHTML = weDefault;
  weBtn.dataset.text = 'default'
})
goalBtn?.addEventListener('click', () => {
  if (!goalText) return;
  if (goalBtn?.dataset?.text === 'default') {
    goalText.innerHTML = goalToggle;
    goalBtn.dataset.text = 'toggle'
    return
  }
  goalText.innerHTML = goalDefault;
  goalBtn.dataset.text = 'default'
})
missionBtn?.addEventListener('click', () => {
  if (!missionText) return;
  if (missionBtn?.dataset?.text === 'default') {
    missionText.innerHTML = missionToggle;
    missionBtn.dataset.text = 'toggle'
    return
  }
  missionText.innerHTML = missionDefault;
  missionBtn.dataset.text = 'default'
})
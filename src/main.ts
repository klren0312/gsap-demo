import './style.css'
import doGsapInit from './gsap'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="test-page">
    <h1 class="title">横向滚动</h1>
    <div class="box-container">
      <div class="box">
        <img class="box-image" src="https://picsum.photos/1200/900" alt="box" />
      </div>
      <div class="box">
        <img class="box-image" src="https://picsum.photos/1200/900" alt="box" />
      </div>
      <div class="box">
        <img class="box-image" src="https://picsum.photos/1200/900" alt="box" />
      </div>
    </div>
    <h1 class="title">卡片效果</h1>
    <div class="card-container">
      <div class="card card-1">
        <img class="card-image" src="https://picsum.photos/400/300" alt="card" />
      </div>
      <div class="card card-2">
        <img class="card-image" src="https://picsum.photos/400/300" alt="card" />
      </div>
      <div class="card card-3">
        <img class="card-image" src="https://picsum.photos/400/300" alt="card" />
      </div>
      <div class="card card-4">
        <img class="card-image" src="https://picsum.photos/400/300" alt="card" />
      </div>
      <div class="card card-5">
        <img class="card-image" src="https://picsum.photos/400/300" alt="card" />
      </div>
    </div>
  </div>
`

doGsapInit()

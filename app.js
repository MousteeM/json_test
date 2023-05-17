let dataArr = []
let itemsDisplayed = 20
const body = document.querySelector('.container')
const cardContainer = document.querySelector('.card-container')
const getData = async function() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  dataArr = data
  
  const res2 = await fetch('https://jsonplaceholder.typicode.com/photos')
  const data2 = await res2.json()
  console.log(data2)
  for (let i = 0; i < 5 ; i++) {
    const {id, title, body: dataBody} = dataArr[i];
    renderCards(dataArr, data2, i)
  }
}

function renderCards(data, data2, i) {
  const {userId, id, title, body: dataBody} = data[i];
  const html = `
    <div class="card" >
      <img src="${data2[i].url}" alt="" />
      <div class="card-text">
        <h3 class="title">${title}</h3>
        <p>${dataBody}</p>
        <button type="submit">Follow category</button>
      </div>
    </div>
  `
  
  cardContainer.insertAdjacentHTML('beforeend', html)
}

getData()

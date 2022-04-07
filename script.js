const API = "https://www.scorebat.com/video-api/v3/";
const main = document.getElementById('main')

const searchBar = document.getElementById("searchBar");

console.log(searchBar)
get()
async function get(){
    let res = await fetch(API)
    let data = await res.json()
    showDatas(data.response)
    console.log(data)
}
function showDatas(datas) {
    document.getElementById("numberOfMatch").innerHTML = datas.length;

    datas.forEach((datar) => {
        const { competition, competitionUrl, date, matchviewUrl , thumbnail , title  } = datar

        const dataEl = document.createElement('div')
        dataEl.classList.add('data')

        dataEl.innerHTML = `
        <div id="all" style="display : block;">
        <br>
        <br>
       <div align="center" style="  ">
        <div id="card-main" class="card mb-3 p-2  " style="max-width: 540px; border : 1px solid rgb(116, 116, 116)" align="left">
        <div class="row g-0">
          <div class="col-md-4" align="center">
           <img src="${thumbnail}"  id="img"  class="img-fluid rounded-start forteta w-100" alt="">
          </div>
          
          <div class="col-md-8 fortet" >
            <div class="card-body">
              <h5 class="card-title"  id="title">${title}  </h5>
              <small style="font-size : 10px;" id="competition">${competition}</small>
              <br>
              <small class="card-text" id="date">${date}</small>
              <br>
              <br>
              
              <a href="${matchviewUrl}"><button class="btn btn-warning">Watch match</button></a>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>

            <br>
        `
        main.appendChild(dataEl)
    })
}


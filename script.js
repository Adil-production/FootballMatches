
const API = "https://www.scorebat.com/video-api/v3/";
const main = document.getElementById('main')
get()
async function get(){
    let res = await fetch(API)
    let data = await res.json()
    showDatas(data.response)
    console.log(data.response)
}

function showDatas(datas) {
    

    datas.forEach((data) => {
        const { competition, competitionUrl, date, matchviewUrl , thumbnail , title  } = data

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
           <img src="${thumbnail}"  id="img" onclick="myFunc()" class="img-fluid rounded-start forteta w-100" alt="">
          </div>
          
          <div class="col-md-8 fortet" >
            <div class="card-body">
              <h5 class="card-title"  id="title">${title}  </h5>
              <small style="font-size : 10px;" id="competition">${competition}</small>
              <br>
              <small class="card-text" id="date">${date}</small>
              <br>
              <br>
              <a href="${matchviewUrl}"><button type="button" onclick="btn()" class="btn btn-primary">Watch match</button></a>
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

function settingOut(){

        document.getElementById("setting").style.display = "block";
        document.getElementById("setting-out").style.display = "none";
        document.getElementById("home").style.display = "none";
        document.getElementById("home-out").style.display = "block";
        document.getElementById("main").style.display = "none";
        document.getElementById("top").style.display = "none";
        document.getElementById("setting-frame").style.display = "block";
        
    }

function homeOut(){

        document.getElementById("home").style.display = "block";
        document.getElementById("home-out").style.display = "none";
        document.getElementById("setting").style.display = "none";
        document.getElementById("setting-out").style.display = "block";
        document.getElementById("main").style.display = "block";
        document.getElementById("top").style.display = "block";
        document.getElementById("setting-frame").style.display = "none";
    }



    function myFunction() {
        var checkBox = document.getElementById("myCheck");
        localStorage.setItem("theme" , "dark")
        if (checkBox.checked == true){
            //navbar
            document.getElementById("nav").classList.remove("navbar-light")
            document.getElementById("nav").classList.remove("bg-light")
            document.getElementById("nav").classList.add("navbar-dark")
            document.getElementById("nav").classList.add("bg-dark")

            //bottom navbar
            document.getElementById("navBottom").classList.add("bg-dark")
            document.getElementById("setting").classList.add("white")
            document.getElementById("setting-out").classList.add("white")
            document.getElementById("home").classList.add("white")
            document.getElementById("home-out").classList.add("white")
            //background
            document.body.classList.remove("bg-light")
            document.body.classList.add("bg-dark")
            //main title
            document.getElementById("top").classList.add("text-white")
            //some stuff
            document.getElementById("dark").classList.add("text-white")
          
        } else {
            localStorage.setItem("theme" , "light")
            document.getElementById("nav").classList.add("navbar-light")
            document.getElementById("nav").classList.add("bg-light")
            document.getElementById("nav").classList.remove("navbar-dark")
            document.getElementById("nav").classList.remove("bg-dark")
            //bottom navbar
            document.getElementById("navBottom").classList.remove("bg-dark")
            document.getElementById("setting").classList.remove("white")
            document.getElementById("setting-out").classList.remove("white")
            document.getElementById("home").classList.remove("white")
            document.getElementById("home-out").classList.remove("white")
            //background
            document.body.classList.add("bg-light")
            document.body.classList.remove("bg-dark")
            //main title
            document.getElementById("top").classList.remove("text-white")
            //some stuff
            document.getElementById("dark").classList.remove("text-white")
            
        }
      }
      function get1(){
          if(localStorage.getItem("theme") == "dark"){
              //navbar
            document.getElementById("nav").classList.remove("navbar-light")
            document.getElementById("nav").classList.remove("bg-light")
            document.getElementById("nav").classList.add("navbar-dark")
            document.getElementById("nav").classList.add("bg-dark")

            //bottom navbar
            document.getElementById("navBottom").classList.add("bg-dark")
            document.getElementById("setting").classList.add("white")
            document.getElementById("setting-out").classList.add("white")
            document.getElementById("home").classList.add("white")
            document.getElementById("home-out").classList.add("white")
            //background
            document.body.classList.remove("bg-light")
            document.body.classList.add("bg-dark")
            //main title
            document.getElementById("top").classList.add("text-white")
            //some stuff
            document.getElementById("dark").classList.add("text-white")
          }
          else if(localStorage.getItem("theme") == "light"){
            localStorage.setItem("theme" , "light")
            document.getElementById("nav").classList.add("navbar-light")
            document.getElementById("nav").classList.add("bg-light")
            document.getElementById("nav").classList.remove("navbar-dark")
            document.getElementById("nav").classList.remove("bg-dark")
            //bottom navbar
            document.getElementById("navBottom").classList.remove("bg-dark")
            document.getElementById("setting").classList.remove("white")
            document.getElementById("setting-out").classList.remove("white")
            document.getElementById("home").classList.remove("white")
            document.getElementById("home-out").classList.remove("white")
            //background
            document.body.classList.add("bg-light")
            document.body.classList.remove("bg-dark")
            //main title
            document.getElementById("top").classList.remove("text-white")
            //some stuff
            document.getElementById("dark").classList.remove("text-white")
          }
          if(localStorage.getItem("theme") == "light" && document.getElementById("myCheck").checked == true){
            document.getElementById("myCheck").click()
          }else{

          }
          if(localStorage.getItem("theme") == "dark" && document.getElementById("myCheck").checked == false){
            document.getElementById("myCheck").click()
          }else{

          } 
          if(localStorage.getItem("theme") == "" || localStorage.getItem("theme") == null){
              localStorage.setItem("theme" , "light")
          }else{

          }
      }

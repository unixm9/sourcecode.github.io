let apiKey = '2d0cb6a6371f49eba4f1388c4b56379c';
let proxy = 'https://cors-anywhere.herokuapp.com/';

let xhr = new XMLHttpRequest();
// `http://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
// 'news.json'
xhr.open('GET' , 'india.json' , true);
xhr.onload = function() {
    if(this.status == 200) {
        let info = JSON.parse(this.responseText);
        let articles = info.articles; 
        console.log(info);
        let newsHTML = '';
        articles.forEach(element => {
          let news = `<section class="section">

          <aside class="aside">
              <img src=${element.urlToImage} alt="news_image">
          </aside>
  
          <header class="header">
              ${element.title}
          </header>
  
          <article class="news-description">
              ${element.description}
          </article>
  
          <footer class="footer">
                  <a href="${element.url}">read  more</a>
          </footer>
            
  </section>`;
            newsHTML += news;
        });
        main.innerHTML = newsHTML;
    }
    else {
        console.log("error has occurred");
    }
};
xhr.send();


var indicator = document.querySelector('#indicator');
var ul = document.querySelectorAll('.ul');
function moveIndicator(e) {
   indicator.style.left = e.offsetLeft + 'px';
   indicator.style.width = e.offsetWidth + 'px';
}

ul.forEach(item => {
   item.addEventListener("click" , (e)=> {
       moveIndicator(e.target);
   });
});




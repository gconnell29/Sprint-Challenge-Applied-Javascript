// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// tests
// console.log(articleList[articleLength[0]])
// console.log(idvLength[0])
// console.log('articles', articleList);

const cardsCont = document.querySelector('.cards-container');

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
  const articleList = response.data.articles; // an object of an array of objects {[{4 pairs}], [{4 pairs}], [{4 pairs}], [{4 pairs}]}
  const articleLength = Object.keys(articleList);
  console.log(articleList);
  
  // loop through 5 objects
  for (let i = 0; i < articleLength.length; i++) {
    const idvLength = articleList[articleLength[i]];
  // loop through array of each object
    for (let j = 0; j < idvLength.length; j++) {
      // create DOM elements
      let card = document.createElement('div');
      let headline = document.createElement('div');
      let author = document.createElement('div');
      let imgCont = document.createElement('div');
      let img = document.createElement('img');
      let credit = document.createElement('span');
      
      // assign classes/attribute
      card.classList.add('card');
      headline.classList.add('headline');
      author.classList.add('author');
      imgCont.classList.add('img-container');
      
      //populate elements
      headline.innerHTML = idvLength[j]['headline'];
      // img.setAttribute('src', idvLength[j]['authorPhoto']);
      img.src = idvLength[j]['authorPhoto'];
      credit.innerHTML = `By ${idvLength[j]['authorName']}`;
      
      // append structure
      card.appendChild(headline);
      card.appendChild(author);
      author.appendChild(imgCont);
      imgCont.appendChild(img);
      card.appendChild(credit);
      cardsCont.appendChild(card);
      
    }; // end for loop j
  }; // end for loop i
}) // end .then
.catch(err => {
  console.log('There is an error with the cards')
  console.log(err)
})
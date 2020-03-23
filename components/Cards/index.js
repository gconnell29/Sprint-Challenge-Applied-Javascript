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

const cardsCont = document.querySelector('cards-container');

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
  const articlesResult = response.data.articles;
  console.log('articles', articlesResult);
  
  articlesResult.forEach((element, index) => {
    // create DOM elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgCont = document.createElement('div');
    const img = document.createElement('img');
    const credit = document.createElement('span');

    // assign classes/attribute
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container');

    //populate elements
    img.setAttribute('src', element[index]['authorPhoto']);
    credit.innerHTML = `By ${element[index]['authorName']}`;

    // append structure
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgCont);
    imgCont.appendChild(img);
    card.appendChild(credit);

    cardsCont.appendChild(card);

    return card;
  });
})
.catch(err => {
  console.log('There is an error with the cards')
})
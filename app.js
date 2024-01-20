// local reviews data
const reviews = [
    {
      id: 1,
      name: 'JavaScript',
      job: 'web developer',
      img: 'https://res.cloudinary.com/dzqx4v0al/image/upload/v1705760755/JS_xtohhz.png',
    },
    {
        id: 1,
        name: 'CSS',
        job: 'web developer',
        img: 'https://res.cloudinary.com/dzqx4v0al/image/upload/v1705760755/CSS_vnz5ru.png',
      },
      {
        id: 1,
        name: 'HTML',
        job: 'web developer',
        img: 'https://res.cloudinary.com/dzqx4v0al/image/upload/v1705760755/Html_rm7aep.png',
      },
      {
        id: 1,
        name: 'React',
        job: 'web developer',
        img: 'https://res.cloudinary.com/dzqx4v0al/image/upload/v1705760755/ReactJs_md3zn9.png',
      },
      {
        id: 1,
        name: 'WordPress',
        job: 'web developer',
        img: 'https://res.cloudinary.com/dzqx4v0al/image/upload/v1705760757/WordPress_o6dcsn.png',
      },
   
    
  ];
  // select items
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener('click', function () {
    console.log('hello');
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });
  
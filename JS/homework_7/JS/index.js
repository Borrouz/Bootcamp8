'use strict'

/*
  Создайте функцию createPostCard(), которая 
  создает и возвращает DOM-узел карточки поста.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }
  ];


//   <!-- <div class="post">
//   <img class="post__image" src="http://via.placeholder.com/400x150" alt="post image">
//   <h2 class="post__title">Lorem ipsum dolor</h2>
//   <p class="post__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!</p>
//   <a class="button" href="#">Read more</a>
// </div> -->
    const elemPostCard = function (arr) {
      for (let el of arr) {
        createPostcard(el);
    }
  };
  const createPostcard = function (el) {
      let root = document.createElement('div');
      let posts = document.createElement('div');
      let img = document.createElement('img');
      let h2 = document.createElement('h2');
      let p = document.createElement('p');
      let a = document.createElement('a');
      let body = document.querySelector('body');
      posts.classList.add('posts');
      img.classList.add('post__image');
      h2.classList.add('post__title');
      p.classList.add('post__text');
      a.classList.add('button');
      img.setAttribute('src', `${el.img}`);
      img.setAttribute('alt', 'post image');
      a.setAttribute('href', '#');
      h2.textContent = `${el.title}`;
      p.textContent = `${el.text}`;
      a.textContent = `${el.link}`;
      body.append(root);
      root.append(posts);
      posts.append(img, h2,p,a);
  }
  elemPostCard(posts);
  
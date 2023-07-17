const testimonial = [
  {
    name: "Jerrie G",
    photoURL:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
    text: "Apple is awesome! Really good. I would also like to say thank you to all your staff. I was amazed at the quality of apple.",
  },

  {
    name: "Belia O",
    photoURL:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    text: "Your company is truly upstanding and is behind its product 100%. I'm good to go. It fits our needs perfectly. Really good.",
  },

  {
    name: " Letta V",
    photoURL:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    text: "Apple has completely surpassed our expectations. I have gotten at least 50 times the value from apple. We were treated like royalty.",
  },

  {
    name: " Arabelle",
    photoURL:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
    text: "Apple is the most valuable business resource we have EVER purchased. I will refer everyone I know.",
  },
  {
    name: "Sherilyn D",
    photoURL:
      "https://media.istockphoto.com/id/1386657448/photo/shot-of-a-handsome-young-man-against-a-studio-background.jpg?s=1024x1024&w=is&k=20&c=aTl8pi5mxnSBZheL_8swmWzyYcBzLIlyAQDb4Bpo9Sc=",
    text: "Apple has got everything I need. Just what I was looking for. I wish I would have thought of it first. I will recommend you to my colleagues.",
  },
]

const imgEl = document.querySelector('img');

const textEl = document.querySelector('.text')

const usernameEl = document.querySelector('.username')

let i = 0;

updatetestimonial();

function updatetestimonial() {
    const {name, photoURL,text} = testimonial[i];
    imgEl.src = photoURL;
    textEl.innerText = text;
    usernameEl.innerText = name;
    i++;
    if(i === testimonial.length) {
        i = 0;
    }
    setTimeout(() => {
        updatetestimonial()
    }, 5000);
}

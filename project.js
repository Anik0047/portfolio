let projectData = [
    {
        image: 'images/project.png',
        name: 'Pizza Delicious',
        detail: 'React, React-Router-Dom, React-Hook-Form, Tailwind, DaisyUi ,Firebase, MongoDB',
        describe_1: 'Fully secured using Firebase authentication system.', 
        describe_2: 'Dynamic dashboard depends on different kind of users.' , 
        describe_3: "Admin panel can control the user's role like verifying or deleting." , 
        github: 'https://github.com/Anik0047/pizza-shop-client',
        live: 'https://pizza-shop-react.web.app/',
        tags: '#fullstack,#react'
    },
    {
        image: 'images/E-Mart Online Shop.png',
        name: 'E-Mart Online Shop',
        detail: 'PHP, MySQL, HTML, CSS, Tailwind, DaisyUi, Sweet Alert',
        describe_1: 'Created an online shopping platform with user authentication.', 
        describe_2: 'Product browsing, and a shopping cart.' , 
        describe_3: "Admin panel can control the user's role like verifying or deleting." ,
        github: 'https://github.com/Anik0047/EmartShop',
        live: 'https://emart-onlines-hop.000webhostapp.com/index.php',
        tags: '#fullstack,#php'
    },
    {
        image: 'images/netflix-clone.png',
        name: 'Netflix-Clone',
        detail: 'React.js, React-Router-Dom, Firebase, Netlify',
        describe_1: 'Fully secured using Firebase authentication system.', 
        describe_2: 'TMDB API is used.', 
        github: 'https://github.com/Anik0047/netflix-clone',
        live: 'https://jocular-sundae-825390.netlify.app/',
        tags: '#frontend,#react'
    },
    
]

// creating project cards in frontend

const createProjectCards = (data) => {
    let projectContainer = document.querySelector('.project_container');

    projectContainer.innerHTML += `
    <div class="project_card" data-tags="${data.tags}">
          <div class="project_wrapper">
            <div class="project_thumbnail">
              <img src="images/close.png" class="close_btn" alt="" />
              <img src="${data.image}" class="project_img" alt="" />
              <span class="tags">${data.tags}</span>
            </div>

            <div class="project_body">
              <h1 class="project_name">${data.name}</h1>
              <p class="project_detail">
                <strong>Technology:</strong> ${data.detail}
              </p>
              <ul>
              <li>${data.describe_1}</li>
              <li>${data.describe_2}</li>
              <li>${data.describe_3}</li>
              </ul>
              <a href="${data.github}" target="_blank" class="btn">Github</a>
              <a href="${data.live}" target="_blank" class="btn">Live Link</a>
            </div>
          </div>
        </div>
    `
}


projectData.forEach(data => createProjectCards(data));
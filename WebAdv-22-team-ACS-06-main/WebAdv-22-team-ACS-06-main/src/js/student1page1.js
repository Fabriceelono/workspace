//Author: David Silva Troya

const postsToShow = {
    post1: {
        title: 'The 4 seasons in Belgium',
        categories: ['Experiences', 'Facts', 'Culture', 'Advices'],
        firstText: 'Spring begins on March 21, summer begins on June 21, autumn on September 21, and winter on December 21.',
        userName: 'Sandra Vervoort',
        userImgSrc: 'img/blog/profile-pic.jpg',
        userLink: '/student1page2.html',
        date: 'September 5, 2021',
        rate: 4,
        postImg: 'img/blog/bel-blog-img.jpg',
    },
    post2: {
        title: 'The Flemish Region of Belgium',
        categories: ['Culture', 'Experiences', 'Facts', 'Advices'],
        firstText: 'Probando con mucho más español mis queridos amigos, no se me ocurre que más poner jaja',
        userName: 'Dante Stiffler',
        userImgSrc: 'img/blog/profile-pic.jpg',
        userLink: '/student1page2.html',
        date: 'November 15, 2021',
        rate: 4,
        postImg: 'https://cdn.pixabay.com/photo/2018/08/14/20/36/mini-europe-3606552_960_720.jpg',
    },
    post3: {
        title: 'Belgium: What to do in the weekends',
        categories: ['Fun', 'Experiences', 'Life', 'Advices'],
        firstText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
        userName: 'Alexander Magno',
        userImgSrc: 'img/blog/profile-pic.jpg',
        userLink: '/student1page2.html',
        date: 'October 19, 2021',
        rate: 2,
        postImg: 'https://cdn.pixabay.com/photo/2021/10/14/21/11/windmill-6710363_960_720.jpg',
    },
    post4: {
        title: 'Things that will blow your mind',
        categories: ['Life', 'Experiences', 'Facts'],
        firstText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        userName: 'María Ortega',
        userImgSrc: 'img/blog/profile-pic.jpg',
        userLink: '/student1page2.html',
        date: 'December 21, 2021',
        rate: 2,
        postImg: 'https://cdn.pixabay.com/photo/2016/09/16/22/35/city-1675290_960_720.jpg',
    },
    post5: {
        title: 'Information about Student Jobs',
        categories: ['Oportunities', 'Experiences', 'Facts', 'Advices'],
        firstText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim nec. In iaculis nunc sed augue lacus viverra. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Aliquet eget sit amet tellus cras adipiscing enim eu turpis. Dui nunc mattis enim ut tellus elementum sagittis. Magna fermentum iaculis eu non. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Arcu felis bibendum ut tristique et egestas quis ipsum. Tortor vitae purus faucibus ornare suspendisse sed nisi. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Erat velit scelerisque in dictum non consectetur a. Et tortor at risus viverra adipiscing at. Suspendisse in est ante in nibh mauris. Nunc consequat interdum varius sit amet mattis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. A arcu cursus vitae congue mauris rhoncus aenean. Vestibulum lectus mauris ultrices eros in cursus turpis.',
        userName: 'Joshua Zambrano',
        userImgSrc: 'img/blog/profile-pic.jpg',
        userLink: '/student1page2.html',
        date: 'January 1, 2022',
        rate: 5,
        postImg: 'https://cdn.pixabay.com/photo/2018/09/17/19/52/belgium-3684645_960_720.jpg',
    },
};

const hideLoadingScreen = () => {
    const loadingSection = document.querySelector('#dast-loading-screen');
    loadingSection.style.display = 'none';
};

const createPostCategories = (categories) => {
    let postCategories = '';
    for (let i = 0; i < categories.length; i++) {
        postCategories += `
        <span class="badge bg-info text-dark py-2 mb-2">
        ${categories[i]}
        </span>`;
    }
    return postCategories;
};
const createPostRate = (postRate) => {
    let rate = '';
    for (let i = 0; i < postRate; i++) {
        rate += '⭐';
    }
    return rate;
};
const elipsisToPostText = (text) => {
    let textToShow = '';

    for (let i = 0; i < text.length; i++) {
        textToShow += text.charAt(i);
        if (i > 300) {
            break;
        }
    }
    textToShow += '...';
    return textToShow;
};

const setPostInCarousel = () => {
    //<div class="carousel-item active">
    const postsContainer = document.querySelector('#dast-items-container');
    let activateFirstOne = true;
    Object.keys(postsToShow).forEach((key) => {
        const postData = postsToShow[key];
        const postContainer = document.createElement('div');
        const postCategories = createPostCategories(postData.categories);
        const rate = createPostRate(postData.rate);
        if (activateFirstOne) {
            activateFirstOne = false;
            postContainer.className += 'carousel-item active';
        } else {
            postContainer.className += 'carousel-item';
        }

        const postDataToInnerHTML = `
            <div class="container">
                <div class="row">
                    <div class="card col-10 offset-1 p-4 my-4 d-flex flex-column position-static shadow rounded-3 carousel-post-background">
                        <h3 class="mb-0 dast-text-elipsis">
                            ${postData.title}
                        </h3>
                        <strong class="d-inline-block mb-2 text-primary">
                            ${rate}
                        </strong>
                        <div class="row">
                            <p class="card-text mb-auto dast-text-elipsis">
                                ${postData.firstText}
                            </p>
                            <div class="col-auto dast-show-post-category">
                                ${postCategories}
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class=" col-12 col-md-6 align-self-center">
                                <div class="row">
                                    <div class="col-12 col-md-auto align-self-center text-center text-md-end pe-0">
                                        <img class="dast-profile-pic bd-placeholder-img rounded-circle" src="${postData.userImgSrc}" alt="Profile picture from ${postData.userName}">
                                    </div>
                                    <div class="col-12 col-md-8 align-self-center text-center text-md-start ps-1 ">
                                        <a href="${postData.userLink}?id=${key}" class="text-decoration-none stretched-link dast-post-link">
                                            <p class="dast-text-elipsis mb-0">
                                                ${postData.userName}
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 align-self-center">
                                <div class="text-muted text-center text-md-end">${postData.date}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        postContainer.innerHTML += postDataToInnerHTML;
        postsContainer.append(postContainer);
    });
};

const setListOfPosts = () => {
    const postsContainer = document.querySelector('#dast-blog-list .row.my-2');
    Object.keys(postsToShow).forEach((key) => {
        const postData = postsToShow[key];
        const postContainer = document.createElement('div');
        postContainer.className += 'col-md-12';
        const postCategories = createPostCategories(postData.categories);
        const rate = createPostRate(postData.rate);
        const firstText = elipsisToPostText(postData.firstText);
        // const firstText = 'elipsisToPostText(postData.firstText)';

        const postDataToInnerHTML = `
        <div class="row g-0 border rounded-3 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col-12 col-md-4 p-2">
                <img class="dast-img-fit rounded" src="${postData.postImg}" alt="Image from ${postData.title}">
            </div>
            <div class="col-12 col-md-8 p-4 d-flex flex-column position-static">
                <h3 class="mb-0">
                    ${postData.title}
                </h3>
                <strong class="d-inline-block mb-2 text-primary">
                    ${rate}
                </strong>
                <div class="row">
                    <div class="col-12">
                        <p class="card-text mb-auto ">
                            ${firstText}
                        </p>
                    </div>
                    <div class="col-auto dast-show-post-category">
                        ${postCategories}
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-12 col-md-6 align-self-center">
                        <div class="row">
                            <div class="col-12 col-md-auto align-self-center text-center text-md-end pe-0">
                                <img class="dast-profile-pic bd-placeholder-img border rounded-circle" src="${postData.userImgSrc}" alt="Profile picture from ${postData.userName}">
                            </div>
                            <div class="col-12 col-md-8 align-self-center text-center text-md-start ps-1 ">
                                <a href="${postData.userLink}?id=${key}" class="text-decoration-none stretched-link dast-post-link">
                                    <p class="dast-text-elipsis mb-0">
                                        ${postData.userName}
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 align-self-center">
                        <div class="text-muted text-center text-md-end">${postData.date}</div>
                    </div>
                </div>

            </div>
        </div>
        `;

        postContainer.innerHTML += postDataToInnerHTML;
        postsContainer.append(postContainer);
    });
};

window.onload = () => {
    console.log('Ready to Work!! page 1');
    setPostInCarousel();
    setListOfPosts();
    hideLoadingScreen();
    console.log('done!!');
};
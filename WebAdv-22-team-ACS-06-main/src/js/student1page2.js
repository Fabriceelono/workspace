// Author: David Silva Troya
const randomImgs = {
    0: 'https://cdn.pixabay.com/photo/2021/07/27/16/52/belgium-6497401_960_720.jpg',
    1: 'https://cdn.pixabay.com/photo/2017/08/08/14/44/tower-2611573_960_720.jpg',
    2: 'https://cdn.pixabay.com/photo/2017/08/25/06/54/street-map-2679271_960_720.jpg',
    3: 'https://cdn.pixabay.com/photo/2021/10/14/21/11/windmill-6710363_960_720.jpg',
    4: 'https://cdn.pixabay.com/photo/2016/09/16/22/35/city-1675290_960_720.jpg',
    5: 'https://cdn.pixabay.com/photo/2018/09/17/19/52/belgium-3684645_960_720.jpg',
    6: 'https://cdn.pixabay.com/photo/2017/10/13/12/48/sunset-2847548_960_720.jpg',
    7: 'https://cdn.pixabay.com/photo/2021/05/13/11/58/old-windmill-6250684_960_720.jpg',
    8: 'https://cdn.pixabay.com/photo/2017/09/30/15/08/panorama-2802329_960_720.jpg',
    9: 'https://cdn.pixabay.com/photo/2018/09/06/20/34/belgium-3659262_960_720.jpg',
    10: 'https://cdn.pixabay.com/photo/2018/08/25/21/23/belgium-3630972_960_720.jpg',
    11: 'https://cdn.pixabay.com/photo/2021/11/07/21/32/antwerp-6777959_960_720.jpg',
    12: 'https://cdn.pixabay.com/photo/2018/08/14/20/36/mini-europe-3606552_960_720.jpg',
    13: 'https://cdn.pixabay.com/photo/2017/08/06/18/04/bruges-2594730_960_720.jpg',
    14: 'https://cdn.pixabay.com/photo/2018/08/13/21/03/belgium-3603957_960_720.jpg',
    15: 'https://cdn.pixabay.com/photo/2017/04/11/03/33/dinant-2220459_960_720.jpg',
};
const postsToShow = {
    post1: {
        title: 'The 4 seasons in Belgium',
        categories: ['Experiences', 'Facts', 'Culture', 'Advices'],
        firstText: 'Spring begins on March 21, summer begins on June 21, autumn on September 21, and winter on December 21.',
        forBody: [
            '@*title*:1 - Winter',
            '@*text*:Temperature around 0 degrees (cold/freezing), and short days (meaning it’s dark early), but the time to see a lot of movies and read books, and when we are lucky, we have snow! ',
            '@*img*:https://cdn.pixabay.com/photo/2017/04/11/03/33/dinant-2220459_960_720.jpg',
            '@*title*:2 - Spring',
            '@*text*:temperature rises to 12°С , warm days in April, the Blossom, the trees get leaves and “the bells leave for Rome” (meaning Easter 😊)',
            '@*img*:img/blog/bel-blog-img.jpg',
            '@*title*:3 - Summer',
            '@*text*:between 16°С and 25°С, time to go on holiday, to eat outside, having BBQ’s and the best… : float on an air mattress on a (swimming) pond!!!',
            '@*img*:img/blog/bel-blog-img.jpg',
            '@*title*:4 - Autumn',
            '@*text*:between 7°С and 12°С , the colors and the falls of the leaves, the “red with white dots” mushrooms in the forest, halloween ',
            '@*img*:img/blog/bel-blog-img.jpg',
        ],
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
        postImg: 'img/blog/bel-blog-img.jpg',
    },
    post3: {
        title: 'Belgium: What to do in the weekends',
        categories: ['Fun', 'Experiences', 'Life', 'Advices'],
        firstText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
        userName: 'Alexander Magno',
        userImgSrc: 'img/blog/profile-pic.jpg',
        userLink: '/student1page2.html',
        date: 'Octover 19, 2021',
        rate: 2,
        postImg: 'img/blog/bel-blog-img.jpg',
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
        postImg: 'img/blog/bel-blog-img.jpg',
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
        postImg: 'img/blog/bel-blog-img.jpg',
    },
};

const createPostRate = (postRate) => {
    let rate = '';
    for (let i = 0; i < postRate; i++) {
        rate += '⭐';
    }
    return rate;
};

const getFormatPostInfo = (texto) => {
    if (texto.includes('@*title*:')) {
        return `<div class="col-12"><h4>${texto.substring(9)}</h4></div>`;
    }
    if (texto.includes('@*text*:')) {
        return `<div class="col-12"><p>${texto.substring(8)}</p></div>`;
    }
    if (texto.includes('@*img*:')) {
        return `<div class="col-12 col-md-10 offset-md-1 mb-3 text-center">
                <img class="dast-img-fit rounded" src="${texto.substring(7)}" alt="Random img">
                </div>`;
    }
    return '<p>No right data...</p>';
};

const setPostDataInHTML = (postContainer, postsContainer, dataToInnerHTML) => {
    postContainer.innerHTML += dataToInnerHTML;
    postsContainer.append(postContainer);
    const loadingSection = document.querySelector('#dast-loading-screen');
    loadingSection.style.display = 'none';
};

const setTitleSectionInfo = (postData) => {
    const postsContainer = document.querySelector('#dast-section-title');
    // background-image: url(../img/blog/post-background-2.png);
    // document.body.style.backgroundImage = "url('img_tree.png')";
    // postImg: 'img/blog/bel-blog-img.jpg',
    postsContainer.style.backgroundImage = `url("../${postData.postImg}")`;
    const postContainer = document.createElement('div');
    postContainer.className += 'container py-2';
    const rate = createPostRate(postData.rate);
    const dataToInnerHTML = `
        <div class="row">
            <h2 class="mb-0 col-12 text-center text-md-start ">
                ${postData.title}
            </h2>
            <div class="col-12 col-md-auto align-self-center text-center text-md-start ps-1">
                <img class="dast-profile-pic bd-placeholder-img border rounded-circle" src="${postData.userImgSrc}" alt="Profile picture from ${postData.userName}">
                <a href="#${postData.userName}" class="stretched-link">${postData.userName}</a>
            </div>
            <div class="col-12 col-md-auto align-self-center text-center text-md-start ps-1">
                <div class="text-muted text-center text-md-end">
                    <i class="fa-solid fa-clock"></i> 
                    ${postData.date}
                </div>
            </div>
            <div class="col-12 col-md-auto align-self-center text-center text-md-start ps-1">
                <strong class="d-inline-block mb-2 text-primary">
                    ${rate}
                </strong>
            </div>
        </div>
    `;
    postContainer.innerHTML += dataToInnerHTML;
    postsContainer.append(postContainer);
};

const setBodyPostInfo = (postData) => {
    let dataToInnerHTML = '';
    postData.forBody.forEach((element) => {
        console.log(element);
        dataToInnerHTML += getFormatPostInfo(element);
    });
    return dataToInnerHTML;
};

const randomNum = (min = Math.ceil(2), max = Math.floor(10)) => Math.floor(Math.random() * (max - min + 1) + min);

const setBodyPostInfoRandom = (postContainer, postsContainer) => {
    let dataToInnerHTML = '';

    $.getJSON('https://baconipsum.com/api/?callback=?', (data) => {
        const textData = `${data}`;
        for (let index = 0; index < randomNum(); index++) {
            dataToInnerHTML += `
            <div class="row pt-3">
                <div class="col-12">
                    <p>                        
                        ${textData.repeat(      randomNum(1, 2))}                    
                    </p>
                </div>
                <div class="col-12 col-md-10 offset-md-1 text-center">
                    <img class="dast-img-fit rounded" src="${randomImgs[randomNum(0, 15)]}" alt="Random img">
                </div>
            </div>
        `;
        }
        setPostDataInHTML(postContainer, postsContainer, dataToInnerHTML);
    });
};

const loadPostInfo = () => {
    const urlString = window.location;
    const url = new URL(urlString);
    const key = url.searchParams.get('id');
    const postData = postsToShow[key];
    setTitleSectionInfo(postData);
    let dataToInnerHTML = ` <p> ${postData.firstText} </p>`;
    const postsContainer = document.querySelector('#dast-blog-post-info');
    const postContainer = document.createElement('div');
    postContainer.className += 'container mt-3';

    if (postData.forBody != null) {
        dataToInnerHTML += setBodyPostInfo(postData);
        setPostDataInHTML(postContainer, postsContainer, dataToInnerHTML);
    } else {
        postContainer.innerHTML += `
            <div class="row pt-3 mb-0 pb-0">
                <div class="col-12">
                    <p>                        
                        ${postData.firstText}                    
                    </p>
                </div>
            </div>`;
        setBodyPostInfoRandom(postContainer, postsContainer);
    }
};

window.onload = () => {
    console.log('Ready to Work!! page 2');
    loadPostInfo();
};
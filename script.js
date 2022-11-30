const vowel = 'aeeioou';
const con = 'BCCCDDDFGHJKLMMMNNNPQRSSSTTVXZWY'.toLocaleLowerCase();


const projects = document.querySelector('.projects');
const announcements = document.querySelector('.announcements');
const trending = document.querySelector('.trending');


const random = (x=10)=> Math.floor(Math.random()*(x+1));

const create = (x)=> document.createElement(x);

const getRandomColor = ()=>{
    return 'rgb('+random(255)+','+random(255)+','+random(255)+')';
}

const getSyllable = ()=>{
    return con[random(con.length-1)]+vowel[random(vowel.length-1)];
};
const getWord = (x=random(7))=>{
    let word = (x<=3) ? getSyllable()+con[random(con.length-1)]:
    [...Array(Math.floor(x/2))].map( item => 
        (random(10)<=5) ? getSyllable() :
        getSyllable()+con[random(con.length-1)]
    ).join('');
    return word;
};
const getParagraph = (x) => [...Array(x)].map(item => getWord()).join(' ');

const getContent = ()=>{
    let content = create('div');
    let title = create('h1');
    let par = create('p');

    title.className = 'section-headings';

    title.textContent = getParagraph(2+random(1));
    par.innerText = getParagraph(25+random(5));

    [title,par].forEach(content.appendChild,content);

    return content;
};
const getCard = ()=>{
    let card = create('div');
    card.appendChild(getContent());
    card.className = 'card';
    ['favor','watch','fork'].map(x=>{
        let y = create('img');
        y.src = 'images/'+x+'.svg';
        y.alt = 'card icon';
        return y;
    }).forEach(card.appendChild,card);
    return card;
};
const getUser = ()=>{
    let user = create('div');
    let icon = create('span');
    let name = create('span');
    let proj = create('span');

    icon.className = 'user-icon';
    icon.textContent = (con+vowel)[random((con+vowel).length-1)];
    icon.style.backgroundColor = getRandomColor();
    name.textContent = '@'+getWord();
    proj.textContent = getParagraph(3);

    user.className = 'user-detail';
    [icon,name,proj].forEach(user.appendChild,user);
    return user;
}
const populate = (x,y,z)=>{
    [...Array(x)].map(item => getCard()).forEach(projects.appendChild,projects);
    [...Array(y)].map(item => {
        item = create('div');
        item.appendChild(getContent());
        return item;
    }).forEach(announcements.appendChild,announcements);
    [...Array(x)].map(item => getUser()).forEach(trending.appendChild,trending);
};
populate(6,3,4);
const panel = document.querySelectorAll('.slider_panel_item');
const slider = document.querySelector('.slider');
const panel2 = document.querySelectorAll('.slider_panel_item2');
const slider2 = document.querySelector('.slider2');
const listText =document.querySelector('.list_text');
const listBlock = document.querySelector('.list_block');


const obj = {
    img:['img/bg/micro_micro-se.jpeg','img/bg/droplet.jpeg','img/bg/PROFILESUBx2.jpeg'],
    span:['ПОБАЛУЙ','ДАВАЙ','ДЕРЖАТЬСЯ'],
    title: ['СЕБЯ ВЫБОРОМ', 'ЗАЖЖЁМ','В ТЕНИ'],
    text : ['MICRO И MICRO SE', 'DROPLET', 'PROFILESUB'],
    subtext: ['СПУТНИКОВЫЕ КОЛОНКИ','ПОДВЕСНАЯ АКУСТИКА', 'САБВУФЕР']
};

const obj2 = {
    img:['img/bg/micro.jpeg','img/bg/micro-se.jpeg','img/bg/micro-droplet.jpeg','img/bg/strada-2.jpeg','img/bg/PROFILESUBx2.jpeg'],
    span:['ПОБАЛУЙ','ДАВАЙ','ДЕРЖАТЬСЯ'],
    title: ['СЕБЯ ВЫБОРОМ', 'ЗАЖЖЁМ','В ТЕНИ'],
    text : ['MICRO','MICRO SE', ' MICRO DROPLET', 'MICRO SE DROPLET', 'ADIVA DROPLET', 'ADIVA SE DROPLET','ADIVA','ADIVA SE', 'STRADA 2','SUBWOOFEES', 'ACCESSORIES']
};

const obj3 = {
    img:['img/devices/micro.jpeg','img/devices/micro.jpeg','img/devices/micro_se.jpeg','img/devices/adiva.jpeg', 'img/devices/adiva_se.jpeg','img/devices/micro_droplet.jpeg','img/devices/micro_se_droplet.jpeg','img/devices/adiva_droplet.jpeg','img/devices/adiva_se_droplet.jpeg','img/devices/strada_2.jpeg','img/devices/subwoofers.jpeg', 'img/devices/accessories.jpeg'],
    text : ['MICRO','MICRO SE','ADIVA','ADIVA SE', ' MICRO DROPLET', 'MICRO SE DROPLET', 'ADIVA DROPLET', 'ADIVA SE DROPLET','STRADA 2','SUBWOOFERS', 'ACCESSORIES']
};

let index = 0;

panel.forEach((item, i) => {
    item.addEventListener('click', () => {
        index = i;
        removeActiveClass(panel);
        addActiveClass(item);
        makeContent(slider);
    });
});

let index2 = 0;

panel2.forEach((item, i) => {
    item.addEventListener('click', () => {
        index2 = i;
        removeActiveClass(panel2);
        addActiveClass(item);
        makeContent2(slider2);
    });
});

function addActiveClass(item) {
    item.classList.add('active');
}

function removeActiveClass(panel) {
    panel.forEach(item => {
        item.classList.remove('active');
    });
}

function makeContent(content) {
    content.innerHTML = '';
    content.innerHTML += ` 
    <div class="slider_item">
        <img class="slider_item_img" src="${obj.img[index]}" alt="photo">
        <h1 class="slider_item_title"> <span> ${obj.span[index]}</span> ${obj.title[index]}</h1>
    </div>

    <div class="slider_line">
        <h2 class="slider_line_text">${obj.text[index]}</h2>
        <h3 class="slider_line_subtext">${obj.subtext[index]}</h3>
    </div>
    `;
}

function makeContent2(content) {
    content.innerHTML = '';
 if(index2 >= 2 && index2 <= 5) {
        content.innerHTML += 
        `<div class="slider_item">
            <img class="slider_item_img" src="${obj2.img[2]}" alt="photo">
            <h1 class="slider_item_title change_title"><span> </span>СКИДКИ ДО <span>30%</span></h1>
        </div>`
    }else if(index2 > 5 && index2 < 8){
        content.innerHTML += 
        `<div class="slider_item">
            <img class="slider_item_img" src="${obj2.img[0]}" alt="photo">
            <h1 class="slider_item_title change_title"></span>СКИДКИ ДО <span>30%</span></h1>
        </div>`
    }else{
        if(obj2.img[index2] == undefined){
            content.innerHTML += 
            `<div class="slider_item">
                <img class="slider_item_img" src="${obj2.img[4]}" alt="photo">
                <h1 class="slider_item_title change_title"></span>СКИДКИ ДО <span>30%</span></h1>
            </div>`
        }else{
            content.innerHTML += 
            `<div class="slider_item">
                <img class="slider_item_img" src="${obj2.img[index2]}" alt="photo">
                <h1 class="slider_item_title change_title"></span>СКИДКИ ДО <span>30%</span></h1>
            </div>`
        }
    }
    content.innerHTML += 
    `<div class="slider_line">
        <h2 class="slider_line_text">${obj2.text[index2]}</h2>
    </div>`
    ;
}
makeContent(slider);
makeContent2(slider2);


function addRef(content) {
    for(let i = 0; i< obj2.text.length; i++){
        content.innerHTML+= `<a class="list_text_ref" href="#">${obj3.text[i]}${'  '}</a>`;
    }
}
addRef(listText);

document.querySelectorAll('.list_text_ref').forEach((item,i)=>{
    item.classList.add('mt');
    item.addEventListener('mouseover', (e)=>{
        listBlock.innerHTML = '';
        listBlock.innerHTML = `<img class="list_block_img" src="${obj3.img[i]}" alt="devices">`
    });
});

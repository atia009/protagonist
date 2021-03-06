// variables
const collectionList = [
    {
        brand: `Norse Projects`,
        category: `clothing`,
        name: `Niels Standard SS`,
        price: 75,
        src: `../images/collection-01.webp`,
    },
    {
        brand: `Norse Projects`,
        category: `clothing`,
        name: `Johannes Pocket LS`,
        price: 150,
        src: `../images/collection-02.jpg`,
    },
    {
        brand: `Norse Projects`,
        category: `clothing`,
        name: `Osvald Oxford`,
        price: 175,
        src: `../images/collection-03.webp`,
    },
    {
        brand: `Norse Projects`,
        category: `clothing`,
        name: `Vagn Classic Crew`,
        price: 175,
        src: `../images/collection-04.jpg`,
    },
    {
        brand: `Norse Projects`,
        category: `clothing`,
        name: `Sigfred Lambswool`,
        price: 185,
        src: `../images/collection-05.jpg`,
    },
    {
        brand: `Norse Projects`,
        category: `clothing`,
        name: `Norse Slim Denim`,
        price: 220,
        src: `../images/collection-06.jpg`,
    },
    {
        brand: `Norse Projects`,
        category: `clothing`,
        name: `Aros Slim Light Stretch`,
        price: 185,
        src: `../images/collection-07.jpg`,
    },
    {
        brand: `Norse Projects`,
        category: `clothing`,
        name: `Aros Slim Light Stretch`,
        price: 185,
        src: `../images/collection-08.webp`,
    },
    {
        brand: `A.P.C.`,
        category: `clothing`,
        name: `Stephano Corduroy Overshirt`,
        price: 220,
        src: `../images/collection-09.webp`,
    },
    {
        brand: `A.P.C.`,
        category: `clothing`,
        name: `Gaspard Twill Bomber Jacket`,
        price: 220,
        src: `../images/collection-10.webp`,
    },
    {
        brand: `Common Projects`,
        category: `shoes`,
        name: `Original Achilles Leather Sneakers`,
        price: 440,
        src: `../images/collection-11.webp`,

    },
    {
        brand: `Common Projects`,
        category: `shoes`,
        name: `Original Achilles Leather Sneakers`,
        price: 440,
        src: `../images/collection-12.webp`,

    },
    {
        brand: `R.M. Williams`,
        category: `shoes`,
        name: `Craftsman Leather Chelsea Boots`,
        price: 495,
        src: `../images/collection-13.webp`,
    },
    {
        brand: `Grand Seiko`,
        category: `accessories`,
        name: `SBGV009`,
        price: 3550,
        src: `../images/collection-14.webp`,
    },
    {
        brand: `A.P.C.`,
        category: `accessories`,
        name: `Silver-Tone Chain Bracelet`,
        price: 155,
        src: `../images/collection-15.webp`,
    },
    {
        brand: `Miansai`,
        category: `accessories`,
        name: `Thin Geo Sterling Silver Ring`,
        price: 125,
        src: `../images/collection-16.webp`,
    },
]

const essentialsList = [
    {
        brand: `Norse Projects`,
        location: `top`,
        name: `Niels Standard SS`,
        price: 75,
        src: `../images/essentials-01.jpg`,
    },
    {
        brand: `Norse Projects`,
        location: `top`,
        name: `Vagn Classic Crew`,
        price: 175,
        src: `../images/essentials-02.jpg`,
    },
    {
        brand: `Norse Projects`,
        location: `bottom`,
        name: `Norse Slim Denim`,
        price: 220,
        src: `../images/essentials-03.jpg`,
    },
    {
        brand: `Norse Projects`,
        location: `top`,
        name: `Osvald Oxford`,
        price: 175,
        src: `../images/essentials-04.jpg`,
    },
]

const inspirationList = [
    [
        {
            brand: `Norse Projects`,
            name: `Osvald Oxford`,
            price: 175,
            season: `spring`,
            src: `../images/collection-03.webp`, 
        },
        {
            brand: `A.P.C.`,
            name: `Silver-Tone Chain Bracelet`,
            price: 155,
            season: `spring`,
            src: `../images/collection-15.webp`,
        },
        {
            brand: `Norse Projects`,
            name: `Aros Slim Light Stretch`,
            price: 185,
            season: `spring`,
            src: `../images/collection-07.jpg`,
        },
        {
            brand: `Common Projects`,
            name: `Original Achilles Leather Sneakers`,
            price: 440,
            season: `spring`,
            src: `../images/collection-12.webp`,
    
        },
    ],
    [
        {
            brand: `Norse Projects`,
            name: `Niels Standard SS`,
            price: 75,
            season: `summer`,
            src: `../images/collection-01.webp`,
        },
        {
            brand: `Grand Seiko`,
            name: `SBGV009`,
            price: 3550,
            season: `summer`,
            src: `../images/collection-14.webp`,
        },
        {
            brand: `Norse Projects`,
            name: `Aros Slim Light Stretch`,
            price: 185,
            season: `summer`,
            src: `../images/collection-08.webp`,
        },
        {
            brand: `Common Projects`,
            name: `Original Achilles Leather Sneakers`,
            price: 440,
            season: `summer`,
            src: `../images/collection-11.webp`,
    
        },
    ],
    [
        {
            brand: `Norse Projects`,
            name: `Sigfred Lambswool`,
            price: 185,
            season: `fall`,
            src: `../images/collection-05.jpg`,
        },
        {
            brand: `Miansai`,
            name: `Thin Geo Sterling Silver Ring`,
            price: 125,
            season: `fall`,
            src: `../images/collection-16.webp`,
        },
        {
            brand: `Norse Projects`,
            name: `Norse Slim Denim`,
            price: 220,
            season: `fall`,
            src: `../images/collection-06.jpg`,
        },
        {
            brand: `R.M. Williams`,
            name: `Craftsman Leather Chelsea Boots`,
            price: 495,
            season: `fall`,
            src: `../images/collection-13.webp`,
        },
    ],
    [
        {
            brand: `Norse Projects`,
            name: `Johannes Pocket LS`,
            price: 150,
            season: `winter`,
            src: `../images/collection-02.jpg`,
        },
        {
            brand: `A.P.C.`,
            name: `Gaspard Twill Bomber Jacket`,
            price: 220,
            season: `winter`,
            src: `../images/collection-10.webp`,
        },
        {
            brand: `Norse Projects`,
            name: `Norse Slim Denim`,
            price: 220,
            season: `winter`,
            src: `../images/collection-06.jpg`,
        },
        {
            brand: `R.M. Williams`,
            name: `Craftsman Leather Chelsea Boots`,
            price: 495,
            season: `winter`,
            src: `../images/collection-13.webp`,
        },
    ],
]

// functions
function startHtmlLoad() {
    startCollectionLoad();
    startEssentialsLoad();
    startInspirationLoad();
}

function startCollectionLoad() {
    let collectionItems = $.map(collectionList, function(item){
        return `<div class="col-md-6 col-lg-4 col-xl-3 p-2 ${item.category}">
            <div class="overflow-hidden">
                <img src="${item.src}" class="collection__img rounded w-100"/>
            </div>
            <p class="secondary-font mt-3 mb-0 text-uppercase ">${item.brand}</p>
            <p class="secondary-font my-0 text-uppercase">${item.name}</p>
            <p class="my-0 text-uppercase">${item.price} USD</p>
        </div>` 
    })
    $(`.collection-list`).html(collectionItems.join(``));
}

function startEssentialsLoad() {
    let essentialsItems = $.map(essentialsList, function(item){
        return `<div class = "col-md-6 col-lg-4 col-xl-3 p-2 text-center">
        <div class="overflow-hidden">
            <img src = "${item.src}" class = "w-100 essentials__img essentials--${item.location}">
        </div>
        <p class="secondary-font mt-3 mb-0 text-uppercase ">${item.brand}</p>
        <p class="secondary-font my-0 text-uppercase">${item.name}</p>
        <p class="my-0 text-uppercase">${item.price} USD</p>
        </div>`
    })
    $(`.essentials-list`).html(essentialsItems.join(``));
}

function startInspirationLoad() {
    $(`.inspiration-list`).each(function(index){
        let inspirationItems = $.map(inspirationList[index], function(item){
            return `<div class="d-flex align-items-start justify-content-start">
            <img src="${item.src}" alt="image of ${item.name}" class="img-fluid pe-3 w-50">
            <div class="w-50">
                <p class="mb-0 fs-6">${item.brand}</p>
                <span class="secondary-font text-uppecase fs-6">${item.price} USD</span>
            </div>
        </div>`
        }) 
        $(this).html(inspirationItems.join(``));
    })
}

function updateCategoryCollection() {
    let collection = $('.collection-list').isotope({});
    let category = $(this).attr(`data-category`);
    startCategoryBtnReset();
    $(this).addClass(`active--category`);
    collection.isotope({filter: category});
}

function startCategoryBtnReset() {
    const categories = $(`.categories`).find(`button`);
    categories.each(removeActiveClass);
} 

function removeActiveClass() {
    $(this).removeClass(`active--category`);
}

$(document).ready(function(){
    startHtmlLoad();
    $(`.categories`).on(`click`, `button`, updateCategoryCollection);
});

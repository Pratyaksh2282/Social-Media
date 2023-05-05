//............SIDEBAR..........
//............SIDEBAR..........
const menuItem = document.querySelectorAll('.menu-item');


// remove active classlist.....
const removeActive = () => {
    menuItem.forEach(item => {
        item.classList.remove('active')
    });
}

// add active classlist.....
menuItem.forEach(item => {
    item.addEventListener('click', () => {
        removeActive();
        item.classList.add('active');

        if (item.id != 'notifice') {
            document.querySelector('.notification').style.display = 'none'
        } else {
            document.querySelector('.notification').style.display = 'block'
            document.querySelector('#notifice .count').style.display = 'none'
        }
    })
})


//....................MESSAGE................
//....................MESSAGE................
const message = document.querySelector('#message');
const messageBox = document.querySelector('#message-box');

message.addEventListener('click', () => {

    messageBox.classList.add('box-sh');
    message.querySelector('.count').style.display = 'none'


    setTimeout(() => {
        messageBox.classList.remove('box-sh');
    }, 2000);

})

// ...................THEME CUSTOMIZTION......
// ............THEME CUSTOMIZTION......

const themeMenu = document.querySelector('#themeMenu');
const themBOx = document.querySelector('.theme')


themeMenu.addEventListener('click', () => {
    themBOx.style.display = 'grid'
})

// FIREND RQUEST BUTTON..............
const addBtn = document.querySelectorAll('#add');
const delbtn = document.querySelectorAll('#del');


addBtn.forEach(element => {
    element.addEventListener('click', () => {
        element.parentElement.style.display = 'none'
    })
});

delbtn.forEach(element => {
    element.addEventListener('click', () => {
        element.parentElement.parentElement.style.display = 'none'
    })
});


// WINDOW EVENT.....
window.addEventListener('scroll', () => {
    themBOx.style.display = 'none'
    document.querySelector('.notification').style.display = 'none'
})




function showPreview(event) {
    if (event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("preview");
        preview.src = src;
        preview.style.display = "block";

    }
}
function calculateindex() {
    const feedElements = document.querySelectorAll('.icon2_heart');
    feedElements.forEach((element) => {
        element.addEventListener('click', () => {
            const index = Array.prototype.indexOf.call(feedElements, element);
            console.log(index);
            if (feedElements[index].getAttribute("src") == "icon/heart-fill.svg") {
                feedElements[index].setAttribute("src", "icon/heart.svg");

            }
            else {
                feedElements[index].setAttribute("src", "icon/heart-fill.svg");
            }
            // return index;
        });
    });

}

function changeIconHeart() {
    let link = document.getElementsByClassName('icon2_heart');
    calculateindex();


}

function uploadPhoto() {
    let caption = document.getElementById("caption")
    var preview = document.getElementById("preview");
    var feeds = document.getElementsByClassName("feeds");
    console.log(caption.value)
    console.log(preview.src)

    // const feedElement = document.createElement('div');
    // feedElement.classList.add('feed');
    const feedElement = `           <div class="feed">
    <div class="head">
        <div class="user">
            <div class="profile-phots">
                <img src="img/p7.png" alt="">
            </div>
            <div class="info">
                <h3>Beg Joker</h3>
                <small>Cannada, Just Now</small>
            </div>
        </div>
        <span class="edit">
            <img src="icon/three-dots.svg" class="icon1">
        </span>
    </div>
    <div class="feed-phots">
        <img src=${preview.src} alt="">
    </div>
    <div class="action-buttons">
        <div class="inter-action-button">
            <span><img src="icon/heart.svg" class="icon2_heart" onclick="changeIconHeart(0)"></span>
            <span><img src="icon/chat-dots.svg" class="icon2"></span>
            <span><img src="icon/share.svg" class="icon2"></span>
        </div>
        <div class="book-mark">
            <span><img src="icon/bookmark.svg" class="icon2"></span>
        </div>
    </div>
    
    <div class="caption">
        <p><b>Beg Joker  </b>${caption.value} <span
                class="hash-teg"></span></p>
    </div>
    <div class="text-gry comment"></div>
</div>`

    feeds[0].insertAdjacentHTML("afterbegin", feedElement);


}
function cancelUpload() {
    let caption = document.getElementById("caption")
    caption.value = ""
}
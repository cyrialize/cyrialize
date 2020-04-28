
/**
 * Generates a modal to be used for pop-up images
 * 
 * @param {*} modalId 
 * @param {*} modalClass 
 */
function generateModal(modalId, modalClass) {
    let modal = document.createElement('div');
    modal.id = modalId;
    modal.classList.add(modalClass);
    return modal;
}

/**
 * Creates the pop-up image to be used in the modal
 * 
 * @param {*} img 
 */
function generatePopUpImg(img) {
    let newImg = img.cloneNode();
    newImg.classList.remove('content-img');
    newImg.classList.remove('blog-outline')
    newImg.classList.add('modal-content');
    return newImg;
}


// Only enable click to expand for images on viewports bigger than tablets and phones
var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

if (width > 961) {
    let imgs = document.getElementsByClassName('content-img');
    for (let i = 0; i < imgs.length; i++) {
        let modalId = imgs[i].id + '-modal';
        let modal = generateModal(modalId, 'img-modal');


        let innerImg = generatePopUpImg(imgs[i]);

        imgs[i].onclick = function() {
            modal.style.display = "block";
            console.log(imgs[i]);
        }

        innerImg.onclick = function() {
            modal.style.display = "none";
        }

        modal.onclick = function() {
            modal.style.display = "none";
        }

        modal.appendChild(innerImg);
        document.body.appendChild(modal);
    }
}
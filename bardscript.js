
function createCookieBanner(){
    const bannerHTML=
        `<div class="cookie-banner" id="cookieBanner">
                    <p>
                        This website uses cookies to ensure you get the best experience on our website.
                        By continuing to use this site, you agree to our use of cookies.
                        <a href="#" target="_blank">Learn more</a>.
                    </p>
                    <div class="cookie-banner-buttons">
                        <button id="acceptCookies" class="accept-button">Accept</button>
                        <button id="closeBanner" class="close-button">Close</button>
                    </div>
        </div>`
    ;
    document.body.insertAdjacentHTML('beforeend',bannerHTML);


    
    const cookieBanner=document.getElementById('cookieBanner');
    const acceptButton=document.getElementById('acceptCookies');
    const closeButton=document.getElementById('closeBanner');


    acceptButton.addEventListener('click',hideBanner);
    closeButton.addEventListener('click',hideBanner);

}


function hideBanner(){
    cookieBanner.classList.remove('show');
}

function showBanner(){
    cookieBanner.classList.add('show');
}
window.onload=()=>{
    createCookieBanner();
    showBanner()
};






function getCookie(name){
    const cookies = document.cookie.split(';');
    for (const cookie of cookies){
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}

const userName = getCookie('userName');

const userInfoContainer = document.getElementById('userInfo');
if(userName){
    userInfoContainer.textContent='${userName}';
}else{
    alert('Cannot load username');
    userInfoContainer.textContent='User';   
}

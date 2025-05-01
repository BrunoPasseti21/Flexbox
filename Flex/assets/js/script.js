window.onload = function(){
    document.querySelector('.menuMobile').addEventListener('click', function(){
        let menu = document.querySelector(".menu nav ul");
        
        if (menu.style.display == 'flex') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';            
        }
    })
};
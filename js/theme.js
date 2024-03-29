let theme = localStorage.getItem('theme')

if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log("clicked:", mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'css/style.css'
    }
    if(mode == 'dark'){
        document.getElementById('theme-style').href = 'css/dark.css'
    }
    
    localStorage.setItem('theme', mode)
}


/*Date*/
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
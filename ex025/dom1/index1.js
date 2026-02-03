const btn_light = document.getElementById('lang')
const CurrentTheme = document.documentElement;


changeTheme = () => {
    const theme = CurrentTheme.getAttribute('data-theme');

    if(theme === 'dark') {
        CurrentTheme.removeAttribute('data-theme');
    }
    else {
       CurrentTheme.setAttribute('data-theme', 'dark')
    }
}

btn_light.addEventListener('click', changeTheme)

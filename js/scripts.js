// *** Constants
var resultSpan = document.querySelector('.result-of-calc');

// *** Theme switch functions :

//*** Check for theme sabe in localStorage
if (localStorage.getItem('prefers-color-scheme') !== null){
    let cssLink = document.querySelector('#css-theme');
    let theme = localStorage.getItem('prefers-color-scheme');
    cssLink.href = "css/styles-"+theme+".css";   
    document.querySelector('.active').classList.remove('active');
    document.querySelector('[data-theme="'+theme+'"]').classList.add('active')
}

let switches = document.querySelectorAll('.switch-button');

for (let i = 0; i < switches.length; i++) {
    switches[i].addEventListener("click", function(){
        let switchActive =  document.querySelector('.switch-button.active');
        switchActive.classList.remove("active");
        // switchActive.classList.add("disabled");
        let cssLink = document.querySelector('#css-theme');
        let clickedTheme = switches[i].dataset.theme;
        cssLink.href = "css/styles-"+clickedTheme+".css";
        localStorage.setItem('prefers-color-scheme',clickedTheme)
        // switches[i].classList.remove("disabled");
        switches[i].classList.add("active");
    })
}
    
// *** Calculs

let keys = document.querySelectorAll('.key-calc');
for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", function(){
        resultSpan.innerHTML = resultSpan.innerHTML + keys[i].innerHTML
    })
}

// *** Reset function

let reset = document.querySelector('.reset');
reset.addEventListener("click", function(){
    resultSpan.innerHTML= "";
})

// *** DEL function

let del = document.querySelector('.del');
del.addEventListener('click', function(){
    let lengthMinusOne = resultSpan.innerHTML.length - 1;
    resultSpan.innerHTML = resultSpan.innerHTML.slice(0,lengthMinusOne);
})

// *** Equal function

let equal = document.querySelector('.equal');
equal.addEventListener('click', function(){
    resultSpan.innerHTML = resultSpan.innerHTML.replace("x", "*");
    resultSpan.innerHTML = eval(resultSpan.innerHTML);
})


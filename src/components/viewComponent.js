export function view(target, template){
    var elem = document.getElementById(target);
    elem.classList.add('viewBody');
    elem.innerHTML = template();
}
export function view(target, template){
    var elem = document.getElementById(target);
    elem.class = 'viewBody';
    elem.innerHTML = template();
}
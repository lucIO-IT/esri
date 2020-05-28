export class Router {

    constructor(routes, home, target='body'){
        this.routes = routes;
        this.home = home;
        this.target = target;
        this.history = [];
        this.loadEvents();
    }

    emptyHash(){
        //empty url return home
        !window.location.hash ? window.location.hash = this.home : this.connectRoutes()
    }

    lazyLoading(f){
        this.emptyHash();
        setTimeout(() => {
            document.querySelector('.rollWrapper').style.display = 'none';
        }, 3000);
    }

    loadHome(){
        //hash url to home hash
        window.location.hash = this.home;
    }

    connectRoutes(){
        //return route path, if path does not exist display 404
        try {
            this.routes[location.hash]();
            this.history.push(location.hash);
        } catch(e) {
            var page404 = document.createElement('div');
            page404.classList.add('viewAlert');
            page404.innerHTML = '404: Page not found';
            document.querySelector(this.target).appendChild(page404);
        }
    }

    loadEvents(){
        //window listeners
        window.onload = () => this.lazyLoading();
        window.onhashchange = () => this.connectRoutes();
    }

}
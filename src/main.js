import {view} from './components/viewComponent.js'
import {renderAgisMap} from './components/map.js'
import {SmartphoneFrame} from './webcomponents/smartphoneFrame.js'
import {homePage} from './templates/viewTemplate.js'
import {Router} from './router.js'

var router = new Router({
    '#homepage': () => view('hometab', homePage),
    '#map_app_arch': () => renderAgisMap('hometab')
}, 'homepage');

console.log('Start App');
# install packages
"classnames": "^2.2.6"  
"cross-env": "^5.2.1"  
"react": "^16.5.2"  
"react-dom": "^16.5.2"  
"react-router": "^5.0.1"  
"react-router-dom": "^5.0.1"  
"react-router-page-transition": "^3.1.0"  
"react-scripts": "2.0.3"  
"react-transition-group": "^4.3.0"  
"react-typing-animation": "^1.6.2"

# PageSwtichAnimation
./PageSwtichAnimation.js

#### How to use SwitchAnimation?
###### App.js (Router Page)
 ```javascript
 import SwitchWithSlide from "./SwitchWithSlide";
.
.
.
.
 const SwitchComponent = this.state.animate ? SwitchWithSlide : Switch;
 ```
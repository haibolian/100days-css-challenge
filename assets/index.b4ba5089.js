import{r as c,a as i,j as e}from"./index.f8bee7d4.js";const n=()=>{const a=c.exports.useRef(null),s=()=>{a.current.classList.contains("is-active")?a.current.classList.remove("is-active"):a.current.classList.add("is-active")};return i("div",{ref:a,className:"frame day8",children:[i("ul",{className:"menu",children:[e("li",{className:"menu-item",children:"Dashboard"}),e("li",{className:"menu-item",children:"Profile"}),e("li",{className:"menu-item",children:"Notification"}),e("li",{className:"menu-item",children:"Messages"}),e("li",{className:"menu-item",children:"Settings"})]}),i("div",{className:"main",children:[i("header",{className:"header",children:[i("div",{className:"switch",onClick:()=>s(),children:[e("div",{className:"line-top"}),e("div",{className:"circle"}),e("div",{className:"line-bottom"})]}),e("h4",{className:"title",children:"Notifications"})]}),e("div",{className:"content",children:i("div",{className:"notifications",children:[e("div",{className:"line"}),i("div",{className:"notification",children:[e("div",{className:"point"}),e("span",{className:"time",children:"9:24 AM"}),i("p",{children:[e("b",{children:"John Walker"}),e("span",{children:" posted a photo on your wall."})]})]}),i("div",{className:"notification",children:[e("div",{className:"point"}),e("span",{className:"time",children:"8:19 AM"}),i("p",{children:[e("b",{children:"Alice Parker"}),e("span",{children:" commented your last post."})]})]}),i("div",{className:"notification",children:[e("div",{className:"point"}),e("span",{className:"time",children:"Yesterday"}),i("p",{children:[e("b",{children:"Luke Wayne"}),e("span",{children:" added you as friend."})]})]})]})})]})]})};export{n as default};
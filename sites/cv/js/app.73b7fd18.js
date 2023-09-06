(function(){var e={2628:function(){(function(){"use strict";var e=function(e){var t=document.getElementById(e.mainElement),i=t.getElementsByTagName("section"),s={container:t,sections:i,animateTime:e.animateTime||.7,animateFunction:e.animateFunction||"ease",maxPosition:i.length-1,currentPosition:0,displayDots:"undefined"==typeof e.displayDots||e.displayDots,dotsPosition:e.dotsPosition||"left"};this.defaults=s,this.init()};e.prototype.init=function(){this.buildPublicFunctions().buildSections().buildDots().addEvents();var e=location.hash.replace("#","").split("/")[0];location.hash=0,this.changeCurrentPosition(e),this.registerIeTags()},e.prototype.buildSections=function(){for(var e=this.defaults.sections,t=0;t<e.length;t++)e[t].setAttribute("data-index",t);return this},e.prototype.buildDots=function(){this.ul=document.createElement("ul"),this.ul.className=this.updateClass(1,"dots",this.ul.className),this.ul.className=this.updateClass(1,"right"==this.defaults.dotsPosition?"dots-right":"dots-left",this.ul.className);for(var e=this,t=this.defaults.sections,i=0;i<t.length;i++){var s=document.createElement("li"),n=document.createElement("a");n.setAttribute("href","#"+i),s.appendChild(n),e.ul.appendChild(s)}return this.ul.childNodes[0].firstChild.className=this.updateClass(1,"active",this.ul.childNodes[0].firstChild.className),this.defaults.displayDots&&document.body.appendChild(this.ul),this},e.prototype.addEvents=function(){return document.addEventListener?(document.addEventListener("mousewheel",this.mouseWheelAndKey,!1),document.addEventListener("wheel",this.mouseWheelAndKey,!1),document.addEventListener("keyup",this.mouseWheelAndKey,!1),document.addEventListener("touchstart",this.touchStart,!1),document.addEventListener("touchend",this.touchEnd,!1),window.addEventListener("hashchange",this.hashChange,!1),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&("ontouchstart"in window||(document.body.style="overflow: scroll;",document.documentElement.style="overflow: scroll;"))):(document.attachEvent("onmousewheel",this.mouseWheelAndKey,!1),document.attachEvent("onkeyup",this.mouseWheelAndKey,!1)),this},e.prototype.buildPublicFunctions=function(){var e=0,t=0,i=this;return this.mouseWheelAndKey=function(e){e.deltaY>0||40==e.keyCode?(i.defaults.currentPosition++,i.changeCurrentPosition(i.defaults.currentPosition)):(e.deltaY<0||38==e.keyCode)&&(i.defaults.currentPosition--,i.changeCurrentPosition(i.defaults.currentPosition)),i.removeEvents()},this.touchStart=function(i){e=parseInt(i.changedTouches[0].clientY),t=0},this.touchEnd=function(s){t=parseInt(s.changedTouches[0].clientY),(t-e>100||e-t>100)&&(t>e?i.defaults.currentPosition--:i.defaults.currentPosition++,i.changeCurrentPosition(i.defaults.currentPosition))},this.hashChange=function(e){if(location){var t=location.hash.replace("#","").split("/")[0];""!==t&&(t<0?i.changeCurrentPosition(0):t>i.defaults.maxPosition?i.changeCurrentPosition(i.defaults.maxPosition):(i.defaults.currentPosition=t,i.animateScroll()))}},this.removeEvents=function(){document.addEventListener?(document.removeEventListener("mousewheel",this.mouseWheelAndKey,!1),document.removeEventListener("wheel",this.mouseWheelAndKey,!1),document.removeEventListener("keyup",this.mouseWheelAndKey,!1),document.removeEventListener("touchstart",this.touchStart,!1),document.removeEventListener("touchend",this.touchEnd,!1)):(document.detachEvent("onmousewheel",this.mouseWheelAndKey,!1),document.detachEvent("onkeyup",this.mouseWheelAndKey,!1)),setTimeout((function(){i.addEvents()}),600)},this.animateScroll=function(){var e=this.defaults.animateTime,t=this.defaults.animateFunction,i=100*this.defaults.currentPosition;this.defaults.container.style.webkitTransform="translateY(-"+i+"%)",this.defaults.container.style.mozTransform="translateY(-"+i+"%)",this.defaults.container.style.msTransform="translateY(-"+i+"%)",this.defaults.container.style.transform="translateY(-"+i+"%)",this.defaults.container.style.webkitTransition="all "+e+"s "+t,this.defaults.container.style.mozTransition="all "+e+"s "+t,this.defaults.container.style.msTransition="all "+e+"s "+t,this.defaults.container.style.transition="all "+e+"s "+t;for(var s=0;s<this.ul.childNodes.length;s++)this.ul.childNodes[s].firstChild.className=this.updateClass(2,"active",this.ul.childNodes[s].firstChild.className),s==this.defaults.currentPosition&&(this.ul.childNodes[s].firstChild.className=this.updateClass(1,"active",this.ul.childNodes[s].firstChild.className))},this.changeCurrentPosition=function(e){""!==e&&(i.defaults.currentPosition=e,location.hash=i.defaults.currentPosition)},this.registerIeTags=function(){document.createElement("section")},this.updateClass=function(e,t,i){return 1==e?i+" "+t:2==e?i.replace(t,""):void 0},this},window.fullScroll=e})()},4575:function(){document.addEventListener("DOMContentLoaded",(function(){new fullScroll({mainElement:"fullscreen-wrapper",sections:"fullscreen",currentPosition:0,displayDots:!1})}))},9727:function(e,t,i){"use strict";var s=i(6369),n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"wrapper",attrs:{id:"fullscreen-wrapper"}},[t("Banner"),t("MainSkills"),t("AdditionalSkills"),t("Projects"),t("Contacts")],1),t("notifications",{attrs:{group:"notices",position:"bottom right"}}),e._v(" "+e._s(e.setLanguage())+" ")],1)},a=[],l=function(){var e=this,t=e._self._c;return t("section",{staticClass:"banner fullscreen"},[t("img",{staticClass:"banner__bg",attrs:{src:i(599),alt:""}}),t("div",{staticClass:"banner__lang-switcher"},[t("MLDropdown")],1),e._m(0),t("div",{staticClass:"down-arrow"})])},o=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"banner__body"},[t("div",{staticClass:"banner__title name"},[e._v("Sviatoslav Pavelko")]),t("div",{staticClass:"banner__text position"},[e._v("Front End Web Developer")])])}],r=(i(2087),function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hide,expression:"hide"}],staticClass:"ml-dropdown",class:{opened:e.openedDropdown}},[t("div",{staticClass:"selected-language",on:{click:function(t){e.openedDropdown=!0}}},[t("img",{attrs:{src:e.flags[e.selectedLanguage.abr],alt:""}}),e._v(" "+e._s(e.selectedLanguage.title)+" ")]),t("ul",{staticClass:"languages"},e._l(e.languages.filter((t=>t.abr!==e.selectedLanguage.abr)),(function(i){return t("li",{key:i.abr,staticClass:"languages__item",on:{click:function(t){return e.setLanguage(i.abr)}}},[t("img",{attrs:{src:e.flags[i.abr],alt:""}}),e._v(" "+e._s(i.title)+" ")])})),0)])}),c=[],d=i(3822),u=i(8548),m=i.n(u),v={data(){return{val:0,flags:{en:i(2785),pl:i(6450),de:i(7105),ukr:i(6446),ru:i(7427)},openedDropdown:!1}},computed:{...(0,d.Se)({languages:"getLanguages",selectedLanguage:"getSelectedLanguage"})},methods:{setLanguage(e){this.$store.dispatch("setLangKey",e),this.$ml.change(e)},hide(e){this.openedDropdown=!1}},directives:{ClickOutside:m()}},h=v,p=i(3736),_=(0,p.Z)(h,r,c,!1,null,"a522580c",null),g=_.exports,f={components:{MLDropdown:g}},b=f,w=(0,p.Z)(b,l,o,!1,null,"90b90532",null),C=w.exports,y=function(){var e=this,t=e._self._c;return t("section",{staticClass:"main-skills section fullscreen"},[t("div",{staticClass:"main-skills__body container"},[t("div",{staticClass:"section-title"},[t("div",{staticClass:"section-title__body"},[t("div",{staticClass:"section-title__number"},[e._v("01")]),t("div",{staticClass:"section-title__text"},[e._v(e._s(e.$ml.get("About")))])])]),t("div",{staticClass:"main-skills__info info"},[t("div",{staticClass:"main-skills__about"},[t("h2",[e._v(e._s(e.$ml.get("Hello there"))+",")]),t("p",[e._v(" "+e._s(e.$ml.get("Thank you for visiting my website."))+" "),t("br"),t("br"),e._v(" "+e._s(e.$ml.get("My name is Sviatoslav and I'm a Front-end developer with over 2 years experience in creating websites and web applications. Currently I live in Apolda, Germany and I'm looking for a job as a Front-end developer in Germany or remotely."))+" "),t("br"),t("br"),e._v(" "+e._s(e.$ml.get("I have experience in developing mobile-first web applications using Vue and then converting it into a mobile application using React Native WebView."))+" "),t("br"),t("br"),e._v(" "+e._s(e.$ml.get("Backend and databases are also not alien to me, I had experience working with them."))+" ")])]),t("div",{staticClass:"main-skills__skills-sliders"},[t("div",{staticClass:"main-skills__label"},[e._v(" "+e._s(e.$ml.get("Languages I speek"))+" ")]),t("div",{staticClass:"slider"},[t("div",{staticClass:"slider__label"},[e._v(e._s(e.$ml.get("Russian")))]),e._m(0)]),t("div",{staticClass:"slider"},[t("div",{staticClass:"slider__label"},[e._v(e._s(e.$ml.get("Ukrainian")))]),e._m(1)]),t("div",{staticClass:"slider"},[t("div",{staticClass:"slider__label"},[e._v(e._s(e.$ml.get("Polish")))]),e._m(2)]),t("div",{staticClass:"slider"},[t("div",{staticClass:"slider__label"},[e._v(e._s(e.$ml.get("English")))]),e._m(3)]),t("div",{staticClass:"slider"},[t("div",{staticClass:"slider__label"},[e._v(e._s(e.$ml.get("German")))]),e._m(4)])])])])])},k=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"slider__row"},[t("div",{staticClass:"slider__row__inner",staticStyle:{width:"100%"}})])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"slider__row 80"},[t("div",{staticClass:"slider__row__inner",staticStyle:{width:"100%"}})])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"slider__row"},[t("div",{staticClass:"slider__row__inner",staticStyle:{width:"70%"}})])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"slider__row"},[t("div",{staticClass:"slider__row__inner",staticStyle:{width:"60%"}})])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"slider__row"},[t("div",{staticClass:"slider__row__inner",staticStyle:{width:"60%"}})])}],S={},P=(0,p.Z)(S,y,k,!1,null,"dbc01558",null),x=P.exports,E=function(){var e=this,t=e._self._c;return t("section",{staticClass:"additional-skills section fullscreen"},[t("div",{staticClass:"additional-skills__body container"},[t("div",{staticClass:"additional-skills__info info"},[t("div",{staticClass:"additional-skills__row"},[t("div",{staticClass:"additional-skills__column",attrs:{id:"qwe"}},[t("div",{staticClass:"column-inner"},[t("div",{staticClass:"column-title shadowed"},[e._v(e._s(e.$ml.get("Markup")))]),e._m(0)])]),t("div",{staticClass:"additional-skills__column"},[t("div",{staticClass:"column-inner"},[t("div",{staticClass:"column-title shadowed"},[e._v(" "+e._s(e.$ml.get("Development"))+" ")]),e._m(1)])]),t("div",{staticClass:"additional-skills__column"},[t("div",{staticClass:"column-inner"},[t("div",{staticClass:"column-title shadowed"},[e._v(e._s(e.$ml.get("Services")))]),e._m(2)])]),t("div",{staticClass:"additional-skills__column"},[t("div",{staticClass:"column-inner"},[t("div",{staticClass:"column-title shadowed"},[e._v(" "+e._s(e.$ml.get("Additional"))+" ")]),e._m(3)])])])]),t("div",{staticClass:"section-title"},[t("div",{staticClass:"section-title__body"},[t("div",{staticClass:"section-title__number"},[e._v("02")]),t("div",{staticClass:"section-title__text"},[e._v(e._s(e.$ml.get("Skills")))])])])])])},j=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"column-list shadowed"},[t("div",{staticClass:"column-list__item"},[e._v("HTML5")]),t("div",{staticClass:"column-list__item"},[e._v("CSS3")]),t("div",{staticClass:"column-list__item"},[e._v("Less, Sass, Scss")]),t("div",{staticClass:"column-list__item"},[e._v("Bootstrap, Materialize")]),t("div",{staticClass:"column-list__item"},[e._v("Gulp")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"column-list shadowed"},[t("div",{staticClass:"column-list__item"},[e._v("JavaScript")]),t("div",{staticClass:"column-list__item"},[e._v("Vue.js (2,3)")]),t("div",{staticClass:"column-list__item"},[e._v("Vuex, Vue router")]),t("div",{staticClass:"column-list__item"},[e._v("JQuery")]),t("div",{staticClass:"column-list__item"},[e._v("REST API")]),t("div",{staticClass:"column-list__item"},[e._v("ES6")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"column-list shadowed"},[t("div",{staticClass:"column-list__item"},[e._v("Git")]),t("div",{staticClass:"column-list__item"},[e._v("html2pdf")]),t("div",{staticClass:"column-list__item"},[e._v("Open Server")]),t("div",{staticClass:"column-list__item"},[e._v("Figma")]),t("div",{staticClass:"column-list__item"},[e._v("CodePen")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"column-list shadowed"},[t("div",{staticClass:"column-list__item"},[e._v("PHP (Laravel)")]),t("div",{staticClass:"column-list__item"},[e._v("MySQL")]),t("div",{staticClass:"column-list__item"},[e._v("WordPress")]),t("div",{staticClass:"column-list__item"},[e._v("Docker")])])}],L={},$=(0,p.Z)(L,E,j,!1,null,"6f1a713c",null),I=$.exports,A=function(){var e=this,t=e._self._c;return t("section",{staticClass:"projects section fullscreen"},[t("div",{staticClass:"projects__body container"},[t("div",{staticClass:"section-title"},[t("div",{staticClass:"section-title__body"},[t("div",{staticClass:"section-title__number"},[e._v("03")]),t("div",{staticClass:"section-title__text"},[e._v(e._s(e.$ml.get("Projects")))])])]),t("div",{staticClass:"projects__list"},[t("a",{staticClass:"project shadowed",attrs:{href:""}},[t("img",{attrs:{src:i(5009),alt:""}}),t("div",{staticClass:"project__link"},[e._m(0),t("span",[e._v(e._s(e.$ml.get("visit a website")))])])]),t("a",{staticClass:"project shadowed",attrs:{href:""}},[t("img",{attrs:{src:i(3079),alt:""}}),t("div",{staticClass:"project__link"},[e._m(1),t("span",[e._v(e._s(e.$ml.get("visit a website")))])])]),t("a",{staticClass:"project shadowed",attrs:{href:"https://brodromon.github.io/sites/new_providence/index.html"}},[t("img",{attrs:{src:i(2935),alt:""}}),t("div",{staticClass:"project__link"},[e._m(2),t("span",[e._v(e._s(e.$ml.get("visit a website")))])])])])])])},N=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"project__name"},[e._v("O"),t("span",[e._v("XX")]),e._v("O")])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"project__name"},[e._v("Tic "),t("span",[e._v("Tac")]),e._v(" Toe")])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"project__name"},[e._v("New"),t("span",[e._v("Providence")])])}],T={},W=(0,p.Z)(T,A,N,!1,null,"0d5b1bdc",null),D=W.exports,F=function(){var e=this,t=e._self._c;return t("section",{staticClass:"contacts section fullscreen"},[t("div",{staticClass:"contacts__bg"},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[t("path",{attrs:{fill:"#f7f7f7","fill-opacity":"1",d:"M0,320L40,293.3C80,267,160,213,240,208C320,203,400,245,480,229.3C560,213,640,139,720,128C800,117,880,171,960,197.3C1040,224,1120,224,1200,192C1280,160,1360,96,1400,64L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"}})])]),t("div",{staticClass:"contacts__body container"},[t("div",{staticClass:"contacts__form shadowed"},[t("div",{staticClass:"contacts__form__title"},[e._v(" "+e._s(e.$ml.get("Contact with me"))+" ")]),t("form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.sendEmail.apply(null,arguments)}}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],attrs:{name:"from_name",placeholder:`${e.$ml.get("Name")} *`,type:"text"},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.tel,expression:"form.tel"}],attrs:{name:"from_tel",placeholder:`${e.$ml.get("Tel")} *`,type:"tel"},domProps:{value:e.form.tel},on:{keypress:e.validate,keyup:e.onKeyUp,input:function(t){t.target.composing||e.$set(e.form,"tel",t.target.value)}}}),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.message,expression:"form.message"}],attrs:{rows:"6",placeholder:`${e.$ml.get("Message")} *`,name:"message",id:""},domProps:{value:e.form.message},on:{input:function(t){t.target.composing||e.$set(e.form,"message",t.target.value)}}}),t("button",{staticClass:"form__btn",attrs:{type:"submit"}},[t("span",[e.loading?t("loader"):e._e(),e._v(e._s(e.$ml.get("Send")))],1)])])])]),t("div",{staticClass:"contacts__footer"},[e._m(0),t("div",{staticClass:"right-side"},[t("div",{staticClass:"row"},[e._m(1),t("div",{staticClass:"column"},[t("div",{staticClass:"label"},[e._v(e._s(e.$ml.get("Website"))+":")]),e._m(2)]),t("div",{staticClass:"column"},[t("div",{staticClass:"label"},[e._v(e._s(e.$ml.get("Tel"))+":")]),e._m(3)])])])])])},M=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"left-side"},[t("div",{staticClass:"name"},[e._v("Sviatoslav Pavelko")]),t("div",{staticClass:"position"},[e._v("Front End Web Developer")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"column"},[t("div",{staticClass:"label"},[e._v("E-mail:")]),t("div",{staticClass:"value"},[t("a",{attrs:{href:"mailto:pavelko.slava16@gmail.com"}},[e._v("pavelko.slava16@gmail.com")])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"value"},[t("a",{attrs:{href:"brodromon.github.io"}},[e._v("brodromon.github.io")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"value"},[t("a",{attrs:{href:"tel:+491634820941"}},[e._v("+49 163 4820941")])])}],O=i(1573),z={data(){return{loading:!1,form:{name:"",tel:"",message:""}}},methods:{sendEmail(){const e=Object.values(this.form).every((e=>e));!0===e?(this.loading=!0,O.ZP.sendForm("service_0194e6i","template_gu322al",this.$refs.form,"8dBU_HPly5RXT5rR9").then((e=>{this.$notify({type:"success",title:this.$ml.get("Email successfully sent."),group:"notices",duration:2e3}),this.$refs.form.reset(),this.form={name:"",tel:"",message:""}}),(e=>{this.$notify({type:"error",title:this.$ml.get("Oops... Something went wrong."),group:"notices",duration:2e3})})).finally((()=>{this.loading=!1}))):this.$notify({type:"error",title:this.$ml.get("Please fill the form first"),group:"notices",duration:2e3})},onKeyUp(e){" "==e.target.value[0]&&(e.target.value=""),this.$emit("onkeyup",e.target.value)},validate(e){let t=String.fromCharCode(e.keyCode);/[0-9.,+]/.test(t)||e.preventDefault()}}},R=z,V=(0,p.Z)(R,F,M,!1,null,"73ac06e0",null),G=V.exports,K={name:"App",data(){return{}},methods:{setLanguage(){let e=this.$store.getters.getLangKey||"en";return this.$ml.change(e),this.$store.commit("setLanguage",e),""}},computed:{...(0,d.Se)({langKey:"getLangKey"})},components:{Banner:C,MainSkills:x,AdditionalSkills:I,Projects:D,Contacts:G}},B=K,U=(0,p.Z)(B,n,a,!1,null,null,null),Z=U.exports,H=(i(2628),i(4575),i(4791)),J=JSON.parse('{"English":"Angielski","Markup":"Markup","Development":"Rozwój","Services":"Usługi","Additional":"Dodatkowo","Skills":"Umiejętności","Contact with me":"Skontaktuj się ze mną","Send":"Wysłać","Website":"Website","Tel":"Tel","About":"O mnie","Hello there":"Witam","Thank you for visiting my website.":"Dziękuję za odwiedzenie mojej strony internetowej.","Languages I speek":"Języki, którymi posługuję się","Russian":"Rosyjski","Ukrainian":"Ukraiński","Polish":"Polski","Projects":"Projekty","visit website":"Odwiedź stronę","My name is Sviatoslav and I\'m a Front-end developer with over 2 years experience in creating websites and web applications. Currently I live in Apolda, Germany and I\'m looking for a job as a Front-end developer in Germany or remotely.":"Nazywam się Światosław i jestem Front-end developerem z ponad 2 letnim doświadczeniem w tworzeniu stron i aplikacji internetowych. Obecnie mieszkam w Apolda w Niemczech i szukam pracy jako Front-end developer w Niemczech lub zdalnie.","I have experience in developing mobile-first web applications using Vue and then converting it into a mobile application using React Native WebView.":"Mam doświadczenie w tworzeniu mobilnych aplikacji webowych z wykorzystaniem Vue, a następnie konwertowaniu ich na aplikację mobilną za pomocą React Native WebView.","Backend and databases are also not alien to me, I had experience working with them.":"Backend i bazy danych też nie są mi obce, miałem z nimi doświadczenie.","undefined":"","German":"Niemecki"}');const Y=e=>{var t=Object.keys(e),i={};return t.map((t=>{var s=t.replace(/\./g,"{point}");i[s]=e[t]})),i},X=e=>{var t=["."],i=t.filter((t=>-1!=e.indexOf(t)));return i.length>0&&(e=e.replace(/\./g,"{point}")),e},Q=e=>{let t=e.match(/\{(.*?)\}/g);if(t)for(var i of t){let t=new RegExp(`{${i[1]}`,"g");e=e.replace(t,i[1])}return e};var q=Y(J),ee=new H.t9("pl").create(q),te=JSON.parse('{"English":"English","Markup":"Markup","Development":"Development","Services":"Services","Additional":"Additional","Skills":"Skills","Contact with me":"Contact with me","Send":"Send","Website":"Website","Tel":"Tel","About":"About","Hello there":"Hello there","Thank you for visiting my website.":"Thank you for visiting my website.","Languages I speek":"Languages I speek","Russian":"Russian","Ukrainian":"Ukrainian","Polish":"Polish","Projects":"Projects","visit website":"visit website","My name is Sviatoslav and I\'m a Front-end developer with over 2 years experience in creating websites and web applications. Currently I live in Apolda, Germany and I\'m looking for a job as a Front-end developer in Germany or remotely.":"My name is Sviatoslav and I\'m a Front-end developer with over 2 years experience in creating websites and web applications. Currently I live in Apolda, Germany and I\'m looking for a job as a Front-end developer in Germany or remotely.","I have experience in developing mobile-first web applications using Vue and then converting it into a mobile application using React Native WebView.":"I have experience in developing mobile-first web applications using Vue and then converting it into a mobile application using React Native WebView.","Backend and databases are also not alien to me, I had experience working with them.":"Backend and databases are also not alien to me, I had experience working with them.","undefined":"","German":"German"}'),ie=Y(te),se=new H.t9("en").create(ie),ne=JSON.parse('{"English":"Englisch","Markup":"Markierung","Development":"Entwicklung","Services":"Dienstleistungen","Additional":"Zusätzliche","Skills":"Fähigkeiten","Contact with me":"Kontaktiere mich","Send":"Senden","Website":"Website","Tel":"Tel","About":"Über mich","Hello there":"Hallo","Thank you for visiting my website.":"Vielen Dank für Ihren Besuch auf meiner Website.","Languages I speek":"Sprachen, die ich spreche","Russian":"Russisch","Ukrainian":"Ukrainisch","Polish":"Polnisch","Projects":"Projekte","visit website":"besuche die Website","My name is Sviatoslav and I\'m a Front-end developer with over 2 years experience in creating websites and web applications. Currently I live in Apolda, Germany and I\'m looking for a job as a Front-end developer in Germany or remotely.":"Mein Name ist Sviatoslav und ich bin ein Front-End-Entwickler mit über 2 Jahren Erfahrung in der Erstellung von Websites und Webanwendungen. Derzeit lebe ich in Apolda, Deutschland, und suche einen Job als Front-End-Entwickler in Deutschland oder aus der Ferne.","I have experience in developing mobile-first web applications using Vue and then converting it into a mobile application using React Native WebView.":"Ich habe Erfahrung in der Entwicklung von Mobile-First-Webanwendungen mit Vue und der anschließenden Konvertierung in eine mobile Anwendung mit React Native WebView.","Backend and databases are also not alien to me, I had experience working with them.":"Auch Backend und Datenbanken sind mir nicht fremd, ich hatte Erfahrung damit.","undefined":"","German":"Deutsch"}'),ae=Y(ne),le=new H.t9("de").create(ae),oe=JSON.parse('{"English":"Английский","Markup":"Верстка","Development":"Разработка","Services":"Сервисы","Additional":"Дополнительно","Skills":"Навыки и умения","Contact with me":"Свяжитесь со мной","Send":"Отправить","Website":"Веб-сайт","Tel":"Тел","About":"О мне","Hello there":"Привет","Thank you for visiting my website.":"Спасибо, что посетили мой сайт.","Languages I speek":"Языки, которыми я владею","Russian":"Русский","Ukrainian":"Украинский","Polish":"Польский","Projects":"Проекты","visit website":"посетить сайт","My name is Sviatoslav and I\'m a Front-end developer with over 2 years experience in creating websites and web applications. Currently I live in Apolda, Germany and I\'m looking for a job as a Front-end developer in Germany or remotely.":"Меня зовут Святослав, я Front-end разработчик с более чем 2-летним опытом создания сайтов и веб-приложений. В настоящее время я живу в городе Апольда, Германия, и ищу работу Front-end разработчика в Германии или удаленно.","I have experience in developing mobile-first web applications using Vue and then converting it into a mobile application using React Native WebView.":"У меня есть опыт разработки мобильных веб-приложений с использованием Vue, а затем их преобразования в мобильное приложение с использованием React Native WebView.","Backend and databases are also not alien to me, I had experience working with them.":"Backend и базы данных мне тоже не чужды, у меня был опыт работы с ними.","undefined":"","German":"Немецкий"}'),re=Y(oe),ce=new H.t9("ru").create(re),de=JSON.parse('{"English":"Англійська","Markup":"Розмітка","Development":"Розробка","Services":"Сервiси","Additional":"Додатково","Skills":"Навички","Contact with me":"Зв\'яжіться зі мною","Send":"Надіслати","Website":"Веб-сайт","Tel":"Тел","About":"Про мене","Hello there":"Привіт","Thank you for visiting my website.":"Дякую, що відвідали мій сайт.","Languages I speek":"Мови, якими я володію","Russian":"Російська","Ukrainian":"Українська","Polish":"Польська","Projects":"Проекти","visit website":"відвідати веб-сайт","My name is Sviatoslav and I\'m a Front-end developer with over 2 years experience in creating websites and web applications. Currently I live in Apolda, Germany and I\'m looking for a job as a Front-end developer in Germany or remotely.":"Мене звуть Святослав, я Front-end розробник із досвідом роботи у створенні сайтів та веб-додатків понад 2 роки. Зараз я живу в Апольді, Німеччина, і шукаю роботу фронтенд-розробника в Німеччині або віддалено.","I have experience in developing mobile-first web applications using Vue and then converting it into a mobile application using React Native WebView.":"У мене є досвід розробки мобільних веб-додатків за допомогою Vue, а потім перетворення їх у мобільний додаток за допомогою React Native WebView.","Backend and databases are also not alien to me, I had experience working with them.":"Бекенд і бази даних мені теж не чужі, у мене був досвід роботи з ними.","undefined":"","German":"Німецька"}'),ue=Y(de),me=new H.t9("ukr").create(ue);s["default"].use(H.Cu);var ve=!1,he=(new H.Ay({middleware:(e,t)=>{if(!t||null==t||void 0==t)return"";t=Q(t);var i=X(t),s=e.$ml.list.indexOf(e.$ml.current),n=e.$ml.db[s][i];return n||ve||(e.$ml.db[s][i]=t),i},initial:"en",save:!1,languages:[ee,se,le,ce,me]}),{state:{languages:[{title:"English",abr:"en"},{title:"Polish",abr:"pl"},{title:"German",abr:"de"},{title:"Ukrainian",abr:"ukr"},{title:"Russian",abr:"ru"}],selectedLanguage:{title:"English",abr:"en"}},mutations:{setLanguage(e,t){e.selectedLanguage=e.languages.find((e=>e.abr===t))}},actions:{setLangKey({state:e,commit:t},i){localStorage.setItem("lang",i),location.reload()}},getters:{getLangKey(){return localStorage.getItem("lang")},getLanguages(e){return e.languages},getSelectedLanguage(e){return e.selectedLanguage}}});s["default"].use(d.ZP);var pe=new d.ZP.Store({state:{},mutations:{},actions:{},modules:{user:he},getters:{}}),_e=i(7131),ge=i.n(_e),fe=function(){var e=this,t=e._self._c;return t("div",{staticClass:"loader"})},be=[],we={},Ce=(0,p.Z)(we,fe,be,!1,null,"6b7b8c8f",null),ye=Ce.exports;s["default"].use(ge()),s["default"].component("loader",ye),s["default"].config.productionTip=!1,new s["default"]({store:pe,render:e=>e(Z)}).$mount("#app")},7105:function(e,t,i){"use strict";e.exports=i.p+"img/de.da7b4347.svg"},2785:function(e,t,i){"use strict";e.exports=i.p+"img/en.4bdf398b.svg"},6450:function(e,t,i){"use strict";e.exports=i.p+"img/pl.00425c5d.svg"},7427:function(e,t,i){"use strict";e.exports=i.p+"img/ru.0b460178.svg"},6446:function(e,t,i){"use strict";e.exports=i.p+"img/ukr.fd9990d3.svg"},599:function(e,t,i){"use strict";e.exports=i.p+"img/banner2.e5c1d99b.jpg"},2935:function(e,t,i){"use strict";e.exports=i.p+"img/newprovedence.4c120ec4.png"},5009:function(e,t,i){"use strict";e.exports=i.p+"img/oxxo.478e1d92.png"},3079:function(e,t,i){"use strict";e.exports=i.p+"img/tic-tac-toe.05760946.png"}},t={};function i(s){var n=t[s];if(void 0!==n)return n.exports;var a=t[s]={exports:{}};return e[s].call(a.exports,a,a.exports,i),a.exports}i.m=e,function(){var e=[];i.O=function(t,s,n,a){if(!s){var l=1/0;for(d=0;d<e.length;d++){s=e[d][0],n=e[d][1],a=e[d][2];for(var o=!0,r=0;r<s.length;r++)(!1&a||l>=a)&&Object.keys(i.O).every((function(e){return i.O[e](s[r])}))?s.splice(r--,1):(o=!1,a<l&&(l=a));if(o){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[s,n,a]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.p="/sites/cv/"}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,a,l=s[0],o=s[1],r=s[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(n in o)i.o(o,n)&&(i.m[n]=o[n]);if(r)var d=r(i)}for(t&&t(s);c<l.length;c++)a=l[c],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(d)},s=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=i.O(void 0,[998],(function(){return i(9727)}));s=i.O(s)})();
//# sourceMappingURL=app.73b7fd18.js.map
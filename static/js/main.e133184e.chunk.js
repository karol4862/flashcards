(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(44)},29:function(e,t,a){},30:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),s=(a(29),a(15)),o=a(5),i=a(6),d=a(8),u=a(7),h=a(9),m=a(10),f=a(11),p=(a(30),function(){return r.a.createElement("div",{className:"menu"},r.a.createElement(m.b,{to:"flashcards"},r.a.createElement("div",null," Your flashcards")),r.a.createElement(m.b,{to:"learnWords"},r.a.createElement("div",null," Learn by flashcards")),r.a.createElement(m.b,{to:"learnWriting"},r.a.createElement("div",null," Learn by writting")))}),E=(a(39),function(e){var t=e.flashcard,a=t.front,n=t.back,l=t.id;return r.a.createElement("div",{className:"flashcardBox"},r.a.createElement("li",{className:"flashcardText"},r.a.createElement("span",null,a)," - ",r.a.createElement("span",null,n)),r.a.createElement("button",{onClick:function(){return e.handleButtonRemove(l)}},"Remove"))}),v=a(23),b=(a(40),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={front:"",back:""},a.handleChange=function(e){a.setState(Object(v.a)({},e.target.name,e.target.value))},a.handleButton=function(){if(a.state.front&&a.state.back){var e={id:a.props.indexElement,front:a.state.front,back:a.state.back};a.props.handleButtonAdd(e),a.setState({front:"",back:""}),a.props.addToIndex()}else alert("Inputs can't be empty")},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"add"},r.a.createElement("label",{htmlFor:"front"},"Front: ",r.a.createElement("input",{type:"text",name:"front",onChange:this.handleChange,value:this.state.front})),r.a.createElement("label",{htmlFor:"back"},"Back: ",r.a.createElement("input",{type:"text",name:"back",onChange:this.handleChange,value:this.state.back})),r.a.createElement("button",{onClick:this.handleButton}," Add "))}}]),t}(n.Component)),x=(a(41),function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.flashcards,a=e.handleButtonAdd,n=e.handleButtonRemove,l=e.addToIndex,c=e.indexElement,s=t.map(function(e){return r.a.createElement(E,{key:e.id,flashcard:e,handleButtonRemove:n})});return r.a.createElement("div",{className:"flashcards"},r.a.createElement(b,{handleButtonAdd:a,addToIndex:l,indexElement:c}),r.a.createElement("ul",null,s))}}]),t}(n.Component)),y=(a(42),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={indexElement:0,activeElement:"",showSecond:!1},a.emptyArray=function(){return alert(" First Create Flashcard "),r.a.createElement(f.a,{to:"/flashcards"})},a.handleButton=function(){if(a.state.showSecond){var e=a.state.indexElement+1;e===a.props.flashcards.length&&(e=0);var t=a.props.flashcards[e];a.setState({indexElement:e,activeElement:t,showSecond:!1})}else a.setState({showSecond:!0})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.flashcards[this.state.indexElement];this.setState({activeElement:e})}},{key:"render",value:function(){var e=this.state,t=e.activeElement,a=e.showSecond,n=e.indexElement,l=this.props.flashcards;return r.a.createElement("div",{className:"learn"},0===l.length?this.emptyArray():null,r.a.createElement("span",null,n+1," / ",l.length),r.a.createElement("section",null,t.front),r.a.createElement("section",{style:a?null:{fontSize:"10px",color:"gray"}},a?t.back:"* Click to show *"),r.a.createElement("button",{onClick:this.handleButton},a?"Next":"Show"))}}]),t}(n.Component)),k=(a(43),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={text:"",indexElement:0,activeElement:"",isChecked:!1,valueIsCorrect:!1},a.handleChange=function(e){a.setState({text:e.target.value})},a.emptyArray=function(){return alert(" First Create Flashcard "),r.a.createElement(f.a,{to:"/flashcards"})},a.handleButton=function(){if(a.state.isChecked){var e=a.state.indexElement+1;a.props.flashcards.length===e&&(e=0);var t=a.props.flashcards[e];a.setState({activeElement:t,indexElement:e,isChecked:!1,valueIsCorrect:!1,text:""})}else a.state.text.toLowerCase()===a.state.activeElement.back.toLowerCase()&&a.setState({valueIsCorrect:!0}),a.setState({isChecked:!0})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.flashcards[this.state.indexElement];this.setState({activeElement:e})}},{key:"render",value:function(){var e=this.state,t=e.activeElement,a=e.valueIsCorrect,n=e.isChecked,l=null;return l=a?{border:"2px solid green"}:a?null:{border:"2px solid red"},r.a.createElement("div",{className:"learnWriting"},0===this.props.flashcards.length&&this.emptyArray(),r.a.createElement("section",null,t.front),r.a.createElement("section",null,!a&&n?t.back.toUpperCase():null," "),r.a.createElement("input",{type:"text",placeholder:"Answer",style:n?l:null,value:this.state.text,onChange:this.handleChange}),r.a.createElement("button",{onClick:this.handleButton},n?"Next":"Check"))}}]),t}(n.Component)),C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={flashcards:[]},a.indexElement=0,a.handleButtonAdd=function(e){var t=Object(s.a)(a.state.flashcards).concat(e);a.setState({flashcards:t})},a.handleButtonRemove=function(e){var t=Object(s.a)(a.state.flashcards).filter(function(t){return t.id!==e});a.setState({flashcards:t})},a.addToIndex=function(){a.indexElement++},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(f.b,{exact:!0,path:"/",component:p}),r.a.createElement(f.b,{path:"/flashcards",render:function(){return r.a.createElement(x,{flashcards:e.state.flashcards,handleButtonAdd:e.handleButtonAdd,handleButtonRemove:e.handleButtonRemove,addToIndex:e.addToIndex,indexElement:e.indexElement})}}),r.a.createElement(f.b,{path:"/learnWords",render:function(){return r.a.createElement(y,{flashcards:e.state.flashcards})}}),r.a.createElement(f.b,{path:"/learnWriting",render:function(){return r.a.createElement(k,{flashcards:e.state.flashcards})}})))}}]),t}(n.Component);c.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.e133184e.chunk.js.map
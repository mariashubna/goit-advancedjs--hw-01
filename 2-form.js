import"./assets/styles-BePqzEhE.js";let t={email:"",message:""},e=document.querySelector(".feedback-form");const l="feedback-form-state";localStorage.getItem(l)&&(t=JSON.parse(localStorage.getItem(l)),e.elements.email.value=t.email||"",e.elements.message.value=t.message||"");e.addEventListener("input",m);function m(a){t[a.target.name]=a.target.value,localStorage.setItem(l,JSON.stringify(t))}e.addEventListener("submit",s);function s(a){a.preventDefault(),e.elements.email.value===""||e.elements.message.value===""?alert("Fill please all fields"):(console.log(t),localStorage.removeItem(l),e.reset())}
//# sourceMappingURL=2-form.js.map
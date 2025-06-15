const t=r=>new Promise((a,o)=>{const e=new FileReader;e.onloadend=()=>{a(e.result)},e.onerror=o,e.readAsDataURL(r)}),s=r=>r.split(",")[1];export{t as c,s as e};

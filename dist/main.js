(()=>{"use strict";(t=>{const e=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),r=()=>{let t=(new Date("23 april 2024").getTime()-(new Date).getTime())/1e3,e=Math.floor(t/3600),n=Math.floor(t%3600/60),o=Math.floor(t%60);return e=String(e).padStart(2,"0"),n=String(n).padStart(2,"0"),o=String(o).padStart(2,"0"),{timeRemaining:t,hours:e,minutes:n,seconds:o}},i=()=>{let t=r();e.textContent=t.hours,n.textContent=t.minutes,o.textContent=t.seconds};i();let s=setInterval((()=>{r().timeRemaining<=0?(clearInterval(s),e.textContent="00",n.textContent="00",o.textContent="00"):i()}),1e3)})(),console.log("two.js works")})();
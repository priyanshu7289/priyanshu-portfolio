
const words=['Aspiring Data Analyst','Technology Enthusiast','Future Product Analyst'];
let i=0;
setInterval(()=>{
document.getElementById('typing').innerText=words[i%words.length];
i++;
},1500);

document.getElementById('themeToggle').onclick=()=>{
document.body.classList.toggle('light');
}

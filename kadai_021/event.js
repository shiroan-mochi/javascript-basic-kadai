const clickBtn = document.getElementById('btn');
const textMessage = document.getElementById('text');


clickBtn.addEventListener('click',()=>{
window.setTimeout(()=>{
  textMessage.textContent = 'ボタンをクリックしました';
},2000);
});

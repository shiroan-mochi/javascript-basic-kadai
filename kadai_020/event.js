//再提出になった方
// document.getElementById("btn").onclick = function(){
// document.getElementById("text").innerHTML = "ボタンをクリックしました"
// }


const clickBtn = document.getElementById('btn');
const textMessage = document.getElementById('text');

clickBtn.addEventListener('click',()=>{
  document.createElement('text')
  textMessage.textContent='ボタンをクリックしました';
});

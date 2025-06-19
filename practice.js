//6주차 실습
//다크모드토글글
function darktoggle(element){
    if(element.value == 'darktoggle'){
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('body').style.color = 'white';
        element.value = 'brighttoggle';
    }
    else{
        document.querySelector('body').style.backgroundColor = 'white';
        document.querySelector('body').style.color = 'black';
        element.value = 'darktoggle';
    }
}
function handler(event){
    darktoggle(event.target);
}
document.querySelector('#darktoggle').addEventListener('click',handler);
//실시간 텍스트 입력력
document.querySelector('#textinput').addEventListener('input',function(event){
    textoutput(event.target);
});

function textoutput(element){
    document.querySelector('#textoutput').textContent = element.value;
}
//덧셈 계산기기
let a = 0; 
let b = 0;
document.querySelector('#firstelement').addEventListener('input',function(event){
    a = parseInt(event.target.value);
});
document.querySelector('#secondelement').addEventListener('input',function(event){
    b = parseInt(event.target.value);
});

document.querySelector('#sum').addEventListener('click',function(element){
    document.querySelector('#sumoutput').textContent = `합계 : ${a+b}`;
});

//7주차 실습
//목록 추가
function addlist(event){
    const a = document.createElement('li');
    const b = document.querySelector('#addli')
    if(b.value.trim() === ''){
        alert('텍스트를 입력하세요');
        return;
    }
    let c = document.createTextNode(b.value);
    a.appendChild(c);
    document.querySelector('#addul').appendChild(a);
}
document.querySelector('#addlibtn').addEventListener('click',addlist);
document.querySelector('#addli').addEventListener('keydown',function(event){
    if(event.key=='Enter'){
        addlist();
    }
});
//마우스에 따른 설명박스 표표기
document.querySelector('#target_word').addEventListener('mouseenter',function(event){
    document.querySelector('#information').classList.remove('hidden');
});
document.querySelector('#target_word').addEventListener('mouseleave',function(event){
    document.querySelector('#information').classList.add('hidden');
});
//입력한 문자열을 html 엘리먼트로 표기기
document.querySelector('#html_input').addEventListener('input',function(event){
    document.querySelector('#html_output').innerHTML=event.target.value;
});
//8주차 실습
//탭 인터페이스
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click',event => {
        let id = tab.dataset.id;
        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelectorAll('.panel').forEach(panel => {
            panel.classList.add('hidden');
            panel.classList.remove('show');
        });
        tab.classList.add('active');
        document.querySelector(`#panel-${id}`).classList.remove('hidden');
        document.querySelector(`#panel-${id}`).classList.add('show');
    });
});
//모달 창(팝업)
document.querySelector('#open_modal').addEventListener('click',event => {
    document.querySelector('.overlay').classList.remove('hidden');
    document.body.classList.add('bodylock');
    //event.stopPropagation();
    setTimeout(() => {
        document.querySelector('body').addEventListener('click', bodyclickevent)
    },0);
});
document.querySelector('#close_modal').addEventListener('click', bodyclickevent);
document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){
        closemodal();
    }
})

function bodyclickevent(e) {
    if((!document.querySelector('.overlay').classList.contains('hidden') && !document.querySelector('.overlay').contains(e.target)) || document.querySelector('#close_modal')===e.target){
        closemodal();
    }
}
function closemodal(){
    document.querySelector('.overlay').classList.add('hidden');
    document.body.classList.remove('bodylock');
    document.querySelector('body').removeEventListener('click',bodyclickevent)
}
//배열 기반 리스트
const data = ['React', 'Next.js', 'Tailwind', 'TypeScript'];

data.forEach(item => {
    const li = document.createElement('li');
    const text = document.createTextNode(item);
    const btn = document.createElement('button');
    const btn_name = document.createTextNode(`${item} 삭제`);
    li.appendChild(text);
    btn.appendChild(btn_name);
    li.appendChild(btn);
    document.querySelector('#scriptli').appendChild(li);
    btn.addEventListener('click',event=>{
        li.remove();
    })
});

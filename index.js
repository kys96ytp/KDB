let links = {
            setcolor: function(color){
                // let alist = document.querySelectorAll('a');
                // let i = 0;
                // while(i<alist.length){
                //     alist[i].style.color=color;
                //     i = i + 1;
                // }
                $('a').css('color',color);  //JQUERY 라이브러리를 이용한 코드
            },
            setpagenowcolor: function(color){
                //document.querySelector('span.pagenow').style.color=color;
                $('span.pagenow').css('color',color);
            }
        }
let body = {
    setcolor: function(color){
        // document.querySelector('body').style.color=color;
        $('body').css('color',color);
    },
    setbackgroundcolor: function(color){
        // document.querySelector('body').style.backgroundColor=color;
        $('body').css('backgroundColor',color);
    },
    seth1backgroundcolor: function(color){
        //document.querySelector('h1').style.backgroundColor=color;
        $('h1').css('backgroundColor',color);
    }
}
let grid = {
    setgridcolor: function(color){
        // document.querySelector('.김덕배란누구인가').style.borderColor=color;
        // document.querySelector('h1').style.borderColor=color;
        $('.list').css('border-color',color);
        $('h1').css('border-color',color);
    }
}

function darkmodetoggle(x){
    if(x.value === 'dark'){
        body.setbackgroundcolor('black');
        body.setcolor('white');
        x.value = 'light';
        links.setcolor('yellow');
        links.setpagenowcolor('skyblue');
        body.seth1backgroundcolor('navy');
        grid.setgridcolor('white');
        }
    else{
        body.setbackgroundcolor('white');
        body.setcolor('black');
        x.value = 'dark';
        links.setcolor('black');
        links.setpagenowcolor('navy');
        body.seth1backgroundcolor('skyblue');
        grid.setgridcolor('black');
        }
}
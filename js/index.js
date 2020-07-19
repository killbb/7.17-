// 对今日疯抢设置轮播图
var links = document.querySelectorAll(".lun .g")
var lists = document.querySelectorAll(".lun-b img")

for (let i = 0; i < links.length; i++) {

   links[i].onmouseover = function () {
        for (var j = 0; j < lists.length; j++) {
            lists[j].style.display = "none";
            links[j].style.background = "rgb(255,255,255)";
        }
        lists[i].style.display = "block";
        links[i].style.background = "rgb(0, 178, 98)";
    }

}

//对分类导航设置js动画
var u = document.querySelectorAll(".hhh")

var d = document.querySelector(".batar-right")

for (var j = 0; j < u.length; j++) {
    d.style.display = "none"
    u[j].onmouseover = function () {
        d.style.display = ""
    }
    u[j].onmouseout = function () {
        
        d.style.display = "none"
}
}
// 对顶部搜索和下部导航设置js动画
var sss = document.querySelector(".newtop")
var dao = document.querySelector(".daohang-b")

document.onscroll = function () {
    let temp = document.documentElement.scrollTop
    
    if (temp > 400) {
        animate(sss, {
            "top": 0
        }

            , 500)
    } else {
        animate(sss, {
            "top": -50
        }, 100)
    }
    //侧边栏
    if (temp > 300) {
        animate(dao, {           
            "height": 280,          
            "width":50
        }
            , 500)
    } else {
        animate(dao, {            
            "height": 0,
            "width" : 0
        }, 50)
    }
  

    for (var i = 0; i < nav.length; i++) {
        temp = temp+50
        if (nav[i].top < temp && nav[i].top + nav[i].height >= temp) {
            
            for (var j = 0; j < nav.length; j++) {
                nav[j].style.background = "rgb(0, 0, 0,0.3)";
            }
            nav[i].style.background = nav[i].getAttribute("color");
        }
    }
 
}
//根据点击所在位置设置滚动条
var nav = document.querySelectorAll(".daohang-b-box")
var con = document.querySelectorAll(".neirong-1")


for (var i = 0; i < nav.length; i++) {
    nav[i].top = con[i].offsetTop;
    nav[i].height = con[i].offsetHeight;
  
    nav[i].onclick = function () {

        animate(document.documentElement, {
            scrollTop: this.top
        }, 2000)

    }
    nav[i].onmouseover = function(){
        this.style.background = this.getAttribute("color");
    }
    nav[i].onmouseout = function () {
        this.style.background = "";
    }
}


//轮播图
var win = document.getElementsByClassName("tabar")[0];
var box = document.getElementsByClassName("tabar-img")[0];
var btns = document.querySelectorAll(".img-btn li");
var winw = parseInt(getComputedStyle(win, null).width);
var num = 0;

var move = function () {
    num++;
    if (num > btns.length-1) {
        num = 0;
    }
    animate(box, {
        "margin-left": -num * winw
    }, 500)
    for (var i = 0; i < btns.length; i++) {
        btns[i].style.background = "#aaa";
    }
    btns[num].style.background = "#555";
}

var t = setInterval(move, 2000)
//按钮轮播
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        num = i;
        animate(box, {
            "margin-left": -num * winw
        }, 500)
        for (var j = 0; j < btns.length; j++) {
            btns[j].style.background = "#aaa";
        }
        btns[num].style.background = "#555";
    }
}
//鼠标的移入移出  事件里面最复杂的一个事件
win.onmouseover = function () {
    clearInterval(t);
}
win.onmouseout = function () {
    t = setInterval(move, 2000)
}



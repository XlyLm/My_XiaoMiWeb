$(function() {
    $('.carousel').carousel({
        interval: 1200
    });
    // header-list
    var $touch = $(".touch");
    var $img = $(".goods-infor img");
    var $name = $(".goods-infor .name");
    var $price = $(".goods-infor .price");
    $("#submit").click(function (event) {
        event.preventDefault()
    });

    var src = ["mi", "rm", "view", "note", "elec", "road", "intel"];
    var nameArr = [
        ["小米 MIX FOLD", "小米11 Ultra", "小米11 Pro", "小米11 青春版", "小米10S", "小米11"],
        ["Note10 Pro", "Note10 5G", "K40 游戏增强版", "K40 Pro 系列", "Redmi K40", "Redmi Note 9 系列"],
        ["Redmi MAX 86 超大屏电视", "小米电视大师 82英寸至尊纪念版", "小米电视大师 82英寸", "小米透明电视", "小米电视 大师 65英寸OLED", "Redmi 智能电视 MAX 98"],
        ["Redmibook Pro 14 锐龙版", "Redmibook Pro 15 锐龙版", "小米笔记本 Pro 15 锐龙版", "小米笔记本Pro 15", "RedmiBook Pro 14", "小米笔记本Pro 14"],
        ["米家风冷对开门冰箱 483L", "米家扫拖机器人1T", "米家互联网洗烘一体机10kg", "小米净水器S1 800G", "米家空气净化器 高效除菌", "米家两门冰箱 160L"],
        ["小米路由器AX6000", "Redmi路由器 AX6", "小米路由器AX9000", "小米路由器 AX1800x", "小米AIoT路由器AX3600", "Redmi路由器AC2100x"],
        ["小米全自动智能门锁", "Redmi小爱触屏音箱Pro8", "小米小爱触屏音箱", "Redmi小爱音箱 Play", "小米手表"]
    ];
    var priceArr = [
        [9999, 5999, 4499, 2299, 2299, 3799],
        [1599, 1099, 1999, 2499, 1999, 899],
        [9999, 49999, 11999, 49999, 9999, 19999],
        [4299, 4799, 6799, 6499, 4699, 5299],
        [2349, 2299, 4499, 1999, 899, 849],
        [599, 329, 999, 329, 499, 169],
        [1799, 499, 249, 89, 99]
    ];

    for (var i = 0; i < $touch.length; i++) {
        $touch[i].index = i;
        $($touch[i]).mouseenter(function () {
            for (var j = 0; j < $img.length; j++) {
                $($img[j]).attr("src", "picture/header-list-" + src[this.index] + "0" + (j + 1) + ".png");
                $($name[j]).text(nameArr[this.index][j]);
                $($price[j]).text(priceArr[this.index][j] + "元起");
                if ((this.index === 6) && (j === 5)) {
                    $($name[j]).text("");
                    $($price[j]).text("");
                }
                if ((this.index === 6) && (j === 4)) {
                    $($(".goods-infor .img")[4]).css("border", "none");
                }
            }
        });
    }

    //main
    var $left = $(".mi-controls .glyphicon-chevron-left");
    var $right = $(".mi-controls .glyphicon-chevron-right");
    var $ul = $(".mi-pic ul");
    var $aAll = $(".mi-pic ul a");
    var time1;
    var time2;
    var $mainImg = $(".main .main-title img");
    var $choseElect = $(".chose-elect");
    var $choseIntel = $(".chose-intel");
    var $choseMix = $(".chose-mix");
    var $choseEq = $(".chose-eq");
    var $choseSurr = $(".chose-surr");
    var $mainLi = $(".main .main-list li");
    var $radioLi = $(".radio-li");
    var $lastLi = $(".main-first,.main-last");

    function move(){
        time2 = setInterval(function () {
            clearInterval(time1);
            var flog = 0;
            if (parseInt($ul.css("left")) <= -2976) {
                $ul.css("left", "0px");
                $left.addClass("disable");
                $right.removeClass("disable");
            } else {
                time1 = setInterval(function () {
                    $ul.css("left", parseInt($ul.css("left")) - 124 + "px");
                    flog++;
                    if (flog >= 8) {
                        clearInterval(time1);
                    }
                    if ($ul.css("left") !== "0px") {
                        $left.removeClass("disable");
                    } else {
                        $left.addClass("disable");
                    }
                    if ($ul.css("left") !== "-2976px") {
                        $right.removeClass("disable");
                    } else {
                        $right.addClass("disable");
                    }
                }, 150);
            }
        }, 4000);
    }

    move();
    for(var j=0;j<$aAll.length;j++){
        $($aAll[j]).css("border-color","rgb("+9*(j+2)+","+7*(j+5)+","+5*(j+8)+")");
    }

    $left.bind("click",function () {
        if(!$left.hasClass("disable")){
            clearInterval(time1);
            clearInterval(time2);
            $right.removeClass("disable");
            if(parseInt($ul.css("left")) >= 0){
                $left.addClass("disable");
            }else{
                var num;
                if((parseInt($ul.css("left"))%992 === 0) && (parseInt($ul.css("left")) !== 0)){
                    num = (parseInt(parseInt($ul.css("left"))/992)+1)*992;
                }else{
                    num = parseInt(parseInt($ul.css("left"))/992)*992;
                }
                $ul.css("left",num+"px");
                if(parseInt($ul.css("left")) >= 0){
                    $left.addClass("disable");
                }
            }
            move();
        }
    });
    $right.bind("click",function (){
        if(!$right.hasClass("disable")){
            clearInterval(time1);
            clearInterval(time2);
            $left.removeClass("disable");
            var num = (parseInt(parseInt($ul.css("left"))/992) - 1)*992;
            $ul.css("left",num+"px");
            if(parseInt($ul.css("left")) <= -2976){
                $right.addClass("disable");
            }
            move();
        }
    });
    function floatUp($obj){
        $obj.animate({top:'-2px'},200);
    }
    function floatDown($obj){
        $obj.animate({top:'0px'},200);
    }
    function mouseAll($obj,n){
        if(n){
            $obj.mouseenter(function(){floatUp($(this));});
        }else{
            $obj.mouseleave(function(){floatDown($(this));});
        }
    }

    mouseAll($mainImg,true);
    mouseAll($mainImg,false);
    mouseAll($mainLi,true);
    mouseAll($mainLi,false);
    mouseAll($radioLi,true);
    mouseAll($radioLi,false);
    mouseAll($lastLi,true);
    mouseAll($lastLi,false);

    function choose($obj){
        $obj.mouseenter(function(){
            if(!$(this).hasClass("active")){
                $obj.removeClass("active");
            }
            $(this).addClass("active");
        });
    }

    choose($choseElect);
    choose($choseIntel);
    choose($choseMix);
    choose($choseEq);
    choose($choseSurr);

    //aside
    var $hide = $(".aside .hide-last");
    if($(window).scrollTop() > 200){
        $hide.css("display","block");
    }else{
        $hide.css("display","none");
    }
    $(window).bind("scroll",function() {
        if($(window).scrollTop() > 200){
            $hide.css("display","block");
        }else{
            $hide.css("display","none");
        }
    });
});

///footer
var $iconWeiXin = $(".icon-weixin");
var $sailedImg = $(".sailed-body .sailed-info img");
$iconWeiXin.mouseenter(function(){$sailedImg.removeClass("visibility");});
$iconWeiXin.mouseleave(function(){$sailedImg.addClass("visibility");});
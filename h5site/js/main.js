/**
 * Created by Administrator on 2016/8/8.
 */
$(document).ready(function(){
    console.log("hello Firefly!");
    /*if(confirm("hello")){
        console.log("你点的是确定")
    };*/
    var APP_ID = 'UxhULwvl8kpMusv1XP3EQ60b-gzGzoHsz';

// 应用 Key，用来校验权限（Web 端可以配置安全域名来保护数据安全）
    var APP_KEY = 'Qk2lIxE8nUMmAi4j6hJ0LgP2';

// 初始化
    AV.init({
        appId: APP_ID,
        appKey: APP_KEY
    });
    function saveData(saveStr){
        var TestObject = AV.Object.extend('TestObject');
        var testObject = new TestObject();
        testObject.save({
            testabc: saveStr,
        }).then(function() {
            /*alert('LeanCloud works!');*/
            console.log($(".window"))
            $(".window").show(1000);
            $(".ok").click(function(){
                $(".window").hide(300);
                $(".swiper-slide-active #myform input[type=text]").each(function(i){
                    $(this).val("");
                });
            });
        }).catch(function(err) {
            alert('error:' + err);
        });
    }
    $(".submit").click(function(){
        var str = '';
        $(".swiper-slide-active #myform input[type=text]").each(function(i){
            str+=$(".swiper-slide-active #myform input[type=text]").eq(i).attr("placeholder")+":"+$(this).val();
        });
        saveData(str);
        /*return false;*/
    });


    var mySwiper = new Swiper('.swiper-container', {
        direction : 'vertical',
        pagination : '.swiper-pagination',
        loop : true,
        speed:1000,
        touchRatio :1,
        followFinger : true,
        shortSwipes : true,

        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    })
});

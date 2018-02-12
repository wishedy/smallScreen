/**
 * Created by Administrator on 2016/8/10.
 */
var iniColor =$(".inner-slide5 .good").css("color");
touch.on(".inner-slide5 .good", 'touchend', function(ev){
    console.log("开始");

    changeOrno(iniColor);
});

function changeOrno(iniColor){
    if($(".inner-slide5 .good").attr("good")){
        $(".inner-slide5 .good").removeAttr("good").css({
            "color":iniColor,
        });
        console.log("关")
    }else{
        $(".inner-slide5 .good").css({
            "color":"#ff0000",
        });
        console.log($(".inner-slide5 .good"))
        $(".inner-slide5 .good").attr({"good":"play"});
        console.log("开")
    }
}
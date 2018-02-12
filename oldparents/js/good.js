/**
 * Created by Administrator on 2016/8/10.
 */
    console.log($(".lastone .good").css("color"))
var iniColor =$(".lastone .good").css("color");
touch.on(".inner-slide5 .good", 'touchend', function(ev){
    console.log("开始");

    changeOrno(iniColor);
});

function changeOrno(iniColor){
    if($(".lastone .good").attr("good")){
        $(".lastone .good").removeAttr("good").css({
            "color":iniColor,
        });
        console.log("关")
    }else{
        $(".lastone .good").css({
            "color":"#ff0000",
        });
        console.log($(".lastone .good"))
        $(".lastone .good").attr({"good":"play"});
        console.log("开")
    }
}
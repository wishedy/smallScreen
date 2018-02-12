/**
 * Created by Administrator on 2016/7/28.
 */
    function Music(selector,json){
        $(selector).addClass("music-container");

        if(json.width){
            $(".music-container").css({
                "width":json.width,
            });
        }else{
            $(".music-container").css({
                "width":json.width,
            });
        }
        if(json.height){
            $(".music-container").css({
                "height":json.height,
            });
        }else{
            $(".music-container").css({
                "height":"30px",
            });
        }
        var mainWidth = parseInt($(".music-container").eq(0).css("width"))*0.9+"px";
        var mainHeight = parseInt($(".music-container").eq(0).css("height"))*0.9+"px";
        $(".music-container #main").css({
            "width":mainWidth,
            "height":mainHeight,
        });
        function musicRun(){
            var animate = ['Cound 1s linear 600ms infinite','Dound 2s linear 200ms infinite','Eound 1s linear 300ms infinite',"Bround 2s linear 0s infinite"];
            $(".animate-ele").each(function(i){
                $(this).css({
                    "animation":animate[i],
                });
            });
            $("#playmusic").attr({
                "src":json.src,
            });
            $(".animate-elea").each(function(i){
                $(this).css({
                    "animation":"Bround 2s linear 0s infinite",
                });
            });
            playmusic.play();
            touch.on('#music-container', 'touchend', function(ev){
                playOrpause();
            });
            function playOrpause(){
                if($(".music-container").eq(0).attr("play")){
                    $(".music-container").eq(0).removeAttr("play");
                    $(".animate-ele").each(function(i){
                        $(this).css({
                            "animation":animate[i],
                        });
                    });
                    $(".animate-elea").each(function(i){
                        $(this).css({
                            "animation":"Bround 2s linear 0s infinite",
                        });
                    });
                    playmusic.play();
                }else{
                    $(".animate-ele").each(function(){
                        $(this).css({
                            "animation":"",
                        });
                    });
                    $(".animate-elea").each(function(i){
                        $(this).css({
                            "animation":"",
                        });
                    });
                    $(".music-container").eq(0).attr({"play":"play"});
                    playmusic.pause();
                }
            }
        }
        musicRun();
    }


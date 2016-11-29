$(function(){
    var cliH=$(window).height();
    var num=0;
    var flag=true;
   touch.on("body","swipeup","#images",function(e){
       e.preventDefault();
       if(!flag){
           return;
       }
        num++;
       if(num>=$("section").length){
           num=$("section").length-1;
           return
       }
       flag=false;
       $("#images").css({marginTop:-num*cliH});
   })
    touch.on("body","swipedown","#images",function(){
        e.preventDefault();
        if(!flag){
            return;
        }
        num--;
        if(num==-1){
            num=0;
            return
        }
        flag=false;
        $("#images").css({marginTop:-num*cliH});
    })
    document.getElementById("images").addEventListener("webkitTransitionEnd",function(){
        flag=true;
    })
})
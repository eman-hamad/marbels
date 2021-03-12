
var i=0, replace;
var imges_img= document.getElementsByClassName("imges");
function change(){
    replaceimg = setInterval(function(){
        if(i==imges_img.length){
            i=0;
        }
        if (i==0){
            imges_img[i].src="marble3.jpg";
            imges_img[imges_img.length-1].src="marble1.jpg";
            i++;
        }
        else{
            imges_img[i].src="marble3.jpg";
            imges_img[i-1].src="marble1.jpg";
            i++;
        }
    },900);
}


function stop(){
    clearInterval(replace);
}
var a=["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg","grandma.jpeg","https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg","https://i.postimg.cc/5ymDKL83/bro.jpg","kid.png"];
var b=["My Family Book","Granpa","Grandma","Dad","Mom","Brother","Me"];
var i=0;
function family_update(){
if(i==7){
    i=0;
}
document.getElementById("family_book").src=a[i];
document.getElementById("names").innerHTML=b[i];
i++;
}
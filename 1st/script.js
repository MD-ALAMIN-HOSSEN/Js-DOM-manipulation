var istatus =document.querySelector("h5");
var addFriend =document.querySelector("#AddFriend");
var removeFriend =document.querySelector("#Remove");
var check =0;


addFriend.addEventListener("click",function(){
    if (check === 0) {
        istatus.innerHTML ="Friend Added";
        //console.log("Friend Added");
        istatus.style.color = "green";
        addFriend.innerHTML ="Unfriend";
        removeFriend.style.display = "none";;
        check =1;
        
    } else {
            istatus.innerHTML ="Stranger";
            istatus.style.color = "red";
            addFriend.innerHTML ="Add";
            removeFriend.style.display = "inline-block";
            check =0;
    }
})
removeFriend.addEventListener("click",function(){
    istatus.innerHTML ="Romoved";
    istatus.style.color = "red";
})
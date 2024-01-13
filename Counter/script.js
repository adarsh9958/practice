let count=0;

const value=document.querySelector("#value")
const btns=document.querySelectorAll(".btn")

btns.forEach((btn) =>{
    btn.addEventListener("click",(e)=>{
        // console.log(e.currentTarget.classList)
        const styles=e.currentTarget.classList;
        if(styles.contains('dec')){
            count--;
        }else if(styles.contains('inc')){
            count++;
        }else{
            count=0;
        }
        if(count>0){
            value.style.color="rgb(5,154,15)";
        }
        if(count<0){
            value.style.color="red";
        }
        if(count==0){
            value.style.color="black";
        }
        value.textContent=count;
    });
})
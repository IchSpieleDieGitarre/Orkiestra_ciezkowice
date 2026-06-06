const images = [
  "ork_2.jpg",
  "ork_baner1.jpg",
  "ork_3.jpg",
];
let index = 1;
const img = document.getElementById("mainIMG");
let previndex = 0;
let nextindex = 0;
document.getElementById("right").addEventListener("click", () =>{
    previndex = index;
    if(index==0){
        nextindex=2;
    }
    else nextindex = index - 1
    index++;
    if(index>=3){
        index = 0;
    }
    updateImgs();
})

document.getElementById("left").addEventListener("click", () =>{
    nextindex = index;
    index--;
    if(index == 1){
        previndex=0;
    }
    else previndex = index + 2;
    if(index<=-1){
        index = 2;
    }
    updateImgs();
})

function updateImgs() {
    img.src = images[index];
    document.getElementById("left_side").src = images[previndex];
    document.getElementById("right_side").src = images[nextindex];
    //console.log(index)
}
const profileimage = document.querySelector("#profileimage")
const firstNameSpan = document.querySelector("#firstName")
const ageSpan = document.querySelector("#age")
const statusSpan = document.querySelector("#status")
const btnUpdateProfile = document.querySelector("#updateBtn")

const isFan = confirm("Are you a fan?");
console.log(isFan)

if(isFan === true){
    console.log("Welcome!");
}
else {
    console.log("Access denied!");
    profileimage.src = "images/088548e4240b850376f03258258f2ea7.jpg";
    firstNameSpan.innerHTML = "Disgusted cat";
    ageSpan.innerHTML = "3";
    statusSpan.innerHTML = "Very disgusted";
}

btnUpdateProfile.addEventListener("click", () => {
    profileimage.src = "images/2f849d27d9e76c4d7fccad7a21fcc948.jpg";
    firstNameSpan.innerHTML = "Cool Beom";
    ageSpan.innerHTML = "22";
    statusSpan.innerHTML = "Very cool";

});
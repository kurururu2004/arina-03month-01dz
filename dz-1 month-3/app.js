


const innInput = document.querySelector(".innInput")
const innCheck = document.querySelector(".innCheck");
const innResult = document.querySelector(".innResult");

console.log(innInput);
console.log(innCheck);
console.log(innResult);


const innRegExp = /^[1,2]\d{13}$/;

innCheck.addEventListener("click", () =>{

})


innCheck.addEventListener("click", () => {
    if (innRegExp.test(innInput.value)) {
        innResult.innerText = "ok";
        innResult.style.color = "green";
    } else {
        innResult.innerText = "not ok";
        innResult.style.color = "red";
}
});

const block = document.querySelector(".block1")

let num = 0;
const plus = function (leftBlock) {
	num++;
	block.style.left = `${num}px`;
	if (num < 50) {
		return plus();
	} else if (num > 349) {
		num = 0;
	} else {
		num += 50;
	}
	leftBlock();

}
block.addEventListener("click", plus)



 
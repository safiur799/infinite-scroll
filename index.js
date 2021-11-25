let count = 22;
console.log("safi");
let chil = document.querySelector(".child_div");
function getData() {
  for (let i = 0; i < 6; i++) {
    let masai = document.createElement("p");

    masai.innerHTML = `Masai Student ${count}`;
    count++;
    chil.append(masai);
    console.log(count);
  }
}
function showData() {
  setTimeout(() => {
    getData();
  }, 400);
}
window.addEventListener("scroll", () => {
  console.log("rahaman");
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    showData();
  }
});

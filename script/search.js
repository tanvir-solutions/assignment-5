const searchItem = document.getElementById("issue-search-id");

searchItem.addEventListener("keyup", (event) => {
    console.log(searchItem.value);
});
const searchvalue =(searchInput)=>{
    const url =`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchInput}`
    fetch(url)
    .then(res=>res.json())
    .th
}
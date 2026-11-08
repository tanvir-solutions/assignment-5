// get the parent length function
const parentCardContainerLength = () => {
  const parentCrad = document.getElementById("all-card-container");
    //   console.log(parentCrad.children.length);
  const count = document.getElementById("total-issue-count");
  count.innerText = parentCrad.children.length;
};

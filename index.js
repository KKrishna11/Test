const container = document.querySelector(".cardcontainer");
const jsonfile = "class.json";
fetch(jsonfile)
  .then((respone) => {
    return respone.json();
  })
  .then((data) => {
    data.map((item) => {
      const { ID, ImageUrl, Name, ShortDesc } = item;
      console.log(ID, ImageUrl, Name, ShortDesc);
      container.innerHTML += `
      <div class="card-body ${ID}">
        <div class="imagecontainer">
          <img src=${ImageUrl} alt="add image " />
        </div>
        <div class="cardinfo">
          <h4>${Name}</h4>
          <p id="mytext" class="lolp">
           ${ShortDesc}
          </p>
          <button>view</button>
        </div>
      </div>`;
    });
  })
  .catch((err) => {
    console.log(err);
  });

function updateHtml() {
  var text = document.getElementById("mytext").innerHTML;
  var trunc = text.substring(0, 40) + "...";
  document.getElementById("mytext").innerHTML = trunc;
}
updateHtml()

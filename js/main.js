function getAPI() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var result = this.responseText;
      var json = JSON.parse(result);
      var basket="";
      for(var i=0; i<json.length;i++){

        var cartoona = ` <div class="md:col-4  text-center">
                        <img src="${json[i].url}" class="w-100">
                        <h4>${json[i].title}</h4>
                        <h6>${json[i].id}</h6>
                        </div>
                       `;
          basket=basket+cartoona;
      }
                  document.querySelector(".test").innerHTML=basket;
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
  xhttp.send();
}
getAPI();

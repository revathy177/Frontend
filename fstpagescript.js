function search()
{

  

  var countryname = document.querySelector("#cname").value;
  fetch("https://restcountries.eu/rest/v2/name/" + countryname).then((res)=>{
    res.json().then((countrydata)=>{
     // console.log(countrydata); 
    

      var loader = document.querySelector(".results");
      for(var i = 0; i < countrydata.length ; i++) {
        sectionDiv = document.createElement("div");
        sectionDiv.className = "block";
        sectionDiv.setAttribute("onclick" , "getDetail(this)");
        textName = document.createElement("span");
        textName.className = countrydata[i].name;
        flag = document.createElement("img");
        flag.className = "flagimg";
        flag.setAttribute("src" , countrydata[i].flag);
        textName.append(countrydata[i].name); 
        sectionDiv.append(textName);
        sectionDiv.append(flag);
        loader.append(sectionDiv);
      }
      


    })
  })

}

function getDetail(element)
{

  var b = element.querySelector("span");
  var funname = b.className;
  location.href = "countrypage2.html?funname=" + funname;

  

}
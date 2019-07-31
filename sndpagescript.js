var url_name = document.URL;
var url = new URL(url_name);
var funname = url.searchParams.get("funname");

fetch("https://restcountries.eu/rest/v2/name/" + funname + "?fullText=true").then((res) =>{
  res.json().then((countrydata)=>{
  
    var loader = document.querySelector(".loader");
  
    flag = document.createElement("img");
    flag.className = "flagimg";
    flag.setAttribute("src" , countrydata[0].flag);
    loader.append(flag);



    sectionDiv = document.createElement("div");
    sectionDiv.append("Name: " + countrydata[0].name); 
    loader.append(sectionDiv);


    sectionDiv = document.createElement("div");
    sectionDiv.append("Capital: " +countrydata[0].capital);
    loader.append(sectionDiv);


    sectionDiv = document.createElement("div");
    sectionDiv.append("Calling Codes: " +countrydata[0].callingCodes[0]);
    loader.append(sectionDiv);


    sectionDiv = document.createElement("div");
    sectionDiv.append("Region: " +countrydata[0].region);
    loader.append(sectionDiv);


    sectionDiv = document.createElement("div");
    sectionDiv.append("Subregion: " +countrydata[0].subregion);
    loader.append(sectionDiv);


    sectionDiv = document.createElement("div");
    sectionDiv.append("Population: " +countrydata[0].population);
    loader.append(sectionDiv);


    sectionDiv = document.createElement("div");
    sectionDiv.append("Languages: " +countrydata[0].languages[0].name);
    loader.append(sectionDiv);



    sectionDiv = document.createElement("div");
    sectionDiv.append("Currency: " +countrydata[0].currencies[0].name);
    loader.append(sectionDiv);


    sectionDiv = document.createElement("div");
    sectionDiv.append("Regional Blocs: " +countrydata[0].regionalBlocs[0].name);
    container.append(sectionDiv);



  





    sectionDiv = document.createElement("div");
    container.append(sectionDiv);
    container.append(sectionDiv);




  })
})


function Back() {
  window.history.back();
}

  



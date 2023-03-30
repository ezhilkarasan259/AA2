var nav = document.querySelector(".partition1");
var cont = document.querySelector(".partition2");

// item
var Gen1 = [{one:"33% ^", two:"4.710", three:"item Sales"}]
let table1=document.querySelector(".table1");
for(i=0;i<Gen1.length;i++) {
  table1.innerHTML+=`<div class="item"><div class="item2">
  <div class="b1"><i class="fa-solid fa-cart-shopping" style="color: blue"></i></div> 
  <div class="b2"><button>${Gen1[i].one}</button></div>
  </div>
  <h4>${Gen1[i].two}</h4> 
 <p>${Gen1[i].three}</p>
  </div>`
}
var Gen2 = [{one:"2% ^", two:"3.721", three:"New Order"}]
let table2=document.querySelector(".table2");
for(i=0;i<Gen2.length;i++) {
  table2.innerHTML+=`<div class="item"><div class="item2">
  <div class="b1"><i class="fa-solid fa-envelope" style="color: orangered"></i></div> 
  <div class="b2"><button>${Gen2[i].one}</button></div>
  </div>
  <h4>${Gen2[i].two}</h4> 
 <p>${Gen2[i].three}</p>
  </div>`
}
var Gen3 = [{one:"12% ^", two:"2.149", three:"Total Product"}]
let table3=document.querySelector(".table3");
for(i=0;i<Gen3.length;i++) {
  table3.innerHTML+=`<div class="item"><div class="item2">
  <div class="b1"><i class="fa-solid fa-tv" style="color: orange"></i></div> 
  <div class="b2"><button>${Gen3[i].one}</button></div>
  </div>
  <h4>${Gen3[i].two}</h4> 
 <p>${Gen3[i].three}</p>
  </div>`
}
var Gen4 = [{one:"22% ^", two:"152.040", three:"Unique Visitor"}]
let table4=document.querySelector(".table4");
for(i=0;i<Gen4.length;i++) {
  table4.innerHTML+=`<div class="item"><div class="item2">
  <div class="b1"><i class="fa-solid fa-user" style="color: green"></i></div> 
  <div class="b2"><button>${Gen4[i].one}</button></div>
  </div>
  <h4>${Gen4[i].two}</h4> 
 <p>${Gen4[i].three}</p>
  </div>`
}



// oops
var TV= [{one:"Official Store", two:"250 Official stores in 21 Countries, Click the Marker to See the location",
 three:"Oops! Somthing Went Wrong.", foru:"This Page dosen't load Google map Correctly, See th JavaScript console for Technical details"}]
let store=document.querySelector(".store");
for(i=0;i<TV.length;i++) {
  store.innerHTML+=`<div class="sal"><div class="s1"><h6>${TV[i].one}</h6></div>
  <div class="s2">  <i class="fa-solid fa-location-dot"></i> Filter by city </div>
  </div>
  <div class="graph1">
  <p>${TV[i].two} </p>
  <div class="oops"> <div class="sign"><br><br><i class="fa-solid fa-circle-exclamation"style="margin-left:20%;"></i></div>
  <div class="wrong"><b>${TV[i].three}</b> <p>${TV[i].foru}</p></div>
  </div>
  </div>`
}

// Weekly best sale
var Weekly= [
  {one:"05.jpg", two:"Matt Doman", three:"05 Nov 2020", four:"137 Sales" },
  {one:"03.jpg", two:"Morgen Freeman", three:"30 July 2021", four:"137 Sales"},
  {one:"02.jpg", two:"Denzile Washingtone", three:"19 Oct 2021", four:"137 Sales"},
  {one:"06.jpg", two:"Matt Damone", three:"05 Nov 2020", four:"137 Sales"},
];
var best=document.querySelector(".best");
for(i=0;i<Weekly.length;i++) {
var Weekly2= Weekly[i];
best.innerHTML+=`<div class="best1"><div class="best2"><div class="b3">
<div class="image"><img style="width: 2em; height: 2em; border-radius: 10px " src="${Weekly[i].one}" alt=""></div>
</div>
<div class="b4"> <b>${Weekly[i].two}</b> <p>${Weekly[i].three}</p> </div>
<div style="clear:both"></div>
</div>
<div class="best3"> <div class="b2"> <button type="button">${Weekly[i].four}</button></div> </div>
</div>
</div>`
}     



      

           



const partners=[{
    name:"kannan",
    id:"OMA00097",
    phonenum:988877655,
    status:"active",
    codeId:"OMV00035"
},{
    name:"Sivasubramaniyan",
    id:"OMA00097",
    phonenum:988877655,
    status:"active",
    codeId:"OMV00035"

},
{
    name:"Jayaram",
    id:"OMA00097",
    phonenum:988877655,
    status:"active",
    codeId:"OMV00035"
},{
    name:"Saravanan",
    id:"OMA00097",
    phonenum:988877655,
    status:"idle",
    codeId:"OMV00035"
},{
    name:"Sreekesh",
    id:"OMA00097",
    phonenum:988877655,
    status:"idle",
    codeId:"OMV00035"
},{
    name:"Rakesh",
    id:"OMA00097",
    phonenum:988877655,
    status:"idle",
    codeId:"OMV00035"
},{
    name:"Path Shah",
    id:"OMA00097",
    phonenum:988877655,
    status:"inactive",
    codeId:"OMV00035"
}
];

let input=document.createElement("input");


for(let i=0;i<partners.length;i++)
{
    let innerdiv=document.createElement("div");
    innerdiv.classList.add('innerdiv')

    // create name attribute
    let name=document.createElement("p");
    name.classList.add('partner-name')
    name.innerHTML=partners[i].name;

    /** create id */

    let id=document.createElement("p");
    id.classList.add("partner-id")
    id.innerHTML=`${partners[i].id}|${partners[i].phonenum}`;
    /**  */
    let righticon=document.createElement("img");
    righticon.setAttribute("src","https://i.postimg.cc/g2yFTrKX/icons8-circled-right-64.png");
    righticon.classList.add("rightIcon")
    id.append(righticon);

    /** image  */
    let img1=document.createElement("img");
    img1.setAttribute("src","https://i.postimg.cc/gjVZ1vtL/Pngtree-black-ring-5487769.png");
    /** status */
    let status=document.createElement("status");
    status.classList.add('partner-status');


    if(partners[i].status==="active"){
        img1.classList.add("active")
        status.innerHTML=`VISIT ${partners[i].codeId}`;
         img1.append(status)
        
    }
    if(partners[i].status==="idle"){
        img1.classList.add("idle") 
        status.innerHTML="IDLE"
       
    }
    if(partners[i].status==="inactive"){
        img1.classList.add("inactive")
        status.innerHTML="INACTIVE"
       
    }
   innerdiv.append(name,id,img1,status)
    outerdiv=document.getElementById("partner-details");
 outerdiv.append(innerdiv);
}


// map creating 

function initMap() {
    const myLatLng = { lat: 13.0565342, lng: 80.965426};
    const centers={lat:13.0758232,lng:80.225155}
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: centers,
    });
   const marker= new google.maps.Marker({
      position: myLatLng,
      map,
      title: "1",
    });
    marker({lat:13.0758232,lng:80.225155})
  }
var map=    
function time(){
    let time=new Date("2011-04-20T09:30:51.01");
    let hr=time.getHours();
    let min=time.getMinutes();
    document.getElementById("time").innerHTML=hr.toLocaleString()+':'+min.toString();
    document.getElementById("time1").innerHTML=hr.toLocaleString()+':'+min.toString();
    console.log(hr)

}
time();


   
    
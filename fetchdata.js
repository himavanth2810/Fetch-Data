const container = document.querySelector(".container");

const serverUrl = "https://api.covid19api.com/live/country/india/status/confirmed/date/2021-04-30";
fetch(serverUrl).then((data)=>{
    return data.text();
}).then((result)=>{
    const array = JSON.parse(result);
    console.log(array);
    array.forEach(Element=>{
      const box = document.createElement("div");
      box.classList.add("box");

      box.innerHTML =`<div class="City">Province</div><div class="city-content">${Element.Province}</div><div class="Cases">Cases-Confirmed</div><div class="Cases-content">${Element.Confirmed}</div>`
      container.appendChild(box);
    });
});
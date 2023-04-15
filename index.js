function askUser() {
  // 提示用户输入姓名和年龄.保存到变量里.
  const input1 = prompt("What's your name?");

  const input2 = prompt("Please enter your age :");

  //   将用户输入的信息保存到一个变量里
  const message = `You entered "${input1}" and "${input2}".`;
  //   弹窗提示框,显示用户输入的信息
  alert(message);
}

// 获得网页这个按钮
const button = document.getElementById("ask");
// 给这个按钮添加事件

button.addEventListener("click", askUser);

// 之前的代码

let minute_div = document.getElementById("minute");

minute_div.innerText = get_date();
let display_btn = document.getElementById("display_btn");
let if_show = false;

display_btn.addEventListener("click", display_minute);
function display_minute() {
  minute_div.innerText = get_date();
  minute_div.style.display = if_show ? null : "none";
  display_btn.innerText = if_show ? "Hidden" : "Display";
  if_show = !if_show;
}

function get_date() {
  var now = new Date();
  var minutes = now.getMinutes();

  // 如果分钟数小于 10，则在前面添加一个 0

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // 获取当前小时数

  var hours = now.getHours();

  // 如果小时数小于 10，则在前面添加一个 0

  if (hours < 10) {
    hours = "0" + hours;
  }

  // 获取当前日期

  var date = now.getDate();

  // 获取当前月份

  var month = now.getMonth() + 1;
  // 获取当前年份

  var year = now.getFullYear();

  // 将日期和时间格式化为字符串

  var datetime = year + "-" + month + "-" + date + " " + hours + ":" + minutes;

  return datetime;
}

function mapLoad() {
  //Define the lat lon coordinate
  var latLng = [41.789649, -87.599702];

  var mbAttr =
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl =
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWluZ2NoYW8wMCIsImEiOiJjbDF2djZ1MzYwOGZvM2lwYW0zYnFyZjJqIn0.cvtaXI4Yl5BMMHK0NeJPJA";

  var grayscale = L.tileLayer(mbUrl, {
      id: "mapbox/light-v9",
      tileSize: 512,
      zoomOffset: -1,
      attribution: mbAttr,
    }),
    streets = L.tileLayer(mbUrl, {
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      attribution: mbAttr,
    });

  var map = L.map("map", {
    center: latLng,
    zoom: 16,
    layers: [streets],
  });

  var baseLayers = {
    Grayscale: grayscale,
    Streets: streets,
  };

  L.control.layers(baseLayers).addTo(map);

  L.marker(latLng)
    .addTo(map)
    .bindPopup("<b>UChicago<br>Campus</b>")
    .openPopup();

  //Click event
  var popup = L.popup();

  function onMapClick(e) {
    popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(map);
  }
  map.on("click", onMapClick);
}

function add_wiki() {
  const searchBtn = document.getElementById("search-btn");
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");
  let resultsHtml = "";
  searchBtn.addEventListener("click", async () => {
    const query = searchInput.value;
    var xhr = new XMLHttpRequest();
    var url = `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='${query}'`;
    try {
      xhr.open("GET", url, true);

      xhr.onload = function () {
        // Parse the request into JSON
        var data = JSON.parse(this.response);

        // Log the data object
        console.log(data);

        // Log the page objects
        console.log(data.query.pages);

        // Loop through the data object
        // Pulling out the titles of each page
        for (var i in data.query.pages) {
          resultsHtml += `
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">${data.query.pages[i].title}</h5>
              
            </div>
          </div>
        `;
        }
        searchResults.innerHTML = resultsHtml;
      };
      xhr.send();
    } catch (error) {
      console.error(error);
    }
  });
}

add_wiki();

function sorted_array(arr_str) {
  // 1.	The parseArray() function that outputs a sorted array based on input

  let array = Array.from(JSON.parse(arr_str));
  array.sort();
  return array;
}

function get_array() {
  const input1 = prompt("Please input an array?");
  alert(sorted_array(input1));
}

// 获得网页这个按钮
const array_btn = document.getElementById("array_btn");
array_btn.addEventListener("click", get_array);

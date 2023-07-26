let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
// let aaaa = document.querySelector('#tenki');
// aaaa.addEventListener('click', tenki);


  // console.log('緯度は' + data.coord.lon); 
  // console.log('経度は' + data.coord.lat); 
  // console.log('天気: ' + data.weather[0].description);
  // console.log('最低気温: ' + data.main.temp_min);
  // console.log('最高気温: ' + data.main.temp_max);
  // console.log('湿度: ' + data.main.humidity);
  // console.log('風速: ' + data.wind.speed);
  // console.log('風向: ' + data.wind.deg);
  // console.log('都市名: ' + data.name);

  let bt = document.querySelector('button#btn');
  bt.addEventListener('click', btn);
  function btn() {
    let s = document.querySelector('select#otenki');
    let idx = s.selectedIndex;  // idx 番目の option が選択された
    let os = s.querySelectorAll('option');  // s の子要素 option をすべて検索
    let o = os.item(idx);       // os の idx 番目の要素

    let wea = o.value;
    console.log(wea);
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+wea+".json";

    axios.get(url)
        .then(showResult)   
        .catch(showError)   
        .then(finish);     
  }

  
  function showResult(resp) {
    let data = resp.data;
    let div = document.querySelector('div#result');
    div.textContent="";
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }
    div = document.querySelector('div#result');
    let l = document.createElement("p");
    l.textContent="都市名:" + data.name;
    div.insertAdjacentElement('beforeend', l);

    // div = document.querySelector('div#result');
    l = document.createElement("p");
    l.textContent='緯度:' + data.coord.lon;
    div.insertAdjacentElement('beforeend', l);
  
    l = document.createElement("p");
    l.textContent='経度:' + data.coord.lat;
    div.insertAdjacentElement('beforeend', l);
  
    l = document.createElement("p");
    l.textContent='天気:' + data.weather[0].description;
    div.insertAdjacentElement('beforeend', l);
  
    l = document.createElement("p");
    l.textContent='最低気温:' + data.main.temp_min;
    div.insertAdjacentElement('beforeend', l);
  
    l = document.createElement("p");
    l.textContent='最高気温:' + data.main.temp_max;
    div.insertAdjacentElement('beforeend', l);
  
    l = document.createElement("p");
    l.textCnotent='湿度:' + data.main.humidity;
    div.insertAdjacentElement('beforeend', l);
  
    l = document.createElement("p");
    l.textContent='風速:' + data.wind.speed;
    div.insertAdjacentElement('beforeend', l);
  
    l = document.createElement("p");
    l.textContent='風向:' + data.wind.deg;
    div.insertAdjacentElement('beforeend', l);
  
    // l = document.createElement("p");
    // l.textContent="都市名:" + data.name;
    // div.insertAdjacentElement('beforeend', l);
  }
  function showError(err) {
      console.log(err);
    }

  function finish() {
      console.log('Ajax 通信が終わりました');
  }
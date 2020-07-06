getJs.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "2.js");
  request.onload = () => {
    console.log("成功发送请求");
    let script = document.createElement("script");
    console.log(request.response);
    console.log(script.childNodes);
    script.innerHTML = request.response;
    document.body.append(script);
  };
  request.onerror = () => {};
  request.send();
};

getCss.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onload = () => {
    console.log("success");
    let style = document.createElement("style");
    style.innerHTML = request.response;
    document.head.append(style);
  };
  request.onerror = () => {
    console.log("error");
  };
  request.send();
};

getHtml.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "3.html");

  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        let newHtml = document.createElement("div");
        newHtml.innerHTML = request.response;
        document.body.append(newHtml);
      } else {
        alert("加载失败");
      }
    }
  };
  request.send();
};

getXml.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "4.xml");

  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        let newXml = document.createElement("p");
        newXml.innerHTML = request.response;
        document.body.append(newXml);
      } else {
        alert("加载失败");
      }
    }
  };
  request.send();
};

getJson.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "5.json");
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status < 300
    ) {
      let newString = document.createElement("p");
      let newJson = JSON.parse(request.response);
      newString.textContent = "时间:" + newJson["时间"];
      document.body.appendChild(newString);
    }
  };
  request.send();
};

getPage.onclick = () => {
  let n = 1;
  const request = new XMLHttpRequest();
  request.open("get", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      let array = JSON.parse(request.response);
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n += 1;
    }
  };
  request.send();
};

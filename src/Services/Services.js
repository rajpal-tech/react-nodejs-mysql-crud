const baseUrl = "http://localhost:5656/api/";

function postData(type, userData) {
  return new Promise((resolve, reject) => {
    fetch(baseUrl + type, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: userData,
    })
      .then((response) =>
        response.json().then((res) => {
          resolve(res);
        })
      )
      .catch((error) => {
        reject(error);
      });
  });
}

function getData(type) {
  return new Promise((resolve, reject) => {
    fetch(baseUrl+type,{
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) =>
        response.json().then((res) => {
          resolve(res);
        })
      )
      .catch((error) => {
        reject(error);
      });
  });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  postData:postData,
  getData:getData,

}

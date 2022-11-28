//document.querySelector("#getJson").addEventListener("click", getText);

//document.querySelector("#getHere").addEventListener("click", getText);

// Funcion para llamar a un recurso interno que seria el doc TXT document "sample.txt"

//PART 1 - crear función

const getText = () => {
  //PARTE 2 llamamos al metodo fecth y le pasamos la URL del recurso que queremos usar

  fetch("sample.txt")
    //PARTE 3 -recibimos info de la llamada por parte del fetch y lo que hacemos es dentro de la promesa llamamos a una epresion para poder manipular/limpiar la info que recibimos dentro del fetch, como esta info es texto tenemos que convertir este texto en una string con el .text()
    .then((response) => response.text())
    // .then((cleanText) => document.querySelector("#output").innerHTML += cleanText)
    .then(
      (cleanText) => (document.querySelector("#output").innerText += cleanText)
    )
    .catch((error) => console.log(error));
};

document.querySelector("#getText").addEventListener("click", getText);

const getJson = () => {
  fetch("users.json")
    .then((response) => response.json())
    .then((users) => {
      let userData = "";
      users.forEach((user) => {
        userData += `
        <ul>
        <li>${user.name}</li>
        <li>${user.email}</li>
        <li>${user.id}</li>
        </ul>
        `;
      });
      document.querySelector("#output").innerHTML += userData;
    })
    .catch((error) => console.log(error));
};

document.querySelector("#getJson").addEventListener("click", getJson);

//LLAMAR a una API externa xiquets

const getExternalAPiInfo = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((res) => {
      let externalApiInfo = "";
      res.forEach((post) => {
        externalApiInfo += `
                <div class="card" style="width: 15rem">
                  <img
                      class="card-img-top"
                      src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltde04169680d1e8d6/6333adfb110d52448841a252/GettyImages-1243560834.jpg"
                      alt="A cool image about the Wu"
                  />
                  <div class="card-body">
                      <h5 class="card-title">${post.title}</h5>
                      <p class="card-text">
                          ${post.body}
                      </p>
                  </div>
                </div>
                `;
      });
      document.querySelector("#output").innerHTML += externalApiInfo;
    })
    .catch((error) => console.log(error));
};
document
  .querySelector("#getExternalAPiInfo")
  .addEventListener("click", getExternalAPiInfo);

////////////////////////////////////////////////////////////////////////

//  REFERENCIAR DE DIEGO's REPO

const addPost = (preventForm) => {
  preventForm.preventDefault();

  let title = document.querySelector("#title").value;
  let body = document.querySelector("#body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      // permiten añadir informacion adicional para ayudar al servirdor a entender que estamos enviando.
      "Content-type": "application/json",
      Accept: "text/plain, application/json",
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((response) => response.json())
    .then((fromData) => console.log(fromData))
    .catch((error) => console.log(error));
};

document.querySelector("#addPost").addEventListener("submit", addPost);

//// TRAERSE LOS COMENTARIOS DE LA DIEGO's REPO PARA TENER MEJOR COMPRENSION

document.addEventListener("DOMContentLoaded", (event) => {

    const form = document.getElementById('form');
    const result = document.getElementById('result');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      result.innerHTML = "Зачекайте..."
  
          fetch('https://api.web3forms.com/submit', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                  },
                  body: json
              })
              .then(async (response) => {
                  let json = await response.json();
                  if (response.status == 200) {
                      result.innerHTML = "Дякуємо. Ми з вами зв'яжемось";
                  } else {
                      console.log(response);
                      result.innerHTML = json.message;
                  }
              })
              .catch(error => {
                  console.log(error);
                  result.innerHTML = "Упс, щось зламалось. Напишіть нам на емейл, або зателефонуйте. Дякуємо.";
              })
              .then(function() {
                  form.reset();
                  setTimeout(() => {
                      result.style.display = "none";
                  }, 3000);
              });
      });
  
  });
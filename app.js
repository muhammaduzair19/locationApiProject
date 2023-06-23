const getData = () => {
    fetch('https://fakestoreapi.com/products/')
        .then(function (response) {
            console.log(response, "==> response data")
            return response.json();
        })
        .then(function (data) {
            console.log(data, "if error")
            uiCreation(data);
        })
}
getData();


function uiCreation(dataArray) {
    console.log(dataArray[0].title, dataArray[0].price, dataArray[0].description, dataArray[0].image)

    dataArray.forEach(item => {
        let description = item.description.slice(0,100)
        console.log(description)
        const container = document.querySelector('.container-fluid')
        const div = document.createElement('div');
        div.classList.add('caxrd')
        div.innerHTML = `
        <div class="card">
            <div class="top">
                <img src="${item.image}" class="card-img-top" alt="">
                <div class="d-flex justify-content-between align-items-center px-3">
                    <h5 class="card-title">${item.title}</h5>
                    <h6 class="card-text">${item.price}</h6>
                </div>
                <p class="card-text">${description}</p>
            </div>
            <a href="#" class="btn btn-primary">Buy Now</a>

        </div>`

        container.appendChild(div)
    });

}




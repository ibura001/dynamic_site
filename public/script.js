//отображение данных с базы данных
const show = async() => {
    //получение данных
    const data = await fetchData();
    //получение код страницы с таблицей
    const root = document.getElementById("root"); 
    //форма для вставки новых елементов в код сайта
    const list = data.map(elem => (
        `<tr>
            <td>${elem.id}</td>
            <td>${elem.customer}</td>
            <td>${elem.thing}</td>
            <td>${elem.price}</td>
          </tr>`
        ));
    //вставка новых елементов через форму выше
    root.innerHTML = `<table class="table table-striped table-sm">
    <thead>
      <tr>
        <th>Id</th>
        <th>Customer</th>
        <th>Thing</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
    ${list.join("")}
    </tbody>` 

}
//получение данных с базы данных
const fetchData = async() => 
{
    // создаем запрос на сервер чтобы получить обьект с елементам базы данных
const data = await fetch('/api/').then(response => {
        if(response.ok) {
            return response.json()
        }
    }).then(data => {
        return data;
    })
    return data;
}
//при нажатии кнопки (завершении регистрации) выполняем процедуры
document.getElementById('registerForm').onsubmit = async (e) => {
    e.preventDefault(); //отмена перезагрузки страницы
    const {elements} = e.target; //получение данных с формы 
    //заполняем обьект данными с формы
    const data = { 
        customer: elements[0].value,
        thing: elements[1].value,
        price: elements[2].value
    }
    console.log(data);
    //отправляем запрос на сервер с отправкой обьекта data
    await fetch('/api/', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    console.log(e.target);
    console.log(elements);
    //очищаем поля формы
    Array.prototype.forEach.call(e.target.elements, elem => {
        elem.value = '';
    });
    //показываем елементы базы данных
    await show();
};

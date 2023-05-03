class Add {
    constructor(id, name, avatar, price, info) {
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.price = price;
        this.info = info;
    }
}

let add_key = 'data-add';
let avatar_url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9AxdZZFXa2k6R9ygsvSTIonXmKFFZB0iPIQ&usqp=CAU";
var adds = []

function init() {
    if (localStorage.getItem(add_key) == null) {
        adds = [
            new Add(1, "718", `${avatar_url}`, '500000', 'kỹ thuật tốt'),
            new Add(2, "728", `${avatar_url}`, '500000', 'kỹ thuật vui'),
            new Add(3, "719", `${avatar_url}`, '500000', 'kỹ thuật lành'),
            new Add(4, "Caya", `${avatar_url}`, '500000', 'kỹ thuật an'),
            new Add(5, "720", `${avatar_url}`, '500000', 'kỹ thuật mây'),
            new Add(6, "740", `${avatar_url}`, '500000', 'kỹ thuật lạ'),
        ];

        localStorage.setItem(add_key, JSON.stringify(adds));
    }
    else {
        adds = JSON.parse(localStorage.getItem(add_key));
    }
}

function renderAdd() {
    let htmls = adds.map(function (add, index) {
        return `
                <tr>
                    <td>
                        <input type="checkbox">
                    </td>
                    <td>${add.name}</td>
                    <td><img style="width:150px" clas="avatar-sm" src="${add.avatar}" alt=""></td>
                    <td>${add.price}</td>
                    <td>${add.info}</td>
                    <td>
                        <i class="fa-solid fa-pencil" onclick = "getAdd(${add.id})"></i>
                        <i class="fa fa-trash" onclick = "removeAdd(${index})"></i>
                    </td>
                </tr>
            `
    });
    document.querySelector('.table>tbody').innerHTML = htmls.join("");
}


function openModel() {
    document.querySelector('.model-container').classList.add('show');
}
function closeModel() {
    document.querySelector('.model-container').classList.remove('show');
    resetModel();
}

function changeAvatar() {
    document.querySelector('.avatar-lg').src = document.querySelector('#avatar').value || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9AxdZZFXa2k6R9ygsvSTIonXmKFFZB0iPIQ&usqp=CAU';
}

function addProduct() {
    let name = document.querySelector('#name').value
    let avatar = document.querySelector('#avatar').value
    let price = document.querySelector('#price').value
    let info = document.querySelector('#info').value
    let id = findMaxId() + 1;

    let add = new Add(id, name, avatar, price, info);
    adds.push(add);
    localStorage.setItem(add_key, JSON.stringify(adds));
    closeModel();
    renderAdd();
}

function resetModel() {
    document.querySelector('#addId').value = "0";
    document.querySelector('#name').value = "";
    document.querySelector('#avatar').value = "";
    document.querySelector('#price').value = "";
    document.querySelector('#info').value = "";
    document.querySelector('.avatar-lg').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9AxdZZFXa2k6R9ygsvSTIonXmKFFZB0iPIQ&usqp=CAU";

    document.querySelector('#btnUpdate').classList.add('d-none');
    document.querySelector('#btnAdd').classList.remove('d-none');
    document.querySelector('.model-title').innerText = "Add Product";
}
function findMaxId() {
    let max = 0;
    for (let add of adds) {
        if (add.id > max) {
            max = add.id
        }
    }
    return max
}

function removeAdd(index) {

    let confirm = window.confirm("Bạn có chắc chắn xóa sản phẩm này không?");
    if (confirm) {
        adds.splice(index, 1);
        localStorage.setItem(add_key, JSON.stringify(adds));
        renderAdd();
    }

}

function getAdd(addId) {
    let add = adds.find(function (ad) {
        return ad.id === addId;
    })

    document.querySelector('#addId').value = add.id;
    document.querySelector('#name').value = add.name;
    document.querySelector('#avatar').value = add.avatar;
    document.querySelector('#price').value = add.price;
    document.querySelector('#info').value = add.info;
    document.querySelector('.avatar-lg').src = add.avatar;

    document.querySelector('#btnUpdate').classList.remove('d-none');
    document.querySelector('#btnAdd').classList.add('d-none');

    document.querySelector('.model-title').innerText = "Sửa Sản Phẩm";
    openModel();

}

function updateProduct() {

    let id = document.querySelector('#addId').value

    let add = adds.find(function (ad) {
        return ad.id == id;
    })
    add.name = document.querySelector('#name').value
    add.avatar = document.querySelector('#avatar').value
    add.price = document.querySelector('#price').value
    add.info = document.querySelector('#info').value
    localStorage.setItem(add_key, JSON.stringify(adds));
    closeModel();
    renderAdd();
    
}

function main() {
    init();
    renderAdd()
}
main();


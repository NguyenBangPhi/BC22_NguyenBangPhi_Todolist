let arr = [];




const renderChuaLam = (arr) => {
    const array = arr.filter((value) => {
        return value.status === false;
    });
    let content = "";
    for (const item of array) {
        content +=
        `
        <li>
            ${item.infor} 
            <div class="buttons">
                <button onclick="removeItem(${item.id})"><i class="fa fa-trash-alt remove"></i></button>
                <button onclick="clickItem(${item.id})"><i class="fa fa-check complete border-style"></i></button>
            </div>
        </li>
        `;
    }
    
    getEle("todo").innerHTML = content;
}
const renderDaLam = (arr) => {
    const array = arr.filter((value) => {
        return value.status === true;
    });
    let content = "";
    for (const item of array) {
        content +=
        `
        <li>
            ${item.infor} 
            <div class="buttons">
                <button onclick="removeItem(${item.id})"><i class="fa fa-trash-alt remove"></i></button>
                <button onclick="clickItem(${item.id})"><i class="fa fa-check complete border-style" style="background:red;color:white;"></i></button>
            </div>
        </li>
        `;
    }
    
    getEle("completed").innerHTML = content;
}
const render = (arr) => {
    renderChuaLam(arr);
    renderDaLam(arr);
};


const renderAZ = (arr) => {
    let array = [];
    array = arr.filter((value) => {
        return value.status === false;
    });
    array.sort((a,b) => {
        const nameA = a.infor.toUpperCase(); // ignore upper and lowercase
        const nameB = b.infor.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    } );
    console.log(array);

    let content = "";
    for (const item of array) {
        content +=
        `
        <li>
            ${item.infor} 
            <div class="buttons">
                <button onclick="removeItem(${item.id})"><i class="fa fa-trash-alt remove"></i></button>
                <button onclick="clickItem(${item.id})"><i class="fa fa-check complete border-style"></i></button>
            </div>
        </li>
        `;
    }
    
    getEle("todo").innerHTML = content;
    console.log(content);
}
const renderZA = (arr) => {
    let array = [];
    array = arr.filter((value) => {
        return value.status === false;
    });
    array.sort((a,b) => {
        const nameA = a.infor.toUpperCase(); // ignore upper and lowercase
        const nameB = b.infor.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return 1;
        }
        if (nameA > nameB) {
            return -1;
        }

        // names must be equal
        return 0;
    } );
    console.log(array);

    let content = "";
    for (const item of array) {
        content +=
        `
        <li>
            ${item.infor} 
            <div class="buttons">
                <button onclick="removeItem(${item.id})"><i class="fa fa-trash-alt remove"></i></button>
                <button onclick="clickItem(${item.id})"><i class="fa fa-check complete border-style"></i></button>
            </div>
        </li>
        `;
    }
    
    getEle("todo").innerHTML = content;
    console.log(content);
}
getEle("three").onclick = () => {
    renderZA(arr);
}
getEle("two").onclick = () => {
    renderAZ(arr);
}

getEle("addItem").onclick = function(){
    if(getEle("newTask").value === ""){
        alert("Chưa nhập việc cần làm !");
        return;
    }
    //arr.push(getEle("newTask").value); 
    let congviec = new CongViec(arr.length,getEle("newTask").value,false);
    arr.push(congviec);
    render(arr);
    getEle("newTask").value = "";
    console.log(arr);
    console.log("abc");
}


function getEle(id){
    return document.getElementById(id);
}
function clickItem(id) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].id === id){
            if(arr[i].status === true){
                arr[i].status = false;
                break;
            }else{
                arr[i].status = true;
                break;
            }
        }
    }
    render(arr);
}
function removeItem(id){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].id === id){
            arr.splice(i,1);
        }
    }
    render(arr);
}

function loadContent(arr){
    let content = "";
    for (const item of arr) {
        content +=
        `
        <li>
            ${item.infor} 
            <div class="buttons">
                <button onclick="removeItem(${item.id})"><i class="fa fa-trash-alt remove"></i></button>
                <button onclick="clickItem(${item.id})"><i class="fa fa-check complete border-style"></i></button>
            </div>
        </li>
        `;
    }
    return content;
}
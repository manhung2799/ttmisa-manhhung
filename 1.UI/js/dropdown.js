    var dropdown = document.querySelector(".dropdown-department");
    var dropdownList = document.querySelector(".dropdown-list-department");
    var iconDown = document.querySelector(".icon-down-department");
    var dropdownValue = document.querySelector(".dropdown-value-department");
    var state = false;

    var currVal = 0;



    var dropdownData = [
        "Tất cả phòng ban",
        "Phòng đào tạo",
        "Phòng maketting",
        "Phòng dự án"
    ];
    render_dep();

    function render_dep() {
        var dropdownListHTML = '';
        dropdownValue.innerText = dropdownData[currVal];

        for (var i = 0; i < dropdownData.length; i++) {
            if (i != currVal) {
                dropdownListHTML += `<li data-id=${i} class="dropdown-item"> ${dropdownData[i]} </li>`;
            } else {
                dropdownListHTML += `<li data-id=${i} class="dropdown-item active"> ${dropdownData[i]} </li>`;
            }
        }

        dropdownList.innerHTML = dropdownListHTML;

        var items = dropdownList.querySelectorAll('.dropdown-item');

        items.forEach((item) => {
            item.addEventListener('click', () => {
                var dataId = item.getAttribute('data-id');
                this.currVal = dataId;
                this.render_dep();
                console.log(dropdownList);
            });
        });

    }

    dropdown.addEventListener('click', function() {
        dropdownList.classList.toggle('show');
        iconDown.classList.toggle('move-up');
    });


var dropdown_pos = document.querySelector(".dropdown-pos");
var dropdownList_pos = document.querySelector(".dropdown-list-pos");
var iconDown_pos = document.querySelector(".icon-down-pos");
var dropdownValue_pos = document.querySelector(".dropdown-value-pos");
var state_pos = false;

var currVal_pos = 0;
var dropdownData_pos = [
    "Tất cả vị trí",
    "Giám đốc",
    "Nhân viên maketing",
    "Quản lý khối dự á"
];


render_pos();

function render_pos() {
    var dropdownListHTML_pos = '';
    dropdownValue_pos.innerText = dropdownData_pos[currVal_pos];

    for (var i = 0; i < dropdownData_pos.length; i++) {
        if (i != currVal_pos) {
            dropdownListHTML_pos += `<li data-id=${i} class="dropdown-item"> ${dropdownData_pos[i]} </li>`;
        } else {
            dropdownListHTML_pos += `<li data-id=${i} class="dropdown-item active"> ${dropdownData_pos[i]} </li>`;
        }
    }

    dropdownList_pos.innerHTML = dropdownListHTML_pos;

    var items = dropdownList_pos.querySelectorAll('.dropdown-item');

    items.forEach((item) => {
        item.addEventListener('click', () => {
            var dataId_pos = item.getAttribute('data-id');
            this.currVal_pos = dataId_pos;
            this.render_pos();
        });
    });
}

dropdown_pos.addEventListener('click', function() {
    dropdownList_pos.classList.toggle('show');
    // iconUp.classList.toggle('show');
    iconDown_pos.classList.toggle('move-up');
});



var dropdown_posnew = document.querySelector(".dropdown-posnew");
var dropdownList_posnew = document.querySelector(".dropdown-list-posnew");
var iconDown_posnew = document.querySelector(".icon-down-posnew");
var dropdownValue_posnew = document.querySelector(".dropdown-value-posnew");
var state_posnew = false;

var currVal_posnew = 0;

var dropdownData_posnew = [
    "Giám đốc",
    "Nhân viên maketing",
    "Quản lý khối dự á"
];

render_posnew();

function render_posnew() {
    var dropdownListHTML_posnew = '';
    dropdownValue_posnew.innerText = dropdownData_posnew[currVal_posnew];
    console.log("render");
    for (var i = 0; i < dropdownData_posnew.length; i++) {
        if (i != currVal_posnew) {
            dropdownListHTML_posnew += `<li data-id=${i} class="dropdown-item"> ${dropdownData_posnew[i]} </li>`;
        } else {
            dropdownListHTML_posnew += `<li data-id=${i} class="dropdown-item active"> ${dropdownData_posnew[i]} </li>`;
        }
    }

    dropdownList_posnew.innerHTML = dropdownListHTML_posnew;

    var items = dropdownList_posnew.querySelectorAll('.dropdown-item');

    items.forEach((item) => {
        item.addEventListener('click', () => {
            var dataId_posnew = item.getAttribute('data-id');
            this.currVal_posnew = dataId_posnew;
            this.render_posnew();
            console.log("for");
        });
    });
}


dropdown_posnew.addEventListener('click', function() {
    dropdownList_posnew.classList.toggle('show');
    iconDown_posnew.classList.toggle('move-up');
    console.log("click");
});

var dropdown_choice = document.querySelector(".dropdown-choice");
var dropdownList_choice = document.querySelector(".dropdown-list-choice");
var iconDown_choice = document.querySelector(".icon-down-choice");
var dropdownValue_choice = document.querySelector(".dropdown-value-choice");
var state_choice = false;

var currVal_choice = 0;
var dropdownData_choice = [
    "Nhà hàng Biển Đông",
    "Nhà hàng Đà Nẵng",
    "Nhà hàng Vũng Tàu"
];


render_choice();

function render_choice() {
    var dropdownListHTML_choice = '';
    dropdownValue_choice.innerText = dropdownData_choice[currVal_choice];

    for (var i = 0; i < dropdownData_choice.length; i++) {
        if (i != currVal_choice) {
            dropdownListHTML_choice += `<li data-id=${i} class="dropdown-item"> ${dropdownData_choice[i]} </li>`;
        } else {
            dropdownListHTML_choice += `<li data-id=${i} class="dropdown-item active"> ${dropdownData_choice[i]} </li>`;
        }
    }

    dropdownList_choice.innerHTML = dropdownListHTML_choice;

    var items = dropdownList_choice.querySelectorAll('.dropdown-item');

    items.forEach((item) => {
        item.addEventListener('click', () => {
            var dataId_choice = item.getAttribute('data-id');
            this.currVal_choice = dataId_choice;
            this.render_choice();
        });
    });
}

dropdown_choice.addEventListener('click', function() {
    dropdownList_choice.classList.toggle('show');
    iconDown_choice.classList.toggle('move-up');
});
//gender
var dropdown_gender = document.querySelector(".dropdown-gender");
var dropdownList_gender = document.querySelector(".dropdown-list-gender");
var iconDown_gender = document.querySelector(".icon-down-gender");
var dropdownValue_gender = document.querySelector(".dropdown-value-gender");
var state_gender = false;

var currVal_gender = 0;
var dropdownData_gender = [
   "Nam",
   "Nữ",
   "Khác"
];


render_gender();

function render_gender() {
    var dropdownListHTML_gender = '';
    dropdownValue_gender.innerText = dropdownData_gender[currVal_gender];

    for (var i = 0; i < dropdownData_gender.length; i++) {
        if (i != currVal_gender) {
            dropdownListHTML_gender += `<li data-id=${i} class="dropdown-item"> ${dropdownData_gender[i]} </li>`;
        } else {
            dropdownListHTML_gender += `<li data-id=${i} class="dropdown-item active"> ${dropdownData_gender[i]} </li>`;
        }
    }

    dropdownList_gender.innerHTML = dropdownListHTML_gender;

    var items = dropdownList_gender.querySelectorAll('.dropdown-item');

    items.forEach((item) => {
        item.addEventListener('click', () => {
            var dataId_gender = item.getAttribute('data-id');
            this.currVal_gender = dataId_gender;
            this.render_gender();
        });
    });
}

dropdown_gender.addEventListener('click', function() {
    dropdownList_gender.classList.toggle('show');
    // iconUp.classList.toggle('show');
    iconDown_gender.classList.toggle('move-up');
});
//deparnment-form
var dropdown_depf = document.querySelector(".dropdown-depf");
var dropdownList_depf = document.querySelector(".dropdown-list-depf");
var iconDown_depf = document.querySelector(".icon-down-depf");
var dropdownValue_depf = document.querySelector(".dropdown-value-depf");
var state_depf = false;

var currVal_depf = 0;
var dropdownData_depf = [
   "Phòng đào tạo",
   "Phòng Maketting",
   "Phòng dự án"
];


render_depf();

function render_depf() {
    var dropdownListHTML_depf = '';
    dropdownValue_depf.innerText = dropdownData_depf[currVal_depf];

    for (var i = 0; i < dropdownData_depf.length; i++) {
        if (i != currVal_depf) {
            dropdownListHTML_depf += `<li data-id=${i} class="dropdown-item"> ${dropdownData_depf[i]} </li>`;
        } else {
            dropdownListHTML_depf += `<li data-id=${i} class="dropdown-item active"> ${dropdownData_depf[i]} </li>`;
        }
    }

    dropdownList_depf.innerHTML = dropdownListHTML_depf;

    var items = dropdownList_depf.querySelectorAll('.dropdown-item');

    items.forEach((item) => {
        item.addEventListener('click', () => {
            var dataId_depf = item.getAttribute('data-id');
            this.currVal_depf = dataId_depf;
            this.render_depf();
        });
    });
}

dropdown_depf.addEventListener('click', function() {
    dropdownList_depf.classList.toggle('show');
    // iconUp.classList.toggle('show');
    iconDown_depf.classList.toggle('move-up');
});
//status
var dropdown_status = document.querySelector(".dropdown-status");
var dropdownList_status = document.querySelector(".dropdown-list-status");
var iconDown_status = document.querySelector(".icon-down-status");
var dropdownValue_status = document.querySelector(".dropdown-value-status");
var state_status = false;

var currVal_status = 0;
var dropdownData_status = [
    "Đang làm việc",
    "Đã nghỉ việc",
    "Đang thử việc"
];


render_status();

function render_status() {
    var dropdownListHTML_status = '';
    dropdownValue_status.innerText = dropdownData_status[currVal_status];

    for (var i = 0; i < dropdownData_status.length; i++) {
        if (i != currVal_status) {
            dropdownListHTML_status += `<li data-id=${i} class="dropdown-item"> ${dropdownData_status[i]} </li>`;
        } else {
            dropdownListHTML_status += `<li data-id=${i} class="dropdown-item active"> ${dropdownData_status[i]} </li>`;
        }
    }

    dropdownList_status.innerHTML = dropdownListHTML_status;

    var items = dropdownList_status.querySelectorAll('.dropdown-item');

    items.forEach((item) => {
        item.addEventListener('click', () => {
            var dataId_status = item.getAttribute('data-id');
            this.currVal_status = dataId_status;
            this.render_status();
        });
    });
}

dropdown_status.addEventListener('click', function() {
    dropdownList_status.classList.toggle('show');
    // iconUp.classList.toggle('show');
    iconDown_status.classList.toggle('move-up');
});


var dataGender = [
    { index: 0, value: "Nữ" },
    { index: 1, value: "Nam" },
    { index: 2, value: "Không xác định" }
];

var dataDepartment = [];
var dataPosition = [];
var dataWorkStatus = [
    { index: 0, value: "Đã nghỉ việc" },
    { index: 1, value: "Đang đi làm" },
    { index: 2, value: "Đang thử việc" },
    { index: 3, value: "Đang nghỉ phép" }
];
/**
 * Hàm click vào dropdown hiển thị dữ liệu từ API
 * CreateBy Trinh Thu Uyên (21/7/2021)
 */
$(document).ready(function () {
    if ($(".dropdown.dropdown-position")) {
        let thisdropdown = $(".dropdown.dropdown-position");
        $.ajax({
            url: "http://cukcuk.manhnv.net/v1/Positions",
            method: "GET",
        }).done(res => {
            res.forEach(position => {
                var dataPositionId = position.PositionId;
                var dataPositionName = position.PositionName;
                var data = { "id": dataPositionId, "name": dataPositionName }
                dataPosition.push(data);
            });
            var dropdownList = thisdropdown.find(".dropdown-list");
            var iconDown = thisdropdown.find(".icon-down");
            var dropdownValue = thisdropdown.find(".dropdown-value");
            var dropdownListHTML = '';

            $.each(dataPosition, function (index, item) {
                // console.log(item.id);
                dropdownListHTML += `<li class="dropdown-item" value="${item.id}"> ${item.name} </li>`;
            });
            dropdownList.html(dropdownListHTML);
        }).fail(res => {
            console.log("lỗi")
        })
    }
    if ($(".dropdown.dropdown-department")) {
        let thisdropdown = $(".dropdown.dropdown-department");
        $.ajax({
            url: "http://cukcuk.manhnv.net/api/Department",
            method: "GET",
        }).done(res => {
            res.forEach(department => {
                var dataDepartmentId = department.DepartmentId;
                var dataDepartmentName = department.DepartmentName;
                var data = { "id": dataDepartmentId, "name": dataDepartmentName }
                dataDepartment.push(data);
            });
            var dropdownList = thisdropdown.find(".dropdown-list");
            var dropdownListHTML = '';
            $.each(dataDepartment, function (index, item) {
                dropdownListHTML += `<li class="dropdown-item" value="${item.id}"> ${item.name} </li>`;
            });
            dropdownList.html(dropdownListHTML);
        }).fail(res => {
            console.log("lỗi")
        })
    }
    if ($(".dropdown.dropdown-status")) {
        let thisdropdown = $(".dropdown.dropdown-status");
        $.ajax({
            url: "http://cukcuk.manhnv.net/v1/Employees",
            method: "GET",
        }).done(res => {
            var dropdownList = thisdropdown.find(".dropdown-list");
            var dropdownListHTML = '';
            $.each(dataWorkStatus, function (index, item) {
                dropdownListHTML += `<li class="dropdown-item" value="${item.index}"> ${item.value} </li>`;
            });
            dropdownList.html(dropdownListHTML);
        }).fail(res => {
            console.log("lỗi")
        })
    }
    if ($(".dropdown.dropdown-gender")) {
        let thisdropdown = $(".dropdown.dropdown-gender");
        var dropdownList = thisdropdown.find(".dropdown-list");
        var dropdownListHTML = '';
        // for (var i = 0; i < dataGender.length; i++) {
        //     dropdownListHTML += `<li class="dropdown-item" value='${dataGender[i].index}'> ${dataGender[i].value} </li>`;
        // }
        $.each(dataGender, function (index, item) {
            dropdownListHTML += `<li class="dropdown-item" value="${item.index}"> ${item.value} </li>`;
        });
        dropdownList.html(dropdownListHTML);
    }
});

/**
 * Hàm click vào dropdown để hiển thị list các lựa chọn
 * reatedBy: Trinh Thu Uyen (21/07/2021)
 */
$('.dropdown-value,.dropdown .icon-down').on('click', function () {
    thisdropdown = $(this).parent().parent();
    dropdownList = thisdropdown.find('.dropdown-list');
    iconDown = thisdropdown.find('.icon-down');
    dropdownList.show();
    iconDown.addClass('move-up');
});

/**
 * Hàm dbclick vào dropdown để đóng list các lựa chọn
 * reatedBy: Trinh Thu Uyen (21/07/2021)
 */

$('.dropdown-value,.dropdown .icon-down').on('dblclick', function () {
    thisdropdown = $(this).parent().parent();
    dropdownList = thisdropdown.find('.dropdown-list');
    iconDown = thisdropdown.find('.icon-down');
    dropdownList.hide();
    iconDown.removeClass('move-up');
});

/**
 * Hàm click hiển thị item trong dropdown đã được chọn
 * CreateBy Trinh Thu Uyên (21/7/2021)
 */
$('.dropdown .dropdown-list').on('click', '.dropdown-item', function () {
    let item = $(this),
        thisdropdown = item.parent().parent(),
        dropdownList = thisdropdown.find('.dropdown-list'),
        iconDown = thisdropdown.find('.icon-down');
    dropdownList.find('.dropdown-item').removeClass('active');
    dropdownList.hide();
    iconDown.removeClass('move-up');
    thisdropdown.find('.dropdown-value').text(item.text());
    thisdropdown.find('.dropdown-value').attr('value', item.attr('value'));
    item.addClass('active');
})

// $.each(data, function(index, item){
//     console.log(item["EmployeeId"]);



// })



// $.each(dataPosition, function (index, item) {
//     console.log(item.id);
//     if (item.id == positionId) {
//         positionName = item.name;
//         break;
//     }
//     else {
//         positionName = '';
//     }
// });


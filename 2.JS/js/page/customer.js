$(document).ready(function () {
    loadData();
})

/**--------------------------------------
 * Load dữ liệu từ API về bảng
 * CreatedBy: TTUyen (19/07/2021)
 */
function loadData() {
    //lấy dữ liệu về
    $.ajax({
        url: "http://cukcuk.manhnv.net/v1/Employees",
        method: "GET",
    }).done(function (res) {
        // Xử lý dữ liệu
        // Hiển thị dữ liệu lên table
        var data = res;
        $.each(data, function (index, item) {
            var dateOfBirth = item["DateOfBirth"];
            var salary = item["Salary"];
            var dateStr = formatDate(dateOfBirth);
            var money = formatMoney(salary);
            var tr = $(`<tr>
                        <td>`+ item['EmployeeCode'] + `</td>
                        <td>`+ item['FullName'] + `</td>
                        <td>`+ item['Gender'] + `</td>
                        <td class="text-align-center">`+ dateStr + `</td>
                        <td>`+ item['PhoneNumber'] + `</td>
                        <td style="max-width: 100px;" title=` + item['Email'] + `>` + item['Email'] + `</td>
                    </tr>`);
            $('table tbody').append(tr);
            debugger;
        })
    }).fail(function (res) {
        alert("Có lỗi xảy ra vui lòng liên hệ MISA")
    })
}

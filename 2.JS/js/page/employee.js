$(document).ready(function () {
    new EmployeeJS();
   
})

/**------------------------------------------
 * Class quản lý các sự kiện cho trang employee
 *  CreatedBy: TTUyen (19/07/2021)
 */
 var dataEmployees;

class EmployeeJS {// chỉ khai báo contructor và các phương thức 
    //=> tạo ra một object quản lý tất cả các phương thức của trang
    constructor() {//hàm khởi tạo mặc định là contructor()
        this.name = "Uyên";//this.name như một property (không cần khởi tạo)
        this.loadData();//this là bản thân class employeeJS ==> this là con trỏ
    }

    /**--------------------------------------
     * Load dữ liệu từ API về bảng
     * CreatedBy: TTUyen (19/07/2021)
     */
    loadData() {

        try {
            $.ajax({
                url: "http://cukcuk.manhnv.net/v1/Employees",
                method: "GET",
                data: ''// Tham số sẽ truyền lên cho API qua body request ( nếu ko có có thể bỏ qua)
                // datatype : json
                // contentType: 'json' //kiểu dữ liệu trả về 
                // async : True, đồng bộ/ bất đồng bộ
            }).done(function (res) {
                // Xử lý dữ liệu
                // Hiển thị dữ liệu lên table
                 dataEmployees = res;
                $.each(dataEmployees, function (index, item) {
                    var dateOfBirth = item["DateOfBirth"];
                    var salary = item["Salary"];
                    var dateStr = formatDate(dateOfBirth);
                    var money = formatMoney(salary);
                    var genderName = formatGender(item['Gender']);
                    var indexWorkStatus = item['WorkStatus'];
                    var workStatus = loadWorkStatus(indexWorkStatus);
                    var tr = $(`<tr employeeId=${item.EmployeeId}>
                            <td>`+ item['EmployeeCode'] + `</td>
                            <td>`+ item['FullName'] + `</td>
                            <td>`+ genderName + `</td>
                            <td class="text-align-center">`+ dateStr + `</td>
                            <td>`+ item['PhoneNumber'] + `</td>
                            <td style="max-width: 100px;" title=` + item['Email'] + `>` + item['Email'] + `</td>
                            <td>`+ item['PositionName'] + `</td>
                            <td>`+ item['DepartmentName'] + `</td>
                            <td class="text-align-right">`+ money + `</td>
                            <td>`+ workStatus + `</td>
                        </tr>`);
                    $('table tbody').append(tr);
                })
            }).fail(function (res) {
                // API trả về lỗi - đưa ra thông báo lỗi cụ thể : tùy theo HttpCode - 400, 404, 500
                // Thông thường thì:
                // Mã 400: BadRequest- lỗi dữ liệu đầu vào từ client
                // 404: Địa chỉ url không hợp lệ
                // 500: Lỗi từ phía backend (bên server) 
                alert("Có lỗi xảy ra vui lòng liên hệ MISA")
            })
        } catch (error) {
            console.log(error);
        }
        //binding dữ liệu
    }
    /**--------------------------------------
     * Thêm mới dữ liệu
     * CreatedBy: TTUyen (19/07/2021)
     */
    add() {

    }
    /**--------------------------------------
     * Sửa dữ liệu
     * CreatedBy: TTUyen (19/07/2021)
     */
    edit() {

    }
    /**--------------------------------------
     * Xóa dữ liệu
     * CreatedBy: TTUyen (19/07/2021)
     */
    delete() {

    }

}



/**
 * Định nghĩa cho các workstatus
 */
function loadWorkStatus(indexS) {
    var valueWorkStatus = '';
    for (let i = 0; i < dataWorkStatus.length; i++) {
        if (dataWorkStatus[i].index == indexS) {
            valueWorkStatus = dataWorkStatus[i].value;
            break;
        }
    }
    return valueWorkStatus;
}

$("#txtSearch").keyup(function () {
    var value = $(this).val().toLowerCase();
    $("table#tbListDataEmployee tbody tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});
//Bai 1:
function tinhDiem() {
    var diemChuan = Number(document.getElementById("diemchuan").value);
    var diemThu1 = Number(document.getElementById("diem1").value);
    var diemThu2 = Number(document.getElementById("diem2").value);
    var diemThu3 = Number(document.getElementById("diem3").value);
    var khuVuc = Number(document.getElementById("khuvuc").value);
    var doiTuong = Number(document.getElementById("doituong").value);
    var diemDau = diemThu1 + diemThu2 + diemThu3 + khuVuc + doiTuong;
    var ketQua = "";

    if (diemThu1 == 0 || diemThu2 == 0 || diemThu3 == 0) {
        ketQua = "Bạn đã rớt, do có điểm nhỏ hơn hoặc bằng 0";
    } else if (diemDau >= diemChuan) {
        ketQua = "Bạn đã đậu: " + diemDau;
    } else if (diemDau < diemChuan) {
        ketQua = "Bạn đã rớt: " + diemDau;
    }
    document.getElementById("txtResult").innerHTML = ketQua;
}
document.getElementById("btnkq").onclick = tinhDiem;

//Bai 2:
const Kw_dau50 = 500;
const Kw_ke50 = 650;
const kw_ke100 = 850;
const kw_ke150 = 1100;
const Kw_conlai = 1300;

function tienDien() {
    var name = document.getElementById("name").value;
    var kW = Number(document.getElementById("kw").value);
    var soTien = 0;
    if (0 < kW && kW <= 50) {
        console.log("Giá 50 đầu")
        soTien = kW * Kw_dau50;
    } else if (50 < kW && kW <= 100) {
        console.log("Giá 50 Kế Tiếp")
        soTien = (50 * Kw_dau50) + ((kW - 50) * Kw_ke50);
    } else if (100 < kW && kW <= 200) {
        console.log("Giá 100 Kế Tiếp")
        soTien = (50 * Kw_dau50) + (50 * Kw_ke50) * Kw_ke50 + (kW - 100) * kw_ke100;
    } else if (200 < kW && kW <= 350) {
        console.log("Giá 150 Kế Tiếp")
        soTien = (50 * Kw_dau50) + (50 * Kw_ke50) + (50 * kw_ke100) + (kW - 200) * kw_ke150;
    } else if (350 < kW) {
        console.log("Giá Còn lại")
        soTien = (50 * Kw_dau50) + (50 * Kw_ke50) + (50 * kw_ke100) + (50 * kw_ke150) + (kW - 350) * Kw_conlai;
    } else {
        alert("Nhập số KM")
    }
    document.getElementById("txtResulttinh").innerHTML ="Họ Tên: " + name + " Tiền điện: " + soTien.toLocaleString() + " VNĐ ";
}
document.getElementById("btntinh").onclick = tienDien;
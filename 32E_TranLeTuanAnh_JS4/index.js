// Bài tập 1: Viết chương trình nhập: Điểm chuẩn của hội đồng, điểm 3 môn thi của thí sinh, khu vực(nhập X nếu không thuộc khu vực ưu tiên) và đối tượng dự thi(nhập 0 nếu không thuộc đối tương ưu tiên).Cho biết thí sinh đó đậu hay rớt và số điểm đạt được
// bao nhiêu.


document.getElementById('btnTinhDiem').onclick = function() {
    var diemChuan = Number(document.getElementById('diemChuan').value);
    var diemKhuVuc = Number(document.getElementById('diemKhuVuc').value);
    var doiTuong = Number(document.getElementById('doiTuong').value);
    var monThu1 = Number(document.getElementById('Mon1').value)
    var monThu2 = Number(document.getElementById('Mon2').value)
    var monThu3 = Number(document.getElementById('Mon3').value)

    var tongDiem = 0;
    var tongDiem = monThu1 + monThu2 + monThu3 + diemKhuVuc + doiTuong;
    var ketQuaB1 = '';

    if (monThu1 === 0 || monThu2 === 0 || monThu3 === 0) {
        ketQuaB1 = 'Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng ';
    } else if (tongDiem >= diemChuan) {
        ketQuaB1 = ' Bạn đã đạt . Tổng điểm của bạn là  ';
    } else {
        ketQuaB1 = 'Bạn đã rớt .Tổng điểm của bạn là ';
    }

    document.getElementById('ketQua_b1').innerHTML = ketQuaB1 + tongDiem;
}




// Bài Tập 2 : Viết Chương trình nhập vào thông tin tiêu thụ điện (tên , số KW)

document.getElementById('btntinhTien').onclick = function() {
    var hoTen = document.getElementById('nhapTen').value;
    var soKW = Number(document.getElementById('nhapSo').value);

    var tongTien = 0;

    if (soKW <= 50) {
        tongTien = soKW * 500;
    } else if (soKW > 50 && soKW <= 100) {
        tongTien = (soKW - 50) * 650 + 50 * 500;
    } else if (soKW > 100 && soKW <= 200) {
        tongTien = (soKW - 100) * 850 + 50 * 650 + 50 * 500;
    } else if (soKW > 200 && soKW <= 350) {
        tongTien = (soKW - 200) * 1100 + 100 * 850 + 50 * 650 + 50 * 500;
    } else {
        tongTien = (soKW - 350) * 1300 + 150 * 1100 + 100 * 850 + 50 * 650 + 50 * 500;
    }

    document.getElementById('ketQua_b2').innerHTML = 'Họ tên : ' + hoTen + ' ,  Tiền điện: ' + tongTien.toLocaleString() + 'VND';
}
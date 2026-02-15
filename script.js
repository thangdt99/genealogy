const FAMILY_DATA = [
  {
    "id": 1,
    "name": "Dương Tiến Tường",
    "gender": "Male",
    "order": 1
  },
  {
    "id": 2,
    "parent": 1,
    "name": "Dương Tiến Loan",
    "gender": "Male",
    "order": 1
  },
  {
    "id": 3,
    "parent": 1,
    "name": "Dương Tiến Thọ",
    "gender": "Male",
    "order": 2
  },
  {
    "id": 4,
    "parent": 1,
    "name": "Dương Tiến Kiến",
    "gender": "Male",
    "order": 3
  },
  {
    "id": 5,
    "parent": 1,
    "name": "Dương Tiến Quý",
    "gender": "Male",
    "order": 4
  },
  {
    "id": 6,
    "parent": 2,
    "name": "Dương Tiến Nhuệ",
    "gender": "Male",
    "order": 1
  },
  {
    "id": 7,
    "parent": 2,
    "name": "Dương Thị Phương",
    "gender": "Female",
    "order": 2
  },
  {
    "id": 8,
    "parent": 6,
    "name": "Dương Tiến Ổn",
    "gender": "Male",
    "order": 1
  },
  {
    "id": 9,
    "parent": 8,
    "name": "Dương Tiến Bảnh",
    "gender": "Male",
    "order": 1
  },
  {
    "id": 10,
    "parent": 8,
    "name": "Dương Tiến Bao",
    "gender": "Male",
    "order": 2
  },
  {
    "id": 11,
    "parent": 8,
    "name": "Dương Thị Thảo",
    "gender": "Female",
    "order": 3
  },
  {
    "id": 12,
    "parent": 8,
    "name": "Dương Thị Út",
    "gender": "Female",
    "order": 4
  },
  {
    "id": 13,
    "parent": 9,
    "name": "Dương Tiến Oanh",
    "gender": "Male",
    "dob": "1887",
    "order": 1
  },
  {
    "id": 14,
    "parent": 9,
    "name": "Dương Tiến Bách",
    "gender": "Male",
    "dob": "1893",
    "order": 2
  },
  {
    "id": 15,
    "parent": 9,
    "name": "Dương Tiến Lan",
    "gender": "Male",
    "order": 3
  },
  {
    "id": 16,
    "parent": 9,
    "name": "Dương Thị Chích",
    "gender": "Female",
    "order": 4
  },
  {
    "id": 17,
    "parent": 9,
    "name": "Dương Thị Tý",
    "gender": "Female",
    "order": 5
  },
  {
    "id": 18,
    "parent": 9,
    "name": "Dương Tiến Đài",
    "gender": "Male",
    "order": 6
  },
  {
    "id": 19,
    "parent": 13,
    "name": "Dương Tiến Kính",
    "gender": "Male",
    "order": 1
  },
  {
    "id": 20,
    "parent": 13,
    "name": "Dương Tiến Ca",
    "gender": "Male",
    "order": 2
  },
  {
    "id": 21,
    "parent": 13,
    "name": "Dương Tiến Xướng",
    "dob": "1932",
    "gender": "Male",
    "order": 3
  },
  {
    "id": 22,
    "parent": 13,
    "name": "Dương Thị Khuyên",
    "gender": "Female",
    "order": 4
  },
  {
    "id": 23,
    "parent": 13,
    "name": "Dương Thị Ương",
    "gender": "Female",
    "order": 5
  },
  {
    "id": 24,
    "parent": 13,
    "name": "Dương Thị Nhiễu",
    "gender": "Female",
    "order": 6
  },
  {
    "id": 25,
    "parent": 13,
    "name": "Dương Thị Mận",
    "gender": "Female",
    "order": 7
  },
  {
    "id": 26,
    "parent": 13,
    "name": "Dương Thị Mơ",
    "gender": "Female",
    "order": 8
  },
  {
    "id": 27,
    "parent": 14,
    "name": "Dương Tiến Riệp",
    "gender": "Male",
    "dob": "1914",
    "order": 1
  },
  {
    "id": 28,
    "parent": 14,
    "name": "Dương Tiến Tòng",
    "gender": "Male",
    "dob": "1914",
    "order": 2
  },
  {
    "id": 29,
    "parent": 14,
    "name": "Dương Tiến Mai",
    "gender": "Male",
    "order": 3
  },
  {
    "id": 86,
    "parent": 14,
    "name": "Dương Thị Cúc",
    "gender": "Female",
    "order": 3
  },
  {
    "id": 87,
    "parent": 14,
    "name": "Dương Thị Thân",
    "gender": "Female",
    "order": 3
  },
  {
    "id": 30,
    "parent": 15,
    "name": "Dương Văn Lân",
    "gender": "Male",
    "order": 1
  },
  {
    "id": 31,
    "parent": 15,
    "name": "Dương Văn Phượng",
    "gender": "Male",
    "order": 2
  },
  {
    "id": 32,
    "parent": 15,
    "name": "Dương Thị Sen",
    "gender": "Female",
    "order": 3
  },
  {
    "id": 33,
    "parent": 18,
    "name": "Dương Văn Chí",
    "gender": "Male",
    "order": 1
  },
  {
    "id": 34,
    "parent": 18,
    "name": "Dương Thị Côi",
    "gender": "Female",
    "order": 2
  },
  {
    "id": 35,
    "parent": 21,
    "name": "Dương Tiến Tùy",
    "gender": "Male",
    "dob": "1959",
  },
  {
    "id": 36,
    "parent": 21,
    "name": "Dương Tiến Tuyên",
    "gender": "Male",
    "dob": "1961",
  },
  {
    "id": 37,
    "parent": 21,
    "name": "Dương Tiến Huy",
    "gender": "Male",
    "dob": "1963",
  },
  {
    "id": 38,
    "parent": 21,
    "name": "Dương Tiến Lương",
    "gender": "Male",
    "dob": "1966",
  },
  {
    "id": 39,
    "parent": 21,
    "name": "Dương Tiến Quân",
    "gender": "Male",
    "dob": "1968",
  },
  {
    "id": 40,
    "parent": 21,
    "name": "Dương Tiến Khu",
    "gender": "Male",
    "dob": "1971",
  },
  {
    "id": 41,
    "parent": 21,
    "name": "Dương Thị Thanh",
    "gender": "Female",
    "dob": "1956",
  },
  {
    "id": 42,
    "parent": 21,
    "name": "Dương Thị Vui",
    "gender": "Female",
    "dob": "1973",
  },
  {
    "id": 43,
    "parent": 20,
    "name": "Dương Thị Tươi",
    "gender": "Female",
    "dob": "1975",
  },
  {
    "id": 44,
    "parent": 35,
    "name": "Dương Tiến Phong",
    "gender": "Male",
    "dob": "1991",
  },
  {
    "id": 45,
    "parent": 35,
    "name": "Dương Thị Kiều Trinh",
    "gender": "Female",
    "dob": "1996",
  },
  {
    "id": 46,
    "parent": 36,
    "name": "Dương Thị Thắm",
    "gender": "Female",
    "dob": "3/1/1988",
  },
  {
    "id": 47,
    "parent": 36,
    "name": "Dương Thị Hồng",
    "gender": "Female",
    "dob": "12/11/1989",
  },
  {
    "id": 48,
    "parent": 36,
    "name": "Dương Tiến Thắng",
    "gender": "Male",
    "dob": "5/7/1999",
  },
  {
    "id": 49,
    "parent": 38,
    "name": "Dương Tiến Cảnh",
    "gender": "Male",
    "dob": "25/8/1987",
  },
  {
    "id": 50,
    "parent": 38,
    "name": "Dương Thị Huế",
    "gender": "Female",
    "dob": "20/4/1989",
  },
  {
    "id": 51,
    "parent": 39,
    "name": "Dương Thị Lan Anh",
    "gender": "Female",
    "dob": "22/12/1998",
  },
  {
    "id": 52,
    "parent": 40,
    "name": "Dương Văn Chiến",
    "gender": "Male",
    "dob": "8/7/1995",
  },
  {
    "id": 53,
    "parent": 40,
    "name": "Dương Tiến Đức",
    "gender": "Male",
    "dob": "6/8/2001",
  },
  {
    "id": 54,
    "parent": 27,
    "name": "Dương Văn Trác",
    "gender": "Male",
    "dob": "1951",
    "order": 2
  },
  {
    "id": 55,
    "parent": 27,
    "name": "Dương Văn Lãng",
    "gender": "Male",
    "dob": "1956",
    "order": 3
  },
  {
    "id": 56,
    "parent": 27,
    "name": "Dương Thị Nhạn",
    "gender": "Female",
    "order": 1
  },
  {
    "id": 57,
    "parent": 27,
    "name": "Dương Thị Út",
    "gender": "Female",
    "order": 4
  },
  {
    "id": 58,
    "parent": 54,
    "name": "Dương Văn Toản",
    "gender": "Male",
    "dob": "1978",
    "order": 1
  },
  {
    "id": 59,
    "parent": 54,
    "name": "Dương Văn Huân",
    "gender": "Male",
    "order": 2
  },
  {
    "id": 60,
    "parent": 54,
    "name": "Dương Thị Huệ",
    "gender": "Female",
    "order": 3
  },
  {
    "id": 61,
    "parent": 55,
    "name": "Dương Văn Hải",
    "gender": "Male",
    "dob": "1978",
    "order": 1
  },
  {
    "id": 62,
    "parent": 55,
    "name": "Dương Thị Lý",
    "gender": "Female",
    "dob": "1984",
    "order": 2
  },
  {
    "id": 63,
    "parent": 55,
    "name": "Dương Tiến Hùng",
    "gender": "Male",
    "dob": "1986",
    "order": 3
  },
  {
    "id": 64,
    "parent": 29,
    "name": "Dương Văn Dũng",
    "gender": "Male",
    "order": 1
  },
  {
    "id": 65,
    "parent": 29,
    "name": "Dương Văn Mạnh",
    "gender": "Male",
    "order": 2
  },
  {
    "id": 66,
    "parent": 29,
    "name": "Dương Thị Xuyên",
    "gender": "Female",
    "order": 3
  },
  {
    "id": 67,
    "parent": 29,
    "name": "Dương Thị Xuyền",
    "gender": "Female",
    "order": 4
  },
  {
    "id": 68,
    "parent": 29,
    "name": "Dương Thị Xuyến",
    "gender": "Female",
    "order": 5
  },
  {
    "id": 69,
    "parent": 64,
    "name": "Dương Thị Anh",
    "gender": "Female",
    "order": 1
  },
  {
    "id": 70,
    "parent": 64,
    "name": "Dương Văn Đạt",
    "gender": "Male",
    "order": 2
  },
  {
    "id": 71,
    "parent": 64,
    "name": "Dương Thị Nhung",
    "gender": "Female",
    "order": 3
  },
  {
    "id": 72,
    "parent": 65,
    "name": "Dương Tiến Duẩn",
    "gender": "Male",
    "order": 1
  },
  {
    "id": 73,
    "parent": 65,
    "name": "Dương Thị Phương",
    "gender": "Female",
    "order": 2
  },
  {
    "id": 74,
    "parent": 65,
    "name": "Dương Thị Hoa",
    "gender": "Female",
    "order": 3
  },
  {
    "id": 75,
    "parent": 33,
    "name": "Dương Văn Chính",
    "gender": "Male",
    "order": 1
  },
  {
    "id": 76,
    "parent": 33,
    "name": "Dương Văn Định",
    "gender": "Male",
    "order": 2
  },
  {
    "id": 77,
    "parent": 33,
    "name": "Dương Văn Hòa",
    "gender": "Male",
    "order": 3
  },
  {
    "id": 78,
    "parent": 33,
    "name": "Dương Văn Bình",
    "gender": "Male",
    "order": 4
  },
  {
    "id": 79,
    "parent": 33,
    "name": "Dương Thị Minh",
    "gender": "Female",
    "order": 5
  },
  {
    "id": 80,
    "parent": 75,
    "name": "Dương Tiến Chính",
    "gender": "Male",
    "order": 1
  },
  {
    "id": 81,
    "parent": 75,
    "name": "Dương Thị Ngọc",
    "gender": "Female",
    "order": 2
  },
  {
    "id": 82,
    "parent": 76,
    "name": "Dương Thị Thu",
    "gender": "Female",
    "order": 1
  },
  {
    "id": 83,
    "parent": 77,
    "name": "Dương Thị Yến",
    "gender": "Female",
    "order": 1
  },
  {
    "id": 84,
    "parent": 77,
    "name": "Dương Thị Ly",
    "gender": "Female",
    "order": 2
  },
  {
    "id": 85,
    "parent": 77,
    "name": "Dương Tiến Hiếu",
    "gender": "Male",
    "order": 3
  },
  {
    "id": 88,
    "parent": 78,
    "name": "Dương Tiến Tùng",
    "gender": "Male",
    "order": 1
  },
  {
    "id": 89,
    "parent": 78,
    "name": "Dương Tiến Cường",
    "gender": "Male",
    "order": 2
  },
  {
    "id": 90,
    "parent": 10,
    "name": "Dương Văn Tân",
    "gender": "Male",
    "order": 1
  },
  {
    "id": 91,
    "parent": 10,
    "name": "Dương Văn Rỹ",
    "gender": "Male",
    "order": 2
  },
  {
    "id": 92,
    "parent": 10,
    "name": "Dương Văn Quang",
    "gender": "Male",
    "order": 3
  },
  {
    "id": 93,
    "parent": 10,
    "name": "Dương Văn Đỉnh",
    "gender": "Male",
    "order": 4
  },
  {
    "id": 94,
    "parent": 10,
    "name": "Dương Văn Đăng",
    "gender": "Male",
    "order": 5
  },
  {
    "id": 95,
    "parent": 10,
    "name": "Dương Thị Thanh",
    "gender": "Female",
    "order": 6
  },
  {
    "id": 96,
    "parent": 10,
    "name": "Dương Thị Thuyết",
    "gender": "Female",
    "order": 7
  },
  {
    "id": 97,
    "parent": 91,
    "name": "Dương Văn Sỹ",
    "gender": "Male",
    "order": 1
  },
  {
    "id": 98,
    "parent": 97,
    "name": "Dương Văn Nông",
    "gender": "Male",
    "order": 1
  },
  {
    "id": 99,
    "parent": 97,
    "name": "Dương Văn Công",
    "gender": "Male",
    "order": 2
  },
  {
    "id": 100,
    "parent": 97,
    "name": "Dương Văn Thương",
    "gender": "Male",
    "order": 3
  },
  {
    "id": 101,
    "parent": 97,
    "name": "Dương Thị Hạnh",
    "gender": "Female",
    "order": 4
  },
  {
    "id": 102,
    "parent": 97,
    "name": "Dương Thị Phúc",
    "gender": "Female",
    "order": 5
  },
  {
    "id": 103,
    "parent": 97,
    "name": "Dương Tiến Hiệp",
    "gender": "Male",
    "order": 6
  },
  {
    "id": 104,
    "parent": 97,
    "name": "Dương Tiến Hải",
    "gender": "Male",
    "order": 7
  },
  {
    "id": 105,
    "parent": 97,
    "name": "Dương Thị Hà",
    "gender": "Female",
    "order": 8
  },
  {
    "id": 106,
    "parent": 93,
    "name": "Dương Thị Ve",
    "gender": "Female",
    "order": 1
  },
  {
    "id": 107,
    "parent": 93,
    "name": "Dương Thị Bé",
    "gender": "Female",
    "order": 2
  },
  {
    "id": 108,
    "parent": 93,
    "name": "Dương Tiến Hoành",
    "gender": "Male",
    "order": 3
  },
  {
    "id": 109,
    "parent": 94,
    "name": "Dương Văn Khoan",
    "gender": "Male",
    "order": 1
  },
  {
    "id": 110,
    "parent": 109,
    "name": "Dương Văn Thành",
    "gender": "Male",
    "order": 1
  },
  {
    "id": 111,
    "parent": 109,
    "name": "Dương Văn Trung",
    "gender": "Male",
    "order": 2
  },
  {
    "id": 112,
    "parent": 109,
    "name": "Dương Văn Nam",
    "gender": "Male",
    "order": 3
  },
  {
    "id": 113,
    "parent": 109,
    "name": "Dương Văn Hà",
    "gender": "Male",
    "order": 4
  },
  {
    "id": 114,
    "parent": 109,
    "name": "Dương Thị Tâm",
    "gender": "Female",
    "order": 5
  },
  {
    "id": 115,
    "parent": 109,
    "name": "Dương Thị Liên",
    "gender": "Female",
    "order": 6
  },
  {
    "id": 116,
    "parent": 109,
    "name": "Dương Thị Nguyệt",
    "gender": "Female",
    "order": 7
  },
  {
    "id": 117,
    "parent": 111,
    "name": "Dương Tiến Kiên",
    "gender": "Male",
    "order": 1
  },
  {
    "id": 118,
    "parent": 111,
    "name": "Dương Thị Trang",
    "gender": "Female",
    "order": 2
  },
  {
    "id": 119,
    "parent": 111,
    "name": "Dương Thị Thu Trúc",
    "gender": "Female",
    "order": 3
  },
  {
    "id": 120,
    "parent": 112,
    "name": "Dương Thị Thanh",
    "gender": "Female",
    "order": 1
  },
  {
    "id": 121,
    "parent": 112,
    "name": "Dương Thị Hạnh",
    "gender": "Female",
    "order": 2
  },
  {
    "id": 122,
    "parent": 112,
    "name": "Dương Ngọc Khánh",
    "gender": "Male",
    "order": 3
  },
  {
    "id": 123,
    "parent": 112,
    "name": "Dương Phú Đạt",
    "gender": "Male",
    "order": 4
  },
  {
    "id": 124,
    "parent": 113,
    "name": "Dương Tuấn Anh",
    "gender": "Male",
    "order": 1
  },
  {
    "id": 125,
    "parent": 113,
    "name": "Dương Tiến Sơn",
    "gender": "Male",
    "order": 2
  },
  {
    "id": 126,
    "parent": 5,
    "name": "Dương Tiến Chinh",
    "gender": "Male",
    "order": 1
  },
  {
    "id": 127,
    "parent": 5,
    "name": "Dương Tiến Nghĩa",
    "gender": "Male",
    "order": 2
  },
  {
    "id": 128,
    "parent": 5,
    "name": "Dương Tiến Chiến",
    "gender": "Male",
    "order": 3
  },
  {
    "id": 129,
    "parent": 5,
    "name": "Dương Tiến Châu",
    "gender": "Male",
    "order": 4
  },
  {
    "id": 130,
    "parent": 126,
    "name": "Dương Tiến Chung",
    "gender": "Male",
    "order": 1
  },
  {
    "id": 131,
    "parent": 130,
    "name": "Dương Tiến Ý",
    "gender": "Male",
    "order": 1
  },
  {
    "id": 132,
    "parent": 131,
    "name": "Dương Tiến Rục (Chí)",
    "gender": "Male",
    "order": 1
  },
  {
    "id": 133,
    "parent": 132,
    "name": "Dương Văn Tư",
    "gender": "Male",
    "order": 1
  },
  {
    "id": 134,
    "parent": 132,
    "name": "Dương Văn Lự",
    "gender": "Male",
    "order": 2
  },
  {
    "id": 135,
    "parent": 132,
    "name": "Dương Văn Hồng",
    "gender": "Male",
    "order": 3
  },
  {
    "id": 136,
    "parent": 132,
    "name": "Dương Thị Bé",
    "gender": "Female",
    "order": 4
  },
  {
    "id": 137,
    "parent": 135,
    "name": "Dương Văn Sơn",
    "gender": "Male",
    "dob": "1974",
    "order": 1
  },
  {
    "id": 138,
    "parent": 135,
    "name": "Dương Văn Hùng",
    "gender": "Male",
    "order": 2
  },
  {
    "id": 139,
    "parent": 135,
    "name": "Dương Văn Kiên",
    "gender": "Male",
    "order": 3
  },
  {
    "id": 140,
    "parent": 133,
    "name": "Dương Thị Nhiệm",
    "gender": "Female",
    "order": 1
  },
  {
    "id": 141,
    "parent": 133,
    "name": "Dương Thị Nhạn",
    "gender": "Female",
    "order": 2
  },
  {
    "id": 142,
    "parent": 133,
    "name": "Dương Văn Như",
    "gender": "Male",
    "order": 3
  },
  {
    "id": 143,
    "parent": 134,
    "name": "Dương Văn Trọng",
    "gender": "Male",
    "order": 1
  },
  {
    "id": 144,
    "parent": 134,
    "name": "Dương Văn Chính",
    "gender": "Male",
    "order": 2
  },
  {
    "id": 145,
    "parent": 134,
    "name": "Dương Văn Nghĩa",
    "gender": "Male",
    "order": 3
  }
];
// "order": 1
// "dob": "2022",
//"image": "images/female.png",

const viewport = document.querySelector('.tree-viewport');
let isDown = false, startX, startY, scrollLeft, scrollTop;

viewport.addEventListener('mousedown', e => {
  isDown = true;
  startX = e.pageX;
  startY = e.pageY;
  scrollLeft = viewport.scrollLeft;
  scrollTop = viewport.scrollTop;
});

viewport.addEventListener('mouseleave', () => isDown = false);
viewport.addEventListener('mouseup', () => isDown = false);

viewport.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  viewport.scrollLeft = scrollLeft - (e.pageX - startX);
  viewport.scrollTop = scrollTop - (e.pageY - startY);
});

function dobToTimestamp(dob) {
  if (!dob || typeof dob !== "string") return Infinity;

  const parts = dob.split("/").map(p => p.trim());

  let day = 1;
  let month = 1;
  let year;

  if (parts.length === 1) {
    // "1985"
    year = Number(parts[0]);
  } else if (parts.length === 2) {
    // "06/1985"
    month = Number(parts[0]);
    year = Number(parts[1]);
  } else if (parts.length === 3) {
    // "15/06/1985"
    day = Number(parts[0]);
    month = Number(parts[1]);
    year = Number(parts[2]);
  }

  if (!year || Number.isNaN(year)) return Infinity;

  return new Date(year, month - 1, day).getTime();
}

const nodeMap = {};
function buildTree(data) {
  const roots = [];

  data.forEach(item => {
    nodeMap[item.id] = { ...item, children: [] };
  });

  data.forEach(item => {
    if (item.parent) {
      nodeMap[item.parent]?.children.push(nodeMap[item.id]);
    } else {
      roots.push(nodeMap[item.id]);
    }
  });

  return roots;
}

function sortNodeByDob(node) {
  if (!node.children || node.children.length === 0) return node;

  node.children.sort((a, b) => {
    if(a.dob && b.dob) {
      return dobToTimestamp(a.dob) - dobToTimestamp(b.dob);
    }
    return a.order - b.order;
  });

  node.children.forEach(sortNodeByDob);
  return node;
}

function sortTreeByDob(nodes) {
  nodes.sort((a, b) => a.dob && b.dob ? dobToTimestamp(a.dob) - dobToTimestamp(b.dob) : a.order - b.order);
  nodes.forEach(sortNodeByDob);
  return nodes;
}

function renderTree(nodes) {
  const ul = document.createElement('ul');

  nodes.forEach(node => {
    const li = document.createElement('li');

    const div = document.createElement('div');
    div.className = `person ${node.gender.toLowerCase()}`;

    div.innerHTML = `
      <img src="${node.image ? node.image : node.gender === 'Male' ? 'images/male.png' : 'images/female.png'}" alt="${node.name}">
      <div class="name">${node.name}</div>
      ${node.dob ? `<div class="year">Ngày sinh: ${node.dob}</div>` : '<div style="height: 23px;"></div>'}
      ${node.phone ? `<div class="phone">SĐT: ${node.phone}</div>` : ''}
    `;

    li.appendChild(div);

    if (node.children.length > 0) {
      li.appendChild(renderTree(node.children));
    }

    ul.appendChild(li);
  });

  return ul;
}

const treeData = buildTree(FAMILY_DATA);

function cloneSubTree(node) {
  return {
    ...node,
    children: node.children.map(cloneSubTree)
  };
}

function searchByName() {
  const keyword = document.getElementById('searchInput').value;
  if (!keyword) return;

  const matches = Object.values(nodeMap).filter(p => p.name.toLowerCase().trim() === keyword.toLowerCase().trim());
  const container = document.getElementById('tree');
  container.innerHTML = '';

  if (matches.length === 0) {
    container.innerHTML = '<p style="text-align:center">Không tìm thấy</p>';
    return;
  }

  matches.forEach(match => {
    const treeRoot = cloneSubTree(match);
    sortNodeByDob(treeRoot);

    const wrapper = document.createElement('div');
    wrapper.className = 'search-tree';

    wrapper.appendChild(renderTree(sortTreeByDob([treeRoot])));
    container.appendChild(wrapper);
  });
}

function resetTree() {
  const container = document.getElementById('tree');
  document.getElementById('searchInput').value = '';
  container.innerHTML = '';
  container.appendChild(renderTree(sortTreeByDob(treeData)));
}


const container = document.getElementById('tree');
container.classList.add('tree');
container.appendChild(renderTree(sortTreeByDob(treeData)));

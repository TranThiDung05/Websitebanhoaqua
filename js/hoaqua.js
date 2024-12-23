//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('hoaqua') == null) {
        let products = [{
            id: 1,
            status: 1, 
            title: 'Giỏ hoa quả 1',
            img: './assets/images/hoaqua/giohoaqua1.jpg',
            category: 'Giỏ hoa quả',
            price: 200000,
            desc: ''
        },
        {
            id: 2,
            status: 1, 
            title: 'Giỏ hoa quả 2',
            img: './assets/images/hoaqua/giohoaqua2.jpg',
            category: 'Giỏ hoa quả',
            price: 180000,
            desc: ''
        },
        {
            id: 3,
            status: 1, 
            title: 'Giỏ hoa quả 3',
            img: 'assets/images/hoaqua/giohoaqua3.jpg',
            category: 'Giỏ hoa quả',
            price: 180000,
            desc: ''
        },
        {
            id: 4,
            status: 1, title: 'Giỏ hoa quả 4',
            img: 'assets/images/hoaqua/giohoaqua4.jpg',
            category: 'Giỏ hoa quả',
            price: 299000,
            desc: ''
        },
        {
            id: 5,
            status: 1, 
            title: 'Giỏ hoa quả 5',
            img: 'assets/images/hoaqua/giohoaqua5.jpg',
            category: 'Giỏ hoa quả',
            price: 280000,
            desc: ''
        },

        {
            id: 6,
            status: 1, 
            title: 'Hoa quả nhập khẩu các loại',
            img: 'assets/images/hoaqua/hoaquanhapkhau1.jpg',
            category: 'Hoa quả nhập khẩu',
            price: 340000,
            desc: ''
        },

        {
            id: 7,
            status: 1, 
            title: 'Hoa quả nhập khẩu các loại',
            img: 'assets/images/hoaqua/hoaquanhapkhau2.jpg',
            category: 'Hoa quả nhập khẩu',
            price: 340000,
            desc: ''
        },

        {
            id: 8,
            status: 1, 
            title: 'Kiwi nhập khẩu',
            img: 'assets/images/hoaqua/kiwinhapkhau.jpg',
            category: 'Hoa quả nhập khẩu',
            price: 140000,
            desc: ''
        },

        {
            id: 9,
            status: 1, 
            title: 'Nho nhập khẩu',
            img: 'assets/images/hoaqua/nhonhapkhau.jpg',
            category: "Hoa quả nhập khẩu",
            price: 150000,
            desc: '',
        },
        {
            id: 10,
            status: 1, 
            title: 'Táo nhập khẩu ',
            img: 'assets/images/hoaqua/taonhapkhau.png',
            category: "Hoa quả nhập khẩu",
            price: 170000,
            desc: '',
        },
        {
            id: 11,
            status: 1, 
            title: 'chôm chôm Việt Nam',
            img: 'assets/images/hoaqua/chomchomVN.jpeg',
            category: 'Hoa quả Việt Nam',
            price: 120000,
            desc: ''
        },
        {
            id: 12,
            status: 1, 
            title: 'Nhãn Việt Nam',
            img: 'assets/images/hoaqua/nhanVN.jpg',
            category: 'Hoa quả Việt Nam',
            price: 140000,
            desc: ''
        },
        {
            id: 13,
            status: 1, 
            title: 'Vải Việt Nam',
            img: 'assets/images/hoaqua/vaiVN.jpg',
            category: 'Hoa quả Việt Nam',
            price: 100000,
            desc: ''
        },
        {
            id: 14,
            status: 1, 
            title: 'Mít sấy khô',
            img: 'assets/images/hoaqua/mitsaykho.jpg',
            category: 'Hoa quả sấy khô',
            price: 90000,
            desc: ''
        },
        {
            id: 15,
            status: 1, 
            title: 'Nhãn sấy khô',
            img: 'assets/images/hoaqua/nhansaykho.webp',
            category: 'Hoa quả sấy khô',
            price: 100000,
            desc: ''
        },
        {
            id: 16,
            status: 1, 
            title: 'Mâm ngũ quả 1',
            img: 'assets/images/hoaqua/mamnguqua1.jpg',
            category: 'Mâm ngũ quả',
            price: 240000,
            desc: ''
        },
        {
            id: 17,
            status: 1, 
            title: 'Mâm ngũ quả 2',
            img: 'assets/images/hoaqua/mamnguqua2.jpg',
            category: 'Mâm ngũ quả',
            price: 245000,
            desc: ''
        },
        {
            id: 18,
            status: 1, 
            title: 'Cam Cắt sẵn',
            img: 'assets/images/hoaqua/camcatsan.jpg',
            category: 'Hoa quả cắt sẵn',
            price: 60000,
            desc: ''
        },
        {
            id: 19,
            status: 1, 
            title: 'Dưa hấu cắt sẵn',
            img: 'assets/images/hoaqua/duahuacatsan.jpg',
            category: 'Hoa quả cắt sẵn',
            price: 90000,
            desc: ''
        },
        {
            id: 20,
            status: 1, 
            title: 'Xoài cắt sẵn',
            img: 'assets/images/hoaqua/xoaicatsan.jpg',
            category: 'Hoa quả cắt sẵn',
            price: 95000,
            desc: ''
        },
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Tạo tài khoản quản trị 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "Trần Thị Dung",
            phone: "TranThiDung05",
            password: "123456",
            address: 'https://github.com/TranThiDung05',
            email: 'tranthidung1632005@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

window.onload = createProduct();
window.onload = createAdminAccount();
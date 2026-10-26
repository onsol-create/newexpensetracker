# SpendSmart - Expense Tracker 


---

## 🚀 Tính năng chính

- **Dashboard:** Tổng quan tình hình tài chính, số dư, thu chi qua biểu đồ và các chỉ số nhanh.
- **Quản lý giao dịch (Transactions):** Thêm, sửa, xóa, tìm kiếm và lọc giao dịch theo danh mục/loại (Thu/Chi).
- **Ngân sách (Budgets):** Thiết lập và theo dõi hạn mức chi tiêu theo từng danh mục kèm phần trăm cảnh báo.
- **Mục tiêu (Goals):** Tạo và nạp tiền vào các mục tiêu tiết kiệm cá nhân.
- **Subscriptions:** Quản lý các khoản thanh toán định kỳ.
- **Đa tiền tệ & Đa ngôn ngữ:** Hỗ trợ chuyển đổi tiền tệ (USD, EUR, VND,...) và ngôn ngữ linh hoạt.
- **Lưu trữ dữ liệu:** Đồng bộ và duy trì dữ liệu an toàn ngay trên trình duyệt thông qua `LocalStorage`.

---

##  Công nghệ sử dụng

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Unit Testing:** [Vitest](https://vitest.dev/) + JSDOM
- **E2E Testing:** [Playwright](https://playwright.dev/)
- **Quản lý gói:** npm

---

## 📁 Cấu trúc thư mục

```text
newexpensetracker/
├── index.html              # Giao diện chính ứng dụng
├── styles.css              # Tùy chỉnh CSS bổ sung
├── script.js               # Logic nghiệp vụ và xử lý dữ liệu
├── sample_data.json        # Dữ liệu mẫu JSON (giao dịch, ngân sách, mục tiêu)
├── package.json            # Cấu hình scripts và dependencies
├── vitest.config.js        # Cấu hình Unit Test (Vitest)
├── playwright.config.js    # Cấu hình E2E Test (Playwright)
└── tests/
    ├── unit/               # Kiểm thử đơn vị (script.test.js, setup.js, loader.js)
    └── e2e/                # Kiểm thử E2E (spendsmart.spec.js)
```

---

## 🗄️ Cơ sở dữ liệu & Lưu trữ dữ liệu

Ứng dụng vận hành theo kiến trúc Client-side (Offline-first), không phụ thuộc vào hệ quản trị cơ sở dữ liệu phía máy chủ (Backend RDBMS). Toàn bộ trạng thái và dữ liệu được duy trì trực tiếp trên trình duyệt thông qua **Web Storage API (`LocalStorage`)**.

### 1. Danh sách các khóa lưu trữ (Storage Keys)

| Khóa (Key) | Định dạng | Mô tả chức năng |
| :--- | :--- | :--- |
| `spendSmart_tw_data` | `JSON Object` | Lưu trữ toàn bộ dữ liệu nghiệp vụ: giao dịch, ngân sách, mục tiêu và gói định kỳ. |
| `spendSmart_lang` | `string` (`'en'` \| `'vi'`) | Lưu mã ngôn ngữ hiển thị giao diện (Mặc định: `'en'`). |
| `spendSmart_theme` | `string` (`'light'` \| `'dark'`) | Lưu trạng thái chế độ giao diện Sáng hoặc Tối. |

### 2. Cấu trúc mô hình dữ liệu (`spendSmart_tw_data`)

Đối tượng dữ liệu chính lưu trong `spendSmart_tw_data` bao gồm các trường:

```json
{
  "currency": "USD",
  "currentPage": "dashboard",
  "heatmapMode": "both",
  "transactions": [
    {
      "id": "tx_01",
      "title": "Tiêu đề giao dịch",
      "type": "INCOME | EXPENSE",
      "category": "salary | food | housing | ...",
      "amount": 100.0,
      "date": "YYYY-MM-DD",
      "paymentMethod": "Credit Card | Cash | Bank Transfer | ...",
      "notes": "Ghi chú bổ sung"
    }
  ],
  "budgets": {
    "food": 200,
    "housing": 160,
    "transport": 50
  },
  "goals": [
    {
      "id": "goal_01",
      "title": "Tên mục tiêu tích lũy",
      "target": 1000,
      "current": 450
    }
  ],
  "subscriptions": [
    {
      "id": "sub_01",
      "name": "Tên dịch vụ định kỳ",
      "category": "entertainment",
      "amount": 9.99,
      "cycle": "monthly | yearly",
      "nextBilling": "YYYY-MM-DD",
      "paymentMethod": "Credit Card"
    }
  ]
}
```

### 3. Sao lưu & Khôi phục dữ liệu (Backup & Restore)
- **Xuất dữ liệu (Export):** Cho phép trích xuất toàn bộ dữ liệu đang lưu trong `LocalStorage` thành tập tin `spendSmart_backup_[date].json`.
- **Nhập dữ liệu (Import):** Đọc và ghi đè dữ liệu từ tập tin JSON vào `LocalStorage`.
- **Dữ liệu mẫu (Demo Data):** Dự án đi kèm tập tin [`sample_data.json`](sample_data.json) chứa sẵn các bản ghi thu/chi, ngân sách và gói dịch vụ mẫu để kiểm thử hoặc trải nghiệm nhanh tính năng.

---

## 🚀 Hướng dẫn chạy chương trình

### 1. Yêu cầu môi trường
- **Node.js:** Phiên bản 18.x trở lên.
- **Trình duyệt web:** Google Chrome, Microsoft Edge, Mozilla Firefox hoặc Safari hỗ trợ chuẩn ES6+.

### 2. Cài đặt các gói phụ thuộc (Dependencies)
Mở cửa sổ dòng lệnh tại thư mục gốc của dự án và thực thi lệnh:

```bash
npm install
```
---

### 3. Khởi chạy ứng dụng

Có thể lựa chọn một trong các phương thức sau để vận hành ứng dụng:

#### Phương thức 1: Sử dụng máy chủ tĩnh `serve` (Khuyến nghị)
Khởi tạo máy chủ local tại cổng `8080` (cổng chuẩn hóa tương thích với cấu hình kiểm thử E2E của Playwright):

```bash
npx serve . -p 8080
```
- Địa chỉ truy cập trên trình duyệt: **`http://localhost:8080`**

#### Phương thức 2: Mở trực tiếp file `index.html`
- Mở thư mục dự án trên máy tính.
- Nhấp đúp chuột vào file `index.html` hoặc chuột phải chọn mở bằng trình duyệt web bất kỳ.

#### Phương thức 3: Khởi chạy bằng tiện ích Live Server (Visual Studio Code)
- Cài đặt tiện ích mở rộng **Live Server** (`ritwickdey.LiveServer`) trên VS Code.
- Nhấp chuột phải vào file `index.html` trong cây thư mục và chọn **"Open with Live Server"**.
- Trình duyệt sẽ tự động mở trang web tại địa chỉ cục bộ (mặc định: `http://127.0.0.1:5500/index.html`).









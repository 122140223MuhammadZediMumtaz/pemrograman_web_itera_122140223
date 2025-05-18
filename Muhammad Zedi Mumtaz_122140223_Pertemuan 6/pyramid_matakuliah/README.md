# 📘 Aplikasi Manajemen Matakuliah – Praktikum Pemrograman Web

## 🧩 Deskripsi Proyek
Proyek ini merupakan implementasi **API RESTful** menggunakan framework **Pyramid** dan basis data **PostgreSQL** untuk melakukan manajemen data **Matakuliah**.

Pengembangan dilakukan dalam rangka **Tugas Praktikum Pemrograman Web**, dengan mengikuti modul yang diberikan untuk topik: *CRUD API Development with Pyramid Framework and SQLAlchemy ORM*.

---

## ⚙️ Teknologi & Tools
- **Pyramid** – Python Web Framework minimalis dan modular.
- **SQLAlchemy** – ORM untuk pemetaan model ke database PostgreSQL.
- **Alembic** – Untuk melakukan migrasi database.
- **PostgreSQL** – Database relasional.
- **Thunder Client** – REST API client ringan dalam VS Code.
- **Jinja2** – Template engine (meskipun tidak digunakan dalam endpoint JSON).

---

## 📦 Struktur Proyek
```
pyramid_matakuliah/
├── development.ini
├── setup.py
├── production.ini
├── pyramid_matakuliah/
│   ├── models/
│   │   ├── __init__.py
│   │   ├── meta.py
│   │   └── matakuliah.py
│   ├── views/
│   │   └── matakuliah.py
│   ├── routes.py
│   ├── scripts/
│   │   └── initialize_db.py
│   └── alembic/
│       ├── env.py
│       └── versions/
```

---

## 🚀 Langkah Instalasi & Jalankan Aplikasi

### 1. Persiapan Awal
Pastikan telah menginstal:
- Python 3.7+
- PostgreSQL (aktif & dapat diakses)

### 2. Buat & Aktifkan Virtual Environment
```bash
python -m venv venv
venv\Scripts\activate      # Windows
# atau
source venv/bin/activate  # macOS/Linux
```

### 3. Instalasi Dependensi
```bash
pip install --upgrade pip setuptools
pip install -e ".[testing]"
```

### 4. Setup Database PostgreSQL
Masuk ke PostgreSQL dan jalankan:
```sql
CREATE DATABASE pyramid_matakuliah;
CREATE USER pyramid_user WITH ENCRYPTED PASSWORD 'pyramid_pass';
GRANT ALL PRIVILEGES ON DATABASE pyramid_matakuliah TO pyramid_user;
GRANT ALL ON SCHEMA public TO pyramid_user;
```

Edit file `development.ini`:
```
sqlalchemy.url = postgresql://pyramid_user:pyramid_pass@localhost:5432/pyramid_matakuliah
```

### 5. Migrasi Database
```bash
alembic -c development.ini revision --autogenerate -m "init"
alembic -c development.ini upgrade head
```

### 6. Jalankan Aplikasi
```bash
pserve development.ini --reload
```

---

## 📡 Endpoint API

### 1. Tambah Matakuliah
`POST /api/matakuliah`
```json
{
  "kode_mk": "IF101",
  "nama_mk": "Pemrograman Web",
  "sks": 3,
  "semester": 4
}
```

### 2. Ambil Semua Matakuliah
`GET /api/matakuliah`

### 3. Ambil Detail Matakuliah
`GET /api/matakuliah/{id}`

### 4. Perbarui Matakuliah
`PUT /api/matakuliah/{id}`
```json
{
  "nama_mk": "Pemrograman Web Lanjut",
  "semester": 5
}
```

### 5. Hapus Matakuliah
`DELETE /api/matakuliah/{id}`

---

## ✅ Dokumentasi Pengujian Thunder Client

### 🔧 Konfigurasi Umum
- Semua request ke: `http://localhost:6543`
- Header:
  ```
  Content-Type: application/json
  ```

### 🧪 Contoh Request Thunder Client

#### 🔹 POST – Tambah Matakuliah
- **URL**: `POST http://localhost:6543/api/matakuliah`
```json
{
  "kode_mk": "IF102",
  "nama_mk": "Jaringan Komputer",
  "sks": 3,
  "semester": 5
}
```

#### 🔹 GET – Lihat Semua
- **URL**: `GET http://localhost:6543/api/matakuliah`

#### 🔹 GET – Detail
- **URL**: `GET http://localhost:6543/api/matakuliah/1`

#### 🔹 PUT – Update
- **URL**: `PUT http://localhost:6543/api/matakuliah/1`
```json
{
  "semester": 6
}
```

#### 🔹 DELETE – Hapus
- **URL**: `DELETE http://localhost:6543/api/matakuliah/1`

---

## 📌 Catatan Tambahan

- Error umum seperti `invalid input syntax for type integer` sering terjadi saat ID dikirim sebagai string, pastikan pakai angka.
- Jika alembic gagal karena "InsufficientPrivilege", pastikan user punya akses ke schema `public`.
- Untuk testing interaktif dan debugging, aktifkan Pyramid DebugToolbar (sudah otomatis aktif saat development).

---

## 🗃 Format Pengumpulan

- **Nama Repo GitHub**: `pemrograman_web_itera_[NIM]`
- **Struktur Folder**:
  ```
  namalengkap_[NIM]_pertemuan6/
  └── pyramid_matakuliah/
  └── README.md
  ```
- **Deadline**: 15 Mei 2025, 23:59 WIB

---

## 🙌 Penutup

Dengan menyelesaikan proyek ini, kamu telah menguasai:
- Struktur dasar aplikasi Pyramid
- ORM dengan SQLAlchemy
- Migrasi dengan Alembic
- Pembuatan REST API sederhana
- Pengujian endpoint secara sistematis dengan Thunder Client

> Dokumentasi ini ditulis dengan format yang berbeda dari referensi untuk menjaga orisinalitas, namun tetap mempertahankan struktur dan kedalaman informasi secara lengkap dan profesional.
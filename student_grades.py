# Program Pengelolaan Data Nilai Mahasiswa

print("PROGRAM PENGELOLAAN DATA NILAI MAHASISWA")
print("=" * 50)
print("\n")

# Data mahasiswa
mahasiswa = [
    {"nama": "Andi", "nim": "12345", "nilai_uts": 38, "nilai_uas": 32, "nilai_tugas": 26},
    {"nama": "Budi", "nim": "12346", "nilai_uts": 70, "nilai_uas": 75, "nilai_tugas": 72},
    {"nama": "Citra", "nim": "12347", "nilai_uts": 60, "nilai_uas": 65, "nilai_tugas": 68},
    {"nama": "Alief", "nim": "12348", "nilai_uts": 45, "nilai_uas": 52, "nilai_tugas": 58},
    {"nama": "Jedoy", "nim": "12349", "nilai_uts": 92, "nilai_uas": 86, "nilai_tugas": 97}
]

# Menghitung nilai akhir dan grade
for mhs in mahasiswa:
    nilai_akhir = (0.3 * mhs["nilai_uts"]) + (0.4 * mhs["nilai_uas"]) + (0.3 * mhs["nilai_tugas"])
    mhs["nilai_akhir"] = nilai_akhir

    if nilai_akhir >= 80:
        mhs["grade"] = "A"
    elif nilai_akhir >= 70:
        mhs["grade"] = "B"
    elif nilai_akhir >= 60:
        mhs["grade"] = "C"
    elif nilai_akhir >= 50:
        mhs["grade"] = "D"
    else:
        mhs["grade"] = "E"

# Menampilkan tabel data
print("=" * 80)
print("Data Mahasiswa ")
print("=" * 80)
print("{:<10} {:<10} {:<10} {:<10} {:<10} {:<15} {:<6}".format(
    "Nama", "NIM", "UTS", "UAS", "Tugas", "Nilai Akhir", "Grade"))
for mhs in mahasiswa:
    print("{:<10} {:<10} {:<10} {:<10} {:<10} {:<15.2f} {:<6}".format(
        mhs["nama"], mhs["nim"], mhs["nilai_uts"], mhs["nilai_uas"], mhs["nilai_tugas"],
        mhs["nilai_akhir"], mhs["grade"]
    ))

# Cari mahasiswa dengan nilai tertinggi dan terendah
tertinggi = max(mahasiswa, key=lambda x: x["nilai_akhir"])
terendah = min(mahasiswa, key=lambda x: x["nilai_akhir"])

print("\nMahasiswa dengan Nilai Tertinggi:")
print(f"{tertinggi['nama']} (NIM: {tertinggi['nim']}) - Nilai Akhir: {tertinggi['nilai_akhir']:.2f}")

print("\nMahasiswa dengan Nilai Terendah:")
print(f"{terendah['nama']} (NIM: {terendah['nim']}) - Nilai Akhir: {terendah['nilai_akhir']:.2f}")
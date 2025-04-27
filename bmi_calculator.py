# Program Penghitung BMI

print("PROGRAM PENGHITUNG BMI")
print("=" * 30)

# Input berat badan (dalam kg) dan tinggi badan (dalam cm)
berat = float(input("Masukkan berat badan Anda (kg): "))
tinggi_cm = float(input("Masukkan tinggi badan Anda (cm): "))

# Konversi tinggi dari cm ke meter
tinggi = tinggi_cm / 100

# Hitung BMI
bmi = berat / (tinggi * tinggi)

# Tentukan kategori BMI
if bmi < 18.5:
    kategori = "Berat badan kurang"
elif bmi < 25:
    kategori = "Berat badan normal"
elif bmi < 30:
    kategori = "Berat badan berlebih"
else:
    kategori = "Obesitas"

# Tampilkan hasil
print("\nHasil Perhitungan:")
print("=" * 30)
print(f"Berat Badan : {berat} kg")
print(f"Tinggi Badan: {tinggi:.2f} m ({tinggi_cm} cm)")
print(f"BMI Anda    : {bmi:.2f}")
print(f"Kategori    : {kategori}")

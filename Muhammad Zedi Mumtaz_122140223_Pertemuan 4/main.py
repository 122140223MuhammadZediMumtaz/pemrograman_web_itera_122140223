# main.py

print("="*40)
print("PROGRAM OPERASI MATEMATIKA")
print("="*40)

# Cara 1: Mengimpor seluruh modul
import math_operations

# Cara 2: Mengimpor fungsi spesifik
from math_operations import luas_persegi, celsius_ke_kelvin

# Menggunakan fungsi dari modul
print("\n--- Perhitungan Geometri ---")
print(f"Luas Persegi (sisi = 4): {luas_persegi(4)}")
print(f"Keliling Persegi (sisi = 4): {math_operations.keliling_persegi(4)}")

print(f"Luas Persegi Panjang (p = 5, l = 3): {math_operations.luas_persegi_panjang(5,3)}")
print(f"Keliling Persegi Panjang (p = 5, l = 3): {math_operations.keliling_persegi_panjang(5,3)}")

print(f"Luas Lingkaran (r = 7): {math_operations.luas_lingkaran(7):.2f}")
print(f"Keliling Lingkaran (r = 7): {math_operations.keliling_lingkaran(7):.2f}")

print("\n--- Konversi Suhu ---")
print(f"25°C dalam Fahrenheit: {math_operations.celsius_ke_fahrenheit(25):.2f}°F")
print(f"25°C dalam Kelvin (menggunakan import fungsi langsung): {celsius_ke_kelvin(25):.2f} K")
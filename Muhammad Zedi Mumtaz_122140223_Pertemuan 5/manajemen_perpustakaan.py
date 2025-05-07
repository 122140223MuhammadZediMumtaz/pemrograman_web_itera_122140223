from abc import ABC, abstractmethod

class LibraryItem(ABC):
    def __init__(self, title, item_id):
        self._title = title
        self._item_id = item_id

    @abstractmethod
    def display_info(self):
        pass
    
    @property
    def title(self):
        return self._title
    
    @title.setter
    def title(self, value):
        self._title = value

    @property
    def item_id(self):
        return self._item_id


class Book(LibraryItem):
    def __init__(self, title, item_id, author, genre):
        super().__init__(title, item_id)
        self._author = author
        self._genre = genre

    def display_info(self):
        return [self.title, self.item_id, self._author, self._genre, "Book"]


class Magazine(LibraryItem):
    def __init__(self, title, item_id, publisher, issue_number):
        super().__init__(title, item_id)
        self._publisher = publisher
        self._issue_number = issue_number

    def display_info(self):
        return [self.title, self.item_id, self._publisher, self._issue_number, "Magazine"]


class Library:
    def __init__(self):
        self._items = []

    def add_item(self, item):
        self._items.append(item)

    def display_items(self):
        if not self._items:
            return "No items in the library."
        
        table = f"{'Title':<30} {'Item ID':<10} {'Author/Publisher':<20} {'Genre/Issue':<15} {'Type':<10}\n"
        table += "=" * 90 + "\n"
        
        for item in self._items:
            table += f"{item.title:<30} {item.item_id:<10} {item.display_info()[2]:<20} {item.display_info()[3]:<15} {item.display_info()[4]:<10}\n"
        
        return table

    def search_item(self, search_query):
        results = [item.display_info() for item in self._items if search_query.lower() in item.title.lower() or search_query.lower() in str(item.item_id).lower()]
        if not results:
            return "No items found."
        
        table = f"{'Title':<20} {'Item ID':<10} {'Author/Publisher':<20} {'Genre/Issue':<15} {'Type':<10}\n"
        table += "-" * 75 + "\n"
        
        for result in results:
            table += f"{result[0]:<20} {result[1]:<10} {result[2]:<20} {result[3]:<15} {result[4]:<10}\n"
        
        return table


def add_new_item(library):
    print("\nTambah Item Baru:")
    item_type = input("Masukkan tipe item (book/magazine): ").strip().lower()
    title = input("Masukkan judul item: ").strip()
    item_id = input("Masukkan ID item: ").strip()

    if item_type == 'book':
        author = input("Masukkan nama pengarang: ").strip()
        genre = input("Masukkan genre buku: ").strip()
        new_item = Book(title, item_id, author, genre)
    elif item_type == 'magazine':
        publisher = input("Masukkan nama penerbit: ").strip()
        issue_number = input("Masukkan nomor edisi: ").strip()
        new_item = Magazine(title, item_id, publisher, issue_number)
    else:
        print("Tipe item tidak dikenal. Item tidak ditambahkan.")
        return

    library.add_item(new_item)
    print("Item berhasil ditambahkan.")


def search_item_by_user(library):
    search_query = input("\nMasukkan judul atau ID item yang dicari: ").strip()
    print(library.search_item(search_query))


if __name__ == "__main__":
    library = Library()

    while True:
        print("\nMenu Perpustakaan:")
        print("1. Tambah item baru")
        print("2. Tampilkan semua item")
        print("3. Cari item")
        print("4. Keluar")

        choice = input("Pilih opsi (1/2/3/4): ").strip()

        if choice == '1':
            add_new_item(library)
        elif choice == '2':
            print("\nDaftar Item di Perpustakaan:")
            print(library.display_items())
        elif choice == '3':
            search_item_by_user(library)
        elif choice == '4':
            print("Keluar dari program.")
            break
        else:
            print("Pilihan tidak valid, coba lagi.")
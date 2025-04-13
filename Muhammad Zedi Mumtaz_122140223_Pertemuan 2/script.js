// Class DashboardItem menggunakan ES6+
class DashboardItem {
    constructor(text) {
      this.id = Date.now();
      this.text = text;
      this.completed = false;
    }
}

// Ambil data dari localStorage
const loadItems = (key) => {
  const items = localStorage.getItem(key);
  return items ? JSON.parse(items) : [];
};

// Simpan data ke localStorage
const saveItems = (key, items) => {
  localStorage.setItem(key, JSON.stringify(items));
};

// Render ulang list
const renderList = (listElement, items, key) => {
  listElement.innerHTML = '';
  items.forEach(item => {
    const li = createListItem(item, items, key, listElement);
    listElement.appendChild(li);
  });
};

// Buat elemen <li> baru
const createListItem = (item, items, key, listElement) => {
  const li = document.createElement('li');
  if (item.completed) li.classList.add('completed');

  li.innerHTML = `
    <span>${item.text}</span>
    <button class="delete-btn">Hapus</button>
    <button class="done-btn">${item.completed ? 'Batal' : 'Selesai'}</button>
  `;

  li.querySelector('.delete-btn').addEventListener('click', () => {
    const index = items.findIndex(i => i.id === item.id);
    if (index !== -1) {
      items.splice(index, 1);
      saveItems(key, items);
      renderList(listElement, items, key);
    }
  });

  li.querySelector('.done-btn').addEventListener('click', () => {
    item.completed = !item.completed;
    saveItems(key, items);
    renderList(listElement, items, key);
  });

  return li;
};

// Tambah item baru
const addItem = (input, items, key, listElement) => {
  const text = input.value.trim();
  if (text === '') return;

  const newItem = new DashboardItem(text);
  items.push(newItem);
  saveItems(key, items);
  renderList(listElement, items, key);
  input.value = '';
};

// Main
const scheduleKey = 'scheduleItems';
const taskKey = 'taskItems';

const scheduleItems = loadItems(scheduleKey);
const taskItems = loadItems(taskKey);

const scheduleInput = document.getElementById('scheduleInput');
const taskInput = document.getElementById('taskInput');
const scheduleList = document.getElementById('scheduleList');
const taskList = document.getElementById('taskList');

document.getElementById('addSchedule').addEventListener('click', () =>
  addItem(scheduleInput, scheduleItems, scheduleKey, scheduleList)
);

document.getElementById('addTask').addEventListener('click', () =>
  addItem(taskInput, taskItems, taskKey, taskList)
);

// Render awal
renderList(scheduleList, scheduleItems, scheduleKey);
renderList(taskList, taskItems, taskKey);
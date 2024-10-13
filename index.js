
const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

// Функция для выдачи посылки
function giveParcel() {
    // Проверяем, есть ли люди в очереди
    if (peopleWaiting.length > 0) {
        // Удаляем первого человека из очереди (Кристина или Олег)
        const person = peopleWaiting.shift();
        // Выводим сообщение о том, что человек получил посылку
        alert(`${person} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`);
    }
}

// Функция для удаления человека, который не получил посылку
function leaveQueueWithoutParcel() {
    // Проверяем, есть ли люди в очереди
    if (peopleWaiting.length > 0) {
        // Удаляем последнего человека (по сути — Кирилла)
        const person = peopleWaiting.shift();
        // Выводим сообщение о том, что человек ушел из очереди без посылки
        alert(`${person} не получил(а) посылку и ушел(ла) из очереди.`);
    }
}
// Кристина и Олег получили посылки
giveParcel(); // Удаляет Кристину из очереди
giveParcel(); // Удаляет Олега из очереди

// Приходит очередь к Кириллу
leaveQueueWithoutParcel(); 
leaveQueueWithoutParcel(); 
leaveQueueWithoutParcel(); 
leaveQueueWithoutParcel(); 
leaveQueueWithoutParcel(); 

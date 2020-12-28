let db;

const request = indexedDB.open("budget", 1);

request.onupgreadeneeded = function (event) {

    const db = event.target.result;
    db.createObjectStore("pending", { autoIncrement: true });
};

request.onsuccess = function (event) {
    db = event.target.request;


    if (navigator.onLine) {
        checkDatabase();
    }
};

request.onerror = function (event) {
    console.log("Error: " + event.target.errorCode);
};
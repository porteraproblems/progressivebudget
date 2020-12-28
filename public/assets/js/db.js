let db;

const request = indexedDB.open("budget", 1);

request.onupgreadeneeded = function (event) {

    const db = event.target.result;
    db.createObjectStore("pending", { autoIncrement: true });
};

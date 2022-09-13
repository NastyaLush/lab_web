import {initializeApp} from "firebase/app";
import {getDatabase, ref, onChildAdded} from "firebase/database";
import * as constants from "./utilConstants";
export function createTable(firebaseConfig) {
    initializeApp(firebaseConfig);
    const database = getDatabase();
    const reference = ref(database);

    onChildAdded(reference, (childSnapshot) => {
        AddToTheTAble(childSnapshot.val());
    });

    function AddToTheTAble(data) {
        const x = data.X;
        const y = data.Y;
        const r = data.R;
        const result = data.Result;
        const dateTime = data.Date.toLocaleString();

        const row = "<div  class='cell'>" + x + "</div>"
            + "<div class='cell'>" + y + "</div>"
            + "<div class='cell'>" + r + "</div>"
            + "<div class='cell'>" + result + "</div>"
            + "<div class='cell'>" + dateTime + "</div>";
        const table = document.getElementById(constants.headTable);

        const el = document.createElement(constants.div);
        el.classList.add(constants.row);
        el.classList.add(constants.classNew);
        el.innerHTML = row;
        insertAfter(table, el);
        return el;

        function insertAfter(referenceNode, newNode) {
            referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }
    }
}
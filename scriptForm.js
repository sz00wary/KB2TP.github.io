function campaddjs()
        {
            let camprolesjs = document.getElementsByName("camprole");
            let camprolejsselected = "";
            for (i=0; i<camprolesjs.length; i++)
            {
                if (camprolesjs[i].checked)
                {
                    camprolejsselected = (camprolesjs[i].value);
                }
            }
            let campnazwajs = document.querySelector("#campnazwa").value;
            let campsysjs = document.querySelector("#campsys").value;
            let campdatejs = document.querySelector("#campdate").value;
            let camptimejs = document.querySelector("#camptime").value;
            let campaijs = document.querySelector("#campai").value;
            let notestring = ("Sesja z kampanii " + campnazwajs + " w systemie " + campsysjs + " odbędzie się " + campdatejs + " o godzinie " + camptimejs + ". Pojawisz się jako " + camprolejsselected + ". Dodatkowe informacje: " + campaijs);
            console.log(notestring);
            let campnote = document.createElement("section");
            campnote.style="background-color: white; width: 30%; text-align: justify content; padding: 5px; margin-left: 130px; margin-bottom: 10px; border-radius: 12px; float: left; border: 2px solid var(--c1)";
            campnote.innerHTML=notestring;
            let campplace = document.querySelector("#przesCampNotes");
            campplace.appendChild(campnote);

        }
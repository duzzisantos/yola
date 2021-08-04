window.onload = function () {
    const selectInfo = document.getElementById("selectInfo");
    const first = document.getElementById("firstContent");
    const display1 = document.getElementById("displayPage");
    const reQuests = document.getElementById("requests");
    const fourth = document.getElementById("fourthContent");
    const display2 = document.getElementById("displayPage2");
    const leave = document.getElementById("leave");
    const expenses = document.getElementById("expenses");
    const appointMent = document.getElementById("appointment");
    const button = document.getElementById("displayButton");

    //SCRIPT FOR THE FIRST DROPDOWN MENU
    selectInfo.onchange = function () {
        if (selectInfo.selectedIndex === 0) {
            first.style.height = "90px";
            display1.style.display = "none";
        } else if (selectInfo.selectedIndex === 1) {
            first.style.height = "270px";
            display1.style.display = "block";
            display1.innerHTML = "<br><li><b>Employee</b>: Daniel Kalu</li> <li><b>Employee ID</b>: ZZ419</li> <li><b>Department</b>: IT</li> <li><b>Position</b>: IT Project Lead</li> <li><b>Birthday</b>: 23.11.1983</li> <li><b>Date of employment</b>: 28.3.2018</li> <li><b>Date of next promotion exam</b>: 11.07.2022</li> <li><b>Insurance number</b>: XXZZYY1234</li><br> ";
        } else if (selectInfo.selectedIndex === 2) {
            first.style.height = "270px";
            display1.style.display = "block";
            display1.innerHTML = "<br><li><b>First supervisor</b>:  Jannelle Okereke, IT Project Manager.</li> <li><b>Second supervisor</b>:  Sam Traore, Assistant IT Project Manager.</li><br>";
        } else if (selectInfo.selectedIndex === 3) {
            first.style.height = "270px";
            display1.style.display = "block";
            display1.innerHTML = "<li><b>CRM migration project</b>: Due 03.10.2021</li> <li><b>Security audit project</b>: Due 31.10.2021</li> <li><b>Antivirus roll-out</b>: Due 12.10.2021";
        } else if (selectInfo.selectedIndex === 4) {
            first.style.height = "270px";
            display1.style.display = "block";
            display1.innerHTML = "<li><b>Q1 2021 combined:</b> <a href='https://google.com'>download here</a> </li> <li><b>Q2 2021 combined:</b> <a href='https://google.com'>download here</a></li> <li><b>Q3 2021 combined:</b> <a href='https://google.com'>download here</a></li>";
        }
    }

    //SCRIPT FOR THE SECOND DROPDOWN MENU
    reQuests.onchange = function () {
        if (reQuests.selectedIndex === 0) {
            fourth.style.height = "90px";
            display2.style.display = "none";
        } else if (reQuests.selectedIndex === 1) {
            fourth.style.height = "270px";
            display2.style.display = "block";
            leave.style.display = "block";
            expenses.style.display = "none"; 
            //without setting the other form displays to none, they will actually display partially.
            appointMent.style.display = "none";

        } else if (reQuests.selectedIndex === 2) {
            fourth.style.height = "270px";
            display2.style.display = "block";
            expenses.style.display = "block";
            leave.style.display = "none";
            appointMent.style.display = "none";
        } else if (reQuests.selectedIndex === 3) {
            fourth.style.height = "270px";
            display2.style.display = "block";
            appointMent.style.display = "block";
            expenses.style.display = "none";
            leave.style.display = "none";
        }
    }
}

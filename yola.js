const btn1 = document.getElementById('btnA');
const btn2 = document.getElementById('btnB');
const btn3 = document.getElementById('btnC');
const btn4 = document.getElementById('btnD');


const admin = document.getElementById("admin");
const finance = document.getElementById("finance");
const infoTech = document.getElementById("it");
const ops = document.getElementById("ops");


function displayAdmin() {
    btn1.addEventListener('click', () => {
        admin.style.display = 'block';
        finance.style.display = 'none';
        infoTech.style.display = 'none';
        ops.style.display = 'none';
        btn1.style.backgroundColor = '#A13D63';
        btn1.style.color = 'white';
        btn2.style.backgroundColor = 'rgb(233, 230, 230)';
        btn2.style.color = '#A13D63';
        btn3.style.backgroundColor = 'rgb(233, 230, 230)';
        btn3.style.color = '#A13D63';
        btn4.style.backgroundColor = 'rgb(233, 230, 230)';
        btn4.style.color = '#A13D63';
    });
}

function displayFinance() {
    btn2.addEventListener('click', () => {
        admin.style.display = 'none';
        finance.style.display = 'block';
        infoTech.style.display = 'none';
        ops.style.display = 'none';

        btn1.style.backgroundColor = 'rgb(233, 230, 230)';
        btn1.style.color = '#A13D63';
        btn2.style.backgroundColor = '#A13D63';
        btn2.style.color = 'white';
        btn3.style.backgroundColor = 'rgb(233, 230, 230)';
        btn3.style.color = '#A13D63';
        btn4.style.backgroundColor = 'rgb(233, 230, 230)';
        btn4.style.color = '#A13D63';
    });
}

function displayIT() {
    btn3.addEventListener('click', () => {
        admin.style.display = 'none';
        finance.style.display = 'none';
        infoTech.style.display = 'block';
        ops.style.display = 'none';

        btn1.style.backgroundColor = 'rgb(233, 230, 230)';
        btn1.style.color = '#A13D63';
        btn2.style.backgroundColor = 'rgb(233, 230, 230)';
        btn2.style.color = '#A13D63';
        btn3.style.backgroundColor = '#A13D63';
        btn3.style.color = 'white';
        btn4.style.backgroundColor = 'rgb(233, 230, 230)';
        btn4.style.color = '#A13D63';
    });
}

function displayOPS() {
    btn4.addEventListener('click', () => {
        admin.style.display = 'none';
        finance.style.display = 'none';
        infoTech.style.display = 'none';
        ops.style.display = 'block';

        btn1.style.backgroundColor = 'rgb(233, 230, 230)';
        btn1.style.color = '#A13D63';
        btn2.style.backgroundColor = 'rgb(233, 230, 230)';
        btn2.style.color = '#A13D63';
        btn3.style.backgroundColor = 'rgb(233, 230, 230)';
        btn3.style.color = '#A13D63';
        btn4.style.backgroundColor = '#A13D63';
        btn4.style.color = 'white';
    });
}

function nameChange() {
    const firstName = new Array('Jane', 'Gill', 'Eugenia', 'Mary', 'Martha', 'Jemimah', 'Susan', 'Sandra', 'Fanny', 'Karen', 'Louisa', 'Hannah', 'Miley', 'Tracy', 'Miranda', 'Lana', 'Amy', 'Amelia', 'Sarah', 'Ingrid', 'Gretchen', 'Minah', 'Kerry', 'Terry', 'Alexa', 'Fiona', 'Ursula', 'Anne', 'Lisa', 'Cassie');
    const lastName = new Array('Walsh', 'Werner', 'Lawrence', 'Walton', 'Philips', 'Coady', 'Collins', 'Harper', 'Chester', 'Paulsen', 'Johanssen', 'Johnson', 'James', 'Powell', 'Kelly', 'Kennedy', 'Samson', 'Fauci', 'Giovanni', 'Frost', 'Snowden');

    const randFirst = Math.floor(Math.random() * firstName.length);
    const randLast = Math.floor(Math.random() * lastName.length);

    return `${firstName[randFirst]} ${lastName[randLast]}`;
}

function nameStaff() {
    const staff = document.querySelectorAll('p');
    for (let staffer of staff) {
        staffer.innerHTML = nameChange();
        staffer.style.color = 'whitesmoke';
        staffer.style.textAlign = 'center';
    }
}

nameStaff();
// nameChange();


// function randPicture() {
//     const staffImage = new Array('hrpics/fin1.png', 'hrpics/fin2.png', 'hrpics/fin3.png');
//     const randomStaffImage = Math.floor(Math.random() * staffImage.length);

//     return `${staffImage[randomStaffImage]}`;
// }

// function pictureChange() {
//     const adminStaff = document.querySelectorAll("#adminStaff");
//     for (let admins of adminStaff) {
//         admins.style.backgroundImage = randPicture();
//     }
//     const finStaff = document.querySelectorAll("#finStaff");
//     for (let finance of finStaff) {
//         finance.style.backgroundImage = randPicture();
//     }
//     const itStaff = document.querySelectorAll("#itStaff");
//     for (let infoTechs of itStaff) {
//         infoTechs.style.backgroundImage = randPicture();
//     }
//     const opStaff = document.querySelectorAll("#opStaff");
//     for (let operations of opStaff) {
//         operations.style.backgroundImage = randPicture();
//     }
// }

// pictureChange();
// // randPicture();
"use strict";
window.addEventListener('load', () => {
    let name = localStorage.getItem("name");
    let desig = localStorage.getItem("desig");
    let phone = localStorage.getItem("phone");
    let email = localStorage.getItem("email");
    let add = localStorage.getItem("add");
    let pass1 = localStorage.getItem("pass1");
    let deg1 = localStorage.getItem("deg1");
    let uni1 = localStorage.getItem("uni1");
    let pass2 = localStorage.getItem("pass2");
    let deg2 = localStorage.getItem("deg2");
    let uni2 = localStorage.getItem("uni2");
    let skill1 = localStorage.getItem("skill1");
    let skill2 = localStorage.getItem("skill2");
    let skill3 = localStorage.getItem("skill3");
    let lang1 = localStorage.getItem("lang1");
    let lang2 = localStorage.getItem("lang2");
    let styear = localStorage.getItem("styear");
    let endyear = localStorage.getItem("endyear");
    let company = localStorage.getItem("company");
    let comlocation = localStorage.getItem("comlocation");
    let jobtilte = localStorage.getItem("jobtilte");
    let achv1 = localStorage.getItem("achv1");
    let achv2 = localStorage.getItem("achv2");
    let achv3 = localStorage.getItem("achv3");
    let picture = localStorage.getItem("profile_pic");
    let resName = document.getElementById('resName');
    resName.textContent = name;
    let resDisg = document.getElementById('resDisg');
    resDisg.textContent = desig;
    let resPhone = document.getElementById('resPhone');
    resPhone.textContent = phone;
    let resEmail = document.getElementById('resEmail');
    resEmail.textContent = email;
    let resAdd = document.getElementById('resAdd');
    resAdd.textContent = add;
    let resPass1 = document.getElementById('resPass1');
    resPass1.textContent = pass1;
    let resDeg1 = document.getElementById('resDeg1');
    resDeg1.textContent = deg1;
    let resUni1 = document.getElementById('resUni1');
    resUni1.textContent = uni1;
    let respass2 = document.getElementById('respass2');
    respass2.textContent = pass2;
    let resDeg2 = document.getElementById('resDeg2');
    resDeg2.textContent = deg2;
    let resUni2 = document.getElementById('resUni2');
    resUni2.textContent = uni2;
    let resSkill1 = document.getElementById('resSkill1');
    resSkill1.textContent = skill1;
    let resSkill2 = document.getElementById('resSkill2');
    resSkill2.textContent = skill2;
    let resSkill3 = document.getElementById('resSkill3');
    resSkill3.textContent = skill3;
    let resLang1 = document.getElementById('resLang1');
    resLang1.textContent = lang1;
    let resLang2 = document.getElementById('resLang2');
    resLang2.textContent = lang2;
    let resStYear = document.getElementById('resStYear');
    resStYear.textContent = styear;
    let resEndYear = document.getElementById('resEndYear');
    resEndYear.textContent = endyear;
    let resCompany = document.getElementById('resCompany');
    resCompany.textContent = company;
    let resComLocation = document.getElementById('resComLocation');
    resComLocation.textContent = comlocation;
    let resJobTitle = document.getElementById('resJobTitle');
    resJobTitle.textContent = jobtilte;
    let resAch1 = document.getElementById('resAch1');
    resAch1.textContent = achv1;
    let resAch2 = document.getElementById('resAch2');
    resAch2.textContent = achv2;
    let resAch3 = document.getElementById('resAch3');
    resAch3.textContent = achv3;
    let resImg = document.getElementById('resImg');
    resImg.src = picture;
});
//------------- Print Button ------------------------//
let printBtn = document.getElementById('printBtn');
printBtn?.addEventListener('click', () => {
    window.print();
});

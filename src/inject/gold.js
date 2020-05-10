function RMPSearch(lastName) {
    window.open(
        "https://www.ratemyprofessors.com/search.jsp?queryoption=HEADER&queryBy=teacherName&schoolName=University+of+California+Santa+Barbara&schoolID=1077&query=" + lastName, "_blank");
}

if (document.URL.includes("gold")) {
    var instDivs = document.getElementsByClassName("col-sm-search-instructor");

    for (var i = 0; i < instDivs.length; i++) {
        var name = instDivs[i].children[1].innerText;
        var lastName = name.split(" ")[0];
        if (lastName === "T.B.A.") {
            continue;
        }
        var rmpLink = document.createElement("A");
        rmpLink.innerText = name;
        rmpLink.href = "https://www.ratemyprofessors.com/search.jsp?queryoption=HEADER&queryBy=teacherName&schoolName=University+of+California+Santa+Barbara&schoolID=1077&query=" + lastName;
        rmpLink.target = "_blank";
        instDivs[i].removeChild(instDivs[i].children[1]);
        instDivs[i].appendChild(rmpLink);
    }
}
if (document.URL.includes("github")) {
	var marketplaceDiv = document.querySelectorAll("a[href='/marketplace']")[0];
	var exploreDiv = document.querySelectorAll("a[href='/explore']")[0];
	if (marketplaceDiv != null) {
		marketplaceDiv.textContent = "DrDocx";
		marketplaceDiv.href = "/DrDocx";
	}
	if (exploreDiv != null) {
		exploreDiv.textContent = "Linker";
		exploreDiv.href = "/project-anacapa/anacapa-github-linker";
		var amtabDiv = exploreDiv.cloneNode();
		amtabDiv.textContent = "AMTab";
		amtabDiv.href = "/AMTabRoom/AMTab-Web";
		exploreDiv.parentElement.appendChild(amtabDiv);
	}
}

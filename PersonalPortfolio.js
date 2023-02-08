const tab_menu = document.getElementsByClassName("tab_menu");
const tab_contents = document.getElementsByClassName("tab_contents");

function openTab(cur, tabname) {
	for (menu of tab_menu) {
		menu.classList.remove("active_menu");
	}
	for (content of tab_contents) {
		content.classList.remove("active_tab");
	}
	cur.classList.add("active_menu");
	const selected_tab = document.getElementById(tabname);
	selected_tab.classList.add("active_tab");
}
///////////////////
console.log("script is running Good!!");

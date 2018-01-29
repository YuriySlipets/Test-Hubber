function changeTabRight() {
   var tabs = $("input[name='tabs']");
   var openedTab = $("input[name='tabs']:checked");
   var index = tabs.index(openedTab);

  tabs[index].checked = false;
  tabs[(index + 1) % tabs.length].checked = true;
};

function changeTabLeft() {
   var tabs = $("input[name='tabs']");
   var openedTab = $("input[name='tabs']:checked");
   var index = tabs.index(openedTab);

  tabs[index].checked = false;
  
  if (index === 0) {
  	index = tabs.length;
  }
  tabs[index - 1].checked = true;
};
function del(_element){
    var _parentElement = _element.parentNode;
    if(_parentElement){
           _parentElement.remove();
    }
}
function add(_element){
    var text = prompt("请输入新清单项目");
    var newli = document.createElement('li');
    var newbox = document.createElement('input');
    newbox.type = "checkbox";
    var newitem = document.createElement('span');
    newitem.innerHTML = text;
    var newbtn1 = document.createElement('button');
    newbtn1.id = "del";
    newbtn1.setAttribute('onclick','del(this)');
    newbtn1.innerHTML = "删除";
    var newbtn2 = document.createElement('button');
    newbtn2.id = "change";
    newbtn2.setAttribute('onclick','change(this)');
    newbtn2.innerHTML = "修改";
    newli.appendChild(newbox);
    newli.appendChild(newitem);
    newli.appendChild(newbtn2);
    newli.appendChild(newbtn1);
    var tarul = document.getElementsByTagName('ul')[0];
    tarul.appendChild(newli);
}
function change(_element){
    var text = prompt("请输入修改后的清单项目");
    var tar = _element.previousElementSibling;
    tar.innerHTML = text;
}
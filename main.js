/*数据名表：
list 指代整个数据表
addtext 供数据同步使用的文本信息
item 供遍历使用的list对象，只在html的{{}}中使用
title list对象的一个key 表示内容
isFin list对象的一个key 表示标注是否完成
isEditing list对象的一个key 表示标注是否正在编辑
edtext 供暂存修改的文本信息
*/
var app = new Vue({
    el: '.list',
    data: {
        list: [{title: 'example word01',isFin: true,isEditing: false},{title: 'example word02',isFin: false,isEditing: false}],
        addtext: '',
        edtext: ''
    },
    methods: {
        new_li(){
            if (this.addtext == '')
            {
                return;
            }  //如果空白键入，则直接退出
            this.list.push({
                title: this.addtext,
                isFin: false,
                isEditing: false
            });
            this.addtext = '';  //清空输入框
        },//已经可用 无E/W
        del_li(item){
            var del_index = this.list.indexOf(item);
            this.list.splice(del_index, 1);
        },//已经可用 无E/W
        edt_li(item){
            this.edtext = item.title;;
            item.isEditing = true;
        },//已经可用 无E/W
        finedt_li(item){
            item.title = this.edtext;
            this.edtext = '';
            item.isEditing = false;
        },//已经可用 无E/W
        cancedt_li(item){
            this.edtext = '';
            item.isEditing = false;
        }//已经可用 无E/W
    }
})
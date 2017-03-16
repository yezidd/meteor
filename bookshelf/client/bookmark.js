Template.bookmark.events({
    'click span.remove': function (e, tpl) {
        if (confirm("确定删除此标签吗?")) {
            var id = this._id;
            Bookmarks.remove({_id: id});
        }
    },
    'click span.edit': function (e, tpl) {
        Session.set('currentEditingId', this._id);
    },
    //这是修改确定的函数
    'submit form.form-edit': function (e, tpl) {
        e.preventDefault();

        //取得新的书签信息
        var id = this._id;
        var name = tpl.$('#bookmark_name_new').val();
        var url = tpl.$("#bookmark_url_new").val();
        Bookmarks.update({_id: id}, {$set: {name: name, url: url}}, function (err) {
            if (!err) {
                tpl.$('#bookmark_name_new').val('');
                tpl.$("#bookmark_url_new").val('');
            }
            Session.set('currentEditingId', null);
        })
    },
    //这是修改取消的函数
    'click .btn-cancel': function (e, tpl) {
        e.preventDefault();
        Session.set("currentEditingId", null);
    }
});
Template.bookmark.helpers({
    isEditing: function () {
        return (Session.get('currentEditingId') == this._id);
    }
})
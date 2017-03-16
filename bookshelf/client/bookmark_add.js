Template.bookmarkAdd.events({
        'submit form.form-add':function(e,tpl){
            e.preventDefault();

            var name= tpl.$('#bookmark_name').val();
            var url = tpl.$("#bookmark_url").val();
            Bookmarks.insert({name:name,url:url},function(err){
               if(!err){
                   tpl.$('#bookmark_name').val('');
                   tpl.$('#bookmark_url').val('');
               }
            });
        }
});
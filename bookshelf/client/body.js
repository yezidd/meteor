/**
 * Created by yzdd on 2017/3/16.
 */
Template.bookmarkList.helpers({
    bookmarks:function(){
        return Bookmarks.find();
    }
});
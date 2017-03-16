Router.configure({
    layoutTemplate:'layout'
});
Router.route('/',{name:'bookmarkList'});
Router.route('/add',{name:'bookmarkAdd'});
function hevent(e) {
    console.log(event);
}

var project_title1 = new Hammer(document.getElementsByTagName('h2')[0]);
var project_title2 = new Hammer(document.getElementsByTagName('h2')[1]);
var project_title3 = new Hammer(document.getElementsByTagName('h2')[2]);
var project_title4 = new Hammer(document.getElementsByTagName('h2')[3]);

project_title1.get('swipe').set({direction: Hammer.DIRECTION_LEFT, enable: true});
project_title2.get('swipe').set({direction: Hammer.DIRECTION_LEFT, enable: true});
project_title3.get('swipe').set({direction: Hammer.DIRECTION_LEFT, enable: true});
project_title4.get('swipe').set({direction: Hammer.DIRECTION_LEFT, enable: true});

project_title1.on('swipe', function (e)
{
    document.getElementsByTagName('h2')[0].focus();
});
project_title2.on('swipe', function (e)
{
    document.getElementsByTagName('h2')[1].focus();
});
project_title3.on('swipe', function (e)
{
    document.getElementsByTagName('h2')[2].focus();
});
project_title4.on('swipe', function (e)
{
    document.getElementsByTagName('h2')[3].focus();
});
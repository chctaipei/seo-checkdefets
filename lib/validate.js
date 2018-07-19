function hasAttr(attributes, attr)
{
    for (var j = 0; j < attributes.length; j++) {
        if (attributes[j].name == attr) {
             return true;
        }
    }
    return false;
}

// check if tag {element} has no {attr} attributes
// ex: checkElementAttr(document, 'img', 'alt')
exports.checkElementAttr = function(document, element, attr)
{
    var myNodeList = document.querySelectorAll(element);
    var notfound = 0;
    for (var i = 0; i < myNodeList.length; i++) {
        if (!hasAttr(myNodeList[i].attributes, attr)) {
            notfound++;
        }
    }

    return notfound;
}

// check if tag {element} has more than {count} elements 
// ex: checkElementCount(document, 'img', 20)
exports.checkElementCount = function(document, element, count)
{
    var myNodeList = document.querySelectorAll(element);
    if (myNodeList.length > count) {
        return false;
    }
    return true;
}

// check if title tag is exist
// ex: checkHeadTitle(document)
exports.checkHeadTitle = function(document)
{
    if (document.head.getElementsByTagName("title").length == 0) {
        return false;
    }
    return true;
}

// check if meta tag contains [{name}, {name2}...]
// ex: checkHeadMeta = function(document, ['aaa','bbb'])
exports.checkHeadMeta = function(document, meta)
{
    var notFound = [];
    meta.forEach(function(name) {
        var search = 'meta[name="' + name + '"]';
        var element = document.head.querySelector(search);
        if (element == null) {
            notFound.push(name);
        }
    });
    return notFound;
}

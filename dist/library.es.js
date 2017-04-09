var title = (function (document) {
  return document.title;
});

var index = (function (document) {
  return title(document);
});

export default index;

// const article = document.getElementById("article");
// if (article) {
//   const regex = /\b\w/g; // match for first letter of every word
//   article.textContent = article.textContent.replace(regex, "b");
// }
function replaceTextOnPage(to) {
  getAllTextNodes().forEach(function (node) {
    node.nodeValue = node.nodeValue.replace(new RegExp(/\b\w/, "g"), to);
  });

  function getAllTextNodes() {
    var result = [];

    (function scanSubTree(node) {
      if (node.childNodes.length)
        for (var i = 0; i < node.childNodes.length; i++)
          scanSubTree(node.childNodes[i]);
      else if (node.nodeType == Node.TEXT_NODE) result.push(node);
    })(document);

    return result;
  }
}
replaceTextOnPage("🅱️");

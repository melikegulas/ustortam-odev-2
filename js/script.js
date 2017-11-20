(function (global) {

  var bilmuh = {};

  var homeHtml = "snippet/jumbotron-snippet.html";
  var egitimUrl = "json/egitim.json";
  var egitimTitleHtml = "snippet/egitim-baslik-snippet.html";
  var egitimHtml = "snippet/egitim-snippet.html"

  document.addEventListener("DOMContentLoaded", function (event) {

    // On first load, show home view
    $ajaxUtils.sendGetRequest(
      homeHtml,
      function (responseText) {
        document.querySelector("#inner-content")
          .innerHTML = responseText;
      },
      false);
  });//sayfa ilk yüklendiğinde bilmuh fotosu gelmesi için bu yapıldı

  $("#menu-tile").click(function(event){
    event.preventDefault();
  });

  bilmuh.loadEgitim = function () {
    $ajaxUtils.sendGetRequest(
      egitimUrl/*egitim.json*/,
      buildAndShowEgitimHTML);

  };
  

  function buildAndShowEgitimHTML(egitim) {
    // Load title snippet of categories page
    $ajaxUtils.sendGetRequest(//baslığı çağır
      egitimTitleHtml,
      function (egitimTitleHtml) {
        // Retrieve single category snippet
        $ajaxUtils.sendGetRequest(//
          egitimHtml,
          function (egitimHtml) {
            // Switch CSS class active to menu button
            //switchMenuToActive();//anlamadım
            var categoriesViewHtml =buildCategoriesViewHtml(egitim,egitimTitleHtml,egitimHtml);
            insertHtml("#inner-content", categoriesViewHtml);
          },
          false);
      },
      false);
  }
  var insertHtml = function (selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  };

  function buildCategoriesViewHtml(categories, categoriesTitleHtml, categoryHtml) {

    var finalHtml = categoriesTitleHtml;
    finalHtml += "<section class='row'>";
    console.log(categories);
    // Loop over categories
    for (var i = 0; i < categories.length; i++) {
      // Insert category values
      var html = categoryHtml;
      var name = "" + categories[i].name;
      var foto = categories[i].foto;
      html = insertProperty(html, "name", name);
      html = insertProperty(html, "foto", foto);
      finalHtml += html;
    }
    finalHtml += "</section>";
    return finalHtml;
  }
  var insertProperty = function (string, propName, propValue) {
    var propToReplace = "{{" + propName + "}}";
    string = string
      .replace(new RegExp(propToReplace, "g"), propValue);
    return string;
  }//ne yaptığını anlamadım.






  global.$bilmuh = bilmuh;
})(window);
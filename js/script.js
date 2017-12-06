(function (global) {

  var bilmuh = {};

  var homeHtml = "snippet/jumbotron-snippet.html";
  var egitimUrl = "json/egitim.json";

  var personelUrl = "json/personel.json";

  var personelTitleHtml = "snippet/personel-baslik-snippet.html";
  var personelHtml = "snippet/personel-snippet.html";

  var personelIkiTitleHtml = "snippet/personeliki-baslik-snippet.html";
  var personelUcTitleHtml = "snippet/personeluc-baslik-snippet.html";
  var personelBirTitleHtml = "snippet/personelbir-baslik-snippet.html";
  var personellerHtml = "snippet/personelAkademik-snippet.html";

  var egitimTitleHtml = "snippet/egitim-baslik-snippet.html";
  var egitimHtml = "snippet/egitim-snippet.html"

  var donemTitleHtml = "snippet/donem-baslik-snippet.html"
  var donemHtml = "snippet/donem-snippet.html"

  var sinifTitleHtml = "snippet/sinif-baslik-snippet.html"
  var sinifLisansHtml = "snippet/sinif-lisans-snippet.html"

  var yukseklisansDersTitle = "snippet/ders-baslik-snippet.html"
  var yuksekLisansDersHtml = "snippet/ders-snippet.html"

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

  $("#menu-tile").click(function (event) {
    event.preventDefault();
  });

  bilmuh.loadPersoneltip = function () {
    $ajaxUtils.sendGetRequest(
      personelUrl/*egitim.json*/,
      buildAndShowPersonelHTML);
  };
  function buildAndShowPersonelHTML(personel) {
    // Load title snippet of categories page
    $ajaxUtils.sendGetRequest(//baslığı çağır
      personelTitleHtml,
      function (personelTitleHtml) {
        // Retrieve single category snippet
        $ajaxUtils.sendGetRequest(//
          personelHtml,
          function (personelHtml) {
            // Switch CSS class active to menu button
            //switchMenuToActive();//anlamadım
            var categoriesViewHtml = buildPersonelViewHtml(personel, personelTitleHtml, personelHtml);
            insertHtml("#inner-content", categoriesViewHtml);
          },
          false);
      },
      false);
  };

  function buildPersonelViewHtml(categories, categoriesTitleHtml, categoryHtml) {

    var finalHtml = categoriesTitleHtml;
    finalHtml += "<section class='row'>";
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
  };

  bilmuh.loadPersonel = function (name) {
    if (name == "Ogretim Uyeleri") {
      $ajaxUtils.sendGetRequest(
        personelUrl/*egitim.json*/,
        buildAndShowPersonelOgretimHTML);
    } else if (name == "Akademik Yardimci") {
      $ajaxUtils.sendGetRequest(
        personelUrl/*egitim.json*/,
        buildAndShowPersonelAkademikHTML);
    } else if (name == "Idari Teknik") {
      $ajaxUtils.sendGetRequest(
        personelUrl/*egitim.json*/,
        buildAndShowPersonelIdariHTML);
    }

  };
  function buildAndShowPersonelOgretimHTML(personel) {
    // Load title snippet of categories page
    $ajaxUtils.sendGetRequest(//baslığı çağır
      personelBirTitleHtml,
      function (personelBirTitleHtml) {
        // Retrieve single category snippet
        $ajaxUtils.sendGetRequest(//
          personellerHtml,
          function (personellerHtml) {
            // Switch CSS class active to menu button
            //switchMenuToActive();//anlamadım
            var categoriesViewHtml = buildPersonelBirViewHtml(personel, personelBirTitleHtml, personellerHtml);
            insertHtml("#inner-content", categoriesViewHtml);
          },
          false);
      },
      false);
  };
  function buildPersonelBirViewHtml(categories, categoriesTitleHtml, categoryHtml) {

    var finalHtml = categoriesTitleHtml;
    finalHtml += "<section class='row'>";
    var personel = categories[0].personeller;
    // Loop over categories
    for (var i = 0; i < personel.length; i++) {
      // Insert category values
      var html = categoryHtml;
      var name = "" + personel[i].name;
      var foto = personel[i].foto;
      var job = personel[i].job;
      var phone = personel[i].phone;
      var email = personel[i].email;
      html = insertProperty(html, "name", name);
      html = insertProperty(html, "foto", foto);
      html = insertProperty(html, "phone", phone);
      html = insertProperty(html, "job", job);
      html = insertProperty(html, "email", email);
      finalHtml += html;
    }
    finalHtml += "</section>";
    return finalHtml;
  };
  function buildAndShowPersonelAkademikHTML(personel) {
    // Load title snippet of categories page
    $ajaxUtils.sendGetRequest(//baslığı çağır
      personelIkiTitleHtml,
      function (personelIkiTitleHtml) {
        // Retrieve single category snippet
        $ajaxUtils.sendGetRequest(//
          personellerHtml,
          function (personellerHtml) {
            // Switch CSS class active to menu button
            //switchMenuToActive();//anlamadım
            var categoriesViewHtml = buildPersonelikiViewHtml(personel, personelIkiTitleHtml, personellerHtml);
            insertHtml("#inner-content", categoriesViewHtml);
          },
          false);
      },
      false);
  };
  function buildPersonelikiViewHtml(categories, categoriesTitleHtml, categoryHtml) {

    var finalHtml = categoriesTitleHtml;
    finalHtml += "<section class='row'>";
    var personel = categories[1].personeller;
    // Loop over categories
    for (var i = 0; i < personel.length; i++) {
      // Insert category values
      var html = categoryHtml;
      var name = "" + personel[i].name;
      var foto = personel[i].foto;
      var job = personel[i].job;
      var phone = personel[i].phone;
      var email = personel[i].email;
      html = insertProperty(html, "name", name);
      html = insertProperty(html, "foto", foto);
      html = insertProperty(html, "phone", phone);
      html = insertProperty(html, "job", job);
      html = insertProperty(html, "email", email);
      finalHtml += html;
    }
    finalHtml += "</section>";
    return finalHtml;
  };
  function buildAndShowPersonelIdariHTML(personel) {
    // Load title snippet of categories page
    $ajaxUtils.sendGetRequest(//baslığı çağır
      personelUcTitleHtml,
      function (personelUcTitleHtml) {
        // Retrieve single category snippet
        $ajaxUtils.sendGetRequest(//
          personellerHtml,
          function (personellerHtml) {
            // Switch CSS class active to menu button
            //switchMenuToActive();//anlamadım
            var categoriesViewHtml = buildPersonelucViewHtml(personel, personelUcTitleHtml, personellerHtml);
            insertHtml("#inner-content", categoriesViewHtml);
          },
          false);
      },
      false);
  };
  function buildPersonelucViewHtml(categories, categoriesTitleHtml, categoryHtml) {

    var finalHtml = categoriesTitleHtml;
    finalHtml += "<section class='row'>";
    var personel = categories[2].personeller;
    // Loop over categories
    for (var i = 0; i < personel.length; i++) {
      // Insert category values
      var html = categoryHtml;
      var name = "" + personel[i].name;
      var foto = personel[i].foto;
      var job = personel[i].job;
      var phone = personel[i].phone;
      var email = personel[i].email;
      html = insertProperty(html, "name", name);
      html = insertProperty(html, "foto", foto);
      html = insertProperty(html, "phone", phone);
      html = insertProperty(html, "job", job);
      html = insertProperty(html, "email", email);
      finalHtml += html;
    }
    finalHtml += "</section>";
    return finalHtml;
  };


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
            var categoriesViewHtml = buildCategoriesViewHtml(egitim, egitimTitleHtml, egitimHtml);
            insertHtml("#inner-content", categoriesViewHtml);
          },
          false);
      },
      false);
  };

  function buildCategoriesViewHtml(categories, categoriesTitleHtml, categoryHtml) {

    var finalHtml = categoriesTitleHtml;
    finalHtml += "<section class='row'>";
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
  };


  bilmuh.loadDonemler = function (categoryShort) {
    if (categoryShort == "Lisans") {
      $ajaxUtils.sendGetRequest(
        egitimUrl,
        buildAndShowLisansHTML);
    }
    else {
      $ajaxUtils.sendGetRequest(
        egitimUrl,
        buildAndShowYuksekLisansHTML);
    }
  };

  function buildAndShowLisansHTML(egitim) {
    // Load title snippet of menu items page
    $ajaxUtils.sendGetRequest(
      donemTitleHtml,
      function (donemTitleHtml) {
        // Retrieve single menu item snippet
        $ajaxUtils.sendGetRequest(
          donemHtml,
          function (donemHtml) {
            var menuItemsViewHtml = buildLisansViewHtml(egitim, donemTitleHtml, donemHtml);
            insertHtml("#inner-content", menuItemsViewHtml);
          },
          false);
      },
      false);
  };
  function buildLisansViewHtml(categoryMenuItems, menuItemsTitleHtml, menuItemHtml) {

    var finalHtml = menuItemsTitleHtml;
    finalHtml += "<section class='row'>";

    var donem = categoryMenuItems[0].donemler;
    for (var i = 0; i < donem.length; i++) {
      // Insert category values

      var html = menuItemHtml;
      var name = "" + donem[i].name;
      var foto = donem[i].foto;
      html = insertProperty(html, "name", name);
      html = insertProperty(html, "foto", foto);
      finalHtml += html;
    }
    finalHtml += "</section>";
    return finalHtml;
  };
  function buildAndShowYuksekLisansHTML(egitim) {
    // Load title snippet of menu items page
    $ajaxUtils.sendGetRequest(
      donemTitleHtml,
      function (donemTitleHtml) {
        // Retrieve single menu item snippet
        $ajaxUtils.sendGetRequest(
          donemHtml,
          function (donemHtml) {
            var menuItemsViewHtml = buildYuksekLisansViewHtml(egitim, donemTitleHtml, donemHtml);
            insertHtml("#inner-content", menuItemsViewHtml);
          },
          false);
      },
      false);
  };
  function buildYuksekLisansViewHtml(categoryMenuItems, menuItemsTitleHtml, menuItemHtml) {

    var finalHtml = menuItemsTitleHtml;
    finalHtml += "<section class='row'>";
    var donem = categoryMenuItems[1].donemler;
    for (var i = 0; i < donem.length; i++) {
      // Insert category values

      var html = menuItemHtml;
      var name = "" + donem[i].name;
      var foto = donem[i].foto;
      html = insertProperty(html, "name", name);
      html = insertProperty(html, "foto", foto);
      finalHtml += html;
    }

    finalHtml += "</section>";
    return finalHtml;
  };

  bilmuh.loadSiniflar = function (sinif) {
    if (sinif == "LGuz") {
      $ajaxUtils.sendGetRequest(
        egitimUrl,
        buildAndShowLisansGuzHTML);
    }
    else if (sinif == "LBahar") {
      $ajaxUtils.sendGetRequest(
        egitimUrl,
        buildAndShowLisansBaharHTML);
    }
    else if (sinif == "YGuz") {
      $ajaxUtils.sendGetRequest(
        egitimUrl,
        buildAndShowYuksekLisansGuzHTML);
    }
    else if (sinif == "YBahar") {
      $ajaxUtils.sendGetRequest(
        egitimUrl,
        buildAndShowYuksekLisansBaharHTML);
    }
  };
  function buildAndShowLisansGuzHTML(egitim) {
    // Load title snippet of menu items page
    $ajaxUtils.sendGetRequest(
      sinifTitleHtml,
      function (sinifTitleHtml) {
        // Retrieve single menu item snippet
        $ajaxUtils.sendGetRequest(
          sinifLisansHtml,
          function (sinifLisansHtml) {
            var menuItemsViewHtml = buildLisansGuzViewHtml(egitim, sinifTitleHtml, sinifLisansHtml);
            insertHtml("#inner-content", menuItemsViewHtml);
          },
          false);
      },
      false);
  };
  function buildLisansGuzViewHtml(categoryMenuItems, menuItemsTitleHtml, menuItemHtml) {

    var finalHtml = menuItemsTitleHtml;
    finalHtml += "<section class='row'>";
    var donem = categoryMenuItems[0].donemler;

    var sinif = donem[0].sinif;
    for (var k = 0; k < sinif.length; k++) {
      var html = menuItemHtml;
      var id = "" + sinif[k].id;
      var foto = sinif[k].foto;
      var name = "LGuz";
      html = insertProperty(html, "name", name);//bişiler yaptım
      html = insertProperty(html, "id", id);
      html = insertProperty(html, "foto", foto);
      finalHtml += html;
    }

    finalHtml += "</section>";
    return finalHtml;
  };
  function buildAndShowLisansBaharHTML(egitim) {
    // Load title snippet of menu items page
    $ajaxUtils.sendGetRequest(
      sinifTitleHtml,
      function (sinifTitleHtml) {
        // Retrieve single menu item snippet
        $ajaxUtils.sendGetRequest(
          sinifLisansHtml,
          function (sinifLisansHtml) {
            var menuItemsViewHtml = buildLisansBaharViewHtml(egitim, sinifTitleHtml, sinifLisansHtml);
            insertHtml("#inner-content", menuItemsViewHtml);
          },
          false);
      },
      false);
  };
  function buildLisansBaharViewHtml(categoryMenuItems, menuItemsTitleHtml, menuItemHtml) {

    var finalHtml = menuItemsTitleHtml;
    finalHtml += "<section class='row'>";
    var donem = categoryMenuItems[0].donemler;

    var sinif = donem[1].sinif;
    for (var k = 0; k < sinif.length; k++) {
      var html = menuItemHtml;
      var id = "" + sinif[k].id;
      var foto = sinif[k].foto;
      var name = "LBahar";
      html = insertProperty(html, "name", name);//bişiler yaptım
      html = insertProperty(html, "id", id);
      html = insertProperty(html, "foto", foto);
      finalHtml += html;
    }

    finalHtml += "</section>";
    return finalHtml;
  };
  function buildAndShowYuksekLisansGuzHTML(egitim) {
    // Load title snippet of menu items page
    $ajaxUtils.sendGetRequest(
      yukseklisansDersTitle,
      function (yukseklisansDersTitle) {
        // Retrieve single menu item snippet
        $ajaxUtils.sendGetRequest(
          yuksekLisansDersHtml,
          function (yuksekLisansDersHtml) {
            var menuItemsViewHtml = buildYuksekLisansGuzViewHtml(egitim, yukseklisansDersTitle, yuksekLisansDersHtml);
            insertHtml("#inner-content", menuItemsViewHtml);
          },
          false);
      },
      false);
  };
  function buildYuksekLisansGuzViewHtml(categoryMenuItems, menuItemsTitleHtml, menuItemHtml) {

    var finalHtml = menuItemsTitleHtml;
    finalHtml += "<section class='row'>";
    var html = menuItemHtml;
    var ders_programi = categoryMenuItems[1].donemler[0].ders_programi;
    html = insertProperty(html, "ders_programi", ders_programi);
    finalHtml += html;


    finalHtml += "</section>";
    return finalHtml;
  };
  function buildAndShowYuksekLisansBaharHTML(egitim) {
    // Load title snippet of menu items page
    $ajaxUtils.sendGetRequest(
      yukseklisansDersTitle,
      function (yukseklisansDersTitle) {
        // Retrieve single menu item snippet
        $ajaxUtils.sendGetRequest(
          yuksekLisansDersHtml,
          function (yuksekLisansDersHtml) {
            var menuItemsViewHtml = buildYuksekLisansGuzViewHtml(egitim, yukseklisansDersTitle, yuksekLisansDersHtml);
            insertHtml("#inner-content", menuItemsViewHtml);
          },
          false);
      },
      false);
  };
  function buildYuksekLisansGuzViewHtml(categoryMenuItems, menuItemsTitleHtml, menuItemHtml) {

    var finalHtml = menuItemsTitleHtml;
    finalHtml += "<section class='row'>";


    var html = menuItemHtml;
    var ders_programi = categoryMenuItems[1].donemler[1].ders_programi;
    html = insertProperty(html, "ders_programi", ders_programi);
    finalHtml += html;

    finalHtml += "</section>";
    return finalHtml;
  };


  bilmuh.loadDersler = function (a, b) {
    if (a == "LGuz") {
      if (b == "1") {
        $ajaxUtils.sendGetRequest(
          egitimUrl,
          buildAndShowguzbirHTML);
      } else if (b == "2") {
        $ajaxUtils.sendGetRequest(
          egitimUrl,
          buildAndShowguzikiHTML);
      } else if (b == "3") {
        $ajaxUtils.sendGetRequest(
          egitimUrl,
          buildAndShowguzucHTML);
      } else if (b == "4") {
        $ajaxUtils.sendGetRequest(
          egitimUrl,
          buildAndShowguzdortHTML);
      }
    }
    else if (a == "LBahar") {
      if (b == "1") {
        $ajaxUtils.sendGetRequest(
          egitimUrl,
          buildAndShowbaharbirHTML);
      } else if (b == "2") {
        $ajaxUtils.sendGetRequest(
          egitimUrl,
          buildAndShowbaharikiHTML);
      } else if (b == "3") {
        $ajaxUtils.sendGetRequest(
          egitimUrl,
          buildAndShowbaharucHTML);
      } else if (b == "4") {
        $ajaxUtils.sendGetRequest(
          egitimUrl,
          buildAndShowbahardortHTML);
      }
    }
  };
  function buildAndShowguzbirHTML(egitim) {
    // Load title snippet of menu items page
    $ajaxUtils.sendGetRequest(
      yukseklisansDersTitle,
      function (yukseklisansDersTitle) {
        // Retrieve single menu item snippet
        $ajaxUtils.sendGetRequest(
          yuksekLisansDersHtml,
          function (yuksekLisansDersHtml) {
            var menuItemsViewHtml = buildGuzbirViewHtml(egitim, yukseklisansDersTitle, yuksekLisansDersHtml);
            insertHtml("#inner-content", menuItemsViewHtml);
          },
          false);
      },
      false);
  };
  function buildGuzbirViewHtml(categoryMenuItems, menuItemsTitleHtml, menuItemHtml) {

    var finalHtml = menuItemsTitleHtml;
    finalHtml += "<section class='row'>";

    var html = menuItemHtml;
    var ders_programi = categoryMenuItems[0].donemler[0].sinif[0].ders_programi;
    html = insertProperty(html, "ders_programi", ders_programi);
    finalHtml += html;


    finalHtml += "</section>";
    return finalHtml;
  };
  function buildAndShowguzikiHTML(egitim) {
    // Load title snippet of menu items page
    $ajaxUtils.sendGetRequest(
      yukseklisansDersTitle,
      function (yukseklisansDersTitle) {
        // Retrieve single menu item snippet
        $ajaxUtils.sendGetRequest(
          yuksekLisansDersHtml,
          function (yuksekLisansDersHtml) {
            var menuItemsViewHtml = buildGuzikiViewHtml(egitim, yukseklisansDersTitle, yuksekLisansDersHtml);
            insertHtml("#inner-content", menuItemsViewHtml);
          },
          false);
      },
      false);
  };
  function buildGuzikiViewHtml(categoryMenuItems, menuItemsTitleHtml, menuItemHtml) {

    var finalHtml = menuItemsTitleHtml;
    finalHtml += "<section class='row'>";

    var html = menuItemHtml;
    var ders_programi = categoryMenuItems[0].donemler[0].sinif[1].ders_programi;
    html = insertProperty(html, "ders_programi", ders_programi);
    finalHtml += html;

    finalHtml += "</section>";
    return finalHtml;
  };
  function buildAndShowguzucHTML(egitim) {
    // Load title snippet of menu items page
    $ajaxUtils.sendGetRequest(
      yukseklisansDersTitle,
      function (yukseklisansDersTitle) {
        // Retrieve single menu item snippet
        $ajaxUtils.sendGetRequest(
          yuksekLisansDersHtml,
          function (yuksekLisansDersHtml) {
            var menuItemsViewHtml = buildGuzucViewHtml(egitim, yukseklisansDersTitle, yuksekLisansDersHtml);
            insertHtml("#inner-content", menuItemsViewHtml);
          },
          false);
      },
      false);
  };
  function buildGuzucViewHtml(categoryMenuItems, menuItemsTitleHtml, menuItemHtml) {

    var finalHtml = menuItemsTitleHtml;
    finalHtml += "<section class='row'>";

    var html = menuItemHtml;
    var ders_programi = categoryMenuItems[0].donemler[0].sinif[2].ders_programi;
    html = insertProperty(html, "ders_programi", ders_programi);
    finalHtml += html;

    finalHtml += "</section>";
    return finalHtml;
  };
  function buildAndShowguzdortHTML(egitim) {
    // Load title snippet of menu items page
    $ajaxUtils.sendGetRequest(
      yukseklisansDersTitle,
      function (yukseklisansDersTitle) {
        // Retrieve single menu item snippet
        $ajaxUtils.sendGetRequest(
          yuksekLisansDersHtml,
          function (yuksekLisansDersHtml) {
            var menuItemsViewHtml = buildGuzdortViewHtml(egitim, yukseklisansDersTitle, yuksekLisansDersHtml);
            insertHtml("#inner-content", menuItemsViewHtml);
          },
          false);
      },
      false);
  };
  function buildGuzdortViewHtml(categoryMenuItems, menuItemsTitleHtml, menuItemHtml) {

    var finalHtml = menuItemsTitleHtml;
    finalHtml += "<section class='row'>";

    var html = menuItemHtml;
    var ders_programi = categoryMenuItems[0].donemler[0].sinif[3].ders_programi;
    html = insertProperty(html, "ders_programi", ders_programi);
    finalHtml += html;

    finalHtml += "</section>";
    return finalHtml;
  };
  function buildAndShowbaharbirHTML(egitim) {
    // Load title snippet of menu items page
    $ajaxUtils.sendGetRequest(
      yukseklisansDersTitle,
      function (yukseklisansDersTitle) {
        // Retrieve single menu item snippet
        $ajaxUtils.sendGetRequest(
          yuksekLisansDersHtml,
          function (yuksekLisansDersHtml) {
            var menuItemsViewHtml = buildbaharbirViewHtml(egitim, yukseklisansDersTitle, yuksekLisansDersHtml);
            insertHtml("#inner-content", menuItemsViewHtml);
          },
          false);
      },
      false);
  };
  function buildbaharbirViewHtml(categoryMenuItems, menuItemsTitleHtml, menuItemHtml) {

    var finalHtml = menuItemsTitleHtml;
    finalHtml += "<section class='row'>";

    var html = menuItemHtml;
    var ders_programi = categoryMenuItems[0].donemler[1].sinif[0].ders_programi;
    html = insertProperty(html, "ders_programi", ders_programi);
    finalHtml += html;

    finalHtml += "</section>";
    return finalHtml;
  };
  function buildAndShowbaharikiHTML(egitim) {
    // Load title snippet of menu items page
    $ajaxUtils.sendGetRequest(
      yukseklisansDersTitle,
      function (yukseklisansDersTitle) {
        // Retrieve single menu item snippet
        $ajaxUtils.sendGetRequest(
          yuksekLisansDersHtml,
          function (yuksekLisansDersHtml) {
            var menuItemsViewHtml = buildbaharikiViewHtml(egitim, yukseklisansDersTitle, yuksekLisansDersHtml);
            insertHtml("#inner-content", menuItemsViewHtml);
          },
          false);
      },
      false);
  };
  function buildbaharikiViewHtml(categoryMenuItems, menuItemsTitleHtml, menuItemHtml) {

    var finalHtml = menuItemsTitleHtml;
    finalHtml += "<section class='row'>";
    var html = menuItemHtml;
    var ders_programi = categoryMenuItems[0].donemler[1].sinif[1].ders_programi;
    html = insertProperty(html, "ders_programi", ders_programi);
    finalHtml += html;

    finalHtml += "</section>";
    return finalHtml;
  };
  function buildAndShowbaharucHTML(egitim) {
    // Load title snippet of menu items page
    $ajaxUtils.sendGetRequest(
      yukseklisansDersTitle,
      function (yukseklisansDersTitle) {
        // Retrieve single menu item snippet
        $ajaxUtils.sendGetRequest(
          yuksekLisansDersHtml,
          function (yuksekLisansDersHtml) {
            var menuItemsViewHtml = buildbaharucViewHtml(egitim, yukseklisansDersTitle, yuksekLisansDersHtml);
            insertHtml("#inner-content", menuItemsViewHtml);
          },
          false);
      },
      false);
  };
  function buildbaharucViewHtml(categoryMenuItems, menuItemsTitleHtml, menuItemHtml) {

    var finalHtml = menuItemsTitleHtml;
    finalHtml += "<section class='row'>";

    var html = menuItemHtml;
    var ders_programi = categoryMenuItems[0].donemler[1].sinif[2].ders_programi;
    html = insertProperty(html, "ders_programi", ders_programi);
    finalHtml += html;

    finalHtml += "</section>";
    return finalHtml;
  };
  function buildAndShowbahardortHTML(egitim) {
    // Load title snippet of menu items page
    $ajaxUtils.sendGetRequest(
      yukseklisansDersTitle,
      function (yukseklisansDersTitle) {
        // Retrieve single menu item snippet
        $ajaxUtils.sendGetRequest(
          yuksekLisansDersHtml,
          function (yuksekLisansDersHtml) {
            var menuItemsViewHtml = buildbahardortViewHtml(egitim, yukseklisansDersTitle, yuksekLisansDersHtml);
            insertHtml("#inner-content", menuItemsViewHtml);
          },
          false);
      },
      false);
  };
  function buildbahardortViewHtml(categoryMenuItems, menuItemsTitleHtml, menuItemHtml) {

    var finalHtml = menuItemsTitleHtml;
    finalHtml += "<section class='row'>";

    var html = menuItemHtml;
    var ders_programi = categoryMenuItems[0].donemler[1].sinif[3].ders_programi;
    html = insertProperty(html, "ders_programi", ders_programi);
    finalHtml += html;

    finalHtml += "</section>";
    return finalHtml;
  };


  var insertHtml = function (selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  };


  var insertProperty = function (string, propName, propValue) {
    var propToReplace = "{{" + propName + "}}";
    string = string
      .replace(new RegExp(propToReplace, "g"), propValue);
    return string;
  }

  global.$bilmuh = bilmuh;
})(window);
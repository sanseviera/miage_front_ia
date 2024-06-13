
export default class Content{

  content(){
    return  ` 
    </head>
    <body>
      <bt-mainblock 
        id="main-block"
        jsonObjetString='
          {
            "logo":{
              "link":"./data/logo.png"
            },
            "mainRoute": {
              "label":"Présentation du projet",
              "route":"&lt;page-presentation&gt;&lt;/page-presentation&gt;",
              "typeRoute":"html"
            },
            "routes": [
              {
                "label":"Présentation du projet",
                "route":"&lt;page-presentation&gt;&lt;/page-presentation&gt;",
                "typeRoute":"html",
                "type":"standardImage",
                "children": []
              },
              {
                "label":"Interface API",
                "route":"&lt;page-interface-api&gt;&lt;/page-interface-api&gt;",
                "typeRoute":"html",
                "children": []
              },
              {  
                "label":"Benchmarking",
                "route":"&lt;page-benchmarking&gt;&lt;/page-benchmarking&gt;",
                "typeRoute":"html",
                "children": []
              },
              {  
                "label":"Analyse Benchmarking",
                "route":"&lt;page-analyse-benchmark&gt;&lt;/page-analyse-benchmark&gt;",
                "typeRoute":"html",
                "children": []
              }
            ],
            "footer": [
              {
                "label":"© 2024 - Tous droits réservés",
                "route":"./html-snippets/page_mentions_legales.html",
                "typeRoute":"http"                
              }
            ] 
          }
    '
  >
    <div slot="header" class="expand">
       <bt-navbar
       jsonObjetString='
          {
            "logo":{
              "link":"./data/logo.png"
            },
            "mainRoute": {
              "label":"Présentation du projet",
              "route":"&lt;page-presentation&gt;&lt;/page-presentation&gt;",
              "typeRoute":"html"
            },
            "routes": [
              {
                "label":"Présentation du projet",
                "route":"&lt;page-presentation&gt;&lt;/page-presentation&gt;",
                "typeRoute":"html",
                "type":"standardImage",
                "children": []
              },
              {
                "label":"Chat Bot",
                "route":"&lt;page-chat-bot&gt;&lt;/page-chat-bot&gt;",
                "typeRoute":"html",
                "children": []
              },
              {  
                "label":"Analyseur",
                "route":"&lt;page-analyseur&gt;&lt;/page-analyseur&gt;",
                "typeRoute":"html",
                "children": []
              }
            ],
            "footer": [
              {
                "label":"© 2024 - Tous droits réservés",
                "route":"./html-snippets/page_mentions_legales.html",
                "typeRoute":"http"                
              }
            ] 
          }
    '>
       </bt-navbar>
    </div>
    <div slot="header-fixed" class="expand">
      <bt-slider></bt-slider>
    </div>
    <div slot="content" id="content" class="expand">
    </div>
    <div slot="footer" class="expand">
      <bt-footer
        jsonObjetString=
          '
          {
            "footer":[
            {"label":"© 2024 - Tous droits réservés"}]
          }
          '
      ></bt-footer>
    </div>
  </bt-mainblock> 

</body>
</html>
    `
  }
}


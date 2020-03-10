export function renderAgisMap(viewTarget){
    document.getElementById(viewTarget).innerHTML = '';
    require([
      "esri/Map",
      "esri/views/MapView",
      "esri/layers/FeatureLayer",
      "esri/widgets/Locate",
      "esri/widgets/Search"
    ], function(Map, MapView, FeatureLayer, Locate, Search) {
        var map = new Map({
          basemap: "streets-navigation-vector"
        });

        var renderers = {
            type: "simple",
            symbol: {
              type: "picture-marker",
              url: "http://static.arcgis.com/images/Symbols/NPS/npsPictograph_0231b.png",
              width: "18px",
              height: "18px"
            }
          }

        var popup = {
            "title": "{name}",
            "content": `
                    <div style="width: 90px;">
                        <img src="{pic_url}" style="width: 100%;" />
                    </div>
                    <b>Descrizione:</b><span class='templateDescription'> {description}</span>
            `
        }

        var layer = new FeatureLayer({
            url: "https://services2.arcgis.com/wi2OtdeV76SnZCKG/arcgis/rest/services/Milano_Archeologica/FeatureServer/0",
            renderer: renderers,
            outFields: ["name","description"],
            popupTemplate: popup
        });

        map.add(layer, 0);

        var view = new MapView({
            container: viewTarget,
            map: map,
            center: [9.187452, 45.472671], // longitude, latitude
            zoom: 12
        });

        //Filter Widget
        var selectFilter = document.createElement("select");
        selectFilter.setAttribute("class", "esri-widget esri-select");
        selectFilter.setAttribute("style", "width: 275px; font-family: Avenir Next W00; font-size: 1em;");

        var sqlExpressions = [
            "name = 'Il Circo'",
            "name = 'Anfiteatro Romano'",
            "name = 'Il Foro Romano'",
            "name = 'Il Palazzo Imperiale'",
            "name = 'Il Recinto di San Vittore al Corpo'",
            "name = 'Il Teatro Romano'",
            "name = 'La Torre Poligonale'",
            "name = 'Le Colonne di San Lorenzo'",
            "name = 'Gli Archi di Porta Nuova'"
        ];

        sqlExpressions.forEach(function(sql){
            var option = document.createElement("option");
            option.value = sql;
            option.innerHTML = sql;
            selectFilter.appendChild(option);
        });

        selectFilter.addEventListener('change', function (event) {
            // setFeatureLayerFilter(event.target.value);
            setFeatureLayerViewFilter(event.target.value);
        });

        function setFeatureLayerViewFilter(expression) {
            view.whenLayerView(layer).then(function(featureLayerView) {
                featureLayerView.filter = {
                    where: expression
                };
            });
        }

        //Locate Widget
        var locate = new Locate({
            view: view,
            useHeadingEnabled: false,
            goToOverride: function(view, options) {
              options.target.scale = 13000;
              return view.goTo(options.target);
            }
        });

        //Search Widget
        var search = new Search({
            view: view
        });

        search.sources.push({
            layer: layer,
            searchFields: ["name"],
            displayField: "name",
            exactMatch: false,
            outFields: ["name"],
            resultGraphicEnabled: true,
            name: "Siti Archeologici di Milano",
            placeholder: "Esempio: 'Il Teatro Romano'",
        });

        //Add Widgets to view
        view.ui.add(search, "top-right");
        view.ui.add(locate, "top-left");
        view.ui.add(selectFilter, "top-right");
  });
}
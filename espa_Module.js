var map;
//var polycolor;
//var poly_opacity;
//var cell_rad;
var techValue;
var dropdwnVal;
var dateVal;
var kpi_name;
var polygon_string;
var min=[],max=[],color=[];
var radioValue;
var hourVal;
//var hrVal_drpdwn1;
var hrVal_drpdwn2;
var minVal;
var flag;
var dateChk;

var startVal;
var endVal;
var flagChk;
var radValfor2;
var argVal=[];
var techFlag;
var min_for2=[],max_for2=[],color_for2=[];

var radVal_Agg_Th;
var opValue;
var threshValue;
var flagChk_agg_thr;
var imgLabel= 'assets/images/label.png';

var zoom_msg = [];

var cellDown=[];
var cellLatDown =[];
var cellLongDown =[];
var cellKpiDown = []; 
var cellOutageCounter= 0;
var cellCounter = 0 ; 


function initialize() 
{
//getPolygonString();
//drawCells();
  
    
	var delhiCenter=new google.maps.LatLng(28.6139, 77.2090); 
    var mapOptions = {
		zoom: 13,
		center: delhiCenter,
		disableDoubleClickZoom: true,
		mapTypeControl: false
	
	  }
	map = new google.maps.Map(document.getElementById('googleMap'),mapOptions);
        
	google.maps.event.addListener(map, 'zoom_changed', function() {
           // var zoomLevel = map.getZoom();
           // map.setCenter(delhiCenter);
            Materialize.toast(zoom_msg, 4000)
            getPolygon();
			//setInterval(,3000);
           // drawCells();  
                
  });
  
           
   
}

function get_KPIdropdwn(){
      var tech_Value = techValue;  
      var tech_drpdwn = [];
    //  tech_drpdwn += '<div class="input-field col s4"><input type="text" id="" class="tech" placeholder="Select KPI" class="" autocomplete="off"><input type="hidden" id=""></div>'; 
     // tech_drpdwn += '<div class="col s4"><a class="waves-effect waves-light btn" id="submitKPI" onclick="">Submit!</a></div>';
    //  $(".techAlldropdwn").html(tech_drpdwn); 
       
    if(techFlag==1){
        tech_drpdwn += '<div class="input-field col s4"><input type="text" id="tech1" class="tech" placeholder="Select KPI" class="" autocomplete="off"><input type="hidden" id=""></div>'; 
     
      $("#dropdwn_tech").html(tech_drpdwn); 
      $("#tech1").autocomplete({
            source: "main/getKPI?Tech="+tech_Value,
            minLength: 1,
            delay: 0,
            select: function( event, ui ) {
                kpi_name = ui.item.value;console.log(kpi_name);
            }
        });
        
    }
    
     if(techFlag==2){
       tech_drpdwn += '<div class="input-field col s4"><input type="text" id="tech2" class="tech" placeholder="Select KPI" class="" autocomplete="off"><input type="hidden" id=""></div>'; 
     
      $("#dropdwn_tech2").html(tech_drpdwn);
      $("#tech2").autocomplete({
            source: "main/getKPI?Tech="+tech_Value,
            minLength: 1,
            delay: 0,
            select: function( event, ui ) {
                kpi_name = ui.item.value;console.log(kpi_name);
            }
        });
        
    }
   
}
function get_hrdropdwn(){ //alert('inside fxn');
    var hr_drpdwn=[];
    
hr_drpdwn += '<select class="browser-default" id="hours_dd">Select';

hr_drpdwn += "<option value=''>Hrs</option>";
hr_drpdwn += "<option value='0'>0</option>";
hr_drpdwn += "<option value='1'>1</option>";
hr_drpdwn += "<option value='2'>2</option>";
hr_drpdwn += "<option value='3'>3</option>";
hr_drpdwn += "<option value='4'>4</option>";
hr_drpdwn += "<option value='5'>5</option>";
hr_drpdwn += "<option value='6'>6</option>";
hr_drpdwn += "<option value='7'>7</option>";
hr_drpdwn += "<option value='8'>8</option>";
hr_drpdwn += "<option value='9'>9</option>";
hr_drpdwn += "<option value='10'>10</option>";
hr_drpdwn += "<option value='11'>11</option>";
hr_drpdwn += "<option value='12'>12</option>";
hr_drpdwn += "<option value='13'>13</option>";
hr_drpdwn += "<option value='14'>14</option>";
hr_drpdwn += "<option value='15'>15</option>";
hr_drpdwn += "<option value='16'>16</option>";
hr_drpdwn += "<option value='17'>17</option>";
hr_drpdwn += "<option value='18'>18</option>";
hr_drpdwn += "<option value='19'>19</option>";
hr_drpdwn += "<option value='20'>20</option>";
hr_drpdwn += "<option value='21'>21</option>";
hr_drpdwn += "<option value='22'>22</option>";
hr_drpdwn += "<option value='23'>23</option>";
hr_drpdwn += "</select>";
        if(flagChk==0){
        $("#dropdwn_hr").html(hr_drpdwn);
        }
        if(flagChk==1){
        $("#dropdwn_hr2").html(hr_drpdwn);
        }

 $('#hours_dd').change(function() {
hourVal = $('#hours_dd option:selected').text();
//alert('hrs'+hourVal);

 });
}
function get_mindropdwn(){
            var min_hr_drpdwn=[];
            min_hr_drpdwn += '<select class="browser-default" id="min_hours_dd">Select';

        min_hr_drpdwn += "<option value=''>Hrs</option>";
        min_hr_drpdwn += "<option value='0'>0</option>";
        min_hr_drpdwn += "<option value='1'>1</option>";
        min_hr_drpdwn += "<option value='2'>2</option>";
        min_hr_drpdwn += "<option value='3'>3</option>";
        min_hr_drpdwn += "<option value='4'>4</option>";
        min_hr_drpdwn += "<option value='5'>5</option>";
        min_hr_drpdwn += "<option value='6'>6</option>";
        min_hr_drpdwn += "<option value='7'>7</option>";
        min_hr_drpdwn += "<option value='8'>8</option>";
        min_hr_drpdwn += "<option value='9'>9</option>";
        min_hr_drpdwn += "<option value='10'>10</option>";
        min_hr_drpdwn += "<option value='11'>11</option>";
        min_hr_drpdwn += "<option value='12'>12</option>";
        min_hr_drpdwn += "<option value='13'>13</option>";
        min_hr_drpdwn += "<option value='14'>14</option>";
        min_hr_drpdwn += "<option value='15'>15</option>";
        min_hr_drpdwn += "<option value='16'>16</option>";
        min_hr_drpdwn += "<option value='17'>17</option>";
        min_hr_drpdwn += "<option value='18'>18</option>";
        min_hr_drpdwn += "<option value='19'>19</option>";
        min_hr_drpdwn += "<option value='20'>20</option>";
        min_hr_drpdwn += "<option value='21'>21</option>";
        min_hr_drpdwn += "<option value='22'>22</option>";
        min_hr_drpdwn += "<option value='23'>23</option>";
        min_hr_drpdwn += "</select>";
         if(flagChk==0){
        $("#dropdwn_min_hr").html(min_hr_drpdwn);
         }
         if(flagChk==1){
            $("#dropdwn_min_hr2").html(min_hr_drpdwn);  
         }
        var min_drpdwn=[];
         min_drpdwn += "<select class='browser-default' id='min_dd'>";
         min_drpdwn += "<option value=''>Min</option>";
         min_drpdwn += "<option value='0'>0</option>";
         min_drpdwn += "<option value='15'>15</option>";
         min_drpdwn += "<option value='30'>30</option>";
         min_drpdwn += "<option value='45'>45</option>";
          if(flagChk==0){
         $("#dropdwn_min").html(min_drpdwn);
           }
           
           if(flagChk==1){
         $("#dropdwn_min2").html(min_drpdwn);
           }
           
        $('#min_hours_dd').change(function() {
       hrVal_drpdwn2 = $('#min_hours_dd option:selected').text();
       //alert('hrs'+hourVal);
        });
        
        $('#min_dd').change(function() {
       minVal = $('#min_dd option:selected').text();
       //alert('hrs'+hourVal);
        });
 
}


function get_ESPAkpi()
{
    getPolygon();
    var date_Val =[];
    var edate=[];
    var resol_val;
    var range_flag;
    var agg;
    if(dateChk==0){
       date_Val= dateVal; alert('startdate'+date_Val); 
       edate=[]; alert('enddate'+edate);
       resol_val = radioValue; alert('resol'+resol_val);
       range_flag = 0; alert('range'+range_flag);
       agg='max'; alert('aggregate'+agg);
    }
    if(dateChk==1){
        date_Val = startVal; alert('startdate'+date_Val); 
        edate = endVal; alert('enddate'+edate);
        resol_val = radValfor2; alert('resol'+resol_val);
        range_flag = 1; alert('range'+range_flag);
        agg = argVal;
    }
    
    var proc_hrVal=[];
    var min_Val=[];
    if(flag==0){ alert(flag);
        proc_hrVal= hourVal; console.log(proc_hrVal);
    }
    if(flag==1){
        proc_hrVal= hrVal_drpdwn2;
        
        min_Val=minVal;
    } alert('hour'+proc_hrVal);
     alert('min'+min_Val);
    
  //  var resol_val = radioValue; alert('resol'+resol_val);
   // var range_flag = 0; alert('range'+range_flag);
    
   // var agg='max'; alert('aggregate'+agg);
    var thresholdFlag=[]; 
    var thresholdOp=[]; 
    var thresholdVal=[]; 
    
    if(flagChk_agg_thr==0){
        thresholdFlag=[]; alert('thresholdFlag'+thresholdFlag);
        thresholdOp=[]; alert('thresholdOp'+thresholdOp);
        thresholdVal=[]; alert('thresholdVal'+thresholdVal);
    }
    
    if(flagChk_agg_thr==1){
        thresholdFlag = 1; alert('thresholdFlag'+thresholdFlag);
        thresholdOp = opValue;  alert('thresholdOp'+thresholdOp);
        thresholdVal = threshValue; alert('thresholdVal'+thresholdVal);
    }
    
    alert(kpi_name); alert(polygon_string);
    var techValue2 = techValue; alert('tech'+techValue2);
    
    
    
    min=[],max=[],color=[];
    for (var i=1;i<6;i++)
    {
        if($('#' + i + 'rangeColor').is(":checked"))
        { 
            min[i-1]= $('#'+i+'min').val(); //alert(i + ' ' + min[i-1]);
            max[i-1]= $('#'+i+'max').val(); console.log(max[i-1]);
            color[i-1]=$('#'+i+'espaColor').val(); console.log(color[i-1]);
        }
    }
   // alert(min.length);
   
   min_for2=[],max_for2=[],color_for2=[];
   for(var i=1;i<6;i++){
       if($('#' + i + 'rangeColor_for2').is(":checked"))
        { 
            min_for2[i-1]= $('#'+i+'min_for2').val(); //alert(i + ' ' + min[i-1]);
            max_for2[i-1]= $('#'+i+'max_for2').val(); console.log(max_for2[i-1]);
            color_for2[i-1]=$('#'+i+'espaColor_for2').val(); console.log(color_for2[i-1]);
        }
   }
   
   $.ajax(
           {
            url : "main/getESPAkpi",
            type : "post",
            data : "date="+date_Val+"&edate="+edate+"&hour="+proc_hrVal+"&min="+min_Val+"&resol="+resol_val+"&rangeFlag="+range_flag+"&agg="+agg+"&thresholdFlag="+thresholdFlag+"&thresholdOp="+thresholdOp+"&thresholdVal="+thresholdVal+"&kpiName="+kpi_name+"&polygon_string="+polygon_string+"&Techname="+techValue2, 
            success:function(xmlDoc_kpi)
            {
                $(xmlDoc_kpi).find("row").each(function()
                    { 
                        
                       cellCounter++; 
                       var arr1 =[];
                       var k = 0;
                       var cell = $(this).find("cell").text().trim(); //console.log(cell);	
                       var Longitude = parseFloat($(this).find("Longitude").text().trim()); //console.log(Longitude);
                       var Latitude = parseFloat($(this).find("Latitude").text().trim()); //console.log(Latitude);
                       var Azimuth = parseInt($(this).find("Azimuth").text().trim()); //console.log(Azimuth);
                       var kpi = parseFloat($(this).find("KPI").text().trim()); //console.log(kpi);
                       
                      
					   cellDown.push(cell);
					   alert(cellDown[0]); 
					   cellLatDown.push(Latitude);
					   cellLongDown.push(Longitude);
					   cellKpiDown.push(kpi);
                       console.log(kpi);
	
                        var cell_rad= 1/1000;
                        var polycolor;
                        var poly_opacity= 0.3;
						
                        var ltlng2 = new google.maps.LatLng(Latitude,Longitude);
                        arr1.push(ltlng2); 
                           // var beamwidth = 32.5;
                           // var AZIMUTH1,ANG1,ANG2;
                            AZIMUTH1 = 90 - Azimuth; 
                            ANG1 = AZIMUTH1 - 32.5;  
                            ANG2 = AZIMUTH1 + 32.5;  

                            for (var j = ANG1;j < ANG2; j++)
                            { 
                              ltlng2  = new google.maps.LatLng(Latitude + Math.sin(j*3.14/180)*cell_rad  ,  Longitude + Math.cos(j*3.14/180)*cell_rad) ;  
                             // console.log(ltlng2);     
                              arr1.push(ltlng2);
                            }  
                            
                            for (var i = 0 ; i < min.length;  i++)
                            {
                              if(kpi >= min[i] && kpi < max[i])
                              {  
                                  polycolor = color[i];
                              }
                            
                            }
                            
                            for (var i = 0 ; i < min_for2.length;  i++)
                            {
                              if(kpi >= min_for2[i] && kpi < max_for2[i])
                              {  
                                  polycolor = color_for2[i];
                              }
                            
                            }
                             
                          //  console.log(arr1);
						  
	  var  polyLabel = cell;                 
      var marker= new MarkerWithLabel({

      position: new google.maps.LatLng(0,0),
      draggable: true,
      raiseOnDrag: true,
      map: map,
      labelContent: polyLabel,
      labelAnchor: new google.maps.Point(30, 20),
      labelClass: "labels", // the CSS class for the label
      labelStyle: {opacity: 1.0},
      icon:  imgLabel,
      visible: false
	  
     });
         
		 
		var kpipoly=new google.maps.Polygon({
                                    path:arr1,
                                    strokeColor:'#0000ff',
                                    strokeOpacity:0.5,
                                    strokeWeight:0.5,
                                    fillColor: polycolor,
                                    fillOpacity:0.8

                                    });   
                            kpipoly.setMap(map);
							
        google.maps.event.addListener(kpipoly, "mousemove", function(event)
		{
        marker.setPosition(event.latLng);
        marker.setVisible(true);
	    cellOutageCounter = 0 ;
		
		setInterval(function(){show_Outage(cellDown[cellOutageCounter],cellLongDown[cellOutageCounter],cellLatDown[cellOutageCounter],Azimuth,cellKpiDown[cellOutageCounter])},1000);
		
		//alert(this.a);
         });
      google.maps.event.addListener(kpipoly, "mouseout", function(event) {
        marker.setVisible(false);
      }); 
                        });
            
            }
           });
}

function show_Outage(cell,Longitude,Latitude,Azimuth,kpi)
{
   // alert(cell);
    //alert(Longitude); alert(Latitude); alert(Azimuth); alert(kpi);
    console.log(cellOutageCounter);
	
                if(kpi!==0)
				{
					var lat_outage=Latitude;
					var long_outage=Longitude;
					var azi_outage=Azimuth;
					var latlng_outage = new google.maps.LatLng(lat_outage,long_outage);
                    map.setCenter(latlng_outage);
					map.setZoom(15);
					zoom_msg = 'CellDown: '  + cell;
				}
                                 
    cellOutageCounter++; 
	
	if( cellCounter == cellOutageCounter)
	{
	cellOutageCounter = 0; 
	}
	
}
 function getPolygon()
{
    
	northWest_lat = map.getBounds().getNorthEast().lat();
	northWest_lng = map.getBounds().getSouthWest().lng();
			
	southWest_lat  = map.getBounds().getSouthWest().lat();
	southWest_lng = map.getBounds().getSouthWest().lng();
					
	northEast_lat = map.getBounds().getNorthEast().lat();
	northEast_lng = map.getBounds().getNorthEast().lng();
					
	southEast_lat = map.getBounds().getSouthWest().lat();
	southEast_lng = map.getBounds().getNorthEast().lng();

	
        polygon_string = "'POLYGON((" + northWest_lng + " " + northWest_lat + ", " + 
		  southWest_lng + " " + southWest_lat + "," + southEast_lng + " " + southEast_lat + ", " +
		  northEast_lng + " " + northEast_lat + ", " +
		  northWest_lng + " " + northWest_lat + "))'";
	//alert(polygon_string);
}
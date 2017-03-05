
// Change the text for on/off switches
var txt_on = 'On';
var txt_off = 'Off';
var txt_closed = 'Fermée';
var txt_open = 'Ouverte';
var txt_sunboth='Soleil';
var txt_sunset='Coucher soleil';
var txt_sunrise='Lever soleil';
var days = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
var months = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"];

// Change the text displayed in PopUps
var txt_switch_on = '\'Switch On\'';
var txt_switch_off = '\'Switch Off\'';
var txt_blind_up = '\'Ouverture\'';
var txt_blind_down = '\'Fermeture\'';
var txt_blind_stop = '\'Arrêt\'';
var txt_wrong_code = 'Mot de pass erroné';

// Change backgrounds images,size and brightness
var bg_day = '';									// image de fond le jour, laisser vide pour fond noir
var bg_night = '';									// image de fond la nuit, laisser vide pour fond noir
var bg_day_spring = 'wallpaper/spring_day.jpg';		// image de fond pour la saison printemps
var bg_night_spring = 'wallpaper/spring_night.jpg';
var bg_day_summer = 'wallpaper/summer_day.jpg';		// image de fond pour la saison été
var bg_night_summer = 'wallpaper/summer_night.jpg';
var bg_day_autumn = 'wallpaper/autumn_day.png';		// image de fond pour la saison automne
var bg_night_autumn = 'wallpaper/autumn_night.jpg';
var bg_day_winter = 'wallpaper/winter_day.jpg';		// image de fond pour la saison hiver
var bg_night_winter = 'wallpaper/winter_night.jpg';
var bg_size = 'cover';								// taille de l'image de fond (ex: '1024px 768px') 'cover' : "couvre" au mieux tout le fond.
var bg_dayBright = 0.5;								// luminosité du fond le jour (0=normal 1=noir)
var bg_nightBright = 0.7;							// luminosité du fond la nuit (0=normal 1=noir) (0=normal 1=noir)

// Change the timeout of the PopUp
var switch_timeout = 0;						// durée d'affichage (en milisecondes)  [ 0 = désactivée ]
var wrongCode_timeout = 1500;				// durée d'affichage (en milisecondes)
var fad_Duration = 200;						// durée de l'animation (en milisecondes)  [ 0 = désactivée ]

// Special items
var city = 'Malzéville';					// localité pour la popup météo option 0,1,2,3 (lors du clic sur l'icon météo) cf http://www.prevision-meteo.ch/
var place = 'France/Lorraine/Malzéville/';	// localité pour la popup météo option 4 (lors du clic sur l'icon météo) cf http://www.yr.no/
var blink = true;							// faire clignoter les valeurs en alarme (true/false)
var showMonth = false;						// affichage du mois dans la date (true/false)

// Swipe options
var speed = 300;							// durée de l'animation (en milisecondes)
var delai = 60000;							// défilement automatique, temps avant changement de page (en milisecondes)
var direction = 'index';						// si delai est différent de 0, choix d'aller à la page suivante ou de revenir à la première page ('next'/'index')

// Display
var connectTimeout = 3000;					// durée avant d'afficher un domoticz offline (en millisecondes)
var refresh = 8000;							// temps entre 2 rafraîchissements (en millisecondes)
var snow = false;							// ajout effet chute de neige..

// Debug
var debug = true;							// affichage des infos de debug dans la console (true/false)

// ############################################################################################################
// #### vvvvv   USER VALUES below vvvvv   #######
// ############################################################################################################


        $.roomplan = 0;           // define roomplan in Domoticz and create items below. (0 = all devices, not limited to a roomplan)
		
		//$.domoticzurl = "http://192.168.1.6:8080";	// url de connection à domoticz (ex: http://paul:ochon@toto.com:8765)
		$.domoticzurl = location.protocol + "//" + location.host;		// auto detect (location.protocol + "//paul:ochon@" + location.host)
	
        $.PagesList = [
		
			// ['html page name (location must be in 'monitor/pages/')','menu icon name (location must be in 'monitor/icons/menu/')],
			
				['slideshow.html'], 
				['clock.html','clock.png'],
				['temp.html','chauffage.png'],
				['chambre.html','chambre.png'],
				['domo.html','raspberry.png'],
				['logs.html','log.png'],
				['meteo.html','meteo.png'],
				['iframe.html','domoticz.png'],
			//	['agenda.html','agenda.png'],
			//	['pluie.html','pluie.png'],
			//	['page1.html','light1.png'],
			//	['page2.html','light2.png'],
			//	['page3.html','light3.png'],
			//	['page4.html','light4.png'],
			//	['page5.html','chauffage.png'],	
			//	['trafic.html','map.png'],			
		
		[]];
		
		
        $.PageArray = [
		
			// clock page
			//	['idx','value','cellule','description','1=lastseen 2=icon 3=both ou J+x(popup météo)','pas de thermostat','override css','Alarme ou valeur max de thermostat'],
				['Exterieur','Temp','clock1',''],																// températures exterieure
				['Exterieur2','Chill','desc_clock1','','','','font-size:200%',''],								// Températures exterieure ressentie
				['Exterieur','ForecastStr','clock2',''],														// icon météo (idx du capteur de température extérieur virtuel Weather Underground)
				['0','SunBoth','desc_clock2','','','','color:#F2DDB3;font-size:19px;font-weight:bold'],			// heures soleil dans la description de la cellule clock2
			 	['Domoticz Security Panel','Status','clock3','','2'],											//
				['0','Hide','clock4',''],																		//
				['0','Hide','clock5',''],																		//
				['0','Hide','clock7',''],																		//
				['0','Hide','clock6',''],																		//
				['0','Hide','clock8',''],																		//
			//	['0','Hide','clock9',''],																		// Info du jour
				['0','Hide','clock10',''],																		//
				['0','Hide','clock11',''],																		//
				['0','Hide','clock12',''],																		//
				['0','Hide','clock13',''],																		//
				['0','Hide','clock14',''],																		//
				['0','MonthYear','clock15','','','','color:#3A5486;font-size:150%'],							// Mois et Annee
				['0','Clock','clock16','','','','color:#3A5486;font-size:100%'],								// heure et date
				['0','Hide','clock17',''],																		//
				['0','Hide','clock18',''],																		//
				['0','Hide','clock19',''],																		//
				['0','Hide','clock20',''],																		//
				['0','Hide','clock21',''],																		//
			
			// meteo
			//	['idx','value','cellule','description','1=lastseen 2=icon 3=both ou J+x(popup météo)','pas de thermostat','override css','Alarme ou valeur max de thermostat'],
				['Vigilance Meteo','Level','meteo1','','2','',''],												// Vigilance Météo Logo
				['Vigilance Meteo','Data','desc_meteo1','','','',''],											// Vigilance Météo texte
				['Exterieur','ForecastStr','meteo3','','','','',''],											// icon météo (idx du capteur de température extérieur virtuel Weather Underground)
				['0','Clock','desc_meteo3','','','','color:#F1E9A4;font-family:mekar_script'],					// heure et date
				
            // temp
			//	['idx','value','cellule','description','1=lastseen 2=icon 3=both ou J+x(popup météo)','pas de thermostat','override css','Alarme ou valeur max de thermostat'],
				['Exterieur','ForecastStr','temp1','Extérieur','','','',''],									// Icon météo 
                ['Exterieur','Humidity','temp1a','','','','font-size:80%;color:#EBF4F7',''],					// Humidité Exterieur
                ['Exterieur','Temp','temp1b','','','','',''],													// Temperature Exterieur
				['Exterieur','Barometer','temp1c','','','','font-size:80%;color:#EBF4F7',''],					// Barométre Exterieur
                ['Exterieur2','DirectionStr','temp1d','','','','font-size:80%;color:#EBF4F7',''],				// direction du vent
                ['Exterieur2','Speed','temp1e','','','','font-size:80%;color:#EBF4F7',''],						// vitesse du vent
				['Exterieur','HumidityStatus','temp1f','','','','font-size:80%;color:#88B496',''],				// Humidité Status Exterieur
				['Pluie','Data','temp1g','','','','font-size:30%;color:#EBF4F7',''],							// Pluie
				['Salon','Temp','temp2','','','','',''],														// Temperature Interieur
				['0','Text','desc_temp2','Interieur','','','',''],												//
                ['0','Humidity','temp2a','','','','font-size:80%;color:#EBF4F7',''],							// Humidité Interieur
				['0','SetPoint','temp2b','Interieur','','0.5','color:#72DDEA','23'],							// Consigne
				['0','Hide','temp2c','','','','',''],															//
                ['0','Hide','temp2d','','','','',''],															//
				['0','Hide','temp2e','','','','',''],															//
                ['0','Hide','temp2f','','','','',''],															//
				['Chauffage','Level','temp2g','Chauffage','2','','',''],										// Mode Chauffage
          		['0','Hide','temp3','','','','',''],															//
          		['0','Hide','temp4','','','','',''],															//
          		['Refrigerateur','Temp','temp5','Réfrigérateur','','','','x < 2 || x > 6'],						// Temperature Réfrigérateur
				['0','Hide','temp6','','','','',''],															//
				['0','Hide','temp7','','','','',''],															//
				['0','Hide','temp8','','','','',''],															//
				['0','Hide','temp9','','','','',''],															//
				['Congelateur','Temp','temp10','Congélateur','','','','x < -20 || x > -16'], 					// Temperature Congélateur
				['0','Hide','temp11','','','','',''],															//
				['0','Hide','temp12','','','','',''],															//
				['0','Hide','temp13','','','','',''],															//
				['0','Hide','temp14','','','','',''],															//
				['0','Hide','temp15','','','','',''],															//
				['0','Hide','temp16','','','','',''],															//
				['0','Hide','temp17','','','','',''],															//
				['0','Hide','temp18','','','','',''],															//
				['0','Hide','temp19','','','','',''],															//
				['0','Hide','temp20','','','','',''],															//
				['0','Hide','temp21','','','','',''],															//
				['0','Hide','temp22','','','','',''],															//
				
			
			// Chambre
			//	['idx','value','cellule','description','1=lastseen 2=icon 3=both ou J+x(popup météo)','pas de thermostat','override css','Alarme ou valeur max de thermostat'],
				['0','','chambre1','','','','',''],																//
				['0','Text','desc_chambre1','Chambre','','','',''],												//
            	['Volet Chambre','Level','chambre1a','Volet','','','',''],										// Volet Chambre
            //	['0','','chambre1b','','','','',''],															// Lampe Tout la chambre 
				['Fenetre Chambre','Status','chambre1c','Fenetre','2','','',''],								// Fenetre Chambre
				['0','','chambre1d','','','','',''],														//
                ['0','','chambre1e','','','','',''],														//
				['Mode Volet Chambre','Level','chambre1f','Mode Volet','','','font-size:50%;color:#EBF4F7',''], //Mode Volet Chambre
				['0','','chambre1g','','','','',''],														//
				//['0','Hide','chambre2','','','','',''],														// Reveil Chris
          		['0','Hide','chambre3','','','','',''],															//
          		//['0','Hide','chambre4','','','','',''],														// Reveil General
          		['0','Hide','chambre5','','','','',''],															//			
				//['0','Hide','chambre6','','','','',''],														// Reveil Julie
          		['Chevet Chris','Status','chambre7','Chevet Chris','2','','',''],								// Lamp chevet Chris
				['0','Hide','chambre8','','','','',''],															//
          		['Dressing','Status','chambre9','Dressing','2','','',''],										// Lamp dressing	
				['0','Hide','chambre10','','','','',''],														//
          		['Chevet Julie','Status','chambre11','Chevet Julie','2','','',''],								// Lamp chevet Julie
				['0','Hide','chambre12','','','','',''],														//
          		['0','Hide','chambre13','','','','',''],														//	
				['0','Hide','chambre14','','','','',''],														//
          		['0','Hide','chambre15','','','','',''],														//	
				['0','Hide','chambre16','','','','',''],														//
          		['0','Hide','chambre17','','','','',''],														//	
				['0','Hide','chambre18','','','','',''],														//
          		['0','Hide','chambre19','','','','',''],														//	
				['0','Hide','chambre20','','','','',''],														//
          		['0','Hide','chambre21','','','','',''],														//	

				
			//page 4
			//	['idx','value','cellule','description','1=lastseen 2=icon 3=both ou J+x(popup météo)','pas de thermostat','override css','Alarme ou valeur max de thermostat'],
				['0','','cell4_1','','','','',''],																//
				//['0','','cell4_1a','','','','',''],															//
				//['0','','cell4_1b','','','','',''],															//
				['0','','cell4_2','','','','',''],																//
				//['0','','cell4_2a','','','','',''],															//
				//['0','','cell4_2b','','','','',''],															//
				['0','','cell4_3','','','','',''],																//
				['0','','cell4_4','','','','',''],																//
				//['0','','cell4_4a','','','','',''],															//
				//['0','','cell4_4b','','','','',''],															//
          		['0','','cell4_5','','','','',''],																//
				//['0','','cell4_5a','','','','',''],															//
				//['0','','cell4_5b','','','','',''],															//
                ['0','','cell4_6','','','','',''],																//
				['0','','cell4_7','','','','',''],																//
				['0','','cell4_8','','','','',''],																//
				['0','','cell4_9','','','','',''],																//
				['0','','cell4_10','','','','',''],																//
				['0','','cell4_11','','','','',''],																//
				['0','','cell4_12','','','','',''],																//
				['0','','cell4_13','','','','',''],																//
				['0','','cell4_14','','','','',''],																//
				['0','','cell4_15','','','','',''],																//
				['0','','cell4_16','','','','',''],																//
				['0','','cell4_17','','','','',''],																//
				['0','','cell4_18','','','','',''],																//
				['0','','cell4_19','','','','',''],																//
				['0','','cell4_20','','','','',''],																//
				['0','','cell4_21','','','','',''],																//
				['0','','cell4_22','','','','',''],																//
				['0','','cell4_23','','','','',''],																//
				['0','','cell4_24','','','','',''],																//
				['0','','cell4_25','','','','',''],																//
				['0','','cell4_26','','','','',''],																//  

			// page 5
			//	['idx','value','cellule','description','1=lastseen 2=icon 3=both ou J+x(popup météo)','pas de thermostat','override css','Alarme ou valeur max de thermostat'],
				['0','','cell5_1','','','','',''],																//
                ['0','','cell5_1a','','','','',''],																//
                ['0','','cell5_1b','','','','',''],																//
				['0','','cell5_1c','','','','',''],																//
                ['0','','cell5_1d','','','','',''],																//
                ['0','','cell5_1e','','','','',''],																//
				['0','','cell5_1f','','','','',''],																//
				['0','','cell5_1g','','','','',''],																//
				['0','','cell5_2','','','','',''],																//
                ['0','','cell5_2a','','','','',''],																//
                ['0','','cell5_2b','','','','',''],																//
				['0','','cell5_2c','','','','',''],																//
                ['0','','cell5_2d','','','','',''],																//
                ['0','','cell5_2e','','','','',''],																//
				['0','','cell5_2f','','','','',''],																//
				['0','','cell5_2g','','','','',''],																//
				['0','','cell5_3','','','','',''],																//
                ['0','','cell5_3a','','','','',''],																//
                ['0','','cell5_3b','','','','',''],																//
				['0','','cell5_3c','','','','',''],																//
                ['0','','cell5_3d','','','','',''],																//
                ['0','','cell5_3e','','','','',''],																//
				['0','','cell5_3f','','','','',''],																//
				['0','','cell5_3g','','','','',''],																//
				['0','','cell5_4','','','','',''],																//
                ['0','','cell5_4a','','','','',''],																//
                ['0','','cell5_4b','','','','',''],																//
				['0','','cell5_4c','','','','',''],																//
                ['0','','cell5_4d','','','','',''],																//
                ['0','','cell5_4e','','','','',''],																//
				['0','','cell5_4f','','','','',''],																//
				['0','','cell5_4g','','','','',''],																//
				['0','','cell5_5','','','','',''],																//
				['0','','cell5_6','','','','',''], 																//
          		['0','','cell5_7','','','','',''],																//
          		['0','','cell5_8','','','','',''],																//
          		['0','','cell5_9','','','','',''],																//

			//domo
			//	['idx','value','cellule','description','1=lastseen 2=icon 3=both ou J+x(popup météo)','pas de thermostat','override css','Alarme ou valeur max de thermostat'],
				['0','Hide','domo1','','','','',''],															// 
				['0','Hide','domo2','','','','',''],															//
				['Raspi','Temp','domo3','Raspberry','','','',''],												// Temperature Raspberry
				['0','Hide','domo4','','','','',''],															// 
          		['0','Hide','domo5','','','','',''],															//
                ['0','Hide','domo6','','','','',''],															//
				['Raspi CPU','Data','domo7','CPU','','','color:#EBF4F7',''],									// CPU Raspberry
				['0','Hide','domo8','','','','',''],															//
				//['0','Hide','domo9','','','','',''],															// Ip public
				['0','Hide','domo10','','','','',''],															//
				['0','Hide','domo11','','','','',''],															//
				['Raspi Memory','Data','domo12','Memory','','','color:#EBF4F7',''],								// Memory Raspberry
				['0','Hide','domo13','','','','',''],															//
				['PING','Data','domo14','Ping','','','color:#EBF4F7',''],										// Ping
				['0','Hide','domo15','','','','',''],															//
				['0','Hide','domo16','','','','',''],															//
				['Raspi SD/boot','Data','domo17','SD/boot','','','color:#EBF4F7',''],							// SD/boot Raspberry
				['0','Hide','domo18','','','','',''],															//
				['DOWNLOAD','Data','domo19','Download','','','color:#EBF4F7',''],								// Download
				['0','Hide','domo20','','','','',''],															//
				['0','Hide','domo21','','','','',''],															//
				['Raspi SD/root','Data','domo22','SD/root','','','color:#EBF4F7',''],							// HDD Raspberry
				['0','Hide','domo23','','','','',''],															//
				['0','Hide','domo24','','','','',''],															//
				['0','Date','domo25','','','','font-size:50%;color:#F1E9A4;font-family:mekar_script',''],		// Date
				['UPLOAD','Data','domo26','Upload','','','color:#EBF4F7',''],									// Upload
				
				
        []];
        $.PageArray_Scenes = [		// placez ci dessous vos groupes et scènes
            
			//	['idx','value','cellule','description','icon name (ex: Light, Blinds, WallSocket, Generic,..)','override css'],
           
                ['Chambre','Status','chambre1b','Toute la Chambre','Light',''],							// tout la chambre chambre
                ['0','','','','',''],																	//
                ['0','','','','',''],																	//
			
        []];
		$.PageArray_UserVariable = [      // placez ci dessous vos userVariable
            
			//['idx','value','cellule','description','override css'],
           
                ['Info_du_jour','Value','clock9','','color:#e77800'],									// Info du jour
				['IP_PUBLIC','Value','domo9','IP Public','color:#EBF4F7;font-size:200%'],				// Ip public
				['Reveil_Chris','Value','chambre2','Reveil Chris','color:#EBF4F7'],						// Reveil Chris
				['Reveil_Event','Value','chambre4','Reveil Event','color:#EBF4F7'],						// Reveil Event
				['Reveil_Julie','Value','chambre6','Reveil Julie','color:#EBF4F7'],						// Reveil Julie
				['Pluie à 10mn','Value','meteo6','Pluie à 10mn','font-size:30%'],  
				['Pluie à 20mn','Value','meteo7','Pluie à 20mn','font-size:30%'],   
				['Pluie à 30mn','Value','meteo8','Pluie à 30mn','font-size:30%'],
				['Pluie à 40mn','Value','meteo9','Pluie à 40mn','font-size:30%'],
				['Pluie à 50mn','Value','meteo10','Pluie à 50mn','font-size:30%'],
				['Pluie à 60mn','Value','meteo11','Pluie à 60mn','font-size:30%'],
				['0','','','',''],																		//
          
        []];
		

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	

		// MQTT
		
		
		// called when a message arrives
		function onMessageArrived(message) {  
			console.log('%cMQTT Message Arrived:','color: #c44800','\n',message.payloadString);  
  
			message = JSON.parse(message.payloadString);  
  
  
  
			switch(message.name) { // filtre sur le nom du dispositif  
			  
			  
		////////////////////////////////////////////////////////////////////////////////	  
					  
			// afficher une page précise suivant le choix d'un switch sélecteur
			case "page": // nom du switch sélecteur
				
				if (message.svalue1 == 0)   // sélecteur à 0 % 
				   mySwipe.slide(0);   // vers page 0
				if (message.svalue1 == 10)   // sélecteur à 10 % 
				   mySwipe.slide(1);   // vers page 1
				if (message.svalue1 == 20)
				   mySwipe.slide(2);   // vers page 2
				if (message.svalue1 == 30)
				   mySwipe.slide(3);   // vers page 3
				if (message.svalue1 == 40)
				   mySwipe.slide(4);   // vers page 4
				if (message.svalue1 == 50) 
				   mySwipe.slide(5);   // vers page 5
				if (message.svalue1 == 60)
				   mySwipe.slide(6);   // vers page 6
				if (message.svalue1 == 70)
				   mySwipe.slide(7);   // vers page 7
				if (message.svalue1 == 80)
				   mySwipe.slide(8);   // vers page 8
				if (message.svalue1 == 90)
				   mySwipe.slide(9);   // vers page 9
				if (message.svalue1 == 100)
				   mySwipe.slide(10);   // vers page 10
				   
				break; 
						  
		////////////////////////////////////////////////////////////////////////////////  
					  
			// Sonnette (Caméra en grand + Sonnerie)
			case "Sonnette": // nom du bouton de la télécommande
			
				var oAudio = document.getElementById('myaudio');
				if (message.nvalue == 1){		// status On 
					oAudio.src = "sounds/sonnette.mp3";
					oAudio.play();
					var source = "http://www.saintveranmeteo.eu/villagesaintveranwebcam.jpg";
					$('#popup_camera').html('<img src='+source+' >');	// charge le flux dans la popup caméra
					lightbox_open('camera', 25000);	// afficher la popup 25 secondes 
				}
				if (message.nvalue == 0)		// status Off
					lightbox_close('camera');	// fermer la popup
					
				break;		  
  
		////////////////////////////////////////////////////////////////////////////////  
						  
			// annonce vocale  
			case "tts": // nom du widget text  
								  
				var text = message.svalue1;  
				var oAudio = document.getElementById('myaudio'); 
				var launched = false;  
				oAudio.src = "sounds/Arpeggio.ogg";	// ding dong d'alerte  
				oAudio.play();
 				oAudio.onended = function() {  
									if ( !launched ) {  
										launched = true;  
										oAudio.src = "http://www.voxygen.fr/sites/all/modules/voxygen_voices/assets/proxy/index.php?method=redirect&text="+text+"&voice=Fabienne";  
										oAudio.play();  
									}  
				}
				
				break;	  						  
						  
			}   
		    
		}  	      

// ############################################################################################################
// #### ^^^^^   USER VALUES above ^^^^^   #######
// ############################################################################################################

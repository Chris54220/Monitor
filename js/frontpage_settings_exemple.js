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
var txt_switch_protected = '\'Interdit\'';
var txt_switch_on = '\'Switch On\'';
var txt_switch_off = '\'Switch Off\'';
var txt_blind_up = '\'Ouverture\'';
var txt_blind_down = '\'Fermeture\'';
var txt_blind_stop = '\'Arrêt\'';

// Change backgrounds images,size and brightness
var bg_day = 'Jour.jpg';					// image de fond le jour, laisser vide pour fond noir
var bg_night = 'Nuit.jpg';					// image de fond la nuit, laisser vide pour fond noir
var bg_day_spring = 'PrintempsJour.jpg';	// image de fond pour la saison printemps
var bg_night_spring = 'PrintempsNuit.jpg';
var bg_day_summer = 'EteJour.jpg';			// image de fond pour la saison été
var bg_night_summer = 'EteNuit.jpg';
var bg_day_autumn = 'AutomneJour.jpg';		// image de fond pour la saison automne
var bg_night_autumn = 'AutomneNuit.jpg';
var bg_day_winter = 'HiverJour.jpg';		// image de fond pour la saison hiver
var bg_night_winter = 'HiverNuit.jpg';
var bg_size = 'cover';						// taille de l'image de fond (ex: '1024px 768px') 'cover' : "couvre" au mieux tout le fond.
var bg_dayBright = 0.5;						// luminosité du fond le jour (0=normal 1=noir)
var bg_nightBright = 0.7;					// luminosité du fond la nuit (0=normal 1=noir)

// Change colors of temps
var T35 = '#FF0000';						// couleur de la température à 35°C
var T34 = '#FE1400';
var T33 = '#FD2800';
var T32 = '#FD3C00';
var T31 = '#FC5000';
var T30 = '#FC6500';
var T29 = '#FC6F0A';
var T28 = '#FC7A14';
var T27 = '#FC841E';
var T26 = '#FC8F28';
var T25 = '#FC9A32';
var T24 = '#FCA43C';
var T23 = '#FCAF46';
var T22 = '#FCB950';
var T21 = '#FCC45A';
var T20 = '#FCCF65';						// couleur de la température à 20°C
var T19 = '#FCD270';
var T18 = '#FDD67B';
var T17 = '#FDDA87';
var T16 = '#FEDE92';
var T15 = '#FFE29E';
var T14 = '#F8E5A1';
var T13 = '#F1E9A4';
var T12 = '#EAEDA7';
var T11 = '#E3F1AA';
var T10 = '#DDF5AE';
var T09 = '#D3F5B7';
var T08 = '#CAF5C0';
var T07 = '#C0F5C9';
var T06 = '#B7F5D2';
var T05 = '#AEF5DC';
var T04 = '#AEF1E1';
var T03 = '#AEEDE6';
var T02 = '#AEEAEB';
var T01 = '#AEE6F0';
var T00 = '#AEE3F5';
var T000 = '#EBF4F7';						// couleur de la température sous 0°C

// Change the timeout of the PopUp
var switch_protected_timeout = '1000';		// durée d'affichage (en milisecondes)
var switch_timeout = '1000';
var fad_Duration = 200;						// durée de l'animation (en milisecondes)

// Special items
var city = 'Malzéville';					// localité pour la popup météo option 0,1,2,3 (lors du clic sur l'icon météo) cf http://www.prevision-meteo.ch/
var place = 'France/Lorraine/Malzéville/';	// localité pour la popup météo option 4 (lors du clic sur l'icon météo) cf http://www.yr.no/
var blink = true;							// faire clignoter les valeurs en alarme (true/false)
var showMonth = true;						// affichage du mois dans la date (true/false)

// Swipe options
var speed = 300;							// durée de l'animation (en milisecondes)
var delai = 60000;							// défilement automatique, temps avant changement de page (en milisecondes)
var direction = 'index';					// si delai est différent de 0, choix d'aller à la page suivante ou de revenir à la première page ('next'/'index')

// Display
var refresh = 8000;							// temps entre 2 rafraîchissements (en millisecondes)


// ############################################################################################################
// #### vvvvv   USER VALUES below vvvvv   #######
// ############################################################################################################


        $.roomplan = 0;           // define roomplan in Domoticz and create items below. (0 = all devices, not limited to a roomplan)
		
		//$.domoticzurl = "http://192.168.1.6:8080";	// url de connection à domoticz (ex: http://paul:ochon@toto.com:8765)
		$.domoticzurl = location.protocol + "//" + location.host;		// auto detect (location.protocol + "//paul:ochon@" + location.host)
	
        $.PageArray = [
		
			// clock page
			//	['idx','value','cellule','description','1=lastseen 2=icon 3=both ou J+x(popup météo)','pas de thermostat','override css','Alarme ou valeur max de thermostat'],
				['Exterieur','Temp','clock1',''],																// températures exterieure
				['Exterieur2','Chill','desc_clock1','','','','font-size:200%',''],								// Températures exterieure ressentie
				['Exterieur','ForecastStr','clock2',''],														// icon météo (idx du capteur de température extérieur virtuel Weather Underground)
				['0','SunBoth','desc_clock2','','','','color:#F2DDB3;font-size:19px;font-weight:bold'],			// heures soleil dans la description de la cellule clock2
			 	['Volet','Level','clock3','Volet','','','font-size:80%;color:#EBF4F7'],							// Mode Volet
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
				['0','Hide','clock15',''],																		//
				['0','Clock','clock16','','','','color:#3A5486;font-size:100%'],								// heure et date
				['0','Hide','clock17',''],																		//
				['0','Hide','clock18',''],																		//
				['0','Hide','clock19',''],																		//
				['0','Hide','clock20',''],																		//
				['0','Hide','clock21',''],																		//
			
			// meteo
			//	['idx','value','cellule','description','1=lastseen 2=icon 3=both ou J+x(popup météo)','pas de thermostat','override css','Alarme ou valeur max de thermostat'],
				['Vigilance Meteo','Level','meteo1','','2','',''],												//Vigilance Météo Logo
				['Vigilance Meteo','Data','desc_meteo1','','','',''],											//Vigilance Météo texte
            	['Exterieur','Temp','meteo3','','','','',''],													// Températures exterieure
				['Exterieur','HumidityStatus','desc_meteo3','','','','color:#88B496;font-size:150%',''],		// Humidité Status Exterieur
				['Exterieur','ForecastStr','meteo25','','','','',''],											// icon météo (idx du capteur de température extérieur virtuel Weather Underground)
				['0','Clock','desc_meteo25','','','','color:#F1E9A4;font-family:mekar_script'],					// heure et date
				['Pluie 1h','Data','meteo6','Pluie 1h','','','color:#F1E9A4'],									// Probabilite de Pluie dans 1h
				['Pluie 2h','Data','meteo7','Pluie 2h','','','color:#F1E9A4'],									// Probabilite de Pluie dans 2h
				['Pluie 3h','Data','meteo8','Pluie 3h','','','color:#F1E9A4'],									// Probabilite de Pluie dans 3h
				['Pluie 4h','Data','meteo9','Pluie 4h','','','color:#F1E9A4'],									// Probabilite de Pluie dans 4h
            	['Pluie 5h','Data','meteo10','Pluie 5h','','','color:#F1E9A4'],									// Probabilite de Pluie dans 5h
				['Pluie 6h','Data','meteo11','Pluie 6h','','','color:#F1E9A4'],									// Probabilite de Pluie dans 6h
				
            // temp
			//	['idx','value','cellule','description','1=lastseen 2=icon 3=both ou J+x(popup météo)','pas de thermostat','override css','Alarme ou valeur max de thermostat'],
				['Exterieur','ForecastStr','temp1','Extérieur','','','',''],									// Icon météo 
                ['Exterieur','Humidity','temp1a','','','','font-size:80%;color:#EBF4F7',''],					// Humidité Exterieur
                ['Exterieur','Temp','temp1b','','','','',''],													// Temperature Exterieur
				['Exterieur','Barometer','temp1c','','','','font-size:80%;color:#EBF4F7',''],					// Barométre Exterieur
                ['Exterieur2','DirectionStr','temp1d','','','','font-size:80%;color:#EBF4F7',''],				// direction du vent
                ['Exterieur2','Speed','temp1e','','','','font-size:80%;color:#EBF4F7',''],						// vitesse du vent
				['Exterieur','HumidityStatus','temp1f','','','','font-size:80%;color:#88B496',''],				// Humidité Status Exterieur
				['Pluie 1h','Data','temp1g','','','','font-size:80%;color:#EBF4F7','x > 65'],					// Probabilite de Pluie dans 1h
				['0','Temp','temp2','','','','',''],															// Temperature Interieur
				['0','Text','desc_temp2','Interieur','','','',''],												//
                ['0','Humidity','temp2a','','','','font-size:80%;color:#EBF4F7',''],							// Humidité Interieur
				['0','SetPoint','temp2b','Interieur','','0.5','color:#72DDEA','23'],							// Consigne
				['0','Hide','temp2c','','','','',''],															//
                ['0','Hide','temp2d','','','','',''],															//
				['0','Hide','temp2e','','','','',''],															//
                ['0','Hide','temp2f','','','','',''],															//
				['Chauffage','Level','temp2g','Chauffage','','','font-size:50%;color:#EBF4F7',''],				// Mode Chauffage
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
				['0','Hide','chambre1d','','','','',''],														//
                ['0','Hide','chambre1e','','','','',''],														//
				['0','Hide','chambre1f','','','','',''], 														//
				['0','Hide','chambre1g','','','','',''],														//
				['Chevet Chris','Status','chambre2','Chevet Chris','2','','',''],								// Lamp chevet Chris
          		['0','Hide','chambre3','','','','',''],															//
          		['Dressing','Status','chambre4','Dressing','2','','',''],										// Lamp dressing
          		['0','Hide','chambre5','','','','',''],															//			
				['Chevet Julie','Status','chambre6','Chevet Julie','2','','',''],								// Lamp chevet Julie
          		['0','Hide','chambre7','','','','',''],															//	
				['0','Hide','chambre8','','','','',''],															//
          		['0','Hide','chambre9','','','','',''],															//	
				['0','Hide','chambre10','','','','',''],														//
          		['0','Hide','chambre11','','','','',''],														//	
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
				['Reboot','Status','domo2','Reboot','2','','',''],												// Raspberry Reboot
				['Raspi','Temp','domo3','Raspberry','','','',''],												// Temperature Raspberry
				['0','Hide','domo4','','','','',''],															// 
          		['0','Hide','domo5','','','','',''],															//
                ['0','Hide','domo6','','','','',''],															//
				['Raspi CPU','Data','domo7','CPU','','','color:#EBF4F7',''],									// CPU Raspberry
				['0','Hide','domo8','','','','',''],															//
				['0','Hide','domo9','','','','',''],															//
				['0','Hide','domo10','','','','',''],															//
				['0','Hide','domo11','','','','',''],															//
				['Raspi Memory','Data','domo12','Memory','','','color:#EBF4F7',''],								// Memory Raspberry
				['0','Hide','domo13','','','','',''],															//
				['0','Hide','domo14','','','','',''],															//
				['0','Hide','domo15','','','','',''],															//
				['0','Hide','domo16','','','','',''],															//
				['Raspi SD/boot','Data','domo17','SD/boot','','','color:#EBF4F7',''],							// SD/boot Raspberry
				['0','Hide','domo18','','','','',''],															//
				['0','Hide','domo19','','','','',''],															//
				['0','Hide','domo20','','','','',''],															//
				['Test Son','Status','domo21','Test Son','2','','',''],											// Raspberry Test Son
				['Raspi HDD/root','Data','domo22','HDD/root','','','color:#EBF4F7',''],							// HDD Raspberry
				['0','Hide','domo23','','','','',''],															//
				['0','Hide','domo24','','','','',''],															//
				['0','Date','domo25','','','','font-size:50%;color:#F1E9A4;font-family:mekar_script',''],		// Date
				['0','Hide','domo26','','','','',''],							//
				
				
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
				['0','','','',''],																		//
				['0','','','',''],																		//
          
        []];




// ############################################################################################################
// #### ^^^^^   USER VALUES above ^^^^^   #######
// ############################################################################################################





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
var switch_timeout = '0';					// 0 PopUp desactiver / 1000 PopUp activer
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
				['0','','clock1',''],											// 
				['0','','clock2',''],											//
			 	['0','','clock3',''],											// 
				['0','','clock4',''],											//
				['0','','clock5',''],											//
				['0','','clock7',''],											//
				['0','','clock6',''],											//
				['0','','clock8',''],											//
				['0','','clock9',''],											// 
				['0','','clock10',''],											//
				['0','','clock11',''],											//
				['0','','clock12',''],											//
				['0','','clock13',''],											//
				['0','','clock14',''],											//
				['0','','clock15',''],											//
				['0','','clock16',''],											// 
				['0','','clock17',''],											//
				['0','','clock18',''],											//
				['0','','clock19',''],											//
				['0','','clock20',''],											//
				['0','','clock21',''],											//
			
			// meteo
			//	['idx','value','cellule','description','1=lastseen 2=icon 3=both ou J+x(popup météo)','pas de thermostat','override css','Alarme ou valeur max de thermostat'],
				['0','','meteo1','','','',''],									//
            	['0','','meteo3','','','',''],									//
				['0','','meteo25','','','',''],									//
				['0','','meteo6','','','',''],									//
				['0','','meteo7','','','',''],									// 
				['0','','meteo8','','','',''],									//
				['0','','meteo9','','','',''],									//
            	['0','','meteo10','','','',''],									//
				['0','','meteo11','','','',''],									//
				
            // temp
			//	['idx','value','cellule','description','1=lastseen 2=icon 3=both ou J+x(popup météo)','pas de thermostat','override css','Alarme ou valeur max de thermostat'],
				['0','','temp1','','','','',''],								//
                ['0','','temp1a','','','','',''],								//
                ['0','','temp1b','','','','',''],								//
				['0','','temp1c','','','','',''],								//
                ['0','','temp1d','','','','',''],								//
                ['0','','temp1e','','','','',''],								//
				['0','','temp1f','','','','',''],								//
				['0','','temp1g','','','','',''],								//
				['0','','temp2','','','','',''],								//
                ['0','','temp2a','','','','',''],								//
				['0','','temp2b','','','','',''],								//
				['0','','temp2c','','','','',''],								//
                ['0','','temp2d','','','','',''],								//
				['0','','temp2e','','','','',''],								//
                ['0','','temp2f','','','','',''],								//
				['0','','temp2g','','','','',''],								//
          		['0','','temp3','','','','',''],								//
          		['0','','temp4','','','','',''],								//
          		['0','','temp5','','','','',''],								//
				['0','','temp6','','','','',''],								//
				['0','','temp7','','','','',''],								//
				['0','','temp8','','','','',''],								//
				['0','','temp9','','','','',''],								//
				['0','','temp10','','','','',''], 								//
				['0','','temp11','','','','',''],								//
				['0','','temp12','','','','',''],								//
				['0','','temp13','','','','',''],								//
				['0','','temp14','','','','',''],								//
				['0','','temp15','','','','',''],								//
				['0','','temp16','','','','',''],								//
				['0','','temp17','','','','',''],								//
				['0','','temp18','','','','',''],								//
				['0','','temp19','','','','',''],								//
				['0','','temp20','','','','',''],								//
				['0','','temp21','','','','',''],								//
				['0','','temp22','','','','',''],								//
				
			
			// Chambre
			//	['idx','value','cellule','description','1=lastseen 2=icon 3=both ou J+x(popup météo)','pas de thermostat','override css','Alarme ou valeur max de thermostat'],
				['0','','chambre1','','','','',''],								//
            	['0','','chambre1a','','','','',''],							//
            	['0','','chambre1b','','','','',''],							//
				['0','','chambre1c','','','','',''],							// 
				['0','','chambre1d','','','','',''],							//
                ['0','','chambre1e','','','','',''],							//
				['0','','chambre1f','','','','',''], 							//
				['0','','chambre1g','','','','',''],							//
				['0','','chambre2','','','','',''],								// 
          		['0','','chambre3','','','','',''],								//
          		['0','','chambre4','','','','',''],								//
          		['0','','chambre5','','','','',''],								//			
				['0','','chambre6','','','','',''],								//
          		['0','','chambre7','','','','',''],								//	
				['0','','chambre8','','','','',''],								//
          		['0','','chambre9','','','','',''],								//	
				['0','','chambre10','','','','',''],							//
          		['0','','chambre11','','','','',''],							//	
				['0','','chambre12','','','','',''],							//
          		['0','','chambre13','','','','',''],							//	
				['0','','chambre14','','','','',''],							//
          		['0','','chambre15','','','','',''],							//	
				['0','','chambre16','','','','',''],							//
          		['0','','chambre17','','','','',''],							//	
				['0','','chambre18','','','','',''],							//
          		['0','','chambre19','','','','',''],							//	
				['0','','chambre20','','','','',''],							//
          		['0','','chambre21','','','','',''],							//	

				
			//page 4
			//	['idx','value','cellule','description','1=lastseen 2=icon 3=both ou J+x(popup météo)','pas de thermostat','override css','Alarme ou valeur max de thermostat'],
				['0','','cell4_1','','','','',''],								//
				//['0','','cell4_1a','','','','',''],							//
				//['0','','cell4_1b','','','','',''],							//
				['0','','cell4_2','','','','',''],								//
				//['0','','cell4_2a','','','','',''],							//
				//['0','','cell4_2b','','','','',''],							//
				['0','','cell4_3','','','','',''],								//
				['0','','cell4_4','','','','',''],								//
				//['0','','cell4_4a','','','','',''],							//
				//['0','','cell4_4b','','','','',''],							//
          		['0','','cell4_5','','','','',''],								//
				//['0','','cell4_5a','','','','',''],							//
				//['0','','cell4_5b','','','','',''],							//
                ['0','','cell4_6','','','','',''],								//
				['0','','cell4_7','','','','',''],								//
				['0','','cell4_8','','','','',''],								//
				['0','','cell4_9','','','','',''],								//
				['0','','cell4_10','','','','',''],								//
				['0','','cell4_11','','','','',''],								//
				['0','','cell4_12','','','','',''],								//
				['0','','cell4_13','','','','',''],								//
				['0','','cell4_14','','','','',''],								//
				['0','','cell4_15','','','','',''],								//
				['0','','cell4_16','','','','',''],								//
				['0','','cell4_17','','','','',''],								//
				['0','','cell4_18','','','','',''],								//
				['0','','cell4_19','','','','',''],								//
				['0','','cell4_20','','','','',''],								//
				['0','','cell4_21','','','','',''],								//
				['0','','cell4_22','','','','',''],								//
				['0','','cell4_23','','','','',''],								//
				['0','','cell4_24','','','','',''],								//
				['0','','cell4_25','','','','',''],								//
				['0','','cell4_26','','','','',''],								//  

			// page 5
			//	['idx','value','cellule','description','1=lastseen 2=icon 3=both ou J+x(popup météo)','pas de thermostat','override css','Alarme ou valeur max de thermostat'],
				['0','','cell5_1','','','','',''],								//
                ['0','','cell5_1a','','','','',''],								//
                ['0','','cell5_1b','','','','',''],								//
				['0','','cell5_1c','','','','',''],								//
                ['0','','cell5_1d','','','','',''],								//
                ['0','','cell5_1e','','','','',''],								//
				['0','','cell5_1f','','','','',''],								//
				['0','','cell5_1g','','','','',''],								//
				['0','','cell5_2','','','','',''],								//
                ['0','','cell5_2a','','','','',''],								//
                ['0','','cell5_2b','','','','',''],								//
				['0','','cell5_2c','','','','',''],								//
                ['0','','cell5_2d','','','','',''],								//
                ['0','','cell5_2e','','','','',''],								//
				['0','','cell5_2f','','','','',''],								//
				['0','','cell5_2g','','','','',''],								//
				['0','','cell5_3','','','','',''],								//
                ['0','','cell5_3a','','','','',''],								//
                ['0','','cell5_3b','','','','',''],								//
				['0','','cell5_3c','','','','',''],								//
                ['0','','cell5_3d','','','','',''],								//
                ['0','','cell5_3e','','','','',''],								//
				['0','','cell5_3f','','','','',''],								//
				['0','','cell5_3g','','','','',''],								//
				['0','','cell5_4','','','','',''],								//
                ['0','','cell5_4a','','','','',''],								//
                ['0','','cell5_4b','','','','',''],								//
				['0','','cell5_4c','','','','',''],								//
                ['0','','cell5_4d','','','','',''],								//
                ['0','','cell5_4e','','','','',''],								//
				['0','','cell5_4f','','','','',''],								//
				['0','','cell5_4g','','','','',''],								//
				['0','','cell5_5','','','','',''],								//
				['0','','cell5_6','','','','',''], 								//
          		['0','','cell5_7','','','','',''],								//
          		['0','','cell5_8','','','','',''],								//
          		['0','','cell5_9','','','','',''],								//

			//domo
			//	['idx','value','cellule','description','1=lastseen 2=icon 3=both ou J+x(popup météo)','pas de thermostat','override css','Alarme ou valeur max de thermostat'],
				['0','','domo1','','','','',''],								// 
				['0','','domo2','','','','',''],								//
				['0','','domo3','','','','',''],								//
				['0','','domo4','','','','',''],								// 
          		['0','','domo5','','','','',''],								//
                ['0','','domo6','','','','',''],								//
				['0','','domo7','','','','',''],								//
				['0','','domo8','','','','',''],								//
				['0','','domo9','','','','',''],								//
				['0','','domo10','','','','',''],								//
				['0','','domo11','','','','',''],								//
				['0','','domo12','','','','',''],								//
				['0','','domo13','','','','',''],								//
				['0','','domo14','','','','',''],								//
				['0','','domo15','','','','',''],								//
				['0','','domo16','','','','',''],								//
				['0','','domo17','','','','',''],								//
				['0','','domo18','','','','',''],								//
				['0','','domo19','','','','',''],								//
				['0','','domo20','','','','',''],								//
				['0','','domo21','','','','',''],								//
				['0','','domo22','','','','',''],								//
				['0','','domo23','','','','',''],								//
				['0','','domo24','','','','',''],								//
				['0','','domo25','','','','',''],								// 
				['0','','domo26','','','','',''],								//
				
				
        []];
        $.PageArray_Scenes = [		// placez ci dessous vos groupes et scènes
            
			//	['idx','value','cellule','description','icon name (ex: Light, Blinds, WallSocket, Generic,..)','override css'],
           
                ['0','','','','',''],											//
                ['0','','','','',''],											//
                ['0','','','','',''],											//
			
        []];	
		$.PageArray_UserVariable = [      // placez ci dessous vos userVariable
            
			//['idx','value','cellule','description','override css'],
           
                ['0','','','',''],												//
				['0','','','',''],												//
				['0','','','',''],												//
          
        []];




// ############################################################################################################
// #### ^^^^^   USER VALUES above ^^^^^   #######
// ############################################################################################################





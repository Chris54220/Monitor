# Custom page - Domoticz

<img src="https://drive.google.com/uc?id=0BwsyidAGqsS_X0ZjVGlfQ2xqbTA"/>
<img src="https://drive.google.com/uc?id=0BwsyidAGqsS_M0hjSkZrM1M3VVE"/>
<img src="https://drive.google.com/uc?id=0BwsyidAGqsS_dzR6YnNld25WUlU"/>
<img src="https://drive.google.com/uc?id=0BwsyidAGqsS_aUhOWHI5NzkyYmM"/>
<img src="https://drive.google.com/uc?id=0BwsyidAGqsS_S25NVGc3bjZ4bWs"/>
<img src="https://drive.google.com/uc?id=0BwsyidAGqsS_dDR6UDlidjNPdTg"/>


# instal Custom

git clone https://github.com/Chris54220/Monitor.git /home/pi/domoticz/www/monitor


# Mise a jour de la Custom

cd /home/pi/domoticz/www/monitor/

mv js/frontpage_settings.js js/frontpage_settings_old.js

mv js/mqtt_settings.js js/mqtt_settings_old.js

git fetch --all

git reset --hard origin/master

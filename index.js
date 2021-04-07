const qrcode = require ("qrcode-terminal");
 momento constante = require ("momento");
 const cheerio = require ("cheerio");
 const get = require ('obtuve')
 const fs = require ("fs");
 const dl = require ("./ lib / downloadImage.js");
 const fetch = require ('búsqueda de nodo');
 const urlencode = require ("urlencode");
 const axios = require ("axios");
 const imageToBase64 = require ('imagen a base64');
 const menu = require ("./ lib / menu.js");
 const donate = require ("./ lib / donate.js");
 const info = require ("./ lib / info.js");
 //
 const BotName = 'El crack.r.informatico';  // El nombre el crack bot
 const instagramlu = 'https://instagram.com/bintang_nur_pradana';  // Tu nombre de Instagram es chocolate
 const whatsapplu = '0819-4698-3575';  // Número de Whatsapplu, estrangulamiento
 const Kapanbotactive = '24 horas ';  // ¿Cuándo estuvo activo tu bot?
 const grupch1 = 'https://chat.whatsapp.com/FsAlnxqz6y2BhCQi5ayCLG';  // OFICIAL DEL GRUPO LU 1
 const grupch2 = 'https://chat.whatsapp.com/KLW3UlFfeaH36Ucm5zRfCz';  // OFICIAL DEL GRUPO LU 2
 //
 constante
 {
    WAConexión,
    Tipo de mensaje,
    Presencia,
    MessageOptions,
    Tipo de Mimica,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconectarMode,
    ProxyAgent,
    waChatKey,
 } = require ("@ adiwajshing / baileys");
 var hora = momento (). formato ("HH: mm");

 función foreach (arr, func)
 {
    para (var i in arr)
    {
       func (i, arr [i]);
    }
 }
 const conn = nueva conexión WAC ()
 conn.on ('qr', qr =>
 {
    qrcode.generate (qr,
    {
       pequeño: cierto
    });
    console.log (`[$ {moment (). format (" HH: mm: ss ")}] Escanea tu código qr correctamente!`);
 });

 conn.on ('credenciales actualizadas', () =>
 {
    // guarda las credenciales cada vez que se actualizan
    console.log (`credenciales actualizadas!`)
    const authInfo = conn.base64EncodedAuthInfo () // obtenemos toda la información de autenticación que necesitamos para restaurar esta sesión
    fs.writeFileSync ('./ session.json', JSON.stringify (authInfo, null, '\ t')) // guarda esta información en un archivo
 })
 fs.existsSync ('./ session.json') && conn.loadAuthInfo ('./ session.json')
 // descomente la siguiente línea para hacer proxy de la conexión;  algún proxy aleatorio del que salí: https://proxyscrape.com/free-proxy-list
 //conn.connectOptions.agent = ProxyAgent ('http://1.0.180.120:8080')
 conn.connect ();

 conn.on ('user-present-update', json => console.log (`[$ (moment (). format (" HH: mm: ss ")}] => bot por @ bintang_nur_pradana`))
 conn.on ('mensaje-estado-actualización', json =>
 {
    const participant = json.participant?  '(' + json.participant + ')': '' // el participante existe cuando el mensaje es de un grupo
    console.log (`[$ {momento (). formato (" HH: mm: ss ")}] => bot por @ bintang_nur_pradana`)
 })

 conn.on ('mensaje-nuevo', async (m) =>
 {
    const messageContent = m.message
    texto constante = m.message.conversation
    let id = m.key.remoteJid
    const messageType = Object.keys (messageContent) [0] // el mensaje siempre contendrá una clave que indique qué tipo de mensaje
    let imageMessage = m.message.imageMessage;
    console.log (`[$ {moment (). format (" HH: mm: ss ")}] => Número: [$ {id.split (" @ s.whatsapp.net ") [0]}] = > $ {texto} `);


 // Grupos

 if (text.includes ("# Creategroup"))
    {
 var name = text.split ("# Creategroup") [1] .split ("- número") [0];
 var nom = text.split ("- número") [1];
 var numArray = nom.split (",");
 para (var i = 0; i <numArray.length; i ++) {
     numArray [i] = numArray [i] + "@ s.whatsapp.net";
 }
 var str = numArray.join ("");
 console.log (str)
 const group = await conn.groupCreate (nombre, cadena)
 console.log ("grupo creado con id:" + group.gid)
 conn.sendMessage (group.gid, "hola a todos", MessageType.extendedText) // saluda a todos en el grupo

 }

 // FF
 if (text.includes ("# check")) {
 var num = text.replace (/ # check /, "")
 var idn = num.replace ("0", "+ 62");

 console.log (id);
 const gg = idn+'@s.whatsapp.net '

 const existe = espera conn.isOnWhatsApp (gg)
 console.log (existe);
 conn.sendMessage (id, `$ {gg} $ {existe?" existe ":" no existe "} en WhatsApp`, MessageType.text)
 }

 if (text.includes ("# tts")) {
 const text = text.replace (/ # tts /, "")
 const gtts = (`https://rest.farzain.com/api/tts.php?id=$ {text} & apikey = O8mUD3YrHIy9KM1fMRjamw8eg`)
     conn.sendMessage (id, gtts, MessageType.text);
 }

 if (text.includes ("# say")) {
   const text = text.replace (/ # say /, "")
 conn.sendMessage (id, texto, MessageType.text)
 }

 if (text.includes ("# escribir")) {
   const text = text.replace (/ # write /, "")
 axios.get (`` https://st4rz.herokuapp.com/api/nulis?text=$ {text} `). then ((res) => {
     let result = `` Descargue el resultado usted mismo, sí, el resultado está abajo, porque si lo envía directamente el resultado es borroso \ n \ n $ {res.data.result.data} `;
     conn.sendMessage (id, resultado, MessageType.text);
 })
 }

 if (text.includes ("# ytmp3")) {
 const text = text.replace (/ # ytmp3 /, "")
 axios.get (`` http://scrap.terhambar.com/yt?link=$ {text} `) .entonces ((res) => {
     let result = `Descárguese usted mismo a través del enlace siguiente, me temo que el servidor no funciona xixi .. \ n \ nTamaño: $ {res.data.filesize} \ n \ nLink: $ {res.data.linkAudioOnly}`;
     conn.sendMessage (id, resultado, MessageType.text);
 })
 }

 if (text.includes ("# yt")) {
 const text = text.replace (/ # yt /, "")
 axios.get (`` http://scrap.terhambar.com/yt?link=$ {text} `) .entonces ((res) => {
     let result = `Descárguese usted mismo a través del enlace de abajo, me temo que el servidor no funciona xixi .. \ n \ nTamaño: $ {res.data.filesize} \ n \ nLink: $ {res.data.linkVideo}`;
     conn.sendMessage (id, resultado, MessageType.text);
 })
 }

 if (text.includes ("# fb")) {
 const text = text.replace (/ # fb /, "")
 axios.get (`https://mhankbarbar.herokuapp.com/api/epbe?url=$ {text} & apiKey = zFuV88pxcIiCWuYlwg57`) .entonces ((res) => {
     let result = `` Descárguelo usted mismo a través del enlace de abajo, me temo que el servidor no funciona xixi .. \ n \ nTítulo: $ {res.data.title} \ n \ nSize: $ {res.data.filesize} \ n \ nEnlace: $ {res.data.result} `;
     conn.sendMessage (id, resultado, MessageType.text);
 })
 }

 if (text.includes ("# ig")) {
 const text = text.replace (/ # ig /, "")
 axios.get (`` https://st4rz.herokuapp.com/api/ig?url=$ {text} `). then ((res) => {
     let result = `Descárguese usted mismo a través del enlace de abajo, me temo que el servidor no funciona xixi .. \ n \ nLink: $ {res.data.result}`;
     conn.sendMessage (id, resultado, MessageType.text);
 })
 }

 if (text.includes ("# twt")) {
 const text = text.replace (/ # twt /, "")
 axios.get (`https://mhankbarbar.herokuapp.com/api/twit?url=$ {text} & apiKey = zFuV88pxcIiCWuYlwg57`). luego ((res) => {
     let result = `` Descárguelo usted mismo a través del enlace de abajo, me temo que el servidor no funciona xixi .. \ n \ nTítulo: $ {res.data.title} \ n \ nSize: $ {res.data.filesize} \ n \ nEnlace: $ {res.data.result} `;
     conn.sendMessage (id, resultado, MessageType.text);
 })
 }

 if (text.includes ("# wiki")) {
 const text = text.replace (/ # wiki /, "")
 axios.get (`https://st4rz.herokuapp.com/api/wiki?q=$ {texto}`) .entonces ((res) => {
     let result = `Según Wikipedia: \ n \ n $ {res.data.result}`;
     conn.sendMessage (id, resultado, MessageType.text);
 })
 }

 if (text == '#help') {
 const corohelp = await get.get ('https://covid19.mathdro.id/api/countries/id') .json ()
 var fecha = nueva fecha ();
 var year = date.getFullYear ();
 var mes = fecha.getMonth ();
 var date = date.getDate ();
 var day = date.getDay ();
 var jam = date.getHours ();
 var minutes = date.getMinutes ();
 var segundos = date.getSeconds ();
 cambiar (día) {
  caso 0: días = "domingo";  descanso;
  caso 1: día = "lunes";  descanso;
  caso 2: día = "martes";  descanso;
  caso 3: día = "miércoles";  descanso;
  caso 4: día = "jueves";  descanso;
  caso 5: días = "viernes";  descanso;
  caso 6: día = "sábado";  descanso;
 }
 cambiar (mes) {
  caso 0: mes = "enero";  descanso;
  caso 1: mes = "febrero";  descanso;
  caso 2: mes = "marzo";  descanso;
  caso 3: mes = "abril";  descanso;
  caso 4: mes = "mayo";  descanso;
  caso 5: mes = "junio";  descanso;
  caso 6: mes = "julio";  descanso;
  caso 7: mes = "agosto";  descanso;
  caso 8: mes = "septiembre";  descanso;
  caso 9: mes = "octubre";  descanso;
  caso 10: mes = "noviembre";  descanso;
  caso 11: mes = "diciembre";  descanso;
 }
 var apareceDate = "FECHA:" + día + "," + fecha + "" + mes + "" + año;
 var apareceTime = "HORA:" + hora + ":" + minuto + ":" + segundos;
 conn.sendMessage (id, menu.menu (id, BotName, corohelp, showDate, showTime, Instagramlu, whatsapplu, whenbotactive, grupch1, grupch2), MessageType.text);
 }
 else if (text == '#quran') {
 axios.get ('https://api.banghasan.com/quran/format/json/acak'). then ((res) => {
     const sr = /((.*?))/gi;
     const hs = res.data.acak.id.ayat;
     const ket = `` $ {hs} `.replace (sr, '');
     let result = `[$ {ket}] $ {res.data.acak.ar.text} \ n \ n $ {res.data.acak.id.text} (QS. $ {res.data.surat.name }, Párrafo $ {ket}) `;
     conn.sendMessage (id, resultado, MessageType.text);
 })
 }
 else if (text == 'assalamualaikum') {
 conn.sendMessage (id, '3aalaikumsalam, ¿hay algo en lo que pueda ayudarlo? Si está confundido, escriba #help yes say ..', MessageType.text);
 }
 else if (texto == 'saludo') {
 conn.sendMessage (id, 'Waalaikumsalam, ¿hay algo en lo que pueda ayudarlo? Si está confundido, escriba #help yes say ..', MessageType.text);
 }
 else if (text == 'asalamualaikum') {
 conn.sendMessage (id, 'Waalaikumsalam, ¿hay algo en lo que pueda ayudarlo? Si está confundido, escriba #help yes say ..', MessageType.text);
 }
 else if (text == 'Assalamualaikum') {
 conn.sendMessage (id, 'Waalaikumsalam, ¿hay algo en lo que pueda ayudarlo? Si está confundido, escriba #help yes say ..', MessageType.text);
 }
 else if (texto == 'p') {
 conn.sendMessage (id, '¿Sí?, ¿puedo ayudarte? Si estás confundido, escribe #help yes say ..', MessageType.text);
 }
 más si (texto == 'P') {
 conn.sendMessage (id, '¿Sí?, ¿puedo ayudarte? Si estás confundido, escribe #help yes say ..', MessageType.text);
 }
 else if (texto == 'hola') {
 conn.sendMessage (id, '¿Sí?, ¿puedo ayudarte? Si estás confundido, escribe #help yes say ..', MessageType.text);
 }
 else if (texto == 'hola') {
 conn.sendMessage (id, '¿Sí?, ¿puedo ayudarte? Si estás confundido, escribe #help yes say ..', MessageType.text);
 }
 else if (text == 'woi') {
 conn.sendMessage (id, '¿Sí?, ¿puedo ayudarte? Si estás confundido, escribe #help yes say ..', MessageType.text);
 }
 más si (texto == 'woy') {
 conn.sendMessage (id, '¿Sí?, ¿puedo ayudarte? Si estás confundido, escribe #help yes say ..', MessageType.text);
 }
 else if (texto == 'hola') {
 conn.sendMessage (id, '¿Sí?, ¿puedo ayudarte? Si estás confundido, escribe #help yes say ..', MessageType.text);
 }
 else if (text == 'gan') {
 conn.sendMessage (id, '¿Sí?, ¿puedo ayudarte? Si estás confundido, escribe #help yes say ..', MessageType.text);
 }
 else if (text == 'sis') {
 conn.sendMessage (id, '¿Sí?, ¿puedo ayudarte? Si estás confundido, escribe #help yes say ..', MessageType.text);
 }
 else if (texto == 'hermano') {
 conn.sendMessage (id, '¿Sí?, ¿puedo ayudarte? Si estás confundido, escribe #help yes say ..', MessageType.text);
 }
 else if (text == 'min') {
 conn.sendMessage (id, '¿Sí?, ¿puedo ayudarte? Si estás confundido, escribe #help yes say ..', MessageType.text);
 }
 else if (text == 'cariño') {
 conn.sendMessage (id, '¿Sí?, ¿puedo ayudarte? Si estás confundido, escribe #help yes say ..', MessageType.text);
 }
 else if (text == 'te amo') {
 conn.sendMessage (id, 'también te quiero', MessageType.text);
 }
 else if (text == 'mas') {
 conn.sendMessage (id, '¿Sí?, ¿puedo ayudarte? Si estás confundido, escribe #help yes say ..', MessageType.text);
 }
 else if (texto == 'mba') {
 conn.sendMessage (id, '¿Sí?, ¿puedo ayudarte? Si estás confundido, escribe #help yes say ..', MessageType.text);
 }
 else if (text == 'bre') {
 conn.sendMessage (id, '¿Sí?, ¿puedo ayudarte? Si estás confundido, escribe #help yes say ..', MessageType.text);
 }
 más si (texto == 'cuy') {
 conn.sendMessage (id, '¿Sí?, ¿puedo ayudarte? Si estás confundido, escribe #help yes say ..', MessageType.text);
 }
 más si (texto == 'euy') {
 conn.sendMessage (id, '¿Sí?, ¿puedo ayudarte? Si estás confundido, escribe #help yes say ..', MessageType.text);
 }
 else if (text == 'gracias') {
 conn.sendMessage (id, 'De nada, que tenga un buen día :)', MessageType.text);
 }
 else if (text == 'Gracias') {
 conn.sendMessage (id, 'De nada, que tenga un buen día :)', MessageType.text);
 }
 else if (text == 'gracias') {
 conn.sendMessage (id, 'De nada, que tenga un buen día :)', MessageType.text);
 }
 else if (text == 'Gracias') {
 conn.sendMessage (id, 'De nada, que tenga un buen día :)', MessageType.text);
 }
 else if (text == 'gracias') {
 conn.sendMessage (id, 'De nada, que tenga un buen día :)', MessageType.text);
 }
 else if (text == 'Gracias') {
 conn.sendMessage (id, 'De nada, que tenga un buen día :)', MessageType.text);
 }
 else if (text == 'gracias') {
 conn.sendMessage (id, 'De nada, que tenga un buen día :)', MessageType.text);
 }
 else if (text == 'Gracias') {
 conn.sendMessage (id, 'De nada, que tenga un buen día :)', MessageType.text);
 }
 else if (text == '#donate') {
 const corohelp = await get.get ('https://covid19.mathdro.id/api/countries/id') .json ()
 var fecha = nueva fecha ();
 var year = date.getFullYear ();
 var mes = fecha.getMonth ();
 var date = date.getDate ();
 var day = date.getDay ();
 var jam = date.getHours ();
 var minutes = date.getMinutes ();
 var segundos = date.getSeconds ();
 cambiar (día) {
  caso 0: días = "domingo";  descanso;
  caso 1: día = "lunes";  descanso;
  caso 2: día = "martes";  descanso;
  caso 3: día = "miércoles";  descanso;
  caso 4: día = "jueves";  descanso;
  caso 5: días = "viernes";  descanso;
  caso 6: día = "sábado";  descanso;
 }
 cambiar (mes) {
  caso 0: mes = "enero";  descanso;
  caso 1: mes = "febrero";  descanso;
  caso 2: mes = "marzo";  descanso;
  caso 3: mes = "abril";  descanso;
  caso 4: mes = "mayo";  descanso;
  caso 5: mes = "junio";  descanso;
  caso 6: mes = "julio";  descanso;
  caso 7: mes = "agosto";  descanso;
  caso 8: mes = "septiembre";  descanso;
  caso 9: mes = "octubre";  descanso;
  caso 10: mes = "noviembre";  descanso;
  caso 11: mes = "diciembre";  descanso;
 }
 var apareceDate = "FECHA:" + día + "," + fecha + "" + mes + "" + año;
 var apareceTime = "HORA:" + hora + ":" + minuto + ":" + segundos;
 conn.sendMessage (id, donate.donate (id, BotName, corohelp, showDate, showTime, Instagramlu, whatsapplu, whenbotactive, grupch1, grupch2), MessageType.text);
 }
 else if (text == '# donación') {
 const corohelp = await get.get ('https://covid19.mathdro.id/api/countries/id') .json ()
 var fecha = nueva fecha ();
 var year = date.getFullYear ();
 var mes = fecha.getMonth ();
 var date = date.getDate ();
 var day = date.getDay ();
 var jam = date.getHours ();
 var minutes = date.getMinutes ();
 var segundos = date.getSeconds ();
 cambiar (día) {
  caso 0: días = "domingo";  descanso;
  caso 1: día = "lunes";  descanso;
  caso 2: día = "martes";  descanso;
  caso 3: día = "miércoles";  descanso;
  caso 4: día = "jueves";  descanso;
  caso 5: días = "viernes";  descanso;
  caso 6: día = "sábado";  descanso;
 }
 cambiar (mes) {
  caso 0: mes = "enero";  descanso;
  caso 1: mes = "febrero";  descanso;
  caso 2: mes = "marzo";  descanso;
  caso 3: mes = "abril";  descanso;
  caso 4: mes = "mayo";  descanso;
  caso 5: mes = "junio";  descanso;
  caso 6: mes = "julio";  descanso;
  caso 7: mes = "agosto";  descanso;
  caso 8: mes = "septiembre";  descanso;
  caso 9: mes = "octubre";  descanso;
  caso 10: mes = "noviembre";  descanso;
  caso 11: mes = "diciembre";  descanso;
 }
 var apareceDate = "FECHA:" + día + "," + fecha + "" + mes + "" + año;
 var apareceTime = "HORA:" + hora + ":" + minuto + ":" + segundos;
 conn.sendMessage (id, donate.donate (id, BotName, corohelp, showDate, showTime, Instagramlu, whatsapplu, whenbotactive, grupch1, grupch2), MessageType.text);
 }
 else if (text == '#DONATE') {
 const corohelp = await get.get ('https://covid19.mathdro.id/api/countries/id') .json ()
 var fecha = nueva fecha ();
 var year = date.getFullYear ();
 var mes = fecha.getMonth ();
 var date = date.getDate ();
 var day = date.getDay ();
 var jam = date.getHours ();
 var minutes = date.getMinutes ();
 var segundos = date.getSeconds ();
 cambiar (día) {
  caso 0: días = "domingo";  descanso;
  caso 1: día = "lunes";  descanso;
  caso 2: día = "martes";  descanso;
  caso 3: día = "miércoles";  descanso;
  caso 4: día = "jueves";  descanso;
  caso 5: días = "viernes";  descanso;
  caso 6: día = "sábado";  descanso;
 }
 cambiar (mes) {
  caso 0: mes = "enero";  descanso;
  caso 1: mes = "febrero";  descanso;
  caso 2: mes = "marzo";  descanso;
  caso 3: mes = "abril";  descanso;
  caso 4: mes = "mayo";  descanso;
  caso 5: mes = "junio";  descanso;
  caso 6: mes = "julio";  descanso;
  caso 7: mes = "agosto";  descanso;
  caso 8: mes = "septiembre";  descanso;
  caso 9: mes = "octubre";  descanso;
  caso 10: mes = "noviembre";  descanso;
  caso 11: mes = "diciembre";  descanso;
 }
 var apareceDate = "FECHA:" + día + "," + fecha + "" + mes + "" + año;
 var apareceTime = "HORA:" + hora + ":" + minuto + ":" + segundos;
 conn.sendMessage (id, donate.donate (id, BotName, corohelp, showDate, showTime, Instagramlu, whatsapplu, whenbotactive, grupch1, grupch2), MessageType.text);
 }
 else if (text == '#DONATE') {
   const corohelp = await get.get ('https://covid19.mathdro.id/api/countries/id') .json ()
 var fecha = nueva fecha ();
 var year = date.getFullYear ();
 var mes = fecha.getMonth ();
 var date = date.getDate ();
 var day = date.getDay ();
 var jam = date.getHours ();
 var minutes = date.getMinutes ();
 var segundos = date.getSeconds ();
 cambiar (día) {
  caso 0: días = "domingo";  descanso;
  caso 1: día = "lunes";  descanso;
  caso 2: día = "martes";  descanso;
  caso 3: día = "miércoles";  descanso;
  caso 4: día = "jueves";  descanso;
  caso 5: días = "viernes";  descanso;
  caso 6: día = "sábado";  descanso;
 }
 cambiar (mes) {
  caso 0: mes = "enero";  descanso;
  caso 1: mes = "febrero";  descanso;
  caso 2: mes = "marzo";  descanso;
  caso 3: mes = "abril";  descanso;
  caso 4: mes = "mayo";  descanso;
  caso 5: mes = "junio";  descanso;
  caso 6: mes = "julio";  descanso;
  caso 7: mes = "agosto";  descanso;
  caso 8: mes = "septiembre";  descanso;
  caso 9: mes = "octubre";  descanso;
  caso 10: mes = "noviembre";  descanso;
  caso 11: mes = "diciembre";  descanso;
 }
 var apareceDate = "FECHA:" + día + "," + fecha + "" + mes + "" + año;
 var apareceTime = "HORA:" + hora + ":" + minuto + ":" + segundos;
 conn.sendMessage (id, donate.donate (id, BotName, corohelp, showDate, showTime, Instagramlu, whatsapplu, whenbotactive, grupch1, grupch2), MessageType.text);
 }
 else if (text == '#info') {
   const corohelp = await get.get ('https://covid19.mathdro.id/api/countries/id') .json ()
 var fecha = nueva fecha ();
 var year = date.getFullYear ();
 var mes = fecha.getMonth ();
 var date = date.getDate ();
 var day = date.getDay ();
 var jam = date.getHours ();
 var minutes = date.getMinutes ();
 var segundos = date.getSeconds ();
 cambiar (día) {
  caso 0: días = "domingo";  descanso;
  caso 1: día = "lunes";  descanso;
  caso 2: día = "martes";  descanso;
  caso 3: día = "miércoles";  descanso;
  caso 4: día = "jueves";  descanso;
  caso 5: días = "viernes";  descanso;
  caso 6: día = "sábado";  descanso;
 }
 cambiar (mes) {
  caso 0: mes = "enero";  descanso;
  caso 1: mes = "febrero";  descanso;
  caso 2: mes = "marzo";  descanso;
  caso 3: mes = "abril";  descanso;
  caso 4: mes = "mayo";  descanso;
  caso 5: mes = "junio";  descanso;
  caso 6: mes = "julio";  descanso;
  caso 7: mes = "agosto";  descanso;
  caso 8: mes = "septiembre";  descanso;
  caso 9: mes = "octubre";  descanso;
  caso 10: mes = "noviembre";  descanso;
  caso 11: mes = "diciembre";  descanso;
 }
 var apareceDate = "FECHA:" + día + "," + fecha + "" + mes + "" + año;
 var apareceTime = "HORA:" + hora + ":" + minuto + ":" + segundos;
 conn.sendMessage (id, info.info (id, BotName, corohelp, showDate, showTime, Instagramlu, whatsapplu, whenbotactive, grupch1, grupch2), MessageType.text);
 }
 else if (text == '#ptl') {
 conn.sendMessage (id, 'enviar #ptl niña / niño \ n \ nEjemplo: #ptl niña', MessageType.text);
 }
    if (messageType == 'imageMessage')
    {
       let caption = imageMessage.caption.toLocaleLowerCase ()
       const buffer = await conn.downloadMediaMessage (m) // para descifrar y usar como búfer
       if (título == '#sticker')
       {
          const sticker = await conn.downloadAndSaveMediaMessage (m) // para descifrar y guardar en el archivo

          constante
          {
             ejecutivo
          } = require ("child_process");
          exec ('cwebp -q 50' + pegatina + '-o temp /' + jam + '.webp', (error, stdout, stderr) =>
          {
             let stick = fs.readFileSync ('temp /' + hour + '.webp')
             conn.sendMessage (id, palo, MessageType.sticker)
          });
       }
    }

    si (messageType === MessageType.text)
    {
       let es = m.message.conversation.toLocaleLowerCase ()

       si (es == '#pantun')
       {

          buscar ('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-pantun-pakboy.txt')
             .entonces (res => res.text ())
             .entonces (cuerpo =>
             {
                let tod = body.split ("\ n");
                let pjr = tod [Math.floor (Math.random () * tod.length)];
                let pantun = pjr.replace (/ pjrx-line / g, "\ n");
                conn.sendMessage (id, pantun, MessageType.text)
             });
       }

    }
 / * if (text.includes ("# yt"))
    {
       const url = text.replace (/ # yt /, "");
       const exec = require ('child_process'). exec;

       var videoid = url.match (/ (?: https ?: \ / {2})? (?: w {3} \.)? youtu (?: be)? \. (?: com | be) (? : \ / reloj \? v = | \ /) ([^ \ s &] +) /);

       const ytdl = require ("ytdl-core")
       si (videoid! = null)
       {
          console.log ("video id =", videoid [1]);
       }
       demás
       {
          conn.sendMessage (id, "gavalid", MessageType.text)
       }
       ytdl.getInfo (videoid [1]). luego (info =>
       {
          si (info.length_seconds> 1000)
          {
             conn.sendMessage (id, "el video es largo", MessageType.text)
          }
          demás
          {

             console.log (info.length_seconds)

             función os_func ()
             {
                this.execCommand = función (cmd)
                {
                   devolver nueva promesa ((resolver, rechazar) =>
                   {
                      exec (cmd, (error, stdout, stderr) =>
                      {
                         si (error)
                         {
                            rechazar (error);
                            regreso;
                         }
                         resolver (stdout)
                      });
                   })
                }
             }
             var os = new os_func ();

             os.execCommand ('ytdl' + url + '-q más alto -o mp4 /' + videoid [1] + '.mp4'). luego (res =>
             {
 const buffer = fs.readFileSync ("mp4 /" + videoid [1] + ". mp4")
                conn.sendMessage (id, búfer, MessageType.video)
             }). catch (err =>
             {
                console.log ("sistema operativo >>>", err);
             })

          }
       });

    } * /


    / * if (text.includes ("# nulis"))
    {

       constante
       {
          Aparecer
       } = require ("child_process");
       console.log ("escribiendo ...")
       const text = text.replace (/ # write /, "")
       const split = text.replace (/ (\ S + \ s *) {1,10} / g, "$ & \ n")
       const FixedHeight = split.split ("\ n"). slice (0, 25) .join ("\\ n")
       console.log (dividido)
       spawn ("convertir", [
             "./assets/paper.jpg",
             "-fuente",
             "Indie-Flower",
             "-Talla",
             "700 x 960",
             "-punto",
             "18",
             "-interline-spacing",
             "3",
             "-anotar",
             "+ 170 + 222",
             FixedHeight,
             "./assets/result.jpg"
          ])
          .on ("error", () => console.log ("error"))
          .on ("salir", () =>
          {
             const buffer = fs.readFileSync ("assets / result.jpg") // puede enviar mp3, mp4 y ogg, pero para archivos mp3, el tipo mime debe configurarse en ogg

             conn.sendMessage (id, búfer, MessageType.image)
             console.log ("hecho")
          })
    }


    if (text.includes ("# comillas"))
    {
       var url = 'https://jagokata.com/kata-bijak/acak.html'
       axios.get (url)
          .entonces ((resultado) =>
          {
             let $ = cheerio.load (result.data);
             var autor = $ ('a [clase = "auteurfbnaam"]'). contenido (). primer (). texto ();
             var word = $ ('q [class = "fbquote"]'). contents (). first (). text ();

             conn.sendMessage (
                identificación,
                '
      _ $ {palabra} _
        
    
 * ~ $ {autor} *
          `, MessageType.text
             );

          });
    } * /

    if (text.includes ("# ptl chick"))
    {
     var items = ["chica ullzang", "cewe cantik", "hijab cantik", "chica coreana"];
     var cewe = items [Math.floor (Math.random () * items.length)];
     var url = "https://api.fdci.se/rep.php?gambar=" + niña;
    
     axios.get (url)
       .entonces ((resultado) => {
         var b = JSON.parse (JSON.stringify (result.data));
         var chick = b [Math.floor (Math.random () * b.length)];
         imageToBase64 (niña) // Ruta a la imagen
         .luego (
             (respuesta) => {
 var buf = Buffer.from (respuesta, 'base64');  // Ta-da
               conn.sendMessage (
             identificación,
               buf, MessageType.image)
       
             }
         )
         .captura (
             (error) => {
                 console.log (error);  // Registra un error si hubo uno
             }
         )
    
     });
     }

    if (text.includes ("# ptl guy"))
    {
     var items = ["chico guapo", "cogan", "chico coreano", "chico chino", "chico japonés"];
     var cewe = items [Math.floor (Math.random () * items.length)];
     var url = "https://api.fdci.se/rep.php?gambar=" + niña;
    
     axios.get (url)
       .entonces ((resultado) => {
         var b = JSON.parse (JSON.stringify (result.data));
         var chick = b [Math.floor (Math.random () * b.length)];
         imageToBase64 (niña) // Ruta a la imagen
         .luego (
             (respuesta) => {
   var buf = Buffer.from (respuesta, 'base64');  // Ta-da
               conn.sendMessage (
             identificación,
               buf, MessageType.image)
       
             }
         )
         .captura (
             (error) => {
                 console.log (error);  // Registra un error si hubo uno
             }
         )
    
     });
     }

 if (text.includes ("# randomanime"))
    {
     var items = ["anime girl", "beautiful anime", "anime", "anime aesthetic"];
     var cewe = items [Math.floor (Math.random () * items.length)];
     var url = "https://api.fdci.se/rep.php?gambar=" + niña;
    
     axios.get (url)
       .entonces ((resultado) => {
         var b = JSON.parse (JSON.stringify (result.data));
         var chick = b [Math.floor (Math.random () * b.length)];
         imageToBase64 (niña) // Ruta a la imagen
         .luego (
             (respuesta) => {
 var buf = Buffer.from (respuesta, 'base64');  // Ta-da
               conn.sendMessage (
             identificación,
               buf, MessageType.image)
       
             }
         )
         .captura (
             (error) => {
                 console.log (error);  // Registra un error si hubo uno
             }
         )
    
     });
     }

 / * if (text.includes ("# scdl")) {
 const fs = require ("fs");
 const scdl = require ("./ lib / scdl");
 scdl.setClientID ("iZIs9mchVcX5lhVRyQGGAYlNPVldzAoX");
 scdl ("https://m.soundcloud.com/abdul-muttaqin-701361735/lucid-dreams-gustixa-ft-vict-molina")
     .pipe (fs.createWriteStream ("mp3 / canción.mp3"));
 }
  else if (text.includes ("# tts")) {
   var text = text.split ("# ttsid") [1];
   var ruta = require ('ruta');
   var text1 = text.slice (6);
   texto1 = sonido;
   var sound = text.replace (/ # ttsid / g, text1);
   var filepath = 'mp3 / bacot.wav';
  
  
 / *
  * guardar archivos de audio
  * /

 /*gtts.save(filepath, sound, function () {
   console.log (`$ {filepath} MP3 GUARDADO!`)
 });
 aguardar nueva promesa (resolver => setTimeout (resolver, 500)); * /

 / * if (Suara.length> 200) {// verifica la longitud del texto, porque de lo contrario el traductor de Google me dará un archivo vacío
   msg.reply ("Texto largo hermano!")
 } demás {
 const buffer = fs.readFileSync (ruta de archivo)
 conn.sendMessage (id, búfer, MessageType.audio);
 };
 } * /






    // fin del documento


 })
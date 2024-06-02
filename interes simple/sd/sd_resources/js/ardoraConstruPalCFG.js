//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=1;
var successes=0; successesMax=8; attempts=0; attemptsMax=10;
var score=0; scoreMax=8; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#00C699"; colorText="#000000"; colorSele="#FEC1FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicidades ¡Lo lograste!"; messageTime=""; messageError="Inténtalo de nuevo."; messageErrorG="Inténtalo de nuevo."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var cp_pal=["UMOJUkRJREEgREUgVkFMT1IgQURRVUlTSVRJVk8=","Q09TVE8gTyBCRU5FRklDSU8=","SU5URVLDiVMgU0lNUExFIFkgQ09NUFVFU1RP","SU5URVLDiVM=","Q0FQSVRBTA==","VEFTQSBERSBJTlRFUsOJUw==","VElFTVBP","TU9OVE8="];var cp_ima=["","","","","","","",""];var cp_mp3=["","","","","","","",""];var cp_ogg=["","","","","","","",""];var cp_que=["wr9RdcOpIGVzIGVsIHZhbG9yIGRlbCBkaW5lcm8gZW4gZWwgdGllbXBvPw==","wr9RdcOpIGVzIGVsIGludGVyw6lzPw==","wr9DdcOhbGVzIHNvbiBsb3MgdGlwb3MgZGUgaW50ZXLDqXM/","RXMgdW5hIGNhbnRpZGFkIGFkaWNpb25hbCBkZSBkaW5lcm8gcXVlIHNlIHBhZ2EgbyBzZSBnYW5hIGN1YW5kbyBwcmVzdGFtb3MgbyBub3MgcHJlc3RhbiBkaW5lcm8=","RXMgZWwgZGluZXJvIHF1ZSBub3MgcHJlc3RhbiBvIHByZXN0YW1vcw==","RXMgdW4gcG9yY2VudGFqZSBxdWUgc2UgYXBsaWNhIGEgdW5hIGNhbnRpZGFkIGRlIGRpbmVybw==","RXMgZWwgbsO6bWVybyBkZSBwZXJpb2RvcyBxdWUgZHVyYSBlbCBwcsOpc3RhbW8=","RXMgbGEgc3VtYSBkZWwgY2FwaXRhbCBtw6FzIGVsIGludGVyw6lzIGdhbmFkbw=="];var cp_num=[28,17,26,7,7,15,6,5];var cp_alt=["","","","","","","",""];
var wordsGame="c2Q="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var au="";var cp=[];var letters=[];var posAns=0;var lettersId=[];var lettersX=[];var lettersY=[];var lettersAns=[];var answers=[];var indexGame=1;var numle=5; var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ";var jobindex=[];

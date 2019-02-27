//            VARIABLES
var select;
var focusE;

function dateModifs(d){
  jour=d.getDate();
  mois=d.getMonth()+1;
  if(mois<10){
    mois="0"+mois
  }
  annee=d.getFullYear();
  dateJour=jour+"/"+mois+"/"+annee;
  return dateJour;
}


	var allquestionnaires = [
    {
      'nom' : 'Questionnaire 1',
      'dateCreation': new Date(1416098434197),
      'dateModif': new Date(1416098434197),
      'matiere' : 'Cpoo'
     
    },
    {
      'nom' : 'Questionnaire 2',
      'dateCreation': new Date(1506097434197),
      'dateModif' :new Date(1506097434197),
      'matiere' : 'POO'
    }
/*    {
      'nom' : 'Questionnaire 3',
      'dateCreation': new Date(1306097434197),
      'dateModif' :new Date(1306097434197),
      'matiere' : 'POO'
    },
    {
      'nom' : 'Questionnaire 4',
      'dateCreation': new Date(1206097434197),
      'dateModif' :new Date(1206097434197),
      'matiere' : 'POO'
    },
    {
      'nom' : 'Questionnaire 5',
      'dateCreation': new Date(1106097434197),
      'dateModif' :new Date(1106097434197),
      'matiere' : 'POO'
    },
    {
      'nom' : 'Questionnaire 6',
      'dateCreation': new Date(1006097434197),
      'dateModif' :new Date(1006097434197),
      'matiere' : 'POO'
    },
    {
      'nom' : 'Questionnaire 7',
      'dateCreation': new Date(906097434197),
      'dateModif' :new Date(906097434197),
      'matiere' : 'POO'
    },
    {
      'nom' : 'Questionnaire 8',
      'dateCreation': new Date(806097434197),
      'dateModif' :new Date(806097434197),
      'matiere' : 'POO'
    },
    {
      'nom' : 'Questionnaire 9',
      'dateCreation': new Date(706097434197),
      'dateModif' :new Date(706097434197),
      'matiere' : 'POO'
    },
    {
      'nom' : 'Questionnaire 10',
      'dateCreation': new Date(606097434197),
      'dateModif' :new Date(606097434197),
      'matiere' : 'POO'
    },
    {
      'nom' : 'Questionnaire 11',
      'dateCreation': new Date(1506097434197),
      'dateModif' :new Date(506097434197),
      'matiere' : 'POO'
    },
    {
      'nom' : 'Questionnaire 12',
      'dateCreation': new Date(406097434197),
      'dateModif' :new Date(406097434197),
      'matiere' : 'POO'
    },
    {
      'nom' : 'Questionnaire 13',
      'dateCreation': new Date(306097434197),
      'dateModif' :new Date(306097434197),
      'matiere' : 'POO'
    }*/
  ]
    var questionnaires = [];
    var page = 0;
    

    
// ---------------------Fonction modif nom questionnaire --------------------------
if(document.getElementById("AP_div2quest").childNodes.length!=0){

document.getElementsByClassName("quest")[1].firstChild.addEventListener("click",modif());
}

function modif(inputR){
  console.log("on est dans modif");

  inputR.readOnly=false;
/*  for(let i in questionnaires){
    if(focusE==questionnaires[i]['nom'])
  }*/


  // ICI faire récupérer tous les nomsdes input et mettre tous ses noms dans l'array puis update
}


  // --------------------------------FONCTION FOCUS ON-------------------------------
  function focusOn(elem){
    /* S'il y a au moins un élément */
    if(document.getElementById("AP_div2quest").childNodes.length!=0){
      /* on parcourt tous les élements et on leur met le style de base */
      for(let i=0; i<document.getElementById("AP_div2quest").childNodes.length;i++){
           for(let j=0; j<elem.childNodes.length;j++){
                document.getElementsByClassName("quest")[i].children[j].style.background="#ffffff";
                document.getElementsByClassName("quest")[i].children[j].style.color="#000000";
                document.getElementsByClassName("quest")[i].style.background="#ffffff";
                document.getElementsByClassName("quest")[i].style.color="#000000";
           }
      }
    } 
    /* On met le style à l'élément focus et on le désigne focusE */
    for(let i=0; i<elem.childNodes.length;i++){
        elem.children[i].style.background="#505050";
        elem.children[i].style.color="white";
        elem.style.background='#505050';
        elem.style.color='white';
    }
    // On recupere le nom du questionnaire
    focusE=elem.firstChild.value;

     
    /* quand le nom n'est plus focus */
    elem.firstChild.onblur=function(){
    let questionnairesReplace={
    'nom' : this.value ,
    'dateCreation': this.parentNode.children[2].value,
    'dateModif': dateModifs(new Date),
    'matiere' : this.parentNode.children[1].value
  };
    
      this.readOnly=true;
      /* on parcourt pour le retrouver dans l'array et on remplace */
      for(let i in allquestionnaires){
        if(questionnaires[i]['nom']==focusE){
          questionnaires.splice(i,1, questionnairesReplace);
        }
      }
    };
      
    /* quand la matiere n'est plus focus */
    elem.children[1].onblur=function(){
        let questionnairesReplace={
        'nom' : this.parentNode.firstChild.value ,
        'dateCreation': this.parentNode.children[2].value,
        'dateModif': dateModifs(new Date),
        'matiere' : this.parentNode.children[1].value
        }
        this.readOnly=true;
      /* on parcourt pour le retrouver dans l'array et on remplace */
      for(let i in questionnaires){
        if(questionnaires[i]['nom']==focusE){     
          questionnaires.splice(i,1, questionnairesReplace);
        }
      }
    };
  }
  // ------------------------------FONCTION FOCUS------------------------------------
		/*function focus(){

			var inputs = document.getElementsByClassName('AP_questionnaire');
			for (var j = 0; j < inputs.length; ++j) {
			      inputs[j].onfocus = function() {
			       this.style.background='#505050';
                   this.style.color='white';
			       
			};
			       inputs[j].onblur = function() {
			       	focusE=this.value;
			       	this.style.background = '';	
                       this.style.color='';
			      };
 			 } 
		}*/


// ----------------------------------Fonction UPDATE--------------------

function update(){

 document.getElementById("AP_div2quest").innerHTML="";
  for(let i in questionnaires){
    document.getElementById("AP_div2quest").innerHTML+='<div class="quest" onclick="focusOn(this)"><input type="text" class="AP_questionnaire"  ondblclick="modif(this)" value="'+questionnaires[i]['nom']+'" readonly/><input id="matiere" value="'+questionnaires[i]['matiere']+'" ondblclick="modif(this)" readonly /><input id="date" value="'+dateModifs(questionnaires[i]['dateModif'])+'" readonly/></div>';
   
   /*<div class="AP_questionnaire" onclick="focusOn(this)"onfocus="focus(this)">'+questionnaires[i]['nom']+'<*/
  }
  console.log(questionnaires);
  //rechercher();
  fill();
  focus();

}
//--------------------------------------------------------------------------
pagination();

focus();

            
//-----------------------------------FONCTION POP-UP-------------------------------

function popUp(){
   appendPopup2('<h3>Entrez un nom</h3><input id="AP_nomQ" type="text" placeholder="Nom"/><br/><h3>Entrez une matière</h3><input id="AP_mat" type="text" placeholder="Matiere"/><br/>', ajout); 
 }
            
function hidePopup(){
   var popUp = document.getElementById("popupContainer");
   popUp.style.visibility = "hidden";
} 


 
// ----------------------Fonction a l'ouverture




// -----------------------FONCTION AJOUT---------------------------------------------
function ajout(){
  var nom = document.getElementById('AP_nomQ').value ;
  var matiere = document.getElementById('AP_mat').value;
  for(let i in allquestionnaires){
    if(allquestionnaires[i]['nom']==nom){
      appendPopup2('<h3>Entrez un nom</h3> <p> Ce questionnaire existe déjà </p><input id="AP_mat" type="text" placeholder="Matiere"/><br/>', ajout);
      return;

    }
  }
 var questionnaires1={
    'nom' : nom ,
    'dateCreation': new Date(),
    'dateModif': new Date(),
    'matiere' : matiere
  };
  allquestionnaires.push(questionnaires1);
  pagination(3);
  hidePopup();

}

            
//-------------------------------FONCTION SUPPRIMER---------------------------------------
function supprimer(){
  for(let i in allquestionnaires){
    if(allquestionnaires[i]['nom']==focusE){
    	allquestionnaires.splice(i,1);
    }
 	}
	pagination(3);           
}

//--------------------------------FONCTION recherche----------------------------------
function fill(){
   /*On remplit la liste*/
  var input = document.getElementById("myinput");
  let larecherche=[];
  for(let i in questionnaires){
    larecherche.push(questionnaires[i]['nom']);
  }
  new Awesomplete(input, {
    list: larecherche
  });
 /* On ajoute le listener*/
  document.getElementById("myinput").addEventListener('awesomplete-open', function(){
    console.log("longueur"+document.getElementById("awesomplete_list_1").children.length);
  /*On met toutes les recherches en cours dans Aafficher*/
   let Aafficher=[];
    for(let p=0;p<document.getElementById("awesomplete_list_1").children.length;p++){
        Aafficher.push(document.getElementById("awesomplete_list_1").children[p].textContent);
    }
    console.log(Aafficher);
    console.log(questionnaires[0]['nom']);
    /* on vide l'espace */
    document.getElementById("AP_div2quest").innerHTML="";
    /* On remplit avec la recherche */
    for (let j in questionnaires){
      for(let k in Aafficher){
        if(Aafficher[k]===questionnaires[j]['nom']){
          console.log("on a "+ Aafficher[k]+" et "+questionnaires[j]['nom']);
          document.getElementById("AP_div2quest").innerHTML+='<div class="quest" onclick="focusOn(this)"><input type="text" class="AP_questionnaire"  ondblclick="modif(this)" value="'+questionnaires[j]['nom']+'" readonly/><input id="matiere" value="'+questionnaires[j]['matiere']+'" ondblclick="modif(this)" readonly /><input id="date" value="'+dateModifs(questionnaires[j]['dateModif'])+'" readonly/></div>';
        }
      }
    }  
  });
}

// ----------------------------- FONCTION EXPORTER ---------------------------------------
 		function exporter(){
      var docDefinition = { content: [
        focusE,
        //questionnaires["enoncé"],
    {
      // to treat a paragraph as a bulleted list, set an array of items under the ul key
      ul: [
        'Item 1',
        'Item 2',
        'Item 3',
        { text: 'Item 4', bold: true },
      ]
    }, ]};
    // à terminer 
         console.log(docDefinition);
      pdfMake.createPdf(docDefinition).download('Questionnaire.pdf');
    }
            




/* Code de la pop-up */

var daFunction;

function appendPopup(text)
{
	document.getElementsByTagName('BODY')[0].innerHTML += '<div id="popupContainer"><div id="popup"><h3>'
		+ text
		+ '</h3><button id="rButt" class="main" onclick="preClosePopup();">OK</button></div></div>';
}

function appendPopup2(text, daNewFunction)
{
	document.getElementsByTagName('BODY')[0].innerHTML += '<div id="popupContainer"><div id="popup"><h3>'
		+ text
		+ '</h3><button id="lButt" class="main" onclick="execFunc();">OK</button><button id="rButt" onclick="preClosePopup();">Annuler</button></div></div>';
	daFunction = daNewFunction;
}

function execFunc()
{
	daFunction();
	preClosePopup();
}

function preClosePopup()
{
	document.getElementById('popupContainer').style.animationName = "uncolorPpBck";
	document.getElementById('popupContainer').style.backgroundColor = "rgba(255, 255, 255, 0.0)";
	document.getElementById('popup').style.animationName = "upPp";
	document.getElementById('popup').style.top = "-100%";

	setTimeout(closePopup, 500);
}

function closePopup()
{
	let elem = document.getElementById('popupContainer');
	elem.parentNode.removeChild(elem);

	console.log('pop-up closed');
}

/*suppression questionnaire-----------------------------*/

function askDelQuestion()
{
    appendPopup2('Êtes-vous sûr de vouloir supprimer le questionnaire : ' + focusE + ' ?', supprimer);
	
}

/*tri--------------------------------------------------*/

function tridate()
{
    /*questionnaires['matiere'].sort();*/
    allquestionnaires.sort(function(a,b){
      return b['dateModif'].getTime() - a['dateModif'].getTime(); //dateModif(b.date) - dateModif(a.date);
    });
    pagination(3);
}

function trimatiere()
{
    /*questionnaires['matiere'].sort();*/
    allquestionnaires.sort(function(a,b){
      return a['matiere'].localeCompare(b['matiere']); //dateModif(b.date) - dateModif(a.date);
    });
    pagination(3);
}

function action(value)
{
    if(value == 'Date')
        tridate();
    else if(value == 'Matière')
        trimatiere();
}

/*pagination------------------------------------------*/

function pagination(value)
{
    if((page <= 0 && value == 1) || ((page+1)*8 >= allquestionnaires.length && value == 2)) return;
    questionnaires = [];
    if((page)*8 >= allquestionnaires.length) value=1;
    if(value==1)
    {
        page--;
    }
    else if(value==2)
    {
        page++;
    }
    for(var m=page*8; m<(page+1)*8 && m<allquestionnaires.length ; m++)
    {
        questionnaires.push(allquestionnaires[m]);
    }
    update();
}
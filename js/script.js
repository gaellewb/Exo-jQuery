// Je vérifie dans la console si ma page JS fonctionne :
    console.log("connecté");

// Je cache l'élément Coucou :
    $('#coucou').hide();

// Au click du bouton 'Joyeuse' :  ----------------------------------- 
$('.btn-happy').on('click', function(){
// Je vérifie que mon bouton fonctionne :
    console.log('click OK');
// j'ajoute des classes pour changer le background : 
    $('.myBg1').addClass('myBgHappy1');
    $('.myBg2').addClass('myBgHappy2');
// j'ajoute des classes pour faire apparaître un texte : 
    $('#msg').text('En Cliquant sur ce joli bouton, on ajoute des classes aux DIV suivantes, on rend visible des images et ce texte explicatif');
// j'ajoute des classes pour changer la visibilité : 
    $('#rainbow').addClass('visible');
    $('#agrandiTitre').addClass('visible');
    $('#badBoy').addClass('visible');
    $('#textBadBoy').addClass('visible');
    $('#sheep').addClass('visible');
    $('#form').addClass('visible');
});

// Fait apparaître et disparaître un élément au survol de la souris :
    $('#rainbow').on('mouseenter', function(){ 
        $('#coucou').show();
    });
    $('#rainbow').on('mouseleave', function(){ 
        $('#coucou').hide();
    });


// Au clic, le grosTitre s'agrandit :
// Je récupère la taille d'un élément :
    let taille = $('#grosTitre').css('font-size');
// La taille 'affiche dans la console :
    console.log(taille)
    $('#agrandiTitre').on('mousedown', function(){
        $('#grosTitre').css('font-size', '60px');
    });
    $('#agrandiTitre').on('mouseup', function(){
        $('#grosTitre').css('font-size', '40px');
    });
// Au double-clique, je cache deux éléments :
    $('#badBoy').on('dblclick', function(){
        $(this).hide();
        $('#textBadBoy').hide();
    });
// On change le style en mettant le focus dans l'input et en-dehors :
    $('#prenom').focus(function(){
        $(this).css('background-color', 'yellow');
    });
    $('#prenom').blur(function(){
        $(this).css('background-color', '#fd7404');
    }); 
// On change le style en appuyant puis en relachant une touche du clavier :
    $('#prenom').keydown(function(){
            $(this).css('background-color', '#da1678');
        });
    $('#prenom').keyup(function(){
            $(this).css('background-color', '#05d354');
    });
// Ouvre un lien dans une autre fenêtre en cliquant sur l'élément :
    $('a').attr({
        href: 'https://youtu.be/vOqK9uJHsAI' ,
        target: '_blank'
    });


// Au click du bouton 'Triste' :  ----------------------------------- 
$('.btn-sad').on('click', function(){
    console.log('click OK');
// une boîte de dialogue alerte s'ouvre :
    alert('Etes-vous sûr de vouloir retourner dans ce monde tout triste ????');
// suppression de classes :
    $('.myBg1').removeClass('myBgHappy1');
    $('.myBg2').removeClass('myBgHappy2');
    $('#msg').text('En Cliquant sur ce bouton tout triste, on enlève des classes aux DIV et on change ce texte');
    $('#rainbow').removeClass('visible');
    $('#agrandiTitre').removeClass('visible');
    $('#form').removeClass('visible');
    $('#sheep').removeClass('visible');
});



document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM está funcionando corretamente.')
    openDivLivro()
});



// spanFluxos.addEventListener('click', function () {
//     divFluxos.style.display = 'none'
// })

// setAttribute('style', 'display: none')
// Realizar condicional 

// const sectionApresentacao = document.getElementById('section-apresentacao')
const divLivro = document.getElementById('div-livro')
const h1Apresentacao = document.getElementById('h1-apresentacao')

function openDivLivro() {
    $("#h1-apresentacao").on("click", function () {
      $("#div-livro").slideToggle("slow");
    });
  
    $("#algoaqui").each(function () {
      $(this).on("click", function () {
        $("#div-livro").slideToggle("slow");
      });
    });
  }





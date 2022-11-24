document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM está funcionando corretamente.')
    openDivLivro();
    openDivGerente();
    openDivFluxos();
    openDivCodigos();
    openDivConclusao();
    openDivPontos();
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


  const h1Gerente = document.getElementById('h1-gerente')
  const divGerente = document.getElementById('div-gerente')

  function openDivGerente() {
    $("#h1-gerente").on("click", function () {
      $("#div-gerente").slideToggle("slow");
    });
  
    $("#algoaqui").each(function () {
      $(this).on("click", function () {
        $("#div-gerente").slideToggle("slow");
      });
    });
  }

  const h1Fluxos = document.getElementById('h1-fluxos')
  const divFluxos = document.getElementById('div-fluxos')

  function openDivFluxos() {
    $("#h1-fluxos").on("click", function () {
      $("#div-fluxos").slideToggle("slow");
    });
  
    $("#algoaqui").each(function () {
      $(this).on("click", function () {
        $("#div-fluxos").slideToggle("slow");
      });
    });
  }

  const h1Codigos = document.getElementById('h1-codigos')
  const divCodigos = document.getElementById('div-codigos')


  function openDivCodigos() {
    $("#h1-codigos").on("click", function () {
      $("#div-codigos").slideToggle("slow");
    });
  
    $("#algoaqui").each(function () {
      $(this).on("click", function () {
        $("#div-codigos").slideToggle("slow");
      });
    });
  }

  const h1Conclusao = document.getElementById('h1-conclusao')
  const divConclusao = document.getElementById('div-conclusao')

  function openDivConclusao() {
    $("#h1-conclusao").on("click", function () {
      $("#div-conclusao").slideToggle("slow");
    });
  
    $("#algoaqui").each(function () {
      $(this).on("click", function () {
        $("#div-conclusao").slideToggle("slow");
      });
    });
  }

    const h1Pontos = document.getElementById('h1-pontos');
    const divPontos = document.getElementById('div-pontos');

    function openDivPontos() {
      $("#h1-pontos").on("click", function () {
        $("#div-pontos").slideToggle("slow");
      });
    
      $("#algoaqui").each(function () {
        $(this).on("click", function () {
          $("#div-pontos").slideToggle("slow");
        });
      });
    }


document.addEventListener('DOMContentLoaded', function () {
  var btnPesquisar = document.getElementById('btn-pesquisar');

  btnPesquisar.addEventListener('click', function () {
    var livroPesquisado = document.getElementById('livro-input').value;

    if (livroPesquisado.trim() !== '') {
      window.location.href = 'Descricao.html?livro=' + encodeURIComponent(livroPesquisado);
    }
  })
});
document.addEventListener('DOMContentLoaded', function() {
  var urlParams = new URLSearchParams(window.location.search);
  var livroPesquisado = urlParams.get('livro');

  var player;

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '315',
      width: '560',
      videoId: getVideoIdFromUrl(),
      playerVars: {
        autoplay: 1,
        controls: 0,
        modestbranding: 1,
        loop: 1,
        playlist: getVideoIdFromUrl()
      },
      events: {
        onReady: onPlayerReady
      }
    });
  }

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  function getVideoIdFromUrl() {
    var livroInfo = obterLivroInfo(livroPesquisado);
    var videoUrl = livroInfo.video;
    var match = videoUrl.match(/[?&]v=([^&#]*)/);
    return match ? match[1] : '';
  }

  var livroDetalhes = document.getElementById('livro-detalhes');
  var livroTituloElement = document.getElementById('livro-titulo');
  var livroImagemElement = document.getElementById('livro-imagem');
  var livroPrecoElement = document.getElementById('livro-preco');
  var livroDescricaoElement = document.getElementById('livro-descricao');

  var livroInfo = obterLivroInfo(livroPesquisado);

  if (livroInfo) {
    livroTituloElement.textContent = livroInfo.titulo;
    livroImagemElement.src = livroInfo.imagem;
    livroImagemElement.alt = livroInfo.titulo;
    livroPrecoElement.textContent = 'Preço: ' + livroInfo.preco;
    livroDescricaoElement.textContent = livroInfo.descricao;

    if (typeof YT !== 'undefined' && YT.loaded) {
      onYouTubeIframeAPIReady();
    } else {
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    }
  } else {
    livroDetalhes.textContent = 'Livro não encontrado.';
  }
});

  function obterLivroInfo(livro) {
    var livros = {
      "Senhor dos anéis": {
        titulo: 'Senhor dos Anéis',
        imagem: 'Windons/Imagens/Livro1.png',
        video: 'https://www.youtube.com/watch?v=YkKdPUe1EU8',
        preco: 'R$ 29,99',
        descricao: 'O Senhor dos Anéis (The Lord of the Rings, no original) é um livro de alta fantasia, escrito pelo escritor britânico J. R. R. Tolkien. Escrita entre 1937 e 1949, com muitas partes criadas durante a Segunda Guerra Mundial'
      },
      "Harry Potter": {
        titulo: 'Harry Potter',
        imagem: 'Windons/Imagens/Livro2.png',
        video: 'https://www.youtube.com/watch?v=',
        preco: 'R$ 29,99',
        descricao: 'Inicialmente, os garotos acreditavam que a Pedra Filosofal, que se encontrava protegida em Hogwarts, fosse alvo de Severo Snape, professor da escola, para que este se tornasse rico. Mas os garotos descobrem que Voldemort, enfraquecido, está à procura da Pedra para se tornar um grande bruxo novamente.'
      },
      "Penumbra": {
        titulo: 'Penumbra',
        imagem: 'Windons/Imagens/Livro3.png',
        video: 'https://www.youtube.com/watch?v=',
        preco: 'R$ 29,99',
        descricao: 'Lana é uma garotinha que morreu e agora se encontra perdida na Penumbra. A Penumbra é o local onde as almas de crianças que tiveram uma morte traumática repousam para poder esquecer todo horror da vida passada.'
      },
      "O Poder do Hábito": {
        titulo: 'O Poder do Hábito',
        imagem: 'Windons/Imagens/Livro4.png',
        video: 'https://www.youtube.com/watch?v=',
        preco: 'R$ 31,50',
        descricao: 'O objetivo do estudo é explicar por que fazemos o que fazemos. Ou seja, é uma reflexão que aborda como essa capacidade de fazermos coisas de forma subconsciente, com um menor esforço cerebral tende a criar padrões em nossas vidas.'
      },
      "O Homem de Giz": {
        titulo: 'O Homem de Giz',
        imagem: 'Windons/Imagens/Livro5.png',
        video: 'https://www.youtube.com/watch?v=',
        preco: 'R$ 49,99',
        descricao: 'O Homem de Giz faz o leitor duvidar de todos os personagens, perder o fôlego nas várias reviravoltas e passar a noite acordado com os trechos macabros. Longe de ser maniqueísta, a história traz personagens complexos que enfrentam traumas e conflitos pessoais.'
      },
      "É assim que acaba": {
        titulo: 'É assim que acaba',
        imagem: 'Windons/Imagens/Livro6.png',
        video: 'https://www.youtube.com/watch?v=',
        preco: 'R$ 49,99',
        descricao: 'O livro aborda sem medo alguns tabus da sociedade para explorar a complexidade das relações tóxicas, e como o amor e o abuso muitas vezes coexistem em uma confusão de sentimentos'
      },
      "O Hobbit": {
        titulo: 'O Hobbit',
        imagem: 'Windons/Imagens/Livro7.png',
        video: 'https://www.youtube.com/watch?v=',
        preco: 'R$ 49,99',
        descricao: 'Essa edição, em brochura, procura se manter fiel ao público-alvo da jornada de Bilbo: as crianças. Para isso, o livro contém, na íntegra, a mesma tradução da narrativa que compõe a versão em capa dura, além das ilustrações originais de Tolkien.'
      },
      "Luzes do Norte": {
        titulo: 'Luzes do norte',
        imagem: 'Windons/Imagens/Livro8.png',
        video: 'https://www.youtube.com/watch?v=',
        preco: 'R$ 49,99',
        descricao: 'Uma aventura intensa e cheia de reviravoltas, com uma protagonista que se recusa a jogar pelas regras dos outros. Entre ursos assustadores, florestas nevadas, mistérios e intrigas'
      },
      "1984": {
        titulo: '1984',
        imagem: 'Windons/Imagens/Livro9.png',
        video: 'https://www.youtube.com/watch?v=',
        preco: 'R$ 49,99',
        descricao: 'Trata-se de uma distopia que se passa em Londres, no ano de 1984, retratando um regime totalitário no qual a população é vigiada constantemente.'
      },
      "O Livro da matemática": {
        titulo: 'O Livro da matemática',
        imagem: 'Windons/Imagens/Livro10.png',
        video: 'https://www.youtube.com/watch?v=',
        preco: 'R$ 49,99',
        descricao: 'O livro da matemática está repleto de explicações concisas, sem jargões, que descomplicam teorias complexas e citações que facilitam a visualização e memorização dos conceitos, além de ilustrações que complementam e brincam com nossa compreensão dos números.'
      },
    };

    return livros[livro] || null;
  }

function adicionarAoCarrinho(livroInfo) {
  var imagem = livroInfo.imagem;
  var titulo = livroInfo.titulo;
  var preco = livroInfo.preco;

  var livro = {
    imagem: imagem,
    titulo: titulo,
    preco: preco
  };

  var livrosCarrinho = JSON.parse(localStorage.getItem('livrosCarrinho')) || [];
  livrosCarrinho.push(livro);
  localStorage.setItem('livrosCarrinho', JSON.stringify(livrosCarrinho));

  exibirMensagem('Livro adicionado ao carrinho.');
}

function exibirMensagem(mensagem) {
  var mensagemElement = document.getElementById('mensagem');
  mensagemElement.textContent = mensagem;
  mensagemElement.style.display = 'block';

  setTimeout(function() {
    mensagemElement.textContent = '';
    mensagemElement.style.display = 'none';
  }, 1500);
}
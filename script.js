const data = {
    generos: ["Ficção Científica", "H", "Drama"],
    plataformas: {
    "Ficção Científica": ["metflix", "cuzimba play"],
    "H": ["hen+", "Hzin"],
    "Drama": ["crime ediondo Max", "jesus é o caminho TV"]
    },
    filmes: {
    "metflix": ["Matrix", "Blade Runner"],
    "cuzimba play": ["Interestelar", "star wars (todos menos exetos os da disney)"],
    "hen+": ["Ijirare Fukushuu Saimin", "Boku wa Chiisana Succubus no Shimobe"],
    "Hzin": ["Shikiyoku Infinite", "gaki ni modotte yarinaoshi"],
    "crime ediondo Max": ["A Lista de Schindler", "A Culpa É das Estrelas"],
    "jesus é o caminho TV": ["O Poderoso Chefão", "O Onde os Fracos Não Têm Vez"]
    }
    };
    
    document.addEventListener("DOMContentLoaded", () => {
    const generoSelect = document.getElementById("genero");
    const plataformaSelect = document.getElementById("plataforma");
    const filmeSelect = document.getElementById("filme");
    
    // Preencher o seletor de gêneros
    data.generos.forEach(genero => {
    let option = document.createElement("option");
    option.value = genero;
    option.textContent = genero;
    generoSelect.appendChild(option);
    });
    });
    
    function atualizarPlataformas() {
    const generoSelect = document.getElementById("genero");
    const plataformaSelect = document.getElementById("plataforma");
    const filmeSelect = document.getElementById("filme");
    
    // Limpar plataformas e filmes
    plataformaSelect.innerHTML = '<option value="">Selecione...</option>';
    filmeSelect.innerHTML = '<option value="">Selecione...</option>';
    filmeSelect.disabled = true;
    
    if (generoSelect.value === "") {
    plataformaSelect.disabled = true;
    return;
    }
    
    plataformaSelect.disabled = false;
    
    // Preencher plataformas
    const plataformas = data.plataformas[generoSelect.value];
    plataformas.forEach(plataforma => {
    let option = document.createElement("option");
    option.value = plataforma;
    option.textContent = plataforma;
    plataformaSelect.appendChild(option);
    });
    }
    
    function atualizarFilmes() {
    const plataformaSelect = document.getElementById("plataforma");
    const filmeSelect = document.getElementById("filme");
    
    // Limpar filmes
    filmeSelect.innerHTML = '<option value="">Selecione...</option>';
    
    if (plataformaSelect.value === "") {
    filmeSelect.disabled = true;
    return;
    }
    
    filmeSelect.disabled = false;
    
    // Preencher filmes
    const filmes = data.filmes[plataformaSelect.value];
    filmes.forEach(filme => {
    let option = document.createElement("option");
    option.value = filme;
    option.textContent = filme;
    filmeSelect.appendChild(option);
    });
    }
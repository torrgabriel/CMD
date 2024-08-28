document.addEventListener('DOMContentLoaded', function () {
    const partidosData = {
        'Mobiliza': ['Adeir Cirino da Silva', 'Angelita Moreira Rocha', 'Delmiro Jose de Oliveira Portilho', 'Josimar Rodrigues da Cruz Queiroz', 'Luciano Rosa de Santana', 'Ricardo Celestino Ferreira', 'Sandra Alves de Oliveira', 'Valdeir Barbosa dos Santos', 'Wilson Jose Silva e Sousa', 'Legenda'],
        'Novo': ['Aguinaldo Carlos Lopes', 'Ana Paula Pereira dos Santos Silva', 'Fabricio Lopes de Alvarenga Costa', 'Geralda de Fátima Miranda', 'Gilson Antonio da Silva', 'Ivanety Maria Chaves Silva', 'Lourival Andrade dos Santos', 'Olympio José Ferreira', 'Siomara Regina de Sousa Lages', 'Legenda'],
        'Republicanos': ['Agnaldo Costa Sena', 'Amauri Elias da Silva', 'Carlos Magno dos Santos Silva', 'Joanangelica de Oliveira Jorge Stemler', 'Leonardo Santos Rodrigues', 'Neusa dos Reis Saldanha Carvalho', 'Rita Lígia Costa Vieira', 'Celio Francisco Silva', 'Legenda'],
        'Federação BRASIL DA ESPERANÇA - FE BRASIL(PT/PC do B/PV)': ['Paulo Sérgio da Silva', 'Carmelita Alves Pimenta', 'Cristiano Mendes de Oliveira', 'Fernanda Cintra', 'Gustavo Rodrigues Oliveira de Paula', 'Jonas Campos da Silva', 'Jucileia Ribeiro da Silva', 'Miguel Marinho Ribeiro', 'Renilde Araújo de Carvalho', 'Rogério Souza Reis', 'Jaime Vinicius Lima de Souza', 'Legenda'],
        'PRD': ['Adimar Laurindo Ribeiro', 'Arilda Pires dos Santos Carvalho', 'Charles de Souza dos Santos', 'Darlan Poses Almeida', 'Elismar Machado Souza', 'Juliana Fernandes de Sousa', 'Leticia Pires de Sousa Costa', 'Ricardo Santa Barbara Abreu', 'Legenda'],
        'PP': ['Ana Maria Sousa dos Anjos', 'Ana Cristina Mariano', 'Guilherme Rodrigues', 'Janaína Isabela da Silva', 'Jobert Leonardo Floriano', 'Rafael de Paula Silva', 'Sandro Mariano de Sousa', 'Tiago Alves da Silva', 'Wander Rosa de Santana', 'Legenda'],
        'PDT': ['Batata', 'Cabo Nogueira', 'Carolina Otoni Vidigal', 'Heber Juliano de Mattos Sousa', 'Henrique Floriano Costa', 'Irene Alves de Queiroz', 'Ronaldo Faustino de Alvarenga', 'Silvio Silvério Costa', 'Socorro Alves Silva Costa', 'Thiago de Almeida Leão', 'Legenda'],
        'Avante': ['Cassia Martins Diana da Silva', 'Scharley Fernandes Martins Diana', 'Cleber Costa da Silva', 'Fabricio Peixoto de Souza', 'Henrique Vertelo Mendes da Silva', 'Maria do Carmo Coelho da Silva Santos', 'Ricardo José Costa Pantoja', 'Ronaldo da Silveira Brandão', 'Safira Brasil Hilario Costa da Silva', 'Sebastião Fernandes dos Reis', 'Legenda'],
        'PSB': ['Claudio Sergio da Silva', 'Edna Bicalho de Araujo', 'Glaucia Utsch Magalhaes Ferreira', 'Lucas Galdino de Abreu', 'Marcelo Souza Duarte', 'Muriel Suelen Silva Lages Diana', 'Paula Fortes de Andrade Fuly', 'Paulo Henrique Magalhaes Silva', 'Rodrigo Silvano de Souza e Silva', 'Romulo Michell do Carmo Fernandes', 'Legenda'],
        'Solidariedade': ['Francisco de Assis Dias', 'Cristiano Eneas Moreira Pena', 'Leonardo de Almeida Costa', 'Lorrana Rodrigues Silva', 'Viviane Paula Santana', 'Legenda'],
        'DC': ['Carlos Augusto Matos', 'Gabriel Pimenta dos Santos Martins', 'Geraldo Silva Lima', 'Luiz Carlos de Oliveira', 'Maiza Aparecida Silva Sousa', 'Venceslau Correa da Silva', 'Denio Mariano Reis', 'Simone Souza Costa Queiroz', 'Geraldo Célio de Jesus', 'Moacir da Silva Lopes', 'Legenda'],
        'Federação PSDB CIDADANIA(PSDB/CIDADANIA)': ['Aretusa Pereira Novais', 'Gleicierrez Martins de Araujo', 'Nilson Chaves de Lima', 'Paulo Sérgio Simões', 'Someni Francisco do Espirito Santo', 'Maria Selma de Aguiar', 'Vanda Lúcia Sena da Cruz', 'Vanio Franciso de Oliveira', 'Renato Wagner Ferreira Gomes', 'Geraldo Célio de Jesus', 'Legenda'],
        'PSD': ['Baixinho da Tapera', 'Dayse Mariano de Paula', 'Gilmar Junior de Oliveira', 'Hélio Alves dos Santos', 'Kelly Regina Batista', 'Marilene Maria Gonçalves Silva', 'Nilmar Aparecido da Silveira', 'Sargento Claudio', 'Sidinei Seabra da Silva', 'Solange Silva dos Santos', 'Thiago Marconi Silva Chaves', 'Legenda'],
        'MDB': ['Beatriz Peixoto Madureira', 'Cristiano dos Reis Silva', 'Decio de Almeida Utsch', 'Ediléia Maria Utsch Jorge', 'Geraldo Magela Nunes', 'Ivete Otoni Santa Bárbara de Abreu', 'Joao Marcos Otoni Seabra de Souza', 'Luiz Antonio dos Santos', 'Lucas Henrique Souza Costa', 'Marques Orlando de Souza', 'Legenda'],
        'PODE': ['Cabelo', 'Diego Rodrigues Lamounier', 'Graziela Cardoso Rocha', 'Jobert Leonardo Floriano', 'Natalia Cirino de Miranda Sousa', 'Pretinho Filho do Hilton', 'Renan Felipe Rosemberg Moura', 'Legenda']
    };

    // Sort candidates in each party except 'Legenda'
    Object.keys(partidosData).forEach(partido => {
        partidosData[partido] = partidosData[partido].sort().filter(c => c !== 'Legenda').concat('Legenda');
    });

    const votosCandidatos = {};
    const totalVagas = 11;  // Atualizado para 11 cadeiras

    // Function to mount parties
    function montarPartidos() {
        const containerPartidos = document.getElementById('partidos');
        const order = ['Mobiliza', 'Novo', 'Republicanos', 'Federação BRASIL DA ESPERANÇA - FE BRASIL(PT/PC do B/PV)', 'PRD', 'PP', 'PDT', 'Avante', 'PSB', 'Solidariedade', 'DC', 'Federação PSDB CIDADANIA(PSDB/CIDADANIA)', 'PSD', 'MDB', 'PODE']; // Custom order

        order.forEach(partido => {
            if (partidosData[partido]) {
                const divPartido = document.createElement('div');
                divPartido.className = 'partido';
                const h3 = document.createElement('h3');
                h3.textContent = partido;
                divPartido.appendChild(h3);

                partidosData[partido].forEach(candidato => {
                    const div = document.createElement('div');
                    const inputId = `${partido}_${candidato.replace(/\s+/g, '')}`;
                    div.innerHTML = `<label>${candidato}: <input type='number' id='${inputId}' min='0' value='0'></label>`;
                    divPartido.appendChild(div);
                    if (!votosCandidatos[partido]) votosCandidatos[partido] = {};
                    votosCandidatos[partido][candidato] = 0;
                });

                containerPartidos.appendChild(divPartido);
            }
        });
    }

    // Function to calculate election results
    function calcularResultados() {
        let totalVotosValidos = 0;
        const votos = {};

        Object.keys(partidosData).forEach(partido => {
            votos[partido] = 0;
            partidosData[partido].forEach(candidato => {
                const inputId = `${partido}_${candidato.replace(/\s+/g, '')}`;
                const votosCandidato = parseInt(document.getElementById(inputId).value, 10);
                votosCandidatos[partido][candidato] = votosCandidato;
                votos[partido] += votosCandidato;
            });
            totalVotosValidos += votos[partido];
        });

        const quocienteEleitoral = totalVotosValidos / totalVagas;
        const cadeiras = {};
        let cadeirasRestantes = totalVagas;

        for (let partido in votos) {
            cadeiras[partido] = Math.floor(votos[partido] / quocienteEleitoral);
            cadeirasRestantes -= cadeiras[partido];
        }

        while (cadeirasRestantes > 0) {
            let partidoParaReceberCadeira = Object.keys(votos).reduce((a, b) => 
                (votos[a] / (cadeiras[a] + 1)) > (votos[b] / (cadeiras[b] + 1)) ? a : b
            );
            cadeiras[partidoParaReceberCadeira]++;
            cadeirasRestantes--;
        }

        const eleitos = {};
        Object.keys(cadeiras).forEach(partido => {
            let candidatosOrdenados = Object.entries(votosCandidatos[partido])
                                            .sort((a, b) => b[1] - a[1])
                                            .map(pair => pair[0])
                                            .filter(candidato => candidato !== 'Legenda');

            eleitos[partido] = candidatosOrdenados.slice(0, cadeiras[partido]);
        });

        const resultadosDiv = document.getElementById('resultados');
        resultadosDiv.innerHTML = `=== RESULTADOS DA ELEIÇÃO ===<br>Total de votos válidos: ${totalVotosValidos}<br><br>--- Votos por Partido ---<br>`;
        Object.keys(votos).forEach(partido => {
            resultadosDiv.innerHTML += `${partido}: ${votos[partido]} votos<br>`;
        });
        resultadosDiv.innerHTML += `<br>--- Distribuição de Cadeiras por Partido ---<br>`;
        Object.keys(cadeiras).forEach(partido => {
            resultadosDiv.innerHTML += `${partido}: ${cadeiras[partido]} cadeiras<br>`;
        });
        resultadosDiv.innerHTML += `<br>--- Candidatos Eleitos ---<br>`;
        Object.keys(eleitos).forEach(partido => {
            eleitos[partido].forEach(candidato => {
                resultadosDiv.innerHTML += `${partido} - ${candidato}<br>`;
            });
        });
    }

    // Function to reset votes
    function zerarVotacao() {
        Object.keys(partidosData).forEach(partido => {
            partidosData[partido].forEach(candidato => {
                const inputId = `${partido}_${candidato.replace(/\s+/g, '')}`;
                document.getElementById(inputId).value = 0;
            });
        });
        document.getElementById('resultados').innerHTML = '';
    }

    // Attach event listeners
    montarPartidos();
    document.querySelector('button[onclick="calcularResultados()"]').addEventListener('click', calcularResultados);
    document.querySelector('button[onclick="zerarVotacao()"]').addEventListener('click', zerarVotacao);
});

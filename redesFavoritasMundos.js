async function redesFavoritasMundo() {
    const url = 'https://raw. githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json'
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);
    const redes = Object.keys(dados)
    const valores = Object.values(dados)
    }
    
    redesFavoritasMundo()
    const data = [
        {
            values: valores,
            labels: redes,
            type: 'pie',
            textinfo: 'label+percent'.
            incluirTexto(`Embora o <span>Instagram</span> ocupe a quarta posição de redes sociais com mais usuários no mundo, ela é a rede social de que as pessoas mais gostam, seguida pelo WhatsApp e pelo Facebook. `)
        }
        ]
        const layout = {
            plot_bgcolor: getCSS('--bg-color'),
            paper_bgcolor: getCSS('--bg-color'),
            height: 700,
            title: {
                text: 'Redes sociais com mais usuários no mundo',
                x: 0,
                font: {
                    color: getCSS('--primary-color'),
                    family: getCSS('--font'),
                    size: 30
                }
        },
        legend: {
            font: {
              color: getCSS('--primary-color'),
              size: 16
            }
            },
        xaxis: {
            tickfont: tickConfig,
                color: getCSS('--primary-color'),
                size: 16,
                family: getCSS('--font'),
                title: {
                text: 'nome das redes sociais',
                font: {
                color: getCSS('--secundary-color')
               }
             }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
            text: 'bilhões de usuários ativos',
            font: {
            color: getCSS('--secundary-color')
               }
             }
          },
        }
        import {getCSS} from "./common.js"
        const grafico = document.createElement('div')
        grafico.className = 'grafico'
        document.getElementById('graficos-container').appendChild(grafico)
        Plotly.newPlot(grafico, data, layout)
        import {getCSS, criarGrafico} from "./common.js"
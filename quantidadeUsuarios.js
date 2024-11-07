async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)
    
    console.log(dados)
    }
    
    quantidadeUsuarios()
    const data = [
        {
        
        x: nomeDasRedes,
        y: quantidadeUsuarios,
        type: 'bar',
        marker: {
            color: getCSS('--primary-color')
          }
        }
        ]
        const grafico = document.createElement('div')
        grafico.className = 'grafico'
        document.getElementById('graficos-container').appendChild(grafico)
        Plotly.newPlot(grafico, data, layout)
        import { getCSS } from "./common.js"
        const layout = {

            plot_bgcolor: getCSS('--bg-color'),
            paper_bgcolor: getCSS('--bg-color'),
            title: {
                text: 'redes sociais com mais usuários no mundo'
                }
            }
            import { getCSS, tickConfig } from "./common.js"
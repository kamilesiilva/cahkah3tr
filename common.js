const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
    }
    import { getCSS } from "./common.js"
    const tickConfig = {
        color: getCSS('--primary-color'),
        size: 16,
        family: getCSS('--font')
        }
        
        export {getCSS, tickConfig}
        function criarGrafico(data, layout){
            const grafico = document.createElement('div')
            grafico.className = 'grafico'
            document.getElementById('graficos-container') .appendChild(grafico)
            const config = {
                responsive: true,
                displayModeBar: false
                }
                Plotly.newPlot(grafico, data, layout, config)
            }
            
            export {getCSS, tickConfig, criarGrafico, incluirTexto} from "./common.js"
const productos = [
    {id:'01',
    category: 'enduro',
    name: 'Corven Triax R2',
    cilindrada: 150,
    price: 1500000,
    stock: 2,
    description: 'Motor Monocilíndrico, 4 tiempos, 2 válvulas, OHV, refrigerado por aire Cilindrada 149 cc Potencia máxima 16 cv @ 8.300 rpm Velocidad máxima 100 km/h Alimentación Carburador Encendido CDI (Ignición por descarga capacitiva) Arranque Eléctrico y pedal Transmisión 5 velocidades Faro Delantero Halógeno Llantas Rayos Frenos D / T Disco / Tambor Neumático Delantero 3,00 R21 Neumático Trasero 4,10 R18 Suspensión Delantera Horquilla telescópica Suspensión Trasera Monoamortiguador Largo / Ancho / Alto 2.077 mm / 784 mm / 1.165 mm Distancia entre Ejes N/D Peso 125,5 kg Altura del Asiento N/D Capacidad de Carga 150 kg Capacidad del Tanque 12,5 litros Consumo y Autonomía 370 km / 30 km x litro Puerto USB No',
    imagen:'../images/corventriax150r2.png',
},
    {id: '02',
    category: 'enduro',
    name: 'Yamaha XTZ 125',
    cilindrada: 125,
    price: 3850000,
    stock: 2,
    description: 'Monocilíndrico, 4T, SOHC, Refrigerado por aire CILINDRADA: 124 cc DIÁMETRO X CARRERA: 54,0 x 54,0 mm RELACIÓN COMPRESIÓN: 10,0:1 SISTEMA DE LUBRICACIÓN: Cárter húmedo ALIMENTACIÓN: Carburador ENCENDIDO: CDI ARRANQUE: Eléctrico y a pedal TRANSMISIÓN: 5 velocidades TRANSMISIÓN FINAL: Cadena EMBRAGUE: Multidisco en baño de aceite CHASIS TIPO: Tubular de acero tipo diamante FRENO DELANTERO: Disco simple de 220 mm FRENO TRASERO: Tambor de 130 mm NEUMÁTICO DELANTERO: 80/90-21M/C 48P NEUMÁTICO TRASERO: 110/80-18M/C 58P SUSPENSIÓN DELANTERA: Horquilla telescópica RECORRIDO DELANTERO: 180 mm SUSPENSIÓN TRASERA: Monocross basculante RECORRIDO TRASERO: 180 mm DIMENSIONES LONGITUD TOTAL: 2090 mm ANCHO TOTAL: 830 mm ALTO TOTAL: 1115 mm DISTANCIA ENTRE EJES: 1340 mm DISTANCIA MÍNIMA DEL SUELO: 260 mm PESO EN ORDEN DE MARCHA: 118 Kg CAPACIDAD DEL DEPÓSITO DE COMBUSTIBLE: 10,6 Lts CAPACIDAD DEL DEPÓSITO DE ACEITE: 1 Lts',
    imagen:'../images/yamahaxtz125.webp',
},
    {id: '03',
    category: 'naked',
    name: 'Yamaha FZ 25',
    cilindrada: 250,
    price: 5800000,
    stock: 2,
    description: 'Monocilíndrico, 4T, SOHC, Refrigerado por aire CILINDRADA: 249 cc DIÁMETRO X CARRERA: 74 x 58 mm RELACIÓN COMPRESIÓN: 9.8:1 SISTEMA DE LUBRICACIÓN: Cárter húmedo ALIMENTACIÓN: Inyección electrónica ENCENDIDO: TCI ARRANQUE: Eléctrico TRANSMISIÓN: 5 velocidades TRANSMISIÓN FINAL: Cadena EMBRAGUE: Multidisco en baño de aceite CHASIS TIPO: Tipo diamante FRENO DELANTERO: Disco simple de 282 mm x 4 mm FRENO TRASERO: Disco simple de 220 mm x 4,5 mm NEUMÁTICO DELANTERO: 100/80-17 M/C 52P NEUMÁTICO TRASERO: 140/70-17M/C 66S SUSPENSIÓN DELANTERA: Horquilla telescópica RECORRIDO DELANTERO: 130 mm SUSPENSIÓN TRASERA: Basculante RECORRIDO TRASERO: 120 mm DIMENSIONES LONGITUD TOTAL :2015 mm ANCHO TOTAL: 770 mm ALTO TOTAL: 1075 mm DISTANCIA ENTRE EJES: 1360 mm DISTANCIA MÍNIMA DEL SUELO: 160 mm PESO EN ORDEN DE MARCHA: 146 Kg CAPACIDAD DEL DEPÓSITO DE COMBUSTIBLE: 14 Lts CAPACIDAD DEL DEPÓSITO DE ACEITE: 1,45 Lts',
    imagen:'../images/yamahafz25.webp',
},
    {id: '04',
    category: 'calle',
    name: 'Zanella RX 150 Z7 Base',
    cilindrada: 150,
    price: 12700000,
    stock: 2,
    description: 'Monocilíndrico 4T. Cilindrada: 150 cm3 Refrigeración: Por Aire Cantidad de marchas: Manual 5 velocidades Potencia: 12.7 hp Velocidad máxima: 100 km/h Consumo: 2.1 lts c/100 km Arranque: Eléctrico y Patada CHASIS Dimensiones: Largo total 2030 mm Ancho total 740 mm Alto total 1060 mm Distancia del suelo: 149 mm Peso vacío: 109 kg Capacidad de carga: 150 kg Capacidad de combustible: 12 Lts Rodado: Delantero 2,75/18” Trasero 3.0″-18” Llantas: Rayos Frenos: Delantero Tambor Trasero Tambor Suspensión: Delantera Horquilla telescópica hidráulica Trasera Doble amortiguador hidráulico',
    imagen:'../images/zanellarx150.png',
},

]

export const getProducts = () => {
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if (error){
                reject('hubo un problema, intente mas tarde') 
            }
            else {
                resolve (productos)
            }
        },1000)
    })
}

export const getOneProduct = (id) => {
    return new Promise ((resolve, reject)=> {
        let error = false
        setTimeout(()=>{
            if (error) {
                reject('No existe ese producto')
            }else {
                let oneProduct = productos.find((producto)=> producto.id === id)
                resolve(oneProduct)
            }
        },1000)
    })
}
import {
    backgroundContainers
} from './components'

const GphApiClient = require("giphy-js-sdk-core");
const client = GphApiClient("riDhwGypGC6H7Q6mlE5NKmEIZgwS7q6c");

const glify = async id => {
    let glify = await client.gifByID(id);
    return glify.data.images.downsized.url;
};

const getIdOfGIF = weatherID => {
    switch (weatherID) {
        case "01d":
            backgroundContainers[0].classList.toggle('sunny')
            backgroundContainers[1].classList.toggle('sunny')
            return "l1J9Nd2okdiIq7K9O"

        case "02d":
            backgroundContainers[0].classList.toggle('sun-clouds')
            backgroundContainers[1].classList.toggle('sun-clouds')
            return "icPiwAMdzz44VCcAPb"
        case "03n":
            backgroundContainers[0].classList.toggle('night-clouds')
            backgroundContainers[1].classList.toggle('night-clouds')
            return "QWMTcrV8CFyRyU7SjS"
        case "03d":
            backgroundContainers[0].classList.toggle('cloudy')
            backgroundContainers[1].classList.toggle('cloudy')
            return "QWMTcrV8CFyRyU7SjS"
        case "04n":
            backgroundContainers[0].classList.toggle('night-clouds')
            backgroundContainers[1].classList.toggle('night-clouds')
            return "fqhdKisO8aPdXVZKH4"
        case "04d":
            backgroundContainers[0].classList.toggle('dark-clouds')
            backgroundContainers[1].classList.toggle('dark-clouds')
            return "fqhdKisO8aPdXVZKH4"
        case "09n":
        case "10n":
        case "09d":
            backgroundContainers[0].classList.toggle('dark-clouds-raining')
            backgroundContainers[1].classList.toggle('dark-clouds-raining')
            return "XBRXoVEvMHaKG841G8"

        case "10d":
            backgroundContainers[0].classList.toggle('raining-with-sun')
            backgroundContainers[1].classList.toggle('raining-with-sun')
            return "3ov9jEvKwFU8Io6Oic"
        case "11n":
            backgroundContainers[0].classList.toggle('dark-clouds-raining')
            backgroundContainers[1].classList.toggle('dark-clouds-raining')
            return "Q8bCsT2A4cuVM8C93X"
        case "11d":
            backgroundContainers[0].classList.toggle('dark-clouds')
            backgroundContainers[1].classList.toggle('dark-clouds')
            return "Q8bCsT2A4cuVM8C93X"
        case "13n":
            backgroundContainers[0].classList.toggle('night-clouds')
            backgroundContainers[1].classList.toggle('night-clouds')
            return "fYTUarigdyZyvwFQsU"


        case "13d":
            backgroundContainers[0].classList.toggle('dark-clouds')
            backgroundContainers[1].classList.toggle('dark-clouds')
            return "fYTUarigdyZyvwFQsU"

        case "50n":
            backgroundContainers[0].classList.toggle('night')
            backgroundContainers[1].classList.toggle('night')
            return "fYTUarigdyZyvwFQsU"
        case "50d":
            backgroundContainers[0].classList.toggle('sunny')
            backgroundContainers[1].classList.toggle('sunny')
            return "fYTUarigdyZyvwFQsU"

        case "01n":
            backgroundContainers[0].classList.toggle('night')
            backgroundContainers[1].classList.toggle('night')
            return "MZXCIvPneFNeFF18Cj"

        case "02n":
            backgroundContainers[0].classList.toggle('night-clouds')
            backgroundContainers[1].classList.toggle('night-clouds')
            return "dvOnh5G2CdzIi2fLUj"


        default:
            return "FERFI"
    }
};

// =============DAYLIGHT===============
// 01d:SUN: l1J9Nd2okdiIq7K9O
// 02d:SUN CLOUDS: icPiwAMdzz44VCcAPb
// 03d:CLOUDY : QWMTcrV8CFyRyU7SjS
// 04d: DARK_CLOUDS : fqhdKisO8aPdXVZKH4
// 09d:DARK-CLOUDS-RAINING: XBRXoVEvMHaKG841G8
// 10d:RAINING WITH SUN:  3ov9jEvKwFU8Io6Oic
// 11d: THUNDERSTORM: Q8bCsT2A4cuVM8C93X
// 13d: SNOWING: dWNrIacI0XKNA9doPs
// 50d : WIND : fYTUarigdyZyvwFQsU
//===================================

// ============NIGHT============
// 01n: MOON:MZXCIvPneFNeFF18Cj
// 02n: MOON-WITH-CLOUDS: dvOnh5G2CdzIi2fLUj
// 03n == 03d
// 04n==04d
// 09n==09d===10n
// 11n== 11d
// 13n== 13d
// 50d == 50n
// =============================

export {
    glify,
    getIdOfGIF
};
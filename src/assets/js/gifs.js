const GphApiClient = require("giphy-js-sdk-core");
const client = GphApiClient("riDhwGypGC6H7Q6mlE5NKmEIZgwS7q6c");

const glify = async(id) => {
    let glify = await client.gifByID(id);
    return glify.data.images.downsized.url;
};

const getIdOfGIF = (weatherID) => {
    switch (weatherID) {
        case value:

            break;

        default:
            break;
    }
}



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
}
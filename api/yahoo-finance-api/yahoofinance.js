const headers = {
    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    "x-rapidapi-key": "API-KEY",
};

export const fetchSingleStockChange = async (stock) => {
    const baseUrl =
        "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile?symbol=";
    try {
        let res = await fetch(`${baseUrl}${stock}`, {
            method: "GET",
            headers: headers,
        });
        let json = await res.json();
        return json.price.regularMarketChangePercent.fmt;
    } catch (error) {
        console.log(error);
    }
};

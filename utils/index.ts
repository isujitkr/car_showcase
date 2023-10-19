
export async function fetchCars() {
    const headers = {
    "X-RapidAPI-Key": "0f790fa5camsh9b56ad78b9c9b1dp1ca6cfjsn30d7579390b2",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    }
    
    const response = await fetch(
        "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars", {
        headers: headers,
    });

    const result = await response.json();
    return result;
}

export default async function getPalletes(keywords) {
    const prompt = `Generate a color palette of 5 colors in hexadecimal format based on keyword "${keywords}". The result should be returned in JSON format, with the colors listed under the object name "palettes". Inside "palettes", there should be an array of objects, each containing two properties: "color" for the actual color name and "hex" for the hexadecimal value. make every palettes unique from the past but still match the keyword`
    const response = await fetch(`https://api.nyxs.pw/ai/turbo?text=${prompt}`)
    const result = await response.json()
    return JSON.parse(result.result)
}

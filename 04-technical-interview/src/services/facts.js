
import { FACT_API_URL } from "../constants"

export const getRandomFact = async () => {
    const res = await fetch(FACT_API_URL)
    const data = await res.json()
    const {fact} = data
    return fact
}
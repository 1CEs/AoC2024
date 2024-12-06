export const getInput = async (): Promise<string | undefined> => {
    try {
        const res = await fetch('https://adventofcode.com/2024/day/1/input', {
            headers: {
                "cookie": process.env.COOKIE!
            }
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
        }

        const input = await res.text()
        return input
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}
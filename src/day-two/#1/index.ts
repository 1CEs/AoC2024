import { getInput } from "../../get-input"

(async () => await main())()

async function main() {
    try {
        const input = await getInput("2") as string
        let safeCount: number = 0
        input.trim().split('\n').forEach((line: string) => {
            const report: string[] = line.split(" ")

            const initial: number = (parseInt(report[0]) - parseInt(report[1])) 
            const matchType: "POSITIVE" | "NEGATIVE" = (initial >= 0) ? "POSITIVE" : "NEGATIVE"

            for (let i: number = 0; i < report.length; i++) {
                if(i == report.length - 1) break
                const calc: number = parseInt(report[i]) - parseInt(report[i + 1])
                const isSafe: boolean = Math.abs(calc) <= 3 && ((calc < 0 && matchType == "NEGATIVE") || (calc > 0 && matchType == "POSITIVE"))

                if(isSafe) {
                    safeCount += (i == report.length - 2) ? 1 : 0
                } else break
            }
        })
        console.log("#1: " + safeCount)
    } catch (error) {
        console.log(error)
    }
}
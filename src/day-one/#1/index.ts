import { getInput } from "../../get-input"

( async () => await main())()


async function main() {
    try {
        const input = await getInput("1") as string

        let leftList: number[] = [], rightList: number[] = []

        input.trim().split('\n').forEach((line) => {
            leftList = [...leftList, Number(line.split("   ")[0])]
            rightList = [...rightList, Number(line.split("   ")[1])]
        })

        const sortCallback: (a: number, b: number) => number = (a: number, b: number) => a - b

        const sortedLeftList = leftList.sort(sortCallback)
        const sortedRightList = rightList.sort(sortCallback)
        let distanceList: number[] = []

        for(let i: number = 0; i < sortedLeftList.length; i++) {
            distanceList = [...distanceList, sortedLeftList[i] - sortedRightList[i]]
        }

        let sum = 0
        distanceList.forEach((distance) => sum += Math.abs(distance))

        console.log("#1: " + sum)

    } catch (error) {
        console.error('Error fetching data:', error)
    }
}
import { getInput } from "../get-input"

( async () => await main())()


async function main() {
    try {
        const input = await getInput() as string

        let leftList: number[] = [], hashMap: Record<string, number> = {}

        input.trim().split('\n').forEach((line) => {
            const part = line.split("   ")
            leftList = [...leftList, Number(part[0])]
            if (part[1] in hashMap) {
                hashMap[part[1]] = hashMap[part[1]] + 1
            } else {
                hashMap[part[1]] = 1
            }
        })
        let sum: number = 0
        leftList.forEach((num: number) => {
            const val: number | undefined = hashMap[num.toString()]
            if (val != undefined) {
                sum += num * val
            }
        })
        console.log("#2: " + sum)

    } catch (error) {
        console.error(`Something that i don't fking know err:`, error)
    }
}
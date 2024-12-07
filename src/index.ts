import { $ } from "bun";

( async () => await main())()


async function main() {
    let result: string[] = []
    result = [...result, await $`bun ./src/day-one/#1/index.ts && bun ./src/day-one/#2/index.ts`.text()] 
    result = [...result, await $`bun ./src/day-two/#1/index.ts && bun ./src/day-two/#2/index.ts`.text()] 
    result.forEach((answer: string, idx) => console.log(`Day-${idx + 1}:\n${answer}`))
}
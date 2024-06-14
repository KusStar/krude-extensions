import { Glob } from "bun";

const glob = new Glob("*");

let md = ""

const getExtLineNumber = async (file: string, extension: {
  name: string,
  description: string
}) => {
  const lines = (await Bun.file(file).text()).split("\n")
  let lineNumber = 0
  for (const line of lines) {
    if (line.includes(extension.name)) {
      return lineNumber + 1
    }
    lineNumber++
  }
  return -1
}

let extensionCount = 0

for (const name of glob.scanSync("./extensions")) {
  const file = './extensions/' + name
  const extension = await Bun.file(file).json()

  if (extension.main) {
    extensionCount += extension.main.length
    md += `### [${extension.name}](./extensions/${name})\n\n`
    for (const ext of extension.main) {
      const i18nNames = ext.i18n ? " | " + Object.values(ext.i18n).map((it: any) => it.name).join(' | ') : ""
      const lineNumber = await getExtLineNumber(file, ext)
      const desc = ext.description ? `\n  ${ext.description}\n` : ""
      const keywords = ext.keywords ? `\n  [${ext.keywords.join(", ")}]\n` : ""
      md += `- [${ext.name}${i18nNames}](./extensions/${name}#L${lineNumber})\n\n  **${ext.type}**\n  ${desc}${keywords}\n`
    }
  }
}

// console.log(md)

console.log(`extensionCount: ${extensionCount}`)

const readme = await Bun.file("./README.md").text()

const anchor = "## List"

const start = readme.indexOf(anchor)

const totalExtension = "Extension Count: " + extensionCount + "\n\n"

const newReadme = readme.slice(0, start + anchor.length) + `\n\n${totalExtension}` + md

Bun.write("./README.md", newReadme)
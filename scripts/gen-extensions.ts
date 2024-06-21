import { ExtensionRepo } from '../src/types.ts'

async function gitHashObject(file: string) {
  const command = new Deno.Command("git", {
    args: [
      "hash-object",
      file
    ],
  });
  const { code, stdout, stderr } = await command.output();
  if (code !== 0) {
    throw new Error(`git hash-object failed: ${stderr.toString()}`);
  }
  const hash = new TextDecoder().decode(stdout)
  return hash.trim()
}

const data: ExtensionRepo[] = [];
for await (const file of Deno.readDir(`./extensions`)) {
  const sha = await gitHashObject(`./extensions/${file.name}`);
  data.push({
    name: file.name,
    download_url: `/extensions/${file.name}?sha=${sha}`,
    sha: sha
  });
}

data.sort((a, b) => a.name.localeCompare(b.name));

Deno.writeTextFile(`./extensions.json`, JSON.stringify(data, null, 2));
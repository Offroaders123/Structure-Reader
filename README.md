# Structure-Reader

A demo project for reading Structure Block exports using NBTify!

While looking into the types to document for Java's NBT Chunk Format in my [Region-Types](https://github.com/Offroaders123/Region-Types) project, I also started investigating the NBT structures for Structure Block exports too. Found some helpful resources to go along with my demos, so I thought making a little repo for this could be helpful to get some more ideas rolling. This is another synonym to how Region-Types is likely going to work.

This was a nice little thing to set up to both learn more about the Structure Block format, and also show off some different ways as to how you can make use of NBTify's API features!

[Structure file format - Minecraft Wiki](https://minecraft.wiki/w/Structure_file) (Java)

[Bedrock mcstructure file format - gist.github.com](https://gist.github.com/tryashtar/87ad9654305e5df686acab05cc4b6205)

[[MCPE-105278] Compressed structure files can't be loaded - Jira](https://bugs.mojang.com/browse/MCPE-105278)

[.mcstructure | Bedrock Wiki](https://wiki.bedrock.dev/nbt/mcstructure.html) (A reference of the second link)

[MCBE Essentials](https://mcbe-essentials.github.io/structure-editor/) (A very cool find!)

[MCBE Essentials - github.com](https://github.com/MCBE-Essentials/mcbe-essentials.github.io)

I recently found these two packages as well, definitely going to be helpful for this project, and Region-Types in particular.

[@minecraft/vanilla-data - npm](https://www.npmjs.com/package/@minecraft/vanilla-data)

[bc-minecraft-bedrock-vanilla-data - npm](https://www.npmjs.com/package/bc-minecraft-bedrock-vanilla-data)

## Usage

```sh
$ npx tsx ./src/structure-reader.ts

# - or this to watch for changes,
# - if you want to experiment with the code

$ npx tsx --watch ./src/structure-reader.ts
```
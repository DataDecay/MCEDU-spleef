player.onChat("build", function () {
    blocks.fill(
    SNOW,
    positions.add(
    agent.getPosition(),
    pos(20, -5, 20)
    ),
    positions.add(
    agent.getPosition(),
    pos(-20, -5, -20)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    SNOW,
    positions.add(
    agent.getPosition(),
    pos(20, -10, 20)
    ),
    positions.add(
    agent.getPosition(),
    pos(-20, -10, -20)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    SNOW,
    positions.add(
    agent.getPosition(),
    pos(20, -15, 20)
    ),
    positions.add(
    agent.getPosition(),
    pos(-20, -15, -20)
    ),
    FillOperation.Replace
    )
})
player.onChat("restart", function () {
    player.runChatCommand("build")
    player.runChatCommand("play")
})
player.onChat("setup", function () {
    agent.teleportToPlayer()
    player.runChatCommand("build")
})
player.onChat("play", function () {
    gameplay.setWeather(CLEAR)
    gameplay.timeSet(gameplay.time(DAY))
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(ALL_PLAYERS)
    )
    player.execute(
    "clear @a"
    )
    mobs.teleportToPosition(
    mobs.target(ALL_PLAYERS),
    randpos(
    positions.add(
    agent.getPosition(),
    pos(-15, -4, -15)
    ),
    positions.add(
    agent.getPosition(),
    pos(15, -4, 15)
    )
    )
    )
    gameplay.title(mobs.target(ALL_PLAYERS), "3", "")
    loops.pause(1000)
    gameplay.title(mobs.target(ALL_PLAYERS), "2", "")
    loops.pause(1000)
    gameplay.title(mobs.target(ALL_PLAYERS), "1", "")
    loops.pause(1000)
    gameplay.title(mobs.target(ALL_PLAYERS), "START", "")
    player.execute(
    "give @a netherite_shovel"
    )
})

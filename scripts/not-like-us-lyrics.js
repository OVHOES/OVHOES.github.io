

(function setRandomLyrics() {
  const LYRICS = [
    "Say, Drake, I hear you like em young",
    "Baka got a weird case, why is he around?",
    "Certified Lover Boy? Certified pedophiles",
    "Wap, wap, wap, wap, wap, Dot fuck em up",
    "Wap, wap, wap, wap, wap, I'ma do my stuff",
    "Why you trollin like a bitch? Ain't you tired?",
    "Tryna strike a chord and it's probably A minorrrrrrrrrr",
    "What is the owl? Bird niggas and bird bitches, go",
    "The audience not dumb",
    "Shape the stories how you want, hey, Drake, they're not slow",
    "Rabbit hole is still deep, I can go further, I promise",
    "What OVO for? The 'Other Vaginal Option'? Pussy",
    "Fuck a caption, want action, no accident",
    "And your homeboy need subpoena, that predator move in flocks",
    "That name gotta be registered and placed on neighborhood watch",
    "Devil is a lie, he a 69 God",
    "You run to Atlanta when you need a check balance",
    "Lil Baby helped you get your lingo up",
    "2 Chainz say you good, but he lied",
    "You run to Atlanta when you need a few dollars",
    "You not a colleague, you a fuckin colonizer",
    "It was God's plan to show y'all the liar",
    "Let me hear you say OVHOE",
    "Are you my friend? Are we locked in?"
  ];

  document.getElementById('main').innerHTML = `<p class="lyrics">${LYRICS[Math.floor(Math.random() * (LYRICS.length))]}</p>`
})();
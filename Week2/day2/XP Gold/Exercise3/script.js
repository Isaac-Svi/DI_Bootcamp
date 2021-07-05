let verb = prompt('Enter some verb:')

if (verb.length >= 3) {
  // Can also do this: !/ing$/g.test(verb)
  // with regex

  // Didn't use !verb.includes('ing'), because
  // what if the verb is "linger"?  We have to make sure the
  // 'ing' is at the end.  Also, even if 'ing' is at the end,
  // we have to make sure that it isn't an integral part of the word.
  // Let's say the word is "sing" or "ring".  We don't want it to be
  // "singly" or "ringly".  Therefore, to check if "ing" is important part
  // of the root of the word, we can check first if the word contains "ing",
  // and if it does, we check if verb.length - 3 (length of 'ing') is
  // greater than 3
  // Using regex to make sure the "ing" is at
  // the end of the word + the rest of the word
  // without "ing" is still greater than 3

  if (!/ing$/g.test(verb) || (/ing$/g.test(verb) && verb.length - 3 < 3)) {
    verb += 'ing'
  } else {
    verb += 'ly'
  }
}

alert(verb)

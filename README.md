# gameonic
status: WIP - Memory game based on Bitcoin Mnemonic seed keys 


just this file:

```rb
module GameonicWordsLoader
  def load_words#(language:)
    words_language = :japanese
    # words_language = language
    words_file = "game_words_#{words_language}" # todo: support .hson as well
    path  = "#{WORDS_DIR}/#{words_file}.json"
    words = File.read path
    # words = JSON.parse words
    words = Oj.load words
    words
  end
end

# gameonic - main class

class Gameonic
  include GameonicWordsLoader

  def initialize
    @words = load_words
  end

  def match
    # returns a game object ...
    # @words.inspect
    words = @words

    # level 1 : 3 words
    word1 = words.sample
    word2 = words.sample
    word3 = words.sample

    words = {
      "1": word1,
      "2": word2,
      "3": word3,
    }
 ```

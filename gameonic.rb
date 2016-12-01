# TODO: gameonic opal bindings (and babel version also)


# ---------------------------------------


# -------
# env.rb

# require "oj"
# require "roda"
#
# or
require 'bundler'
Bundler.require :default


path = File.expand_path "../", __FILE__ # __dirname / __dirname__

PATH = path # export it as a constant (globally accessible variable/value)



# -------
# gameonic.rb (this file)

WORDS_DIR = "#{PATH}/words"

# todo: extract module words extractor (gameonic_words_loader.rb) - usage: require_relative 'gameonic_words_loader'; include GameonicWordsLoader
#
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

    # level 2 : 6 words
    # words = {}
    # # for word in words_in
    # words_in.each_with_index do |word, idx|
    #   words[idx.to_sym] = words.sample
    # end
    #
    # words...
  end

  # class methods

  def self.match
    new.match
  end
end


# ruby gameonic.rb

# main main
# (test)
#
#
require 'yaml'

class String
def htmlify
  self.split("\n").join("<br>")
end
end

puts Gameonic.match.to_yaml.htmlify

# Node       = {}
# NodeServer = {}
#
# # node = Node
#
# NS = NodeServer



# NS

# ----------

require 'roda'

class NodeServer < Roda

  def config!
    # initialize configurations
    # Node
    #
    # ---
  end

  route do |r|
    r.root {
      "asdasda"
    }

    r.on("ruby") {
      puts "running ruby script:"
      `ruby gameonic.rb`
    }
  end

end

# ----------

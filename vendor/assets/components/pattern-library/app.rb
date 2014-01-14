require 'sinatra'
require 'sinatra/content_for'
require 'kss'

set :public_folder, Proc.new { File.join(root, "assets") }

get '/' do
  @styleguide = Kss::Parser.new('scss/')
  erb :styleguide
end

get '/example/*.html' do
  send_file "views/examples/#{params[:splat].first}.html"
end

get '/example/*' do
  render_layout
end

helpers do
  # Layout Handling (parse path and serve proper layout)
  def render_layout
    splat = params[:splat][0]
    render :erb, :"examples/#{splat}", layout: :drupal_layout
  end

  # Generates a styleguide block. A little bit evil with @_out_buf, but
  # if you're using something like Rails, you can write a much cleaner helper
  # very easily.
  def styleguide_block(section, &block)
    @section = @styleguide.section(section)
    @example_html = capture{ block.call }
    @escaped_html = ERB::Util.html_escape @example_html
    @_out_buf << erb(:_styleguide_block)
  end

  def styleguide_block_without_preview(section, &block)
    @section = @styleguide.section(section)
    @example_html = capture{ block.call }
    @escaped_html = ERB::Util.html_escape @example_html
    @_out_buf << erb(:_styleguide_block_without_preview)
  end

  def styleguide_block_without_modifiers(section, &block)
    @section = @styleguide.section(section)
    @example_html = capture{ block.call }
    @escaped_html = ERB::Util.html_escape @example_html
    @_out_buf << erb(:_styleguide_block_without_modifiers)
  end

  def styleguide_block_custom_example(section)
    @section = @styleguide.section(section)
    @_out_buf << erb(:_styleguide_block_custom_example)
  end

  # Captures the result of a block within an erb template without spitting it
  # to the output buffer.
  def capture(&block)
    out, @_out_buf = @_out_buf, ""
    yield
    @_out_buf
  ensure
    @_out_buf = out
  end
end


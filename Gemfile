source "https://rubygems.org"

# GitHub Pages deployment
gem "github-pages", group: :jekyll_plugins

# Optional Jekyll plugins
group :jekyll_plugins do
  gem "jekyll-feed"
end

# Windows and JRuby timezone support
platforms :windows, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Windows directory watcher
gem "wdm", "~> 0.1", platforms: [:windows]

# JRuby http parser
gem "http_parser.rb", "~> 0.6.0", platforms: [:jruby]

# -*- encoding: utf-8 -*-
# stub: jekyll-compress-images 1.2 ruby lib

Gem::Specification.new do |s|
  s.name = "jekyll-compress-images".freeze
  s.version = "1.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "source_code_uri" => "https://github.com/valerijaspasojevic/jekyll-compress-images" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["Valerija Spasojevic".freeze]
  s.date = "2017-11-09"
  s.description = "Plugin for compress/optimize images (jpg, png, gif, svg). If you are struggle how to install more information you can find here: https://github.com/valerijaspasojevic/jekyll-compress-images".freeze
  s.email = "spasojevic.valerija@gmail.com".freeze
  s.homepage = "https://rubygems.org/gems/example".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.0.1".freeze
  s.summary = "Jekyll plugin for compress/optimize images (jpg, png, gif, svg)".freeze

  s.installed_by_version = "3.0.1" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<image_optim>.freeze, [">= 0"])
      s.add_runtime_dependency(%q<image_optim_pack>.freeze, [">= 0"])
    else
      s.add_dependency(%q<image_optim>.freeze, [">= 0"])
      s.add_dependency(%q<image_optim_pack>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<image_optim>.freeze, [">= 0"])
    s.add_dependency(%q<image_optim_pack>.freeze, [">= 0"])
  end
end

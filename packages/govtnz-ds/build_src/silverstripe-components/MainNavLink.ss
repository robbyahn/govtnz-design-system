<li class="g-main-nav__link"> 
  <a<% if $ariaCurrent %> aria-current=""<% end_if %> class="g-main-nav__link__a<% if $ariaCurrent %>  g-main-nav__link__a--active<% end_if %>"<% if $href %> href="{$href}"<% end_if %><% if $rel %> rel="{$rel}"<% end_if %><% if $target %> target="{$target}"<% end_if %>> 
    {$children}

  </a> 
</li>
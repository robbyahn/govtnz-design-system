<div class="g-flex-row<% if $xsVerticalAlign == "top" %> g-flex-top-xs<% else_if $xsVerticalAlign == "middle" %> g-flex-middle-xs<% else_if $xsVerticalAlign == "bottom" %> g-flex-bottom-xs<% end_if %><% if $smVerticalAlign == "top" %> g-flex-top-sm<% else_if $smVerticalAlign == "middle" %> g-flex-middle-sm<% else_if $smVerticalAlign == "bottom" %> g-flex-bottom-sm<% end_if %><% if $mdVerticalAlign == "top" %> g-flex-top-md<% else_if $mdVerticalAlign == "middle" %> g-flex-middle-md<% else_if $mdVerticalAlign == "bottom" %> g-flex-bottom-md<% end_if %><% if $lgVerticalAlign == "top" %> g-flex-top-lg<% else_if $lgVerticalAlign == "middle" %> g-flex-middle-lg<% else_if $lgVerticalAlign == "bottom" %> g-flex-bottom-lg<% end_if %><% if $xsReversed == "true" %> g-flex-reversed-xs<% else_if $xsReversed == "false" %> g-flex-not-reversed-xs<% end_if %><% if $smReversed == "true" %> g-flex-reversed-sm<% else_if $smReversed == "false" %> g-flex-not-reversed-sm<% end_if %><% if $mdReversed == "true" %> g-flex-reversed-md<% else_if $mdReversed == "false" %> g-flex-not-reversed-md<% end_if %><% if $lgReversed == "true" %> g-flex-reversed-lg<% else_if $lgReversed == "false" %> g-flex-not-reversed-lg<% end_if %><% if $isReversed %>  g-flex-reverse<% end_if %> {$class}"> 
  {$children}

</div>
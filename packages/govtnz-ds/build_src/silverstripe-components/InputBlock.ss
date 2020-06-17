<div class="g-inputBlock-form-group<% if $errorId %>  g-inputBlock-form-group--error<% end_if %>"> 
  <label class="g-inputBlock-label"<% if $id %> for="{$id}"<% end_if %>> 
    {$label}

  </label> 
  
    <div class="g-inputBlock-hint"<% if $hintId %> id="{$hintId}"<% end_if %>> 
      {$hint}

    </div> 
  
  
    <div class="g-inputBlock-error-message"<% if $errorId %> id="{$errorId}"<% end_if %>> 
      <span class="g-inputBlock-visually-hidden"> Error: </span> 
      {$error}

    </div> 
  
  <input<% if $hintId && $errorId %> aria-describedby="{$hintId} {$errorId}"<% end_if %> class="g-inputBlock-input<% if $width == "30" %> g-inputBlock-input--width-30<% else_if $width == "20" %> g-inputBlock-input--width-20<% else_if $width == "10" %> g-inputBlock-input--width-10<% else_if $width == "5" %> g-inputBlock-input--width-5<% else_if $width == "4" %> g-inputBlock-input--width-4<% else_if $width == "3" %> g-inputBlock-input--width-3<% else_if $width == "2" %> g-inputBlock-input--width-2<% end_if %><% if $error %>  g-inputBlock-input--error<% end_if %>"<% if $id %> id="{$id}"<% end_if %><% if $name %> name="{$name}"<% end_if %><% if $required %> required="<% if $required %>undefined<% end_if %>"<% end_if %><% if $disabled %> disabled="<% if $disabled %>undefined<% end_if %>"<% end_if %><% if $readOnly %> readonly="<% if $readOnly %>undefined<% end_if %>"<% end_if %><% if $autoFocus %> autofocus="<% if $autoFocus %>undefined<% end_if %>"<% end_if %><% if $value %> value="{$value}"<% end_if %><% if $min %> min=""<% end_if %><% if $max %> max=""<% end_if %><% if $type %> type="{$type}"<% end_if %><% if $spellCheck %> spellcheck="<% if $spellCheck %>undefined<% end_if %>"<% end_if %><% if $maxLength %> maxlength=""<% end_if %><% if $autoComplete %> autocomplete="{$autoComplete}"<% end_if %>/> 
</div>
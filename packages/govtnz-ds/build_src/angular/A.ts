import { Component, Input } from "@angular/core";
@Component({
  selector: "g-A",
  template: `
<a class="g-link{{isMuted ? " g-link--muted" : ""}}{{class ? " " +  class : ""}}" href="{{href}}" rel="{{rel}}" target="{{target}}">
<slot></slot>

</a>


`
})
export class AppComponent {
  @Input() isMuted: boolean | undefined;
  @Input() class: any | undefined;
  @Input() href: string;
  @Input() rel: string | undefined;
  @Input() target: any | undefined;
  @Input() children: React.ReactNode;
  title = "A";
}
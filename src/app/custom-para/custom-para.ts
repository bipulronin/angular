import { AfterContentInit, Component, ContentChild, TemplateRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-custom-para',
  imports: [],
  templateUrl: './custom-para.html',
  styleUrl: './custom-para.scss',
  standalone: true
})
export class CustomPara implements AfterContentInit {
  @ContentChild(TemplateRef) refContent!: TemplateRef<any>;

  constructor(public vcf: ViewContainerRef) {}
  ngAfterContentInit() {
    console.log(this.refContent);
    this.vcf.createEmbeddedView(this.refContent);
  }
}

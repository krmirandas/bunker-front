import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "customEllipsis"
})
export class CustomEllipsisPipe implements PipeTransform {
  transform(text: string, size: number): string {
    return text.slice(0, size) + "...";
  }
}

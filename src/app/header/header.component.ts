import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector : 'app-header',
    templateUrl : './header.component.html'

})

export class HeaderComponent {
    collapsed ;
    // something is not right here
    @Output() featureSelected = new EventEmitter <string>();
    onSelect(feature: string) {
        this.featureSelected.emit(feature);

    }
}

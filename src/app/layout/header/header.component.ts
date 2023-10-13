import {Component, HostBinding, OnInit} from '@angular/core';
import {UntypedFormGroup, UntypedFormControl} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import { AppState } from '../../store/state';
import { ToggleControlSidebar, ToggleSidebarMenu } from '../../store/ui/actions';
import { UiState } from '../../store/ui/state';

const BASE_CLASSES = 'main-header navbar navbar-expand';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @HostBinding('class') classes: string = BASE_CLASSES;
    public ui: Observable<UiState>;
    public searchForm: UntypedFormGroup;
    public sidebarHeaderButton : boolean = true;
    public headerMenu : boolean = true;
    
    constructor(
        private store: Store<AppState>
    ) {}

    ngOnInit() {
        this.ui = this.store.select('ui');
        this.ui.subscribe((state: UiState) => {
            this.classes = `${BASE_CLASSES} ${state.navbarVariant}`;
            this.sidebarHeaderButton = state.sidebarHeaderButton;
            this.headerMenu = state.headerMenu;
        });
        this.searchForm = new UntypedFormGroup({
            search: new UntypedFormControl(null)
        });
    }

    logout() {
        alert("logout")
    }

    onToggleMenuSidebar() {
        this.store.dispatch(new ToggleSidebarMenu());
    }

    onToggleControlSidebar() {
        this.store.dispatch(new ToggleControlSidebar());
    }
}

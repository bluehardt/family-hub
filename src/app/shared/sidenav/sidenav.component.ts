import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ROUTES } from '../../app-routing.module';

@Component({
  selector: 'app-sidenav',
  standalone: false,
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent implements OnInit {
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  readonly ROUTES = ROUTES;

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);

  constructor() {}

  ngOnInit(): void {}
}

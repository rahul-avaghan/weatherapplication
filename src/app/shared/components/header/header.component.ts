import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy {

  /** Interval for tweeking the icon */
  iconInterval;
  /* Initial icon. */
  icon = 'wb_cloudy';
  constructor(private route: ActivatedRoute) { }
  /** On initialization set the icon. */
  ngOnInit() {
    this.setIcon();
  }

  /** On initialization set the icon. */
  setIcon() {
    this.iconInterval = setInterval(() => {
      this.icon = this.icon === 'wb_cloudy' ? 'wb_sunny' : 'wb_cloudy';
    }, 2000);
  }

  /** Clear the interval on destroy. */
  ngOnDestroy(): void {
    clearInterval(this.iconInterval);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { WeatherInfo } from 'src/app/shared/Models/weatherinfo';
import { MatDialog } from '@angular/material/dialog';
import { DetailsmodalComponent } from 'src/app/weatherdetails/components/detailsmodal/detailsmodal.component';
@Component({
  selector: 'app-weathercard',
  templateUrl: './weathercard.component.html',
  styleUrls: ['./weathercard.component.scss']
})
export class WeathercardComponent implements OnInit {
  /** Weather information required to show the card. */
  @Input()
  weatherInfo: WeatherInfo;

  /** Inject the dialog object required. */
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

  /** Open weather information dialog. */
  openDialog(): void {
    this.dialog.open(DetailsmodalComponent, {
      panelClass: 'dialog-backgound-' + this.weatherInfo.city.name.toLowerCase(),
      hasBackdrop: true,
      data: {
        weatherInfo: this.weatherInfo
      }
    });
  }
}

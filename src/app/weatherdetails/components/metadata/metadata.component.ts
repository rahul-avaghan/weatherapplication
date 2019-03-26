import { Component, OnInit, Input } from '@angular/core';
import { WeatherInfo } from 'src/app/shared/Models/weatherinfo';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.scss']
})
export class MetadataComponent implements OnInit {
  @Input()
  weatherInfo: WeatherInfo;
  constructor() { }

  ngOnInit() { }
}

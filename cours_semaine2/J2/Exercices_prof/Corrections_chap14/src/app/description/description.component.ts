import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PastrieService } from '../pastrie.service';
import { Pastrie } from '../pastrie';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  pastrie: Pastrie | undefined;

  constructor(private route: ActivatedRoute, private aS: PastrieService)
  { }

  ngOnInit(): void {
    const id  = this.route.snapshot.paramMap.get('id');
    if(id)
      this.pastrie = this.aS.getPastrie(id);
  }
}

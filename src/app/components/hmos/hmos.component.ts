import { Component, OnInit, ViewChild } from '@angular/core';
import { AddHMOsComponent } from './add-hmos/add-hmos.component';
import { HMO } from 'src/app/Models/HMO.model';
import { HMOsService } from 'src/app/Services/hmos.service';

@Component({
  selector: 'app-hmos',
  templateUrl: './hmos.component.html',
  styleUrls: ['./hmos.component.scss']
})
export class HMOsComponent implements OnInit{

  @ViewChild(AddHMOsComponent) addHMO!: AddHMOsComponent;
  selectedHMO: HMO = new HMO()
  update:boolean = false;
  
  allHMO: Array<HMO> = new Array<HMO>;
  constructor(public HmoServise: HMOsService) { }
  ngOnInit(): void {
    this.HmoServise.getAllHMO().subscribe(d =>
      this.allHMO = d
    )

  }

  edit(id: number) {

    this.HmoServise.getHMOById(id).subscribe(succ => {
      this.selectedHMO = succ

     }
     )
    this.update = true
  }

  Save(hmo: HMO) {
    debugger
    if (hmo.id != 0) {
      this.HmoServise.updateHMO(hmo.id, hmo).subscribe(a => {
        this.HmoServise.getAllHMO().subscribe(d =>{
          this.allHMO = d
          this.update = false
          }
        )
      })
    } else {
      hmo.isActive = true
      this.HmoServise.addHMO(hmo).subscribe(a => {
        this.HmoServise.getAllHMO().subscribe(d =>
          this.allHMO = d
        )
      })
    }

  }

  Close(){
    this.update = false
  }

  add() {
    this.selectedHMO = new HMO()

    if (this.addHMO) {
      this.addHMO.item = this.selectedHMO;
      this.addHMO.show();
    }
  }
}


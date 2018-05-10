import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.services';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data = [];
  cols: any[];
  msgs: Message[] = [];
  table = true;
  constructor(private apiService: ApiService) { }

  async  ngOnInit() {
    this.cols = [
        { field: 'serial', header: 'Sensor' },
        { field: 'valor', header: 'Valor' },
        { field: 'created_at', header: 'Fecha' }
    ];

    this.data = await this.apiService.getRegistros();
    if (this.table) {
    this.msgs.push({severity: 'success', summary: 'Alerta', detail: 'Tabla Actualizada Correctamente'});
  }

   setInterval( async () => {
      this.data = await this.apiService.getRegistros();
      if (this.table) {
        this.msgs = [];
        this.msgs.push({severity: 'success', summary: 'Alerta', detail: 'Tabla Actualizada Correctamente'});
      }
   }, 5000);
  }

  goTable() {
    this.table = true;
  }

  goImage() {
    this.table = false;
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChecklistTiTopicComponent } from './dialog/checklist-ti/checklist-ti.component';
import { Checklist } from 'src/app/core/interfaces/checklist.interface';
import { ChecklistService } from 'src/app/core/services/http/checklist.service';
import { ACCESS_CONTROL, cloud, contracts, cookies, information, mobile, security, stored, training, vulnerability } from 'src/app/core/constants/checklist';

@Component({
  selector: 'app-intermediario-checklist-ti',
  templateUrl: './intermediario-checklist-ti.component.html',
  styleUrls: ['./intermediario-checklist-ti.component.scss']
})
export class IntermediarioChecklistTiComponent implements OnInit {

  checklists!: Checklist[];

  categoryType: {[key: string]: string[]} = {
    "Controle de Acesso": ACCESS_CONTROL,
    "Dados Armazenados": stored,
    "Segurança das Comunicações": security,
    "Gerenciamento de Vulnerabilidades": vulnerability,
    "Dispositivos Móveis": mobile,
    "Serviços em Nuvem": cloud,
    "Cookies": cookies,
    "Política de Segurança da Informação": information,
    "Conscientização e Treinamento": training,
    "Contratos": contracts,
  };

  constructor(
    private dialog: MatDialog,
    private checklistService: ChecklistService
  ) {}

  async ngOnInit(){
    this.checklists = await this.checklistService.getAll();
    // console.log(this.checklists);
  }

  openDialog(checklist: Checklist) {
    this.dialog.open(ChecklistTiTopicComponent, {
      data: {
        checklist,
        categoryType: this.categoryType[checklist.category]
      }
    });
  }
}

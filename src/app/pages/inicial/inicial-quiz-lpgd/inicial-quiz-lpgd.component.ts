import { QuizService } from './../../../core/services/http/quiz.service';
import { Component, Input, ViewChild } from '@angular/core';
import { Quiz } from '../../../core/interfaces/quiz.interface'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../components/dialogs/error-dialog/error-dialog.component';
import { ConfirmDialogComponent } from '../../components/dialogs/confirm-dialog/confirm-dialog.component';
import { firstValueFrom } from 'rxjs';
import { CrudService } from 'src/app/core/services/http/crud.service';
@Component({
  selector: 'app-inicial-quiz-lpgd',
  templateUrl: './inicial-quiz-lpgd.component.html',
  styleUrls: ['./inicial-quiz-lpgd.component.scss']
})
export class InicialQuizLpgdComponent {
  displayedColumns: string[] = ['tagName', 'createdAt', 'delete'];

  showQuizComponent: boolean = true;
  quiz: Quiz | undefined;

  quizForm = false;
  isCreate = false;

  quizData!: MatTableDataSource<Quiz>;
  quizSize = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private _snackbar: MatSnackBar,
    public dialog: MatDialog,
    private crudService: CrudService<Quiz>
  ){}

  viewList() {
    this.quizForm = false;
    this.isCreate = false;
    location.reload();
  }

  create() {
    this.quizForm = true;
    this.isCreate = true;
  }


  async ngOnInit() {
    try {
      const result = await this.crudService.getAll('quiz').toPromise();
      if (result) {
        this.quizSize = result.length;
        this.quizData = new MatTableDataSource<Quiz>(result);
        this.quizData.paginator = this.paginator;
      } else {
        console.error("Erro ao obter dados do quiz: resultado indefinido");
        this.onError("Erro ao obter dados do quiz");
      }
    } catch (error) {
      console.error(error);
      this.onError("Erro ao obter dados do quiz");
    }
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

  async delete(quiz: Quiz) {
    try {
      const result = await firstValueFrom(
        this.dialog
          .open(ConfirmDialogComponent, { data: "Você quer deletar esse item?" })
          .afterClosed()
      );
      if (result) {
        await this.crudService.delete('quiz', quiz.id).toPromise();
        this._snackbar.open("Item deletado com sucesso", "Fechar", {
          duration: 5000
        });
        location.reload();
      }
    } catch (error) {
      console.error(error);
      this.onError("Não foi possível deletar o item");
    }
  }

}

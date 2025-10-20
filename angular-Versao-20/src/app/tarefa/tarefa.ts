import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from '../tarefa.model';

@Component({
  selector: 'app-tarefa',
  imports: [],
  templateUrl: './tarefa.html',
  styleUrl: './tarefa.css'
})
export class TarefaComponent {
  @Input() tarefa!: Tarefa;
  @Output() concluir = new EventEmitter<number>();
  @Output() remover = new EventEmitter<number>();

  marcarConcluida() {
    this.concluir.emit(this.tarefa.id);
  }

  removerTarefa() {
    this.remover.emit(this.tarefa.id);
  }
}

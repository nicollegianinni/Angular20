import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tarefa } from '../tarefa.model';
import { TarefaComponent } from '../tarefa/tarefa';

@Component({
  selector: 'app-lista-tarefas',
  imports: [CommonModule, FormsModule, TarefaComponent],
  templateUrl: './lista-tarefas.html',
  styleUrl: './lista-tarefas.css'
})
export class ListaTarefas {
  tarefas = signal<Tarefa[]>([]);
  novaTarefa = '';

  tarefasPendentes = computed(() =>
    this.tarefas().filter(t => !t.concluida).length
  );

  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      const nova: Tarefa = {
        id: Date.now(),
        titulo: this.novaTarefa,
        concluida: false
      };
      this.tarefas.update(tarefas => [...tarefas, nova]);
      this.novaTarefa = '';
    }
  }

  removerTarefa(id: number) {
    this.tarefas.update(tarefas => tarefas.filter(t => t.id !== id));
  }

  marcarConcluida(id: number) {
    this.tarefas.update(tarefas =>
      tarefas.map(t =>
        t.id === id ? { ...t, concluida: !t.concluida } : t
      )
    );
  }
}

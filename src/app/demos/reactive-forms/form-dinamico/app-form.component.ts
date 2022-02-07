import { Component } from '@angular/core';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-form',
  template: `
    <div class="container">
      <h2>Cadastro de Contatos</h2>
      <app-dynamic-form [questions]="questions"></app-dynamic-form>
    </div>
  `,
  providers:  [QuestionService]
})
export class AppFormComponent {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
    console.log(this.questions)
  }
}

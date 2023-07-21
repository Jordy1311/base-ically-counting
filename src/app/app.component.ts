import { Component } from '@angular/core';

import { baseData } from './baseData';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <header>
      <h1>Base-ically Counting</h1>
      <h2>A number system explorer</h2>
    </header>

    <main>
      <form>
        <span
          class='material-symbols-outlined'
          matTooltip='Enter a value to see its representation in other base systems'
          matTooltipPosition='left'
          aria-label='Help'
          >
          help
        </span>

        <div *ngFor="let base of baseData">
          <label
            for='base.id'
            matTooltip='Values: {{ base.possibleChars }}'
            matTooltipPosition='right'
            >
            {{ base.name }}
          </label>
          <input
            [id]='base.id'
            type='text'
            [value]='base.value'
            (keypress)='validateCharacter($event)'
            (input)='updateValues($event)'
            >
        </div>
      </form>
    </main>
  `,
})
export class AppComponent {
  private readonly bases: [2, 8, 10, 16, 32] = [2, 8, 10, 16, 32];
  protected baseData = baseData;

  validateCharacter(event: KeyboardEvent): boolean {
    const formField = event.target as HTMLInputElement;
    const formBaseDataIndex = baseData.findIndex(baseData => baseData.id === formField.id);
    const eventCharacter = event.key;

    if (eventCharacter.match(this.baseData[ formBaseDataIndex ].regex)) {
      return true;
    } else {
      event.preventDefault();
      this.flash(event);
      return false;
    }
  }

  // make work better?
  flash(event: Event): void {
    const formField = event.target as HTMLInputElement;

    formField.classList.add('error');

    setTimeout(() => {
      formField.classList.remove('error');
    }, 150);
  }

  updateValues(event: Event): void {
    const formField = event.target as HTMLInputElement;
    const formBase = parseInt(formField.id);
    const formValueInBase10 = parseInt(formField.value, formBase);

    this.bases.forEach(base => {
      const baseDataIndex = baseData.findIndex(baseData => baseData.id === base.toString());
      const updatedValue = formValueInBase10.toString(base);

      if (updatedValue === 'NaN') {
        // there is no value in form field
        this.baseData[ baseDataIndex ].value = '';
      } else {
        this.baseData[ baseDataIndex ].value = updatedValue;
      }
    });
  }
}

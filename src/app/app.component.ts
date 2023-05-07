import { Component } from '@angular/core';

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
        <label for='2'>Base 2</label>
        <input
          id='2'
          type='text'
          [value]='baseData[2].value'
          (keypress)='validateCharacter($event)'
          (input)='updateValues($event)'
          >

        <label for='8'>Base 8</label>
        <input
          id='8'
          type='text'
          [value]='baseData[8].value'
          (keypress)='validateCharacter($event)'
          (input)='updateValues($event)'
          >

        <label for='10'>Base 10</label>
        <input
          id='10'
          type='number'
          [value]='baseData[10].value'
          (keypress)='validateCharacter($event)'
          (input)='updateValues($event)'
          >

        <label for='16'>Base 16</label>
        <input
          id='16'
          type='text'
          [value]='baseData[16].value'
          (keypress)='validateCharacter($event)'
          (input)='updateValues($event)'
          >

        <label for='32'>Base 32</label>
        <input
          id='32'
          type='text'
          [value]='baseData[32].value'
          (keypress)='validateCharacter($event)'
          (input)='updateValues($event)'
          >
      </form>
    </main>
  `,
})
export class AppComponent {
  private readonly bases: [2, 8, 10, 16, 32] = [2, 8, 10, 16, 32];
  protected baseData = {
    2: { value: '', regex: /[0-1]/g },
    8: { value: '', regex: /[0-8]/g },
    10: { value: '', regex: /[0-9]/g },
    16: { value: '', regex: /[0-9A-Fa-f]/g },
    32: { value: '', regex: /[0-9A-Va-v]/g },
  };

  validateCharacter(event: KeyboardEvent): boolean {
    const formField = event.target as HTMLInputElement;
    const formBase = parseInt(formField.id) as 2 | 8 | 10 | 16 | 32;
    const eventCharacter = event.key;

    if (eventCharacter.match(this.baseData[formBase].regex)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  updateValues(event: Event): void {
    const formField = event.target as HTMLInputElement;
    const formBase = parseInt(formField.id);
    const formValueInBase10 = parseInt(formField.value, formBase);

    this.bases.forEach(base => {
      const updatedValue = formValueInBase10.toString(base);

      if (updatedValue === 'NaN') {
        this.baseData[base].value = '';
      } else {
        this.baseData[base].value = updatedValue;
      }
    });
  }
}

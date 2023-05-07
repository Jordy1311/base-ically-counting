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
          [value]='values[2]'
          (input)='updateValues($event)'
          >

        <label for='8'>Base 8</label>
        <input
          id='8'
          type='text'
          [value]='values[8]'
          (input)='updateValues($event)'
          >

        <label for='10'>Base 10</label>
        <input
          id='10'
          type='number'
          [value]='values[10]'
          (input)='updateValues($event)'
          >

        <label for='16'>Base 16</label>
        <input
          id='16'
          type='text'
          [value]='values[16]'
          (input)='updateValues($event)'
          >

        <label for='32'>Base 32</label>
        <input
          id='32'
          type='text'
          [value]='values[32]'
          (input)='updateValues($event)'
          >
      </form>
    </main>
  `,
})
export class AppComponent {
  private readonly bases: [2, 8, 10, 16, 32] = [2, 8, 10, 16, 32];
  protected values = { 2: '', 8: '', 10: '', 16: '', 32: '' }

  updateValues(event: Event): void {
    const formField = event.target as HTMLInputElement;
    const formBase = parseInt(formField.id);
    const formValueInBase10 = parseInt(formField.value, formBase);

    this.bases.forEach(base => {
      const updatedValue = formValueInBase10.toString(base);

      if (updatedValue === 'NaN') {
        this.values[base] = '';
      } else {
        this.values[base] = updatedValue;
      }
    });
  }
}

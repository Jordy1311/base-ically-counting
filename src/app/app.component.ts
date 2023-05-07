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
        <label for='base2'>Base 2</label>
        <input
          id='base2'
          name='base2'
          type='text'
          [value]='values[2]'
          (input)='updateValues($event)'
          >

        <label for='base8'>Base 8</label>
        <input
          id='base8'
          name='base8'
          type='text'
          [value]='values[8]'
          (input)='updateValues($event)'
          >

        <label for='base10'>Base 10</label>
        <input
          id='base10'
          name='base10'
          type='number'
          [value]='values[10]'
          (input)='updateValues($event)'
          >

        <label for='base16'>Base 16</label>
        <input
          id='base16'
          name='base16'
          type='text'
          [value]='values[16]'
          (input)='updateValues($event)'
          >

        <label for='base32'>Base 32</label>
        <input
          id='base32'
          name='base32'
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
    const target = event.target as HTMLInputElement;
    const newValue = parseInt(target.value);

    this.bases.forEach(base => {
      const updatedValue = newValue.toString(base);

      if (updatedValue === 'NaN') {
        this.values[base] = '';
      } else {
        this.values[base] = updatedValue;
      }
    });
  }
}

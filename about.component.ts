import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="about-container">
      <h2>About Angular</h2>
      <p>This is the About page where you can learn more about Angular!</p>
      <a routerLink="/">Back to Home</a> <!-- Link to go back to Home -->
    </div>
  `,
  styles: [
    `
      .about-container {
        text-align: center;
        margin-top: 50px;
      }

      h2 {
        color: #007bff;
        font-size: 32px;
      }

      p {
        font-size: 20px;
        color: #6c757d;
      }

      a {
        display: block;
        margin-top: 20px;
        text-decoration: none;
        color: #007bff;
      }
    `
  ]
})
export class AboutComponent {}

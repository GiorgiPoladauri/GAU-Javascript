import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

// AppComponent (Main component)
@Component({
  selector: 'app-root', // Custom HTML tag for the component
  template: `
    <div class="container">
      <h1>{{ title }}</h1> <!-- Display the title dynamically using {{ title }} -->
      <p>{{ message }}</p> <!-- Display the message dynamically -->
      
      <button (click)="changeMessage()">Click Me!</button> <!-- Button to trigger the changeMessage method -->
      
      <a routerLink="/about">Go to About</a> <!-- Link to navigate to the About page -->
      
      <router-outlet></router-outlet> <!-- Where the routed components will be displayed -->
    </div>
  `,
  styles: [
    `
      .container {
        text-align: center;
        margin-top: 50px;
      }

      h1 {
        color: #007bff;
        font-size: 36px;
      }

      p {
        font-size: 20px;
        color: #28a745;
      }

      button {
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 18px;
      }

      button:hover {
        background-color: #0056b3;
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
export class AppComponent {
  title = 'Angular Demo App'; // Title of the application
  message = 'Welcome to our Angular tutorial!'; // Initial message displayed

  // Method to change the message when the button is clicked
  changeMessage() {
    this.message = 'You clicked the button!'; // Update the message
  }
}

// AboutComponent (Component to display about page)
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

// AppRoutingModule (Routing module for navigation)
const routes: Routes = [
  { path: '', component: AppComponent },  // Home route (Main page)
  { path: 'about', component: AboutComponent }  // About page route
];

// Define the main application module that includes routing
@NgModule({
  declarations: [AppComponent, AboutComponent], // Declare both components
  imports: [
    BrowserModule, // Required for running Angular in the browser
    RouterModule.forRoot(routes) // Import routing and configure routes
  ],
  bootstrap: [AppComponent] // Bootstrap the AppComponent (Main entry point)
})
export class AppModule {}


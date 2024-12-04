import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from 'src/enviroments/environments'

// Cargar la configuración dinámica antes de inicializar la aplicación Angular
fetch('/assets/config.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`No se pudo cargar el archivo de configuración: ${response.statusText}`);
    }
    return response.json();
  })
  .then((config) => {
    // Asignar las configuraciones dinámicas al objeto `environment`
    environment.apiUrlCrear = config.apiUrlCrear || environment.apiUrlCrear;
    environment.apiUrlEliminar = config.apiUrlEliminar || environment.apiUrlEliminar;

    // Bootstrap de la aplicación Angular
    return platformBrowserDynamic().bootstrapModule(AppModule);
  })
  .catch((err) => {
    console.error('Error al iniciar la aplicación:', err);
  });

    import { Routes } from '@angular/router';
    import { HomeComponent } from './components/home/home.component';
    import { NavbarComponent } from './components/navbar/navbar.component';
    import { ActividadesComponent } from './components/actividades/actividades.component';
    import { DetalleActividadComponent } from './components/detalle-actividad/detalle-actividad.component';
    import { RegistroComponent } from './components/registro/registro.component';

    import { FooterComponent } from './components/footer/footer.component';
    import { TiendaComponent } from './components/tienda/tienda.component';
    import { AboutComponent } from './components/about/about.component';
    
    import { EncuestaNacionalComponent } from './components/encuesta-nacional/encuesta-nacional.component';
    import { NuevaPaginaComponent } from './components/nueva-pagina/nueva-pagina.component';
    import { EducationalMaterialComponent } from './components/educational-material/educational-material.component';
    import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { ActividadInfoComponent } from './components/actividad-info/actividad-info.component';
import { ImageDetailComponent } from './components/image-detail/image-detail.component';
import { FormularioContactoComponent } from './components/formulario-contacto/formulario-contacto.component';
import { NuestroMaterialComponent } from './components/nuestro-material/nuestro-material.component';
import { Informe2024Component } from './components/informe-2024/informe-2024.component';
import { TestFindriskComponent } from './components/test-findrisk/test-findrisk.component';
import { TarjetasFlipbooksComponent } from './components/tarjetas-flipbooks/tarjetas-flipbooks.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { FinalizarCompraComponent } from './components/finalizar-compra/finalizar-compra.component';


    




    export const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'navbar', component: NavbarComponent },
      { path: 'nueva-pagina', component: NuevaPaginaComponent },
      { path: 'image-detail/:id', component: ImageDetailComponent},
      { path: 'actividades', component: ActividadesComponent },
      { path: 'detalle-actividad/:id', component: DetalleActividadComponent },
      { path: 'actividad-info/:id', component: ActividadInfoComponent},
      { path: 'nosotros', component: AboutComponent },
      { path: 'registro', component: RegistroComponent },
      { path: 'contactanos', component: ContactanosComponent},
      { path: 'donaciones', component: DonacionesComponent },
      { path: 'footer', component: FooterComponent},
      { path: 'tienda', component: TiendaComponent },
      
      { path: 'encuesta-nacional', component: EncuestaNacionalComponent },
      { path: 'encuesta-nacional/:id', component: EncuestaNacionalComponent},
      { path: 'educational-material', component: EducationalMaterialComponent },
      { path: 'formulario-contacto', component: FormularioContactoComponent},
      { path: 'nuestro-material', component: NuestroMaterialComponent},
      { path: 'informe-2024', component: Informe2024Component},
      { path: 'test-findrisk', component: TestFindriskComponent},
      { path: 'tarjetas-flipbooks/:id', component: TarjetasFlipbooksComponent},
      { path: 'detalle-producto/:id', component: DetalleProductoComponent},
      { path: 'carrito', component: CarritoComponent},
      { path: 'finalizar-compra', component: FinalizarCompraComponent},
      { path: '**', redirectTo: '', pathMatch: 'full' } 
    ];

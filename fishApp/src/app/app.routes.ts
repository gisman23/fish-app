import { Routes } from '@angular/router';
import { CameraComponent } from './camera/camera.component';
import { MapComponent } from './map/map.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: CameraComponent,
            },
            {
                path: 'camera',
                component: CameraComponent,
            },
            {
                path: 'map',
                component: MapComponent,
            }
        ]
    }
];

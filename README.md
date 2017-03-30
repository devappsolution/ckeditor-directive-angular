# ckeditor-directive-angularJS
Directive CkEditor AngularJS

# Dependencies
<pre>
AngularJS v1.2.29 or higher version
CKEditor 4.6.2
</pre>

# Usage
<pre>
```typescript
// app.module.ts
import { Camera } from '@ionic-native/camera';

...

@NgModule({
  ...

  providers: [
    ...
    Camera
    ...
  ]
  ...
})
export class AppModule { }
```

```typescript
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';

import { NgZone } from '@angular/core';

@Component({ ... })
export class MyComponent {

  constructor(private geolocation: Geolocation, private platform: Platform, private ngZone: NgZone) {

    platform.ready().then(() => {

      // get position
      geolocation.getCurrentPosition().then(pos => {

        console.log(`lat: ${pos.coords.latitude}, lon: ${pos.coords.longitude}`)

      });


      // watch position
      const watch = geolocation.watchPosition().subscribe(pos => {

        console.log(`lat: ${pos.coords.latitude}, lon: ${pos.coords.longitude}`)

        // Currently, observables from Ionic Native plugins
        // need to run inside of zone to trigger change detection
        ngZone.run(() => {
          this.position = pos;
        })

      });

      // to stop watching
      watch.unsubscribe();

    });

  }

}
```
</pre>


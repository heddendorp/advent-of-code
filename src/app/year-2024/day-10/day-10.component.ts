import {
  afterNextRender,
  Component,
  ElementRef,
  viewChild,
} from '@angular/core';
import * as THREE from 'three';
import { puzzleInput } from './data';

@Component({
  selector: 'app-day-10',
  imports: [],
  templateUrl: './day-10.component.html',
  styles: ``,
})
export class Day10Component {
  protected canvas = viewChild<ElementRef<HTMLCanvasElement>>('canvas');
  constructor() {
    afterNextRender(() => {
      const canvasElement = this.canvas()?.nativeElement;
      if (!canvasElement) {
        return;
      }
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        canvasElement.clientWidth / canvasElement.clientHeight,
        1,
        1000,
      );
      puzzleInput
        .trim()
        .split('\n')
        .forEach((line, y) => {
          line
            .trim()
            .split('')
            .forEach((char, x) => {
              const height = Number(char);
              const geometry = new THREE.BoxGeometry(1, height, 1);
              const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
              const cube = new THREE.Mesh(geometry, material);
              cube.position.x = x;
              cube.position.y = height / 2;
              cube.position.z = y;
              scene.add(cube);
            });
        });

      const renderer = new THREE.WebGLRenderer({
        canvas: canvasElement,
      });
      renderer.setSize(canvasElement.clientWidth, canvasElement.clientHeight);
      // lights
      scene.add(new THREE.AmbientLight(0xffffff, 0.4));

      const light = new THREE.DirectionalLight(0xffffff, 0.8);
      light.position.set(50, 200, 100);
      light.position.multiplyScalar(1.3);
      light.castShadow = true;
      light.shadow.mapSize.width = 1024;
      light.shadow.mapSize.height = 1024;
      const d = 300;
      light.shadow.camera.left = -d;
      light.shadow.camera.right = d;
      light.shadow.camera.top = d;
      light.shadow.camera.bottom = -d;
      light.shadow.camera.far = 1000;
      scene.add(light);

      const puzzleWidth = puzzleInput.trim().split('\n')[0].trim().length;
      const puzzleHeight = puzzleInput.trim().split('\n').length;

      camera.position.y = 30;
      camera.position.z = -10;
      camera.position.x = puzzleWidth / 2;
      camera.lookAt(puzzleWidth / 2, 0, puzzleHeight / 2);

      function animate() {
        renderer.render(scene, camera);
      }
      renderer.setAnimationLoop(animate);
    });
  }
}

import {
  afterNextRender,
  Component,
  ElementRef,
  OnDestroy,
  viewChild,
} from '@angular/core';
import * as THREE from 'three';
import { puzzleInput } from './data';
import { Line } from 'three';

@Component({
  selector: 'app-day-10',
  imports: [],
  templateUrl: './day-10.component.html',
  styles: ``,
})
export class Day10Component implements OnDestroy {
  protected canvas = viewChild<ElementRef<HTMLCanvasElement>>('canvas');
  private active = true;
  constructor() {
    afterNextRender(async () => {
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
              const material = new THREE.MeshPhongMaterial({
                color: new THREE.Color('#57534e').offsetHSL(0, 0, height * 0.1),
              });
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

      const animate = () => {
        renderer.render(scene, camera);
        if (!this.active) {
          return;
        }
        requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);

      let finalResult = 0;
      let finalResult2 = 0;

      const puzzle = puzzleInput
        .trim()
        .split('\n')
        .map((line) => line.trim().split(''));
      for (const [y, line] of puzzle.entries()) {
        for (const [x, point] of line.entries()) {
          if (!this.active) {
            return;
          }
          const height = Number(point);
          if (height === 0) {
            const greenBall = new THREE.Mesh(
              new THREE.SphereGeometry(0.25, 32, 32),
              new THREE.MeshPhongMaterial({ color: '#86efac' }),
            );
            greenBall.position.x = x;
            greenBall.position.y = 0.5;
            greenBall.position.z = y;
            scene.add(greenBall);
            const material = new THREE.LineBasicMaterial({
              color: '#3b82f6',
            });
            async function checkStep(
              x: number,
              y: number,
              linesToHere: Line[] = [],
            ): Promise<string[]> {
              const currentHeight = Number(puzzle[y][x]);
              if (currentHeight === 9) {
                linesToHere.forEach((line) => {
                  line.material = new THREE.LineBasicMaterial({
                    color: 0xffd700,
                  });
                  line.userData['gold'] = true;
                });
                return [`[${x},${y}]`];
              }
              let result = [];
              for (let i = 0; i < 4; i++) {
                switch (i) {
                  case 0:
                    if (x + 1 >= puzzleWidth) {
                      break;
                    }
                    if (Number(puzzle[y][x + 1]) === currentHeight + 1) {
                      const points = [];
                      points.push(new THREE.Vector3(x, currentHeight + 0.5, y));
                      points.push(
                        new THREE.Vector3(x + 1, currentHeight + 1.5, y),
                      );
                      const geometry = new THREE.BufferGeometry().setFromPoints(
                        points,
                      );
                      const line = new THREE.Line(geometry, material);
                      scene.add(line);
                      result.push(
                        ...(await checkStep(x + 1, y, [...linesToHere, line])),
                      );
                    }
                    break;
                  case 1:
                    if (x - 1 < 0) {
                      break;
                    }
                    if (Number(puzzle[y][x - 1]) === currentHeight + 1) {
                      const points = [];
                      points.push(new THREE.Vector3(x, currentHeight + 0.5, y));
                      points.push(
                        new THREE.Vector3(x - 1, currentHeight + 1.5, y),
                      );
                      const geometry = new THREE.BufferGeometry().setFromPoints(
                        points,
                      );
                      const line = new THREE.Line(geometry, material);
                      scene.add(line);
                      result.push(
                        ...(await checkStep(x - 1, y, [...linesToHere, line])),
                      );
                    }
                    break;
                  case 2:
                    if (y + 1 >= puzzleHeight) {
                      break;
                    }
                    if (Number(puzzle[y + 1][x]) === currentHeight + 1) {
                      const points = [];
                      points.push(new THREE.Vector3(x, currentHeight + 0.5, y));
                      points.push(
                        new THREE.Vector3(x, currentHeight + 1.5, y + 1),
                      );
                      const geometry = new THREE.BufferGeometry().setFromPoints(
                        points,
                      );
                      const line = new THREE.Line(geometry, material);
                      scene.add(line);
                      result.push(
                        ...(await checkStep(x, y + 1, [...linesToHere, line])),
                      );
                    }
                    break;
                  case 3:
                    if (y - 1 < 0) {
                      break;
                    }
                    if (Number(puzzle[y - 1][x]) === currentHeight + 1) {
                      const points = [];
                      points.push(new THREE.Vector3(x, currentHeight + 0.5, y));
                      points.push(
                        new THREE.Vector3(x, currentHeight + 1.5, y - 1),
                      );
                      const geometry = new THREE.BufferGeometry().setFromPoints(
                        points,
                      );
                      const line = new THREE.Line(geometry, material);
                      scene.add(line);
                      result.push(
                        ...(await checkStep(x, y - 1, [...linesToHere, line])),
                      );
                    }
                    break;
                }
              }
              await new Promise((resolve) => setTimeout(resolve, 10));
              return result;
            }
            const result = await checkStep(x, y);
            // remove blue lines
            scene.children.forEach((child) => {
              // @ts-ignore
              if (!child.userData['gold'] && child.type === 'Line') {
                scene.remove(child);
              }
            });
            const uniqueResult = Array.from(new Set(result));
            console.log(uniqueResult);
            finalResult += uniqueResult.length;
            finalResult2 += result.length;

            // await new Promise((resolve) => setTimeout(resolve, 100));
          }
        }
        camera.lookAt(puzzleWidth / 2, 0, y);
        camera.position.z = y - 3;
      }
      alert(`Result 1: ${finalResult}\nResult 2: ${finalResult2}`);
    });
  }

  ngOnDestroy(): void {
    this.active = false;
  }
}

import { Component } from '@angular/core';
import data from './data.json';
import { nth } from 'lodash-es';

@Component({
  selector: 'app-day7',
  templateUrl: './day7.component.html',
  styleUrls: ['./day7.component.scss'],
})
export class Day7Component {
  steps1: {
    display: { text: string; class: string }[][];
    data: any;
    operation: string;
  }[] = [];
  steps2: { data: string[]; operation: string }[] = [];
  private exampleInput = data.example;

  constructor() {
    console.log(
      'light red bags contain 1 bright white bag, 2 muted yellow bags.'.match(
        /(\w+ \w+) bags contain(.+)./i,
      ),
    );
    this.steps1.push({
      data: this.exampleInput,
      operation: 'Riddle input',
      display: [[{ class: 'neutral', text: this.exampleInput }]],
    });
    this.steps1.push({
      data: this.exampleInput.split('\n'),
      operation: `Split lines`,
      display: this.exampleInput
        .split('\n')
        .map((line) => [{ class: 'neutral', text: line }]),
    });
    this.steps1.push({
      data: this.steps1[1].data.map((line: string) =>
        line.match(/(\w+ \w+) bags contain(.+)./i)?.slice(1),
      ),
      operation: `Find containing bags`,
      display: this.steps1[1].data.map((line: string) =>
        line
          .match(/(\w+ \w+) bags contain(.+)./i)
          ?.slice(1)
          .map((token, index) => ({
            text: token,
            class: index ? 'neutral' : 'bag',
          })),
      ),
    });
    this.steps1.push({
      data: this.steps1[2].data.map((line: string[]) => {
        const empty = line[1] === ' no other bags';
        const content: string[] = [];
        if (!empty) {
          line[1]
            .split(',')
            .map((bag) => nth(bag.trim().match(/\d (\w+ \w+) bags?/i), 1))
            .forEach((color) => content.push(color ?? ''));
        }
        return { bag: line[0], empty, content };
      }),
      operation: `Find contained bags`,
      display: this.steps1[2].data
        .map((line: string[]) => {
          const empty = line[1] === ' no other bags';
          const content: string[] = [];
          if (!empty) {
            line[1]
              .split(',')
              .map((bag) => nth(bag.trim().match(/\d (\w+ \w+) bags?/i), 1))
              .forEach((color) => content.push(color ?? ''));
          }
          return { bag: line[0], empty, content };
        })
        .map((line: { bag: string; empty: boolean; content: string[] }) => [
          { class: 'bag', text: line.bag },
          ...line.content.map((color) => ({
            text: color,
            class: color === 'shiny gold' ? 'gold' : 'neutral',
          })),
        ]),
    });
    console.log(this.steps1);
  }
}

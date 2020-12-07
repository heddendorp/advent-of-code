import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-day7',
  templateUrl: './day7.component.html',
  styleUrls: ['./day7.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Day7Component {
  private exampleInput = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`;

  steps1: {
    display: { text: string; class: string }[][];
    data: any;
    operation: string;
  }[] = [];
  steps2: { data: string[]; operation: string }[] = [];
  constructor() {
    console.log(
      'light red bags contain 1 bright white bag, 2 muted yellow bags.'.match(
        /(\w+ \w+) bags contain(.+)./i
      )
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
      data: this.steps1[1].data.map((line) =>
        line.match(/(\w+ \w+) bags contain(.+)./i).slice(1)
      ),
      operation: `Find containing bags`,
      display: this.steps1[1].data.map((line) =>
        line
          .match(/(\w+ \w+) bags contain(.+)./i)
          .slice(1)
          .map((token, index) => ({
            text: token,
            class: index ? 'neutral' : 'bag',
          }))
      ),
    });
    this.steps1.push({
      data: this.steps1[2].data.map((line) => {
        const empty = line[1] === ' no other bags';
        const content = [];
        if (!empty) {
          line[1]
            .split(',')
            .map((bag) => bag.trim().match(/\d (\w+ \w+) bags?/i)[1])
            .forEach((color) => content.push(color));
        }
        return { bag: line[0], empty, content };
      }),
      operation: `Find contained bags`,
      display: this.steps1[2].data
        .map((line) => {
          const empty = line[1] === ' no other bags';
          const content = [];
          if (!empty) {
            line[1]
              .split(',')
              .map((bag) => bag.trim().match(/\d (\w+ \w+) bags?/i)[1])
              .forEach((color) => content.push(color));
          }
          return { bag: line[0], empty, content };
        })
        .map((line) => [
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

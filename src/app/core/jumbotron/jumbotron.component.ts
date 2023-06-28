import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {Typewriter} from 't-writer.js';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit  {
  constructor(){}
  ngOnInit(): void {
    const target = document.querySelector('.tw');

    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: '#ffe22d'
    })

    writer
      .type('di gestire il tuo immobile')
      .rest(500)
      .changeOps({ deleteSpeed: 50})
      .remove(26)
      .type('dei mancati pagamenti')
      .rest(500)
      .remove(34)
      .type('della manutenzione')
      .rest(500)
      .changeOps({ deleteSpeed: 20 })
      .remove(21)

      .clear()
      .start()


  }

}


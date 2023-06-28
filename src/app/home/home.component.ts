import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Component, OnInit } from '@angular/core';
import { faHouseCircleCheck, faDesktop, faMoneyBillTrendUp, faMoneyBill1Wave, faCircleCheck, } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(){}
  fahousecirclecheck = faHouseCircleCheck;
  fadesktop = faDesktop;
  famoneybilltrendup = faMoneyBillTrendUp;
  famoneybill1wave = faMoneyBill1Wave;
  facirclecheck = faCircleCheck
  faWhatsapp = faWhatsapp
  ngOnInit(): void {}

  propIm=[
    {title:'Proponi il tuo immobile',
      test:'Compila il form indicandoci le caratteristiche dell’appartamento  che vuoi affittare, ti contatteremo quanto prima.',
      ico:'',
      backImg:''
    },
    {title:'Proponi il tuo immobile',
      test:'Compila il form indicandoci le caratteristiche dell’appartamento  che vuoi affittare, ti contatteremo quanto prima.',
      ico:'',
      backImg:''
    },
    {title:'Proponi il tuo immobile',
      test:'Compila il form indicandoci le caratteristiche dell’appartamento  che vuoi affittare, ti contatteremo quanto prima.',
      ico:'',
      backImg:''
    }
  ]

  check={chec:'bi bi-check-circle-fill'}
  gestione=[
    {title:'Massima visibilita',
      ser1:'Foto professionali e creazione del profilo online dell’immobile con descrizioni accurate',
      ser2:'Gestione quotidiana dinamica delle tariffe per massimizzare gli incassi',
      ser3:'Caricamento dell’immobile sui principali canali online in versione multilingue',

      ico:'bi bi-house-up',
    },
    {
      title:'Accoglienza ospiti',
      ser1:'Foto professionali e creazione del profilo online dell’immobile con descrizioni accurate',
      ser2:'Gestione quotidiana dinamica delle tariffe per massimizzare gli incassi',
      ser3:'Caricamento dell’immobile sui principali canali online in versione multilingue',

      ico:'bi bi-person-check'
    },
    {
      title:'Pulizia e Biancheria',
      ser1:'Caricamento dell’immobile sui principali canali online in versione multilingue',
      ser2:'Caricamento dell’immobile sui principali canali online in versione multilingue',
      ser3:'Caricamento dell’immobile sui principali canali online in versione multilingue',

      ico:'bi bi-stars'
    },
    {
      title:"Restyling dell'immobile",
      ser1:'Caricamento dell’immobile sui principali canali online in versione multilingue',
      ser2:'Caricamento dell’immobile sui principali canali online in versione multilingue',
      ser3:'Caricamento dell’immobile sui principali canali online in versione multilingue',

      ico:'bi bi-house-heart'
    },
    {
      title:'Gestione Burocratica',
      ser1:'Caricamento dell’immobile sui principali canali online in versione multilingue',
      ser2:'Caricamento dell’immobile sui principali canali online in versione multilingue',
      ser3:'Caricamento dell’immobile sui principali canali online in versione multilingue',

      ico:'bi bi-archive'
    },
    {
      title:"Gestione delle prenotazioni",
      ser1:'Caricamento dell’immobile sui principali canali online in versione multilingue',
      ser2:'Caricamento dell’immobile sui principali canali online in versione multilingue',
      ser3:'Caricamento dell’immobile sui principali canali online in versione multilingue',
      ser4:'Caricamento dell’immobile sui principali canali online in versione multilingue',
      ico:'bi bi-calendar-check'
    }
  ]

}

import { Component, OnInit } from '@angular/core';
import { Caffetteria } from 'src/app/classes/caffetteria';
import { Salati } from 'src/app/classes/salati';
import { AnalcoliciService } from 'src/app/services/analcolici.service';
import { ApeClassiciService } from 'src/app/services/ape-classici.service';
import { BibiteService } from 'src/app/services/bibite.service';
import { BirreCollesiService } from 'src/app/services/birre-collesi.service';
import { BirreService } from 'src/app/services/birre.service';
import { BollicineService } from 'src/app/services/bollicine.service';
import { CaffePomeriggioService } from 'src/app/services/caffe-pomeriggio.service';
import { CaffetteriaService } from 'src/app/services/caffetteria.service';
import { CocktailsService } from 'src/app/services/cocktails.service';
import { GinService } from 'src/app/services/gin.service';
import { GrappeService } from 'src/app/services/grappe.service';
import { PasticceriaService } from 'src/app/services/pasticceria.service';
import { PiattoApeService } from 'src/app/services/piatto-ape.service';
import { RoseService } from 'src/app/services/rose.service';
import { RumService } from 'src/app/services/rum.service';
import { SalatiService } from 'src/app/services/salati.service';
import { SignaturecocktailService } from 'src/app/services/signaturecocktail.service';
import { SpritzService } from 'src/app/services/spritz.service';
import { ViniBianchiService } from 'src/app/services/vini-bianchi.service';
import { ViniRossiService } from 'src/app/services/vini-rossi.service';
import { WhiskyService } from 'src/app/services/whisky.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  allCaffe: any = [];
  allCaffePome: any = [];
  allPasticcini: any = [];
  allSalatini: any = [];
  allBibite: any = [];
  allBirre: any = [];
  allBirreCollesi: any = [];
  allApe: any = [];
  allSpritz: any = [];
  allSignature: any = [];
  allCocktails: any = [];
  allAnalcolici: any = [];
  allPiattiApe: any = [];
  allGin: any = [];
  allViniBianchi: any = [];
  allViniRossi: any = [];
  allRose: any = [];
  allBollicine: any = [];
  allGrappe: any = [];
  allWhisky: any = [];
  allRum: any = [];

  titolo = "";
  descrizione1 = "";
  descrizione = "";
  descrizione2 = "";
  prezzo = "";

  constructor(private caffetteriaService: CaffetteriaService, private caffepomeService: CaffePomeriggioService,
    private pasticceriaService: PasticceriaService, private salatiService: SalatiService,
    private bibiteService: BibiteService, private birreService: BirreService,
    private birreCollesiService: BirreCollesiService, private ApeClassiciService: ApeClassiciService,
    private spritzService: SpritzService, private signaturecocktailService: SignaturecocktailService,
    private cocktailsService: CocktailsService, private analcoliciService: AnalcoliciService,
    private piattoApeService: PiattoApeService, private ginService: GinService,
    private viniBianchiService: ViniBianchiService, private viniRossiService: ViniRossiService,
    private roseService: RoseService, private bollicineService: BollicineService,
    private grappeService: GrappeService, private whiskyService: WhiskyService, private rumService:RumService) { }

  ngOnInit(): void {
    this.getAllCaffe();
    this.getAllCaffePome();
    this.getAllPasticcini();
    this.getAllSalatini();
    this.getAllBib();
    this.getAllBirre1();
    this.getAllBirreCollesi1();
    this.getAllApe();
    this.getAllSpritz1();
    this.getAllSignature();
    this.getAllCocktail1();
    this.getAllAnalcolici1();
    this.getAllPiattiApe1();
    this.getAllGin1();
    this.getAllViniBianchi1();
    this.getAllViniRossi1();
    this.getAllRose1();
    this.getAllBollicine1();
    this.getAllGrappe1();
    this.getAllWhisky1();
    this.getAllRum1();

  }

  //caffetteria
  getAllCaffe() {
    this.caffetteriaService.getAllCaffetteria().subscribe((data) => {
      this.allCaffe = data;
    })
  }

  //caffè del pomeriggio
  getAllCaffePome() {
    this.caffepomeService.getAllCaffePomeriggio().subscribe((data: any) => {
      this.allCaffePome = data;
    })
  }

  //pasticceria
  getAllPasticcini() {
    this.pasticceriaService.getAllPasticceria().subscribe((data: any) => {
      this.allPasticcini = data;
    })
  }

  //salati
  getAllSalatini() {
    this.salatiService.getAllSalati().subscribe((data: any) => {
      this.allSalatini = data;
    })
  }

  //bibite
  getAllBib() {
    this.bibiteService.getAllBibite().subscribe((data: any) => {
      this.allBibite = data;
    })
  }

  //birre
  getAllBirre1() {
    this.birreService.getAllBirre().subscribe((data: any) => {
      this.allBirre = data;
    })
  }

  //birre collesi
  getAllBirreCollesi1() {
    this.birreCollesiService.getAllBirreCollesi().subscribe((data: any) => {
      this.allBirreCollesi = data;
    })
  }

  //aperitivi classsici
  getAllApe() {
    this.ApeClassiciService.getAllApeClassici().subscribe((data: any) => {
      this.allApe = data;
    })
  }

  //spritz
  getAllSpritz1() {
    this.spritzService.getAllSpritz().subscribe((data: any) => {
      this.allSpritz = data;
    })

  }

  //signature cocktail
  getAllSignature() {
    this.signaturecocktailService.getAllSignaturecocktail().subscribe((data: any) => {
      this.allSignature = data;
    })
  }

  //cocktails
  getAllCocktail1() {
    this.cocktailsService.getAllCocktails().subscribe((data: any) => {
      this.allCocktails = data;
    })
  }

  //analcolici
  getAllAnalcolici1() {
    this.analcoliciService.getAllAnalcolici().subscribe((data: any) => {
      this.allAnalcolici = data;
    })
  }

  //piatto ape
  getAllPiattiApe1() {
    this.piattoApeService.getAllPiattiApe().subscribe((data: any) => {
      this.allPiattiApe = data;
    })
  }

  //gin
  getAllGin1() {
    this.ginService.getAllGin().subscribe((data: any) => {
      this.allGin = data;
    })
  }

  //vini bianchi
  getAllViniBianchi1() {
    this.viniBianchiService.getAllViniBianchi().subscribe((data: any) => {
      this.allViniBianchi = data;
    })
  }

  //vini rossi
  getAllViniRossi1() {
    this.viniRossiService.getAllViniRossi().subscribe((data: any) => {
      this.allViniRossi = data;
    })
  }
  //rose
  getAllRose1() {
    this.roseService.getAllRose().subscribe((data: any) => {
      this.allRose = data;
    })
  }

  //Bollicine
  getAllBollicine1() {
    this.bollicineService.getAllBollicine().subscribe((data: any) => {
      this.allBollicine = data;
    })
  }

  //Grappe
  getAllGrappe1() {
    this.grappeService.getAllGrappe().subscribe((data: any) => {
      this.allGrappe = data;
    })
  }

  //Whisky
  getAllWhisky1() {
    this.whiskyService.getAllWhisky().subscribe((data: any) => {
      this.allWhisky = data;
    })
  }
  
  //Rum
  getAllRum1() {
    this.rumService.getAllRum().subscribe((data: any) => {
      this.allRum = data;
    })
  }

}

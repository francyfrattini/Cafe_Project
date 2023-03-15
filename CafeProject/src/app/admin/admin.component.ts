import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { Analcolici } from '../classes/analcolici';
import { ApeClassici } from '../classes/ape-classici';
import { Bibite } from '../classes/bibite';
import { Birre } from '../classes/birre';
import { BirreCollesi } from '../classes/birre-collesi';
import { Bollicine } from '../classes/bollicine';
import { CaffePomeriggio } from '../classes/caffe-pomeriggio';
import { Caffetteria } from '../classes/caffetteria';
import { Cocktails } from '../classes/cocktails';
import { Gin } from '../classes/gin';
import { Grappe } from '../classes/grappe';
import { Pasticceria } from '../classes/pasticceria';
import { PiattoApe } from '../classes/piatto-ape';
import { Rose } from '../classes/rose';
import { Rum } from '../classes/rum';
import { Salati } from '../classes/salati';
import { Signaturecocktail } from '../classes/signaturecocktail';
import { Spritz } from '../classes/spritz';
import { ViniBianchi } from '../classes/vini-bianchi';
import { ViniRossi } from '../classes/vini-rossi';
import { Whisky } from '../classes/whisky';
import { AnalcoliciService } from '../services/analcolici.service';
import { ApeClassiciService } from '../services/ape-classici.service';
import { BibiteService } from '../services/bibite.service';
import { BirreCollesiService } from '../services/birre-collesi.service';
import { BirreService } from '../services/birre.service';
import { BollicineService } from '../services/bollicine.service';
import { CaffePomeriggioService } from '../services/caffe-pomeriggio.service';
import { CaffetteriaService } from '../services/caffetteria.service';
import { CocktailsService } from '../services/cocktails.service';
import { GinService } from '../services/gin.service';
import { GrappeService } from '../services/grappe.service';
import { PasticceriaService } from '../services/pasticceria.service';
import { PiattoApeService } from '../services/piatto-ape.service';
import { RoseService } from '../services/rose.service';
import { RumService } from '../services/rum.service';
import { SalatiService } from '../services/salati.service';
import { SignaturecocktailService } from '../services/signaturecocktail.service';
import { SpritzService } from '../services/spritz.service';
import { ViniBianchiService } from '../services/vini-bianchi.service';
import { ViniRossiService } from '../services/vini-rossi.service';
import { WhiskyService } from '../services/whisky.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  formValue !: FormGroup;

  caffetteriaModelObj: Caffetteria = new Caffetteria();
  caffepomeModelObj: CaffePomeriggio = new CaffePomeriggio();
  pasticcinoModelObj: Pasticceria = new Pasticceria();
  salatinoModelObj: Salati = new Salati();
  bibitaModelObj: Bibite = new Bibite ();
  birreModelObj: Birre = new Birre ();
  birrecollesiModelObj: BirreCollesi = new BirreCollesi ();
  apeclassiciModelObj: ApeClassici = new ApeClassici ();
  spritzModelObj: Spritz = new Spritz();
  signatureModelObj: Signaturecocktail = new Signaturecocktail ();
  cocktailsModelObj: Cocktails = new Cocktails ();
  analcoliciModelObj: Analcolici = new Analcolici ();
  piattoapeModelObj: PiattoApe = new PiattoApe ();
  ginModelObj: Gin = new Gin ();
  vinobiancoModelObj: ViniBianchi = new ViniBianchi ();
  vinorossoModelObj: ViniRossi = new ViniRossi ();
  roseModelObj: Rose = new Rose();
  bollicineModelObj: Bollicine = new Bollicine();
  grappeModelObj: Grappe = new Grappe();
  whiskyModelObj: Whisky = new Whisky();
  rumModelObj: Rum = new Rum();

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
  prezzo1 = "";

  constructor(private caffetteriaService: CaffetteriaService, private caffepomeService: CaffePomeriggioService,
    private pasticceriaService: PasticceriaService, private salatiService: SalatiService,
    private bibiteService: BibiteService, private birreService: BirreService,
    private birreCollesiService: BirreCollesiService, private apeClassiciService: ApeClassiciService,
    private spritzService: SpritzService, private signaturecocktailService: SignaturecocktailService,
    private cocktailsService: CocktailsService, private analcoliciService: AnalcoliciService,
    private piattoApeService: PiattoApeService, private ginService: GinService,
    private viniBianchiService: ViniBianchiService, private viniRossiService: ViniRossiService,
    private roseService: RoseService, private bollicineService: BollicineService,
    private grappeService: GrappeService, private whiskyService: WhiskyService, private rumService: RumService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.formValue = this.formBuilder.group({
      titolo: [''],
      descrizione: [''],
      descrizione1: [''],
      descrizione2: [''],
      prezzo: [''],
      prezzo1: [''],
    })

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

  /////////////////////////////////////////////////CAFFETTERIA

  //add a new caffetteria
  addCaffetteria() {
    this.caffetteriaModelObj.titolo = this.formValue.value.titolo;
    this.caffetteriaModelObj.descrizione = this.formValue.value.descrizione;
    this.caffetteriaModelObj.prezzo = this.formValue.value.prezzo;

    this.caffetteriaService.postCaffetteria(this.caffetteriaModelObj).subscribe(res => {
      console.log(res);
      Swal.fire({ //alert quote added
        position: 'center',
        title: 'Elemento salvato',
        icon: "success",
        background: "#000000",
        color: "#FFFFFF",
        showConfirmButton: false,
        timer: 1200
      })
      this.formValue.reset();
      this.getAllCaffe();
    },
      err => {
        alert("Errore, qualcosa è andato storto") //alert quote not added
      })
  }

  //delete caffetteria
  deleteCaffetteria(caffe: any) {
    Swal.fire({
      title: "Eliminare definitivamente questo elemento?",
      text: "Non potrai ripristinarlo!",
      icon: "warning",
      showCancelButton: true,
      background: "#000000",
      color: "#FFFFFF",
      confirmButtonColor: "#A2A2A2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sì, elimina definitivamente!"
    }).then((result) => {
      if (result.value) {
        this.caffetteriaService.deleteCaffetteria(caffe.id).subscribe(res => {
          this.getAllCaffe();
        })
        Swal.fire({
          title: "Ok, elemento cancellato.",
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
      else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Ok, elemento salvo!",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
    });
  }

  //on edit
  onEdit(caffe: any) {
    this.caffetteriaModelObj.id = caffe.id;
    this.formValue.controls['titolo'].setValue(caffe.titolo)
    this.formValue.controls['descrizione'].setValue(caffe.descrizione)
    this.formValue.controls['prezzo'].setValue(caffe.prezzo)
  }

  //update caffetteria
  updateCaffetteria() {
    this.caffetteriaModelObj.titolo = this.formValue.value.titolo;
    this.caffetteriaModelObj.descrizione = this.formValue.value.descrizione;
    this.caffetteriaModelObj.prezzo = this.formValue.value.prezzo;
    this.caffetteriaService.updateCaffetteria(this.caffetteriaModelObj, this.caffetteriaModelObj.id)
      .subscribe(res => {
        Swal.fire({ //alert 
          position: 'center',
          title: 'Elemento aggiornato',
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          showConfirmButton: false,
          timer: 1200
        })
        this.formValue.reset();
        this.getAllCaffe();
      })
  }

  //caffetteria
  getAllCaffe() {
    this.caffetteriaService.getAllCaffetteria().subscribe(data => {
      this.allCaffe = data;
    })
  }

  /////////////////////////////////////////////////CAFFE DEL POMERIGGIO

  //add a new caffe pomeriggio
  addCaffePome() {
    this.caffepomeModelObj.titolo = this.formValue.value.titolo;
    this.caffepomeModelObj.descrizione = this.formValue.value.descrizione;
    this.caffepomeModelObj.prezzo = this.formValue.value.prezzo;

    this.caffepomeService.postCaffePome(this.caffepomeModelObj).subscribe(res => {
      console.log(res);
      Swal.fire({ //alert quote added
        position: 'center',
        title: 'Elemento salvato',
        icon: "success",
        background: "#000000",
        color: "#FFFFFF",
        showConfirmButton: false,
        timer: 1200
      })
      this.formValue.reset();
      this.getAllCaffePome();
    },
      err => {
        alert("Errore, qualcosa è andato storto") //alert quote not added
      })
  }

  //delete caffe pome
  deleteCaffePome(caffepome: any) {
    Swal.fire({
      title: "Eliminare definitivamente questo elemento?",
      text: "Non potrai ripristinarlo!",
      icon: "warning",
      showCancelButton: true,
      background: "#000000",
      color: "#FFFFFF",
      confirmButtonColor: "#A2A2A2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sì, elimina definitivamente!"
    }).then((result) => {
      if (result.value) {
        this.caffepomeService.deleteCaffePome(caffepome.id).subscribe(res => {
          this.getAllCaffePome();
        })
        Swal.fire({
          title: "Ok, elemento cancellato.",
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
      else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Ok, elemento salvo!",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
    });
  }

  //on edit
  onEditCaffePome(caffepome: any) {
    this.caffepomeModelObj.id = caffepome.id;
    this.formValue.controls['titolo'].setValue(caffepome.titolo)
    this.formValue.controls['descrizione'].setValue(caffepome.descrizione)
    this.formValue.controls['prezzo'].setValue(caffepome.prezzo)
  }

  //update caffe pome
  updateCaffePome() {
    this.caffepomeModelObj.titolo = this.formValue.value.titolo;
    this.caffepomeModelObj.descrizione = this.formValue.value.descrizione;
    this.caffepomeModelObj.prezzo = this.formValue.value.prezzo;
    this.caffepomeService.updateCaffePome(this.caffepomeModelObj, this.caffepomeModelObj.id)
      .subscribe(res => {
        Swal.fire({ //alert 
          position: 'center',
          title: 'Elemento aggiornato',
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          showConfirmButton: false,
          timer: 1200
        })
        this.formValue.reset();
        this.getAllCaffePome();
      })
  }

  //caffè del pomeriggio
  getAllCaffePome() {
    this.caffepomeService.getAllCaffePomeriggio().subscribe((data: any) => {
      this.allCaffePome = data;
    })
  }

  /////////////////////////////////////////////////PASTICCERIA

  //add a new pasticceria
  addPasticceria() {
    this.pasticcinoModelObj.titolo = this.formValue.value.titolo;
    this.pasticcinoModelObj.descrizione = this.formValue.value.descrizione;
    this.pasticcinoModelObj.prezzo = this.formValue.value.prezzo;

    this.pasticceriaService.postPasticceria(this.pasticcinoModelObj).subscribe(res => {
      console.log(res);
      Swal.fire({ //alert 
        position: 'center',
        title: 'Elemento salvato',
        icon: "success",
        background: "#000000",
        color: "#FFFFFF",
        showConfirmButton: false,
        timer: 1200
      })
      this.formValue.reset();
      this.getAllPasticcini();
    },
      err => {
        alert("Errore, qualcosa è andato storto") //alert 
      })
  }

  //delete pasticceria
  deletePasticceria(pasticcino: any) {
    Swal.fire({
      title: "Eliminare definitivamente questo elemento?",
      text: "Non potrai ripristinarlo!",
      icon: "warning",
      showCancelButton: true,
      background: "#000000",
      color: "#FFFFFF",
      confirmButtonColor: "#A2A2A2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sì, elimina definitivamente!"
    }).then((result) => {
      if (result.value) {
        this.pasticceriaService.deletePasticceria(pasticcino.id).subscribe(res => {
          this.getAllPasticcini();
        })
        Swal.fire({
          title: "Ok, elemento cancellato.",
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
      else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Ok, elemento salvo!",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
    });
  }

  //on edit pasticceria
  onEditPasticceria(pasticcino: any) {
    this.pasticcinoModelObj.id = pasticcino.id;
    this.formValue.controls['titolo'].setValue(pasticcino.titolo)
    this.formValue.controls['descrizione'].setValue(pasticcino.descrizione)
    this.formValue.controls['prezzo'].setValue(pasticcino.prezzo)
  }

  //update pasticceria
  updatePasticceria() {
    this.pasticcinoModelObj.titolo = this.formValue.value.titolo;
    this.pasticcinoModelObj.descrizione = this.formValue.value.descrizione;
    this.pasticcinoModelObj.prezzo = this.formValue.value.prezzo;
    this.pasticceriaService.updatePasticceria(this.pasticcinoModelObj, this.pasticcinoModelObj.id)
      .subscribe(res => {
        Swal.fire({ //alert 
          position: 'center',
          title: 'Elemento aggiornato',
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          showConfirmButton: false,
          timer: 1200
        })
        this.formValue.reset();
        this.getAllPasticcini();
      })
  }

  //pasticceria
  getAllPasticcini() {
    this.pasticceriaService.getAllPasticceria().subscribe((data: any) => {
      this.allPasticcini = data;
    })
  }

  /////////////////////////////////////////////////SALATI

  //add a new salati
  addSalati() {
    this.salatinoModelObj.titolo = this.formValue.value.titolo;
    this.salatinoModelObj.descrizione = this.formValue.value.descrizione;
    this.salatinoModelObj.prezzo = this.formValue.value.prezzo;

    this.salatiService.postSalati(this.salatinoModelObj).subscribe(res => {
      console.log(res);
      Swal.fire({ //alert 
        position: 'center',
        title: 'Elemento salvato',
        icon: "success",
        background: "#000000",
        color: "#FFFFFF",
        showConfirmButton: false,
        timer: 1200
      })
      this.formValue.reset();
      this.getAllSalatini();
    },
      err => {
        alert("Errore, qualcosa è andato storto") //alert 
      })
  }

  //delete salati
  deleteSalati(salatino: any) {
    Swal.fire({
      title: "Eliminare definitivamente questo elemento?",
      text: "Non potrai ripristinarlo!",
      icon: "warning",
      showCancelButton: true,
      background: "#000000",
      color: "#FFFFFF",
      confirmButtonColor: "#A2A2A2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sì, elimina definitivamente!"
    }).then((result) => {
      if (result.value) {
        this.salatiService.deleteSalati(salatino.id).subscribe(res => {
          this.getAllSalatini();
        })
        Swal.fire({
          title: "Ok, elemento cancellato.",
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
      else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Ok, elemento salvo!",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
    });
  }

  //on edit salati
  onEditSalati(salatino: any) {
    this.salatinoModelObj.id = salatino.id;
    this.formValue.controls['titolo'].setValue(salatino.titolo)
    this.formValue.controls['descrizione'].setValue(salatino.descrizione)
    this.formValue.controls['prezzo'].setValue(salatino.prezzo)
  }

  //update salati
  updateSalati() {
    this.salatinoModelObj.titolo = this.formValue.value.titolo;
    this.salatinoModelObj.descrizione = this.formValue.value.descrizione;
    this.salatinoModelObj.prezzo = this.formValue.value.prezzo;
    this.salatiService.updateSalati(this.salatinoModelObj, this.salatinoModelObj.id)
      .subscribe(res => {
        Swal.fire({ //alert 
          position: 'center',
          title: 'Elemento aggiornato',
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          showConfirmButton: false,
          timer: 1200
        })
        this.formValue.reset();
        this.getAllSalatini();
      })
  }

  //salati
  getAllSalatini() {
    this.salatiService.getAllSalati().subscribe((data: any) => {
      this.allSalatini = data;
    })
  }

  /////////////////////////////////////////////////BIBITE

  //add a bibita
  addBibite() {
    this.bibitaModelObj.titolo = this.formValue.value.titolo;
    this.bibitaModelObj.descrizione = this.formValue.value.descrizione;
    this.bibitaModelObj.prezzo = this.formValue.value.prezzo;

    this.bibiteService.postBibite(this.bibitaModelObj).subscribe(res => {
      console.log(res);
      Swal.fire({ //alert 
        position: 'center',
        title: 'Elemento salvato',
        icon: "success",
        background: "#000000",
        color: "#FFFFFF",
        showConfirmButton: false,
        timer: 1200
      })
      this.formValue.reset();
      this.getAllBib();
    },
      err => {
        alert("Errore, qualcosa è andato storto") //alert 
      })
  }

  //delete bibita
  deleteBibite(bibita: any) {
    Swal.fire({
      title: "Eliminare definitivamente questo elemento?",
      text: "Non potrai ripristinarlo!",
      icon: "warning",
      showCancelButton: true,
      background: "#000000",
      color: "#FFFFFF",
      confirmButtonColor: "#A2A2A2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sì, elimina definitivamente!"
    }).then((result) => {
      if (result.value) {
        this.bibiteService.deleteBibite(bibita.id).subscribe(res => {
          this.getAllBib();
        })
        Swal.fire({
          title: "Ok, elemento cancellato.",
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
      else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Ok, elemento salvo!",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
    });
  }

  //on edit bibita
  onEditBibite(bibita: any) {
    this.bibitaModelObj.id = bibita.id;
    this.formValue.controls['titolo'].setValue(bibita.titolo)
    this.formValue.controls['descrizione'].setValue(bibita.descrizione)
    this.formValue.controls['prezzo'].setValue(bibita.prezzo)
  }

  //update bibita
  updateBibite() {
    this.bibitaModelObj.titolo = this.formValue.value.titolo;
    this.bibitaModelObj.descrizione = this.formValue.value.descrizione;
    this.bibitaModelObj.prezzo = this.formValue.value.prezzo;
    this.bibiteService.updateBibite(this.bibitaModelObj, this.bibitaModelObj.id)
      .subscribe(res => {
        Swal.fire({ //alert 
          position: 'center',
          title: 'Elemento aggiornato',
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          showConfirmButton: false,
          timer: 1200
        })
        this.formValue.reset();
        this.getAllBib();
      })
  }

  //bibite
  getAllBib() {
    this.bibiteService.getAllBibite().subscribe((data: any) => {
      this.allBibite = data;
    })
  }

  /////////////////////////////////////////////////BIRRE

  addBirre() {
    this.birreModelObj.titolo = this.formValue.value.titolo;
    this.birreModelObj.descrizione = this.formValue.value.descrizione;
    this.birreModelObj.prezzo = this.formValue.value.prezzo;

    this.birreService.postBirre(this.birreModelObj).subscribe(res => {
      console.log(res);
      Swal.fire({ //alert 
        position: 'center',
        title: 'Elemento salvato',
        icon: "success",
        background: "#000000",
        color: "#FFFFFF",
        showConfirmButton: false,
        timer: 1200
      })
      this.formValue.reset();
      this.getAllBirre1();
    },
      err => {
        alert("Errore, qualcosa è andato storto") //alert 
      })
  }

  //delete birre
  deleteBirre(birra: any) {
    Swal.fire({
      title: "Eliminare definitivamente questo elemento?",
      text: "Non potrai ripristinarlo!",
      icon: "warning",
      showCancelButton: true,
      background: "#000000",
      color: "#FFFFFF",
      confirmButtonColor: "#A2A2A2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sì, elimina definitivamente!"
    }).then((result) => {
      if (result.value) {
        this.birreService.deleteBirre(birra.id).subscribe(res => {
          this.getAllBirre1();
        })
        Swal.fire({
          title: "Ok, elemento cancellato.",
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
      else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Ok, elemento salvo!",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
    });
  }

  //on edit birre
  onEditBirre(birre: any) {
    this.birreModelObj.id = birre.id;
    this.formValue.controls['titolo'].setValue(birre.titolo)
    this.formValue.controls['descrizione'].setValue(birre.descrizione)
    this.formValue.controls['prezzo'].setValue(birre.prezzo)
  }

  //update birre
  updateBirre() {
    this.birreModelObj.titolo = this.formValue.value.titolo;
    this.birreModelObj.descrizione = this.formValue.value.descrizione;
    this.birreModelObj.prezzo = this.formValue.value.prezzo;
    this.birreService.updateBirre(this.birreModelObj, this.birreModelObj.id)
      .subscribe(res => {
        Swal.fire({ //alert 
          position: 'center',
          title: 'Elemento aggiornato',
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          showConfirmButton: false,
          timer: 1200
        })
        this.formValue.reset();
        this.getAllBirre1();
      })
  }

  //birre
  getAllBirre1() {
    this.birreService.getAllBirre().subscribe((data: any) => {
      this.allBirre = data;
    })
  }

  /////////////////////////////////////////////////BIRRE COLLESI

  addBirreCollesi() {
    this.birrecollesiModelObj.titolo = this.formValue.value.titolo;
    this.birrecollesiModelObj.descrizione = this.formValue.value.descrizione;
    this.birrecollesiModelObj.prezzo = this.formValue.value.prezzo;

    this.birreCollesiService.postBirreCollesi(this.birrecollesiModelObj).subscribe(res => {
      console.log(res);
      Swal.fire({ //alert 
        position: 'center',
        title: 'Elemento salvato',
        icon: "success",
        background: "#000000",
        color: "#FFFFFF",
        showConfirmButton: false,
        timer: 1200
      })
      this.formValue.reset();
      this.getAllBirreCollesi1();
    },
      err => {
        alert("Errore, qualcosa è andato storto") //alert 
      })
  }

  //delete birre collesi
  deleteBirreCollesi(birracollese: any) {
    Swal.fire({
      title: "Eliminare definitivamente questo elemento?",
      text: "Non potrai ripristinarlo!",
      icon: "warning",
      showCancelButton: true,
      background: "#000000",
      color: "#FFFFFF",
      confirmButtonColor: "#A2A2A2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sì, elimina definitivamente!"
    }).then((result) => {
      if (result.value) {
        this.birreCollesiService.deleteBirreCollesi(birracollese.id).subscribe(res => {
          this.getAllBirreCollesi1();
        })
        Swal.fire({
          title: "Ok, elemento cancellato.",
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
      else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Ok, elemento salvo!",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
    });
  }

  //on edit birre collesi
  onEditBirreCollesi(birrecollesi: any) {
    this.birrecollesiModelObj.id = birrecollesi.id;
    this.formValue.controls['titolo'].setValue(birrecollesi.titolo)
    this.formValue.controls['descrizione'].setValue(birrecollesi.descrizione)
    this.formValue.controls['prezzo'].setValue(birrecollesi.prezzo)
  }

  //update birre collesi
  updateBirreCollesi() {
    this.birrecollesiModelObj.titolo = this.formValue.value.titolo;
    this.birrecollesiModelObj.descrizione = this.formValue.value.descrizione;
    this.birrecollesiModelObj.prezzo = this.formValue.value.prezzo;
    this.birreCollesiService.updateBirreCollesi(this.birrecollesiModelObj, this.birrecollesiModelObj.id)
      .subscribe(res => {
        Swal.fire({ //alert 
          position: 'center',
          title: 'Elemento aggiornato',
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          showConfirmButton: false,
          timer: 1200
        })
        this.formValue.reset();
        this.getAllBirreCollesi1();
      })
  }

  //birre collesi
  getAllBirreCollesi1() {
    this.birreCollesiService.getAllBirreCollesi().subscribe((data: any) => {
      this.allBirreCollesi = data;
    })
  }

  /////////////////////////////////////////////////APE CLASSICI

  addApeClassici() {
    this.apeclassiciModelObj.titolo = this.formValue.value.titolo;
    this.apeclassiciModelObj.descrizione = this.formValue.value.descrizione;
    this.apeclassiciModelObj.prezzo = this.formValue.value.prezzo;

    this.apeClassiciService.postApeClassici(this.apeclassiciModelObj).subscribe(res => {
      console.log(res);
      Swal.fire({ //alert 
        position: 'center',
        title: 'Elemento salvato',
        icon: "success",
        background: "#000000",
        color: "#FFFFFF",
        showConfirmButton: false,
        timer: 1200
      })
      this.formValue.reset();
      this.getAllApe();
    },
      err => {
        alert("Errore, qualcosa è andato storto") //alert 
      })
  }

  //delete ape classici
  deleteApeClassici(ape: any) {
    Swal.fire({
      title: "Eliminare definitivamente questo elemento?",
      text: "Non potrai ripristinarlo!",
      icon: "warning",
      showCancelButton: true,
      background: "#000000",
      color: "#FFFFFF",
      confirmButtonColor: "#A2A2A2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sì, elimina definitivamente!"
    }).then((result) => {
      if (result.value) {
        this.apeClassiciService.deleteApeClassici(ape.id).subscribe(res => {
          this.getAllApe();
        })
        Swal.fire({
          title: "Ok, elemento cancellato.",
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
      else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Ok, elemento salvo!",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
    });
  }

  //on edit ape classici
  onEditApeClassici(ape: any) {
    this.apeclassiciModelObj.id = ape.id;
    this.formValue.controls['titolo'].setValue(ape.titolo)
    this.formValue.controls['descrizione'].setValue(ape.descrizione)
    this.formValue.controls['prezzo'].setValue(ape.prezzo)
  }

  //update ape classici
  updateApeClassici() {
    this.apeclassiciModelObj.titolo = this.formValue.value.titolo;
    this.apeclassiciModelObj.descrizione = this.formValue.value.descrizione;
    this.apeclassiciModelObj.prezzo = this.formValue.value.prezzo;
    this.apeClassiciService.updateApeClassici(this.apeclassiciModelObj, this.apeclassiciModelObj.id)
      .subscribe(res => {
        Swal.fire({ //alert 
          position: 'center',
          title: 'Elemento aggiornato',
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          showConfirmButton: false,
          timer: 1200
        })
        this.formValue.reset();
        this.getAllApe();
      })
  }

  //aperitivi classsici
  getAllApe() {
    this.apeClassiciService.getAllApeClassici().subscribe((data: any) => {
      this.allApe = data;
    })
  }

  /////////////////////////////////////////////////SPRITZ

  addSpritz() {
    this.spritzModelObj.titolo = this.formValue.value.titolo;
    this.spritzModelObj.descrizione = this.formValue.value.descrizione;
    this.spritzModelObj.prezzo = this.formValue.value.prezzo;

    this.spritzService.postSpritz(this.spritzModelObj).subscribe(res => {
      console.log(res);
      Swal.fire({ //alert 
        position: 'center',
        title: 'Elemento salvato',
        icon: "success",
        background: "#000000",
        color: "#FFFFFF",
        showConfirmButton: false,
        timer: 1200
      })
      this.formValue.reset();
      this.getAllSpritz1();
    },
      err => {
        alert("Errore, qualcosa è andato storto") //alert 
      })
  }

  //delete  spritz
  deleteSpritz(spritz: any) {
    Swal.fire({
      title: "Eliminare definitivamente questo elemento?",
      text: "Non potrai ripristinarlo!",
      icon: "warning",
      showCancelButton: true,
      background: "#000000",
      color: "#FFFFFF",
      confirmButtonColor: "#A2A2A2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sì, elimina definitivamente!"
    }).then((result) => {
      if (result.value) {
        this.spritzService.deleteSpritz(spritz.id).subscribe(res => {
          this.getAllSpritz1();
        })
        Swal.fire({
          title: "Ok, elemento cancellato.",
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
      else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Ok, elemento salvo!",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
    });
  }

  //on edit spritz
  onEditSpritz(spritz: any) {
    this.spritzModelObj.id = spritz.id;
    this.formValue.controls['titolo'].setValue(spritz.titolo)
    this.formValue.controls['descrizione'].setValue(spritz.descrizione)
    this.formValue.controls['prezzo'].setValue(spritz.prezzo)
  }

  //update spritz
  updateSpritz() {
    this.spritzModelObj.titolo = this.formValue.value.titolo;
    this.spritzModelObj.descrizione = this.formValue.value.descrizione;
    this.spritzModelObj.prezzo = this.formValue.value.prezzo;
    this.spritzService.updateSpritz(this.spritzModelObj, this.spritzModelObj.id)
      .subscribe(res => {
        Swal.fire({ //alert 
          position: 'center',
          title: 'Elemento aggiornato',
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          showConfirmButton: false,
          timer: 1200
        })
        this.formValue.reset();
        this.getAllSpritz1();
      })
  }

  //spritz
  getAllSpritz1() {
    this.spritzService.getAllSpritz().subscribe((data: any) => {
      this.allSpritz = data;
    })

  }

  /////////////////////////////////////////////////SIGNATURE COCKTAIL

  addSignatureCocktail() {
    this.signatureModelObj.titolo = this.formValue.value.titolo;
    this.signatureModelObj.descrizione = this.formValue.value.descrizione;
    this.signatureModelObj.descrizione1 = this.formValue.value.descrizione1;
    this.signatureModelObj.prezzo = this.formValue.value.prezzo;

    this.signaturecocktailService.postSignaturecocktail(this.signatureModelObj).subscribe(res => {
      console.log(res);
      Swal.fire({ //alert 
        position: 'center',
        title: 'Elemento salvato',
        icon: "success",
        background: "#000000",
        color: "#FFFFFF",
        showConfirmButton: false,
        timer: 1200
      })
      this.formValue.reset();
      this.getAllSignature();
    },
      err => {
        alert("Errore, qualcosa è andato storto") //alert 
      })
  }

  //delete  signature
  deleteSignatureCocktail(signature: any) {
    Swal.fire({
      title: "Eliminare definitivamente questo elemento?",
      text: "Non potrai ripristinarlo!",
      icon: "warning",
      showCancelButton: true,
      background: "#000000",
      color: "#FFFFFF",
      confirmButtonColor: "#A2A2A2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sì, elimina definitivamente!"
    }).then((result) => {
      if (result.value) {
        this.signaturecocktailService.deleteSignaturecocktail(signature.id).subscribe(res => {
          this.getAllSignature();
        })
        Swal.fire({
          title: "Ok, elemento cancellato.",
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
      else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Ok, elemento salvo!",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
    });
  }

  //on edit signature
  onEditSignatureCocktail(signature: any) {
    this.signatureModelObj.id = signature.id;
    this.formValue.controls['titolo'].setValue(signature.titolo)
    this.formValue.controls['descrizione'].setValue(signature.descrizione)
    this.formValue.controls['descrizione1'].setValue(signature.descrizione1)
    this.formValue.controls['prezzo'].setValue(signature.prezzo)
  }

  //update signature
  updateSignatureCocktail() {
    this.signatureModelObj.titolo = this.formValue.value.titolo;
    this.signatureModelObj.descrizione = this.formValue.value.descrizione;
    this.signatureModelObj.descrizione1 = this.formValue.value.descrizione1;
    this.signatureModelObj.prezzo = this.formValue.value.prezzo;
    this.signaturecocktailService.updateSignaturecocktail(this.signatureModelObj, this.signatureModelObj.id)
      .subscribe(res => {
        Swal.fire({ //alert 
          position: 'center',
          title: 'Elemento aggiornato',
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          showConfirmButton: false,
          timer: 1200
        })
        this.formValue.reset();
        this.getAllSignature();
      })
  }

  //signature cocktail
  getAllSignature() {
    this.signaturecocktailService.getAllSignaturecocktail().subscribe((data: any) => {
      this.allSignature = data;
    })
  }

  /////////////////////////////////////////////////COCKTAILS

  
  addCocktails() {
    this.cocktailsModelObj.titolo = this.formValue.value.titolo;
    this.cocktailsModelObj.descrizione = this.formValue.value.descrizione;
    this.cocktailsModelObj.prezzo = this.formValue.value.prezzo;

    this.cocktailsService.postCocktails(this.cocktailsModelObj).subscribe(res => {
      console.log(res);
      Swal.fire({ //alert 
        position: 'center',
        title: 'Elemento salvato',
        icon: "success",
        background: "#000000",
        color: "#FFFFFF",
        showConfirmButton: false,
        timer: 1200
      })
      this.formValue.reset();
      this.getAllCocktail1();
    },
      err => {
        alert("Errore, qualcosa è andato storto") //alert 
      })
  }

  //delete  cocktails
  deleteCocktails(cocktail: any) {
    Swal.fire({
      title: "Eliminare definitivamente questo elemento?",
      text: "Non potrai ripristinarlo!",
      icon: "warning",
      showCancelButton: true,
      background: "#000000",
      color: "#FFFFFF",
      confirmButtonColor: "#A2A2A2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sì, elimina definitivamente!"
    }).then((result) => {
      if (result.value) {
        this.cocktailsService.deleteCocktails(cocktail.id).subscribe(res => {
          this.getAllCocktail1();
        })
        Swal.fire({
          title: "Ok, elemento cancellato.",
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
      else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Ok, elemento salvo!",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
    });
  }

  //on edit cocktails
  onEditCocktails(cocktail: any) {
    this.cocktailsModelObj.id = cocktail.id;
    this.formValue.controls['titolo'].setValue(cocktail.titolo)
    this.formValue.controls['descrizione'].setValue(cocktail.descrizione)
    this.formValue.controls['prezzo'].setValue(cocktail.prezzo)
  }

  //update cocktails
  updateCocktails() {
    this.cocktailsModelObj.titolo = this.formValue.value.titolo;
    this.cocktailsModelObj.descrizione = this.formValue.value.descrizione;
    this.cocktailsModelObj.prezzo = this.formValue.value.prezzo;
    this.cocktailsService.updateCocktails(this.cocktailsModelObj, this.cocktailsModelObj.id)
      .subscribe(res => {
        Swal.fire({ //alert 
          position: 'center',
          title: 'Elemento aggiornato',
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          showConfirmButton: false,
          timer: 1200
        })
        this.formValue.reset();
        this.getAllCocktail1();
      })
  }
  //cocktails
  getAllCocktail1() {
    this.cocktailsService.getAllCocktails().subscribe((data: any) => {
      this.allCocktails = data;
    })
  }

  /////////////////////////////////////////////////ANALCOLICI

  addAnalcolici() {
    this.analcoliciModelObj.titolo = this.formValue.value.titolo;
    this.analcoliciModelObj.descrizione = this.formValue.value.descrizione;
    this.analcoliciModelObj.prezzo = this.formValue.value.prezzo;

    this.analcoliciService.postAnalcolici(this.analcoliciModelObj).subscribe(res => {
      console.log(res);
      Swal.fire({ //alert 
        position: 'center',
        title: 'Elemento salvato',
        icon: "success",
        background: "#000000",
        color: "#FFFFFF",
        showConfirmButton: false,
        timer: 1200
      })
      this.formValue.reset();
      this.getAllAnalcolici1();
    },
      err => {
        alert("Errore, qualcosa è andato storto") //alert 
      })
  }

  //delete  analcolici
  deleteAnalcolici(analcolico: any) {
    Swal.fire({
      title: "Eliminare definitivamente questo elemento?",
      text: "Non potrai ripristinarlo!",
      icon: "warning",
      showCancelButton: true,
      background: "#000000",
      color: "#FFFFFF",
      confirmButtonColor: "#A2A2A2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sì, elimina definitivamente!"
    }).then((result) => {
      if (result.value) {
        this.analcoliciService.deleteAnalcolici(analcolico.id).subscribe(res => {
          this.getAllAnalcolici1();
        })
        Swal.fire({
          title: "Ok, elemento cancellato.",
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
      else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Ok, elemento salvo!",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
    });
  }

  //on edit analcolici
  onEditAnalcolici(analcolico: any) {
    this.analcoliciModelObj.id = analcolico.id;
    this.formValue.controls['titolo'].setValue(analcolico.titolo)
    this.formValue.controls['descrizione'].setValue(analcolico.descrizione)
    this.formValue.controls['prezzo'].setValue(analcolico.prezzo)
  }

  //update analcolici
  updateAnalcolici() {
    this.analcoliciModelObj.titolo = this.formValue.value.titolo;
    this.analcoliciModelObj.descrizione = this.formValue.value.descrizione;
    this.analcoliciModelObj.prezzo = this.formValue.value.prezzo;
    this.analcoliciService.updateAnalcolici(this.analcoliciModelObj, this.analcoliciModelObj.id)
      .subscribe(res => {
        Swal.fire({ //alert 
          position: 'center',
          title: 'Elemento aggiornato',
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          showConfirmButton: false,
          timer: 1200
        })
        this.formValue.reset();
        this.getAllAnalcolici1();
      })
  }

  //analcolici
  getAllAnalcolici1() {
    this.analcoliciService.getAllAnalcolici().subscribe((data: any) => {
      this.allAnalcolici = data;
    })
  }

  /////////////////////////////////////////////////PIATTO APE

  addPiattiApe() {
    this.piattoapeModelObj.titolo = this.formValue.value.titolo;
    this.piattoapeModelObj.descrizione = this.formValue.value.descrizione;
    this.piattoapeModelObj.prezzo = this.formValue.value.prezzo;

    this.piattoApeService.postPiattiApe(this.piattoapeModelObj).subscribe(res => {
      console.log(res);
      Swal.fire({ //alert 
        position: 'center',
        title: 'Elemento salvato',
        icon: "success",
        background: "#000000",
        color: "#FFFFFF",
        showConfirmButton: false,
        timer: 1200
      })
      this.formValue.reset();
      this.getAllPiattiApe1();
    },
      err => {
        alert("Errore, qualcosa è andato storto") //alert 
      })
  }

  //delete  piatto ape
  deletePiattiApe(piattoApe: any) {
    Swal.fire({
      title: "Eliminare definitivamente questo elemento?",
      text: "Non potrai ripristinarlo!",
      icon: "warning",
      showCancelButton: true,
      background: "#000000",
      color: "#FFFFFF",
      confirmButtonColor: "#A2A2A2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sì, elimina definitivamente!"
    }).then((result) => {
      if (result.value) {
        this.piattoApeService.deletePiattiApe(piattoApe.id).subscribe(res => {
          this.getAllPiattiApe1();
        })
        Swal.fire({
          title: "Ok, elemento cancellato.",
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
      else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Ok, elemento salvo!",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
    });
  }

  //on edit piatto ape
  onEditPiattiApe(piattoApe: any) {
    this.piattoapeModelObj.id = piattoApe.id;
    this.formValue.controls['titolo'].setValue(piattoApe.titolo)
    this.formValue.controls['descrizione'].setValue(piattoApe.descrizione)
    this.formValue.controls['prezzo'].setValue(piattoApe.prezzo)
  }

  //update piatto ape
  updatePiattiApe() {
    this.piattoapeModelObj.titolo = this.formValue.value.titolo;
    this.piattoapeModelObj.descrizione = this.formValue.value.descrizione;
    this.piattoapeModelObj.prezzo = this.formValue.value.prezzo;
    this.piattoApeService.updatePiattiApe(this.piattoapeModelObj, this.piattoapeModelObj.id)
      .subscribe(res => {
        Swal.fire({ //alert 
          position: 'center',
          title: 'Elemento aggiornato',
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          showConfirmButton: false,
          timer: 1200
        })
        this.formValue.reset();
        this.getAllPiattiApe1();
      })
  }
  //piatto ape
  getAllPiattiApe1() {
    this.piattoApeService.getAllPiattiApe().subscribe((data: any) => {
      this.allPiattiApe = data;
    })
  }

  /////////////////////////////////////////////////GIN
  
  addGin() {
    this.ginModelObj.titolo = this.formValue.value.titolo;
    this.ginModelObj.descrizione = this.formValue.value.descrizione;
    this.ginModelObj.descrizione2 = this.formValue.value.descrizione2;
    this.ginModelObj.prezzo = this.formValue.value.prezzo;

    this.ginService.postGin(this.ginModelObj).subscribe(res => {
      console.log(res);
      Swal.fire({ //alert 
        position: 'center',
        title: 'Elemento salvato',
        icon: "success",
        background: "#000000",
        color: "#FFFFFF",
        showConfirmButton: false,
        timer: 1200
      })
      this.formValue.reset();
      this.getAllGin1();
    },
      err => {
        alert("Errore, qualcosa è andato storto") //alert 
      })
  }

  //delete  gin
  deleteGin(gin: any) {
    Swal.fire({
      title: "Eliminare definitivamente questo elemento?",
      text: "Non potrai ripristinarlo!",
      icon: "warning",
      showCancelButton: true,
      background: "#000000",
      color: "#FFFFFF",
      confirmButtonColor: "#A2A2A2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sì, elimina definitivamente!"
    }).then((result) => {
      if (result.value) {
        this.ginService.deleteGin(gin.id).subscribe(res => {
          this.getAllGin1();
        })
        Swal.fire({
          title: "Ok, elemento cancellato.",
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
      else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Ok, elemento salvo!",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
    });
  }

  //on edit gin
  onEditGin(gin: any) {
    this.ginModelObj.id = gin.id;
    this.formValue.controls['titolo'].setValue(gin.titolo)
    this.formValue.controls['descrizione'].setValue(gin.descrizione)
    this.formValue.controls['descrizione2'].setValue(gin.descrizione2)
    this.formValue.controls['prezzo'].setValue(gin.prezzo)
  }

  //update gin
  updateGin() {
    this.ginModelObj.titolo = this.formValue.value.titolo;
    this.ginModelObj.descrizione = this.formValue.value.descrizione;
    this.ginModelObj.descrizione2 = this.formValue.value.descrizione2;
    this.ginModelObj.prezzo = this.formValue.value.prezzo;
    this.ginService.updateGin(this.ginModelObj, this.ginModelObj.id)
      .subscribe(res => {
        Swal.fire({ //alert 
          position: 'center',
          title: 'Elemento aggiornato',
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          showConfirmButton: false,
          timer: 1200
        })
        this.formValue.reset();
        this.getAllGin1();
      })
  }
  
  //gin
  getAllGin1() {
    this.ginService.getAllGin().subscribe((data: any) => {
      this.allGin = data;
    })
  }

  /////////////////////////////////////////////////VINI BIANCHI
   
  addViniBianchi() {
    this.vinobiancoModelObj.titolo = this.formValue.value.titolo;
    this.vinobiancoModelObj.descrizione = this.formValue.value.descrizione;
    this.vinobiancoModelObj.prezzo = this.formValue.value.prezzo;
    this.vinobiancoModelObj.prezzo1 = this.formValue.value.prezzo1;

    this.viniBianchiService.postViniBianchi(this.vinobiancoModelObj).subscribe(res => {
      console.log(res);
      Swal.fire({ //alert 
        position: 'center',
        title: 'Elemento salvato',
        icon: "success",
        background: "#000000",
        color: "#FFFFFF",
        showConfirmButton: false,
        timer: 1200
      })
      this.formValue.reset();
      this.getAllViniBianchi1();
    },
      err => {
        alert("Errore, qualcosa è andato storto") //alert 
      })
  }

  //delete   vini bianchi
  deleteViniBianchi(vinobianco: any) {
    Swal.fire({
      title: "Eliminare definitivamente questo elemento?",
      text: "Non potrai ripristinarlo!",
      icon: "warning",
      showCancelButton: true,
      background: "#000000",
      color: "#FFFFFF",
      confirmButtonColor: "#A2A2A2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sì, elimina definitivamente!"
    }).then((result) => {
      if (result.value) {
        this.viniBianchiService.deleteViniBianchi(vinobianco.id).subscribe(res => {
          this.getAllViniBianchi1();
        })
        Swal.fire({
          title: "Ok, elemento cancellato.",
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
      else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Ok, elemento salvo!",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
    });
  }

  //on edit vini bianchi
  onEditViniBianchi(vinobianco: any) {
    this.vinobiancoModelObj.id = vinobianco.id;
    this.formValue.controls['titolo'].setValue(vinobianco.titolo)
    this.formValue.controls['descrizione'].setValue(vinobianco.descrizione)
    this.formValue.controls['prezzo'].setValue(vinobianco.prezzo)
    this.formValue.controls['prezzo1'].setValue(vinobianco.prezzo1)
  }

  //update  vini bianchi
  updateViniBianchi() {
    this.vinobiancoModelObj.titolo = this.formValue.value.titolo;
    this.vinobiancoModelObj.descrizione = this.formValue.value.descrizione;
    this.vinobiancoModelObj.prezzo = this.formValue.value.prezzo;
    this.vinobiancoModelObj.prezzo1 = this.formValue.value.prezzo1;
    this.viniBianchiService.updateViniBianchi(this.vinobiancoModelObj, this.vinobiancoModelObj.id)
      .subscribe(res => {
        Swal.fire({ //alert 
          position: 'center',
          title: 'Elemento aggiornato',
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          showConfirmButton: false,
          timer: 1200
        })
        this.formValue.reset();
        this.getAllViniBianchi1();
      })
  }

  //vini bianchi
  getAllViniBianchi1() {
    this.viniBianchiService.getAllViniBianchi().subscribe((data: any) => {
      this.allViniBianchi = data;
    })
  }

  /////////////////////////////////////////////////VINI ROSSI

  addViniRossi() {
    this.vinorossoModelObj.titolo = this.formValue.value.titolo;
    this.vinorossoModelObj.descrizione = this.formValue.value.descrizione;
    this.vinorossoModelObj.prezzo = this.formValue.value.prezzo;
    this.vinorossoModelObj.prezzo1 = this.formValue.value.prezzo1;

    this.viniRossiService.postViniRossi(this.vinorossoModelObj).subscribe(res => {
      console.log(res);
      Swal.fire({ //alert 
        position: 'center',
        title: 'Elemento salvato',
        icon: "success",
        background: "#000000",
        color: "#FFFFFF",
        showConfirmButton: false,
        timer: 1200
      })
      this.formValue.reset();
      this.getAllViniRossi1();
    },
      err => {
        alert("Errore, qualcosa è andato storto") //alert 
      })
  }

  //delete   vini rossi
  deleteViniRossi(vinorosso: any) {
    Swal.fire({
      title: "Eliminare definitivamente questo elemento?",
      text: "Non potrai ripristinarlo!",
      icon: "warning",
      showCancelButton: true,
      background: "#000000",
      color: "#FFFFFF",
      confirmButtonColor: "#A2A2A2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sì, elimina definitivamente!"
    }).then((result) => {
      if (result.value) {
        this.viniRossiService.deleteViniRossi(vinorosso.id).subscribe(res => {
          this.getAllViniRossi1();
        })
        Swal.fire({
          title: "Ok, elemento cancellato.",
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
      else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Ok, elemento salvo!",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
    });
  }

  //on edit vini rossi
  onEditViniRossi(vinorosso: any) {
    this.vinorossoModelObj.id = vinorosso.id;
    this.formValue.controls['titolo'].setValue(vinorosso.titolo)
    this.formValue.controls['descrizione'].setValue(vinorosso.descrizione)
    this.formValue.controls['prezzo'].setValue(vinorosso.prezzo)
    this.formValue.controls['prezzo1'].setValue(vinorosso.prezzo1)
  }

  //update  vini rossi
  updateViniRossi() {
    this.vinorossoModelObj.titolo = this.formValue.value.titolo;
    this.vinorossoModelObj.descrizione = this.formValue.value.descrizione;
    this.vinorossoModelObj.prezzo = this.formValue.value.prezzo;
    this.vinorossoModelObj.prezzo1 = this.formValue.value.prezzo1;
    this.viniRossiService.updateViniRossi(this.vinorossoModelObj, this.vinorossoModelObj.id)
      .subscribe(res => {
        Swal.fire({ //alert 
          position: 'center',
          title: 'Elemento aggiornato',
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          showConfirmButton: false,
          timer: 1200
        })
        this.formValue.reset();
        this.getAllViniRossi1();
      })
  }

  //vini rossi
  getAllViniRossi1() {
    this.viniRossiService.getAllViniRossi().subscribe((data: any) => {
      this.allViniRossi = data;
    })
  }

  /////////////////////////////////////////////////ROSE

  addRose() {
    this.roseModelObj.titolo = this.formValue.value.titolo;
    this.roseModelObj.descrizione = this.formValue.value.descrizione;
    this.roseModelObj.prezzo = this.formValue.value.prezzo;
    this.roseModelObj.prezzo1 = this.formValue.value.prezzo1;

    this.roseService.postRose(this.roseModelObj).subscribe(res => {
      console.log(res);
      Swal.fire({ //alert 
        position: 'center',
        title: 'Elemento salvato',
        icon: "success",
        background: "#000000",
        color: "#FFFFFF",
        showConfirmButton: false,
        timer: 1200
      })
      this.formValue.reset();
      this.getAllRose1();
    },
      err => {
        alert("Errore, qualcosa è andato storto") //alert 
      })
  }

  //delete   rose
  deleteRose(rose: any) {
    Swal.fire({
      title: "Eliminare definitivamente questo elemento?",
      text: "Non potrai ripristinarlo!",
      icon: "warning",
      showCancelButton: true,
      background: "#000000",
      color: "#FFFFFF",
      confirmButtonColor: "#A2A2A2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sì, elimina definitivamente!"
    }).then((result) => {
      if (result.value) {
        this.roseService.deleteRose(rose.id).subscribe(res => {
          this.getAllRose1();
        })
        Swal.fire({
          title: "Ok, elemento cancellato.",
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
      else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Ok, elemento salvo!",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
    });
  }

  //on edit rose
  onEditRose(rose: any) {
    this.roseModelObj.id = rose.id;
    this.formValue.controls['titolo'].setValue(rose.titolo)
    this.formValue.controls['descrizione'].setValue(rose.descrizione)
    this.formValue.controls['prezzo'].setValue(rose.prezzo)
    this.formValue.controls['prezzo1'].setValue(rose.prezzo1)
  }

  //update  rose
  updateRose() {
    this.roseModelObj.titolo = this.formValue.value.titolo;
    this.roseModelObj.descrizione = this.formValue.value.descrizione;
    this.roseModelObj.prezzo = this.formValue.value.prezzo;
    this.roseModelObj.prezzo1 = this.formValue.value.prezzo1;
    this.roseService.updateRose(this.roseModelObj, this.roseModelObj.id)
      .subscribe(res => {
        Swal.fire({ //alert 
          position: 'center',
          title: 'Elemento aggiornato',
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          showConfirmButton: false,
          timer: 1200
        })
        this.formValue.reset();
        this.getAllRose1();
      })
  }

  //rose
  getAllRose1() {
    this.roseService.getAllRose().subscribe((data: any) => {
      this.allRose = data;
    })
  }

  /////////////////////////////////////////////////BOLLICINE

  addBollicine() {
    this.bollicineModelObj.titolo = this.formValue.value.titolo;
    this.bollicineModelObj.descrizione = this.formValue.value.descrizione;
    this.bollicineModelObj.prezzo = this.formValue.value.prezzo;
    this.bollicineModelObj.prezzo1 = this.formValue.value.prezzo1;

    this.bollicineService.postBollicine(this.bollicineModelObj).subscribe(res => {
      console.log(res);
      Swal.fire({ //alert 
        position: 'center',
        title: 'Elemento salvato',
        icon: "success",
        background: "#000000",
        color: "#FFFFFF",
        showConfirmButton: false,
        timer: 1200
      })
      this.formValue.reset();
      this.getAllBollicine1();
    },
      err => {
        alert("Errore, qualcosa è andato storto") //alert 
      })
  }

  //delete   bollicine
  deleteBollicine(bollicine: any) {
    Swal.fire({
      title: "Eliminare definitivamente questo elemento?",
      text: "Non potrai ripristinarlo!",
      icon: "warning",
      showCancelButton: true,
      background: "#000000",
      color: "#FFFFFF",
      confirmButtonColor: "#A2A2A2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sì, elimina definitivamente!"
    }).then((result) => {
      if (result.value) {
        this.bollicineService.deleteBollicine(bollicine.id).subscribe(res => {
          this.getAllBollicine1();
        })
        Swal.fire({
          title: "Ok, elemento cancellato.",
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
      else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Ok, elemento salvo!",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
    });
  }

  //on edit bollicine
  onEditBollicine(bollicine: any) {
    this.bollicineModelObj.id = bollicine.id;
    this.formValue.controls['titolo'].setValue(bollicine.titolo)
    this.formValue.controls['descrizione'].setValue(bollicine.descrizione)
    this.formValue.controls['prezzo'].setValue(bollicine.prezzo)
    this.formValue.controls['prezzo1'].setValue(bollicine.prezzo1)
  }

  //update  bollicine
  updateBollicine() {
    this.bollicineModelObj.titolo = this.formValue.value.titolo;
    this.bollicineModelObj.descrizione = this.formValue.value.descrizione;
    this.bollicineModelObj.prezzo = this.formValue.value.prezzo;
    this.bollicineModelObj.prezzo1 = this.formValue.value.prezzo1;
    this.bollicineService.updateBollicine(this.bollicineModelObj, this.bollicineModelObj.id)
      .subscribe(res => {
        Swal.fire({ //alert 
          position: 'center',
          title: 'Elemento aggiornato',
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          showConfirmButton: false,
          timer: 1200
        })
        this.formValue.reset();
        this.getAllBollicine1();
      })
  }

  //Bollicine
  getAllBollicine1() {
    this.bollicineService.getAllBollicine().subscribe((data: any) => {
      this.allBollicine = data;
    })
  }

  /////////////////////////////////////////////////GRAPPE

  addGrappe() {
    this.grappeModelObj.titolo = this.formValue.value.titolo;
    this.grappeModelObj.descrizione = this.formValue.value.descrizione;
    this.grappeModelObj.prezzo = this.formValue.value.prezzo;

    this.grappeService.postGrappe(this.grappeModelObj).subscribe(res => {
      console.log(res);
      Swal.fire({ //alert 
        position: 'center',
        title: 'Elemento salvato',
        icon: "success",
        background: "#000000",
        color: "#FFFFFF",
        showConfirmButton: false,
        timer: 1200
      })
      this.formValue.reset();
      this.getAllGrappe1();
    },
      err => {
        alert("Errore, qualcosa è andato storto") //alert 
      })
  }

  //delete   grappe
  deleteGrappe(grappe: any) {
    Swal.fire({
      title: "Eliminare definitivamente questo elemento?",
      text: "Non potrai ripristinarlo!",
      icon: "warning",
      showCancelButton: true,
      background: "#000000",
      color: "#FFFFFF",
      confirmButtonColor: "#A2A2A2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sì, elimina definitivamente!"
    }).then((result) => {
      if (result.value) {
        this.grappeService.deleteGrappe(grappe.id).subscribe(res => {
          this.getAllGrappe1();
        })
        Swal.fire({
          title: "Ok, elemento cancellato.",
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
      else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Ok, elemento salvo!",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
    });
  }

  //on edit grappe
  onEditGrappe(grappe: any) {
    this.grappeModelObj.id = grappe.id;
    this.formValue.controls['titolo'].setValue(grappe.titolo)
    this.formValue.controls['descrizione'].setValue(grappe.descrizione)
    this.formValue.controls['prezzo'].setValue(grappe.prezzo)
  }

  //update  grappe
  updateGrappe() {
    this.grappeModelObj.titolo = this.formValue.value.titolo;
    this.grappeModelObj.descrizione = this.formValue.value.descrizione;
    this.grappeModelObj.prezzo = this.formValue.value.prezzo;
    this.grappeService.updateGrappe(this.grappeModelObj, this.grappeModelObj.id)
      .subscribe(res => {
        Swal.fire({ //alert 
          position: 'center',
          title: 'Elemento aggiornato',
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          showConfirmButton: false,
          timer: 1200
        })
        this.formValue.reset();
        this.getAllGrappe1();
      })
  }

  //Grappe
  getAllGrappe1() {
    this.grappeService.getAllGrappe().subscribe((data: any) => {
      this.allGrappe = data;
    })
  }

  /////////////////////////////////////////////////WHISKY

  addWhisky() {
    this.whiskyModelObj.titolo = this.formValue.value.titolo;
    this.whiskyModelObj.descrizione = this.formValue.value.descrizione;
    this.whiskyModelObj.prezzo = this.formValue.value.prezzo;

    this.whiskyService.postWhisky(this.whiskyModelObj).subscribe(res => {
      console.log(res);
      Swal.fire({ //alert 
        position: 'center',
        title: 'Elemento salvato',
        icon: "success",
        background: "#000000",
        color: "#FFFFFF",
        showConfirmButton: false,
        timer: 1200
      })
      this.formValue.reset();
      this.getAllWhisky1();
    },
      err => {
        alert("Errore, qualcosa è andato storto") //alert 
      })
  }

  //delete   whisky
  deleteWhisky(whisky: any) {
    Swal.fire({
      title: "Eliminare definitivamente questo elemento?",
      text: "Non potrai ripristinarlo!",
      icon: "warning",
      showCancelButton: true,
      background: "#000000",
      color: "#FFFFFF",
      confirmButtonColor: "#A2A2A2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sì, elimina definitivamente!"
    }).then((result) => {
      if (result.value) {
        this.whiskyService.deleteWhisky(whisky.id).subscribe(res => {
          this.getAllWhisky1();
        })
        Swal.fire({
          title: "Ok, elemento cancellato.",
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
      else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Ok, elemento salvo!",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
    });
  }

  //on edit whisky
  onEditWhisky(whisky: any) {
    this.whiskyModelObj.id = whisky.id;
    this.formValue.controls['titolo'].setValue(whisky.titolo)
    this.formValue.controls['descrizione'].setValue(whisky.descrizione)
    this.formValue.controls['prezzo'].setValue(whisky.prezzo)
  }

  //update  whisky
  updateWhisky() {
    this.whiskyModelObj.titolo = this.formValue.value.titolo;
    this.whiskyModelObj.descrizione = this.formValue.value.descrizione;
    this.whiskyModelObj.prezzo = this.formValue.value.prezzo;
    this.whiskyService.updateWhisky(this.whiskyModelObj, this.whiskyModelObj.id)
      .subscribe(res => {
        Swal.fire({ //alert 
          position: 'center',
          title: 'Elemento aggiornato',
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          showConfirmButton: false,
          timer: 1200
        })
        this.formValue.reset();
        this.getAllWhisky1();
      })
  }

  //Whisky
  getAllWhisky1() {
    this.whiskyService.getAllWhisky().subscribe((data: any) => {
      this.allWhisky = data;
    })
  }

  /////////////////////////////////////////////////RUM

  addRum() {
    this.rumModelObj.titolo = this.formValue.value.titolo;
    this.rumModelObj.descrizione = this.formValue.value.descrizione;
    this.rumModelObj.prezzo = this.formValue.value.prezzo;

    this.rumService.postRum(this.rumModelObj).subscribe(res => {
      console.log(res);
      Swal.fire({ //alert 
        position: 'center',
        title: 'Elemento salvato',
        icon: "success",
        background: "#000000",
        color: "#FFFFFF",
        showConfirmButton: false,
        timer: 1200
      })
      this.formValue.reset();
      this.getAllRum1();
    },
      err => {
        alert("Errore, qualcosa è andato storto") //alert 
      })
  }

  //delete   rum
  deleteRum(rum: any) {
    Swal.fire({
      title: "Eliminare definitivamente questo elemento?",
      text: "Non potrai ripristinarlo!",
      icon: "warning",
      showCancelButton: true,
      background: "#000000",
      color: "#FFFFFF",
      confirmButtonColor: "#A2A2A2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sì, elimina definitivamente!"
    }).then((result) => {
      if (result.value) {
        this.rumService.deleteRum(rum.id).subscribe(res => {
          this.getAllRum1();
        })
        Swal.fire({
          title: "Ok, elemento cancellato.",
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
      else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Ok, elemento salvo!",
          background: "#000000",
          color: "#FFFFFF",
          confirmButtonColor: "#A2A2A2",
        })
      }
    });
  }

  //on edit rum
  onEditRum(rum: any) {
    this.rumModelObj.id = rum.id;
    this.formValue.controls['titolo'].setValue(rum.titolo)
    this.formValue.controls['descrizione'].setValue(rum.descrizione)
    this.formValue.controls['prezzo'].setValue(rum.prezzo)
  }

  //update  rum
  updateRum() {
    this.rumModelObj.titolo = this.formValue.value.titolo;
    this.rumModelObj.descrizione = this.formValue.value.descrizione;
    this.rumModelObj.prezzo = this.formValue.value.prezzo;
    this.rumService.updateRum(this.rumModelObj, this.rumModelObj.id)
      .subscribe(res => {
        Swal.fire({ //alert 
          position: 'center',
          title: 'Elemento aggiornato',
          icon: "success",
          background: "#000000",
          color: "#FFFFFF",
          showConfirmButton: false,
          timer: 1200
        })
        this.formValue.reset();
        this.getAllRum1();
      })
  }

  //Rum
  getAllRum1() {
    this.rumService.getAllRum().subscribe((data: any) => {
      this.allRum = data;
    })
  }

}


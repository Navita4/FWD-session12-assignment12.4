import { Component,ViewEncapsulation,OnInit } from '@angular/core';
import {CricketerService} from './app/services/cricketer.service';
import {ICricketList,ICricketerModel} from './interface/cricketer-list';
import {IPlayerType} from 'app/interface/player-type';
import {CricketerDropDownService} from 'app/services/cricketer-drop-down.service';
import {MyfunctionFunction} from 'app/myfunction';
import {Router} from '@angular/router';


@Component({
  selector: 'app-cricketer',
  templateUrl: './cricketer.component.html',
  styleUrls: ['./cricketer.component.css'],
  encapsulation:ViewEncapsulation.Emulated,
  
})
export class CricketerComponent implements OnInit {
/** Public variables */
cricketersArray:ICricketList[]=[];
playerType:IPlayerType[]=[];
private searchData:string;
cricketerModel:ICricketList;
cricketerDetail:ICricketList;

// using constructor call the cricketService
constructor(private _cricketService:CricketerService,private _cricketerDropDown:CricketerDropDownService,
private _router:Router){}

ngOnInit(){
  
  this.cricketerModel();
  this.playerType=this._cricketerDropDown.getPlayerType();
    
  }
  cricketModel(){
    /** Define default values */
    return this.cricketerModel={
      firstName:'',
      lastName:'',
      favShot:'',
      playerType:'',
      yearlyIncome:null,
      dob:new MyfunctionFunction().getCurrentDate()
    };
  };

/** add a cricket */
addCricketer(values){
  values:{
    // favshot:'';
    // firstName:'';
    // lastName:'';
    // playerType:''
    // yearlyIncome:'';
    // dob:'';
  }
  this.cricketerDetail={
    firstName:values.firstName,
    lastName:values.lastName,
    favShot:values.favShot,
    playerType:values.playerType,
    yearlyIncome:values.yearlyIncome,
    dob:values.dob

  };

  // call function from service
  this._cricketService.addCricketer(this.cricketerDetail);

  // using 3 rd party liabrary to show message
  alertify.notify('Cricketer Added Successfully',Success,3);
  
  /** Redirecting page to cricketList */
  this._router.navigate(['/cricketersList']);


};
}






















}

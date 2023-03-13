import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-loc',
  templateUrl: './loc.component.html',
  styleUrls: ['./loc.component.scss']
})
export class LocComponent implements OnInit {
  url: string = "https://6405e15ceed195a99f8f7606.mockapi.io/radhe/candidateName/api/v1/listcandidate";
  posts: Array<any> = [];
  name = "";
  startdate = "";
  City = "";
  dl = "";
  visastatus = "";
  
  email = "";
  password = "";
  contact = "";
  progress = "";
  remark = "";
  updateData: boolean = false;

  constructor(private _httpsclient: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }
  clearFormData() {
    this.name = "";
    this.startdate = "";
    this.City = "";
    this.dl = "";
    this.visastatus = "";
    this.email = "";
    this.password = "";
    this.contact = "";
    this.progress = "";
    this.remark = "";
  }

  getData() {
    this._httpsclient.get(this.url).subscribe((gdata: any) => {
      this.posts = gdata;
    });
  }

  SendFormData() {
    let fData: any = { 'name': this.name,'startdate': this.startdate, 'City': this.City,
    'dl': this.dl, 'visastatus' : this.visastatus, 'email': this.email,
  'password': this.password, 'contact': this.contact, 'progress': this.progress,
  'remark': this.remark};
    this._httpsclient.post(this.url, fData).subscribe((pRes) => {
      console.log(pRes);
      this.getData();
      this.clearFormData();
    });
  }
 
  editData(data: any) {
    this.updateData = true;
    this.name = data.name;
    this.startdate = data.startdate;
    this.City = data.City;
    this.dl = data.dl;
    this.visastatus = data.visastatus;
    this.email = data.email;
    this.password = data.password;
    this.contact = data.contact;
    this.progress = data.progress;
    this.remark = data.remark;
  }

  modifyData() {
    this.updateData = false;
    let fData: any = { 'name': this.name,'startdate': this.startdate, 'City': this.City,
  'dl': this.dl, 'visastatus' : this.visastatus, 'email': this.email,
'password': this.password, 'contact': this.contact, 'progress': this.progress,
'remark': this.remark};
    this._httpsclient.put(this.url + "/" + this.name, fData).subscribe((pRes) => {
      console.log(pRes);
      this.getData();
      this.clearFormData();
    });
  }

  cancelData() {
    this.updateData = false;
    this.getData();
    this.clearFormData();
  }

  deleteData(data: any) {
    this._httpsclient.delete(this.url + "/" + data.name,).subscribe((pRes) => {
      console.log(pRes);
      this.getData();
    });
  }

}

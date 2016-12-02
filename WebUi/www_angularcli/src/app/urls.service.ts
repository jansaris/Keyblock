import { Injectable } from '@angular/core';
import { Headers } from '@angular/http'

@Injectable()
export class UrlsService{
    private base: string = "http://localhost:15051/ap/";
    Home: string = this.base + "home";
    Log: string = this.base + "log";
    Settings: string = this.base + "settings";
    Module: string = this.base + "module";
    Headers: Headers = new Headers([ {'Content-Type': 'application/json'}]);
}
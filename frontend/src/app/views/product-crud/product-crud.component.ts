import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HeaderService } from 'src/app/components/templates/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, private headerService:  HeaderService) {
    headerService.headerData = {
      title: "Cadastrar Livro",
      icon: "note_add",
      routeUrl: "/products"
    }
  }

  ngOnInit(): void {
  }

  navigateCreateRegister(): void {
    this.router.navigate(["/products/create"]);
  }

}
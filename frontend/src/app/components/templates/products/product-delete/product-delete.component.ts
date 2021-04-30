import { HeaderService } from 'src/app/components/templates/header/header.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product;

  constructor(private ProductService: ProductService , private router: Router, private route: ActivatedRoute, private headerService: HeaderService) { 
    headerService.headerData = {
      title: "Excluir Livro",
      icon: "delete",
      routeUrl: "/products/delete/:id"
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    
    this.ProductService.readById(id).subscribe(products =>
      this.product = products
    );
  }

  deleteProduct(): void {
    this.ProductService.delete(this.product).subscribe(() => 
      this.ProductService.message("Produto Excluido Com Sucesso..")
    );
    this.router.navigate(["/products"]);
  }
  cancelProduct() {
    this.router.navigate(["/products"]);
  }

}

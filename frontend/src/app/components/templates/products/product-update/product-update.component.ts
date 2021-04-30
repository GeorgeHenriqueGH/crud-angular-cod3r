import { HeaderService } from 'src/app/components/templates/header/header.service';
import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: Product;

  constructor(private ProductService: ProductService, private router: Router, private route: ActivatedRoute, private headerService: HeaderService) { 
    headerService.headerData = {
      title: "Alterar Livro",
      icon: "published_with_changes",
      routeUrl: "/products/update/:id"
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    this.ProductService.readById(id).subscribe(products =>
      this.product = products
    );
  }

  updateProduct(): void {
    this.ProductService.update(this.product).subscribe(() =>
      this.ProductService.message("Produto Atualizado.")
    );
    this.router.navigate(["/products"]);
  }

  cancelProduct(): void {
    this.router.navigate(["/products"]);
  }

}
